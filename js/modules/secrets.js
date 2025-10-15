// Secrets module: Konami Code + Pretty Smile Mode + Pretty Smile Cursor helpers
// Exposes window.updateCursorHover for other modules (e.g., modal) to call.

// Local helpers
const qs = (sel, el = document) => el.querySelector(sel);

// Typing context guard
function isTypingContext() {
  const ae = document.activeElement;
  if (!ae) return false;
  const tag = ae.tagName?.toLowerCase();
  return (
    ae.isContentEditable ||
    tag === "input" ||
    tag === "textarea" ||
    tag === "select"
  );
}

// Toast
function showToast(msg) {
  let t = qs("#cheat-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "cheat-toast";
    t.className = "cheat-toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.remove("show");
  void t.offsetWidth; // reflow
  t.classList.add("show");
  clearTimeout(t._hideTimer);
  t._hideTimer = setTimeout(() => t.classList.remove("show"), 1600);
}

// Pretty Smile helpers
function updateAboutPhotoForPrettySmile(enabled) {
  const img = qs("#about .about-photo img");
  if (!img) return;
  const normalSrc = "img/thales.jpg";
  const prettySmileSrc = "img/prettysmile.png";
  if (enabled) {
    if (img.getAttribute("src") !== prettySmileSrc) {
      const onErr = () => {
        img.src = normalSrc;
        img.removeEventListener("error", onErr);
      };
      img.addEventListener("error", onErr, { once: true });
      img.setAttribute("src", prettySmileSrc);
    }
  } else {
    if (img.getAttribute("src") !== normalSrc)
      img.setAttribute("src", normalSrc);
  }
}
function updateLogoForPrettySmile(enabled) {
  const logo = qs("header .brand img");
  if (!logo) return;
  const normalSrc = "img/logo.png";
  const prettySmileSrc = "img/prettysmile.png";
  if (enabled) {
    if (logo.getAttribute("src") !== prettySmileSrc) {
      const onErr = () => {
        logo.src = normalSrc;
        logo.removeEventListener("error", onErr);
      };
      logo.addEventListener("error", onErr, { once: true });
      logo.setAttribute("src", prettySmileSrc);
    }
  } else {
    if (logo.getAttribute("src") !== normalSrc)
      logo.setAttribute("src", normalSrc);
  }
}

function setPrettySmileMode(enabled) {
  document.body.classList.toggle("pretty-smile-mode", !!enabled);
  try {
    sessionStorage.setItem("prettySmileMode", enabled ? "1" : "0");
  } catch {}
  updateAboutPhotoForPrettySmile(enabled);
  updateLogoForPrettySmile(enabled);
  if (enabled) enablePrettysmile();
  else disablePrettysmile();
  showToast(`Pretty Smile Mode ${enabled ? "ON" : "OFF"}`);
}
function togglePrettySmileMode() {
  setPrettySmileMode(!document.body.classList.contains("pretty-smile-mode"));
}

// Pretty Smile follower
let prettysmileEnabled = false;
let prettysmileEl = null;
let prettysmileRAF = 0;
let targetX = 0,
  targetY = 0;
let prettysmileX = 0,
  prettysmileY = 0;
const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
function prettysmileLoop() {
  if (!prettysmileEnabled || !prettysmileEl) return;
  const lerp = prefersReduced ? 1 : 0.15;
  prettysmileX = prettysmileX + (targetX - prettysmileX) * lerp;
  prettysmileY = prettysmileY + (targetY - prettysmileY) * lerp;
  prettysmileEl.style.left = `${Math.round(prettysmileX)}px`;
  prettysmileEl.style.top = `${Math.round(prettysmileY)}px`;
  prettysmileRAF = requestAnimationFrame(prettysmileLoop);
}
function enablePrettysmile() {
  if (prettysmileEnabled) return;
  prettysmileEnabled = true;
  prettysmileEl = document.createElement("img");
  prettysmileEl.className = "idkfa"; // CSS class already used
  prettysmileEl.setAttribute("aria-hidden", "true");
  prettysmileEl.src = "img/prettysmile.png";
  prettysmileEl.alt = "Pretty Smile";
  prettysmileEl.style.width = "32px";
  prettysmileEl.style.height = "32px";
  document.body.appendChild(prettysmileEl);
  // Offscreen init
  prettysmileX = -100;
  prettysmileY = -100;
  targetX = -100;
  targetY = -100;
  prettysmileEl.style.left = `${prettysmileX}px`;
  prettysmileEl.style.top = `${prettysmileY}px`;
  prettysmileEl.style.transform = "none";

  // Track mouse in viewport coords and adjust with scroll
  let clientX = 0,
    clientY = 0;
  const updateTarget = () => {
    targetX = clientX + window.scrollX + 12;
    targetY = clientY + window.scrollY + 12;
    if (!prefersReduced && !prettysmileRAF)
      prettysmileRAF = requestAnimationFrame(prettysmileLoop);
    else prettysmileLoop();
  };
  const onMove = (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
    updateTarget();
  };
  const onScroll = () => updateTarget();
  window.addEventListener("mousemove", onMove);
  window.addEventListener("scroll", onScroll, { passive: true });
  prettysmileEl._cleanup = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("scroll", onScroll);
  };
}
function disablePrettysmile() {
  prettysmileEnabled = false;
  if (prettysmileRAF) cancelAnimationFrame(prettysmileRAF);
  prettysmileRAF = 0;
  if (prettysmileEl) {
    try {
      prettysmileEl._cleanup?.();
    } catch {}
    prettysmileEl.remove();
    prettysmileEl = null;
  }
}

// Pretty Smile Cursor (optional visual, also provides updateCursorHover)
let cursorEnabled = false;
let cursorEl = null;
let ghostEls = [];
let cursorRAF = 0;
let cx = -100,
  cy = -100;
let lastX = 0,
  lastY = 0,
  lastT = 0;
function updateCursorHover() {
  if (!cursorEl) return;
  const el = document.elementFromPoint?.(cx, cy) || null;
  const hoverEl =
    el && el.closest
      ? el.closest(
          'a, button, [role="button"], .card, input, textarea, select, label'
        )
      : null;
  cursorEl.classList.toggle("hover", !!hoverEl);
}
function cursorLoop() {
  if (!cursorEnabled) return;
  for (let i = 0; i < ghostEls.length; i++) {
    const g = ghostEls[i];
    const tx = i === 0 ? cx : ghostEls[i - 1]._x;
    const ty = i === 0 ? cy : ghostEls[i - 1]._y;
    g._x = g._x + (tx - g._x) * 0.15;
    g._y = g._y + (ty - g._y) * 0.15;
    g.style.left = `${Math.round(g._x)}px`;
    g.style.top = `${Math.round(g._y)}px`;
  }
  cursorRAF = requestAnimationFrame(cursorLoop);
}
function onCursorMove(e) {
  cx = e.clientX;
  cy = e.clientY;
  if (cursorEl) {
    cursorEl.style.left = `${cx}px`;
    cursorEl.style.top = `${cy}px`;
    const now = performance.now();
    const dt = Math.max(1, now - (lastT || now));
    const dx = cx - (lastX || cx);
    const dy = cy - (lastY || cy);
    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
    const scale = Math.max(0.9, Math.min(1 + speed * 0.4, 1.6));
    cursorEl.style.transform = `scale(${scale.toFixed(3)})`;
    lastX = cx;
    lastY = cy;
    lastT = now;
    updateCursorHover();
  }
  if (!prefersReduced && !cursorRAF)
    cursorRAF = requestAnimationFrame(cursorLoop);
}
function onCursorClick(e) {
  if (!cursorEnabled) return;
  const r = document.createElement("div");
  r.className = "pretty-smile-ripple";
  r.style.left = `${e.clientX}px`;
  r.style.top = `${e.clientY}px`;
  document.body.appendChild(r);
  const cleanup = () => {
    r.removeEventListener("animationend", cleanup);
    r.remove();
  };
  r.addEventListener("animationend", cleanup);
  setTimeout(cleanup, 420);
}
function enablePrettySmileCursor() {
  if (cursorEnabled) return;
  cursorEnabled = true;
  cursorEl = document.createElement("div");
  cursorEl.className = "pretty-smile-cursor";
  cursorEl.setAttribute("aria-hidden", "true");
  cursorEl.style.left = "-100px";
  cursorEl.style.top = "-100px";
  document.body.appendChild(cursorEl);
  ghostEls = [];
  if (!prefersReduced) {
    for (let i = 0; i < 3; i++) {
      const g = document.createElement("div");
      g.className = "pretty-smile-ghost";
      g._x = -100;
      g._y = -100;
      g.style.left = "-100px";
      g.style.top = "-100px";
      document.body.appendChild(g);
      ghostEls.push(g);
    }
  }
  window.addEventListener("mousemove", onCursorMove, { passive: true });
  window.addEventListener("mousedown", onCursorClick, { passive: true });
  const onViewportChange = () => updateCursorHover();
  window.addEventListener("scroll", onViewportChange, { passive: true });
  window.addEventListener("wheel", onViewportChange, { passive: true });
  window.addEventListener("resize", onViewportChange, { passive: true });
  cursorEl._onViewportChange = onViewportChange;
  const onFocusChange = () => updateCursorHover();
  window.addEventListener("focusin", onFocusChange, true);
  window.addEventListener("focusout", onFocusChange, true);
  cursorEl._onFocusChange = onFocusChange;
  const scrollTargets = [
    document.querySelector(".modal-media"),
    document.querySelector(".modal-text"),
    document.querySelector(".modal-content"),
  ].filter(Boolean);
  scrollTargets.forEach((t) =>
    t.addEventListener("scroll", onViewportChange, { passive: true })
  );
  cursorEl._scrollTargets = scrollTargets;
  if (!prefersReduced) cursorRAF = requestAnimationFrame(cursorLoop);
}
function disablePrettySmileCursor() {
  cursorEnabled = false;
  if (cursorRAF) cancelAnimationFrame(cursorRAF);
  cursorRAF = 0;
  window.removeEventListener("mousemove", onCursorMove);
  window.removeEventListener("mousedown", onCursorClick);
  if (cursorEl && cursorEl._onViewportChange) {
    window.removeEventListener("scroll", cursorEl._onViewportChange);
    window.removeEventListener("wheel", cursorEl._onViewportChange);
    window.removeEventListener("resize", cursorEl._onViewportChange);
    if (cursorEl._scrollTargets) {
      try {
        cursorEl._scrollTargets.forEach((t) =>
          t.removeEventListener("scroll", cursorEl._onViewportChange)
        );
      } catch {}
    }
  }
  if (cursorEl && cursorEl._onFocusChange) {
    window.removeEventListener("focusin", cursorEl._onFocusChange, true);
    window.removeEventListener("focusout", cursorEl._onFocusChange, true);
  }
  try {
    cursorEl?.remove();
  } catch {}
  cursorEl = null;
  ghostEls.forEach((g) => {
    try {
      g.remove();
    } catch {}
  });
  ghostEls = [];
}

// Expose for other modules
window.updateCursorHover = updateCursorHover;

// Restore persisted Pretty Smile mode
try {
  if (sessionStorage.getItem("prettySmileMode") === "1") {
    document.body.classList.add("pretty-smile-mode");
    updateAboutPhotoForPrettySmile(true);
    updateLogoForPrettySmile(true);
    enablePrettysmile();
  }
} catch {}

// Konami Code handling
const konamiSeq = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];
let keyBuffer = [];
const MAX_KEYBUF = 20;
function normKey(e) {
  return String(e.key || "").toLowerCase();
}
function endsWithKonami(buf) {
  if (buf.length < konamiSeq.length) return false;
  for (let i = 0; i < konamiSeq.length; i++) {
    if (buf[buf.length - konamiSeq.length + i] !== konamiSeq[i]) return false;
  }
  return true;
}
window.addEventListener("keydown", (e) => {
  if (isTypingContext()) return;
  const k = normKey(e);
  keyBuffer.push(k);
  if (keyBuffer.length > MAX_KEYBUF) keyBuffer.shift();
  if (endsWithKonami(keyBuffer)) {
    togglePrettySmileMode();
    keyBuffer.length = 0;
  }
});

// Optional: expose a debug API under window.secrets
window.secrets = {
  enablePrettysmile,
  disablePrettysmile,
  setPrettySmileMode,
  togglePrettySmileMode,
  enablePrettySmileCursor,
  disablePrettySmileCursor,
};
