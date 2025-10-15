// Modal + cards + navigation + utilities extracted into a module
import { projects } from "../data/projects.js";

// Utility shorthands
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

// DOM references used by modal
const modal = qs("#project-modal");
const media = qs("#modal-media");
const title = qs("#modal-title");
const modalRole = qs("#modal-role");
const modalCompany = qs("#modal-company");
const body = qs("#modal-body");
const links = qs("#modal-links");
const closeButtons = qsa("[data-close]", modal);
const prevBtn = qs("[data-prev]");
const nextBtn = qs("[data-next]");

// Lightbox opener is provided by lightbox module via a global hook we call if present
const openLightbox = (src, focusEl) => {
  if (typeof window.__openLightbox === "function") {
    window.__openLightbox(src, focusEl);
  }
};

// Maintain card navigation order
const cardEls = qsa(".card[data-id]");
const navOrder = cardEls.map((el) => el.getAttribute("data-id"));
let currentProjectIndex = -1;

// Footer year
const yearEl = qs("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = qs(".nav-toggle");
const menu = qs("#site-menu");
if (navToggle && menu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
  });
  menu.hidden = true;
}

// Keep menu visible on desktop
const mql = window.matchMedia("(min-width: 901px)");
const onResize = () => {
  if (menu)
    menu.hidden =
      !mql.matches &&
      qs(".nav-toggle")?.getAttribute("aria-expanded") !== "true";
};
mql.addEventListener?.("change", onResize);
window.addEventListener("resize", onResize);
onResize();

function setIntrinsicDimensions(img) {
  if (!img) return;
  const apply = () => {
    if (img.naturalWidth && img.naturalHeight) {
      if (!img.getAttribute("width"))
        img.setAttribute("width", String(img.naturalWidth));
      if (!img.getAttribute("height"))
        img.setAttribute("height", String(img.naturalHeight));
    }
  };
  if (img.complete) apply();
  else img.addEventListener("load", apply, { once: true });
}
setIntrinsicDimensions(qs("#about .about-photo img"));
setIntrinsicDimensions(qs("header .brand img"));

// Scroll spy
const navLinks = qsa('.site-nav a[href^="#"]');
const sections = navLinks
  .map((a) => a.getAttribute("href"))
  .filter((h) => h && h.startsWith("#"))
  .map((h) => qs(h))
  .filter(Boolean);

function spy() {
  let activeId = "";
  const fromTop = window.scrollY + 80;
  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    if (fromTop >= top && fromTop < top + sec.offsetHeight) {
      activeId = `#${sec.id}`;
      break;
    }
  }
  navLinks.forEach((a) => {
    const isActive = a.getAttribute("href") === activeId;
    if (isActive) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", spy, { passive: true });
window.addEventListener("resize", spy, { passive: true });
spy();

function getYouTubeId(url) {
  try {
    const match = String(url).match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : "";
  } catch {
    return "";
  }
}

function trapFocus(container) {
  const focusable = container.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handle(e) {
    if (e.key !== "Tab") return;
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  container.addEventListener("keydown", handle);
  return () => container.removeEventListener("keydown", handle);
}

let releaseFocusFn = null;
function releaseFocus() {
  if (releaseFocusFn) releaseFocusFn();
  releaseFocusFn = null;
}

let lastFocused = null;
function openModal() {
  lastFocused = document.activeElement;
  modal.setAttribute("aria-hidden", "false");
  releaseFocusFn = trapFocus(modal);
  document.body.classList.add("modal-open");
  try {
    if (typeof window.updateCursorHover === "function")
      window.updateCursorHover();
  } catch {}
}
function closeModal() {
  try {
    Array.from(media.querySelectorAll("video")).forEach((v) => {
      try {
        v.pause();
        v.currentTime = 0;
      } catch {}
    });
    Array.from(media.querySelectorAll("iframe")).forEach((f) => {
      try {
        f.src = f.src;
      } catch {}
    });
    media.innerHTML = "";
    media.setAttribute("aria-hidden", "true");
  } catch {}
  modal.setAttribute("aria-hidden", "true");
  releaseFocus();
  if (lastFocused && lastFocused.focus) lastFocused.focus();
  document.body.classList.remove("modal-open");
  try {
    if (typeof window.updateCursorHover === "function")
      window.updateCursorHover();
  } catch {}
}

function setCardThumb(card, data) {
  try {
    const firstImg = data.images?.[0];
    if (!firstImg) return;
    const el = card.querySelector(".thumb");
    if (!el) return;
    el.style.backgroundImage = `url('${firstImg}')`;
  } catch {}
}

function openRelative(delta) {
  if (currentProjectIndex < 0) return;
  const nextIndex = currentProjectIndex + delta;
  if (nextIndex < 0 || nextIndex >= navOrder.length) return;
  openProject(navOrder[nextIndex]);
}

function openProject(id) {
  const data = projects[id];
  if (!data) return;

  currentProjectIndex = Math.max(0, navOrder.indexOf(id));
  title.textContent = data.title || "";

  if (data.meta) {
    if (id === "main1") {
      modalRole.textContent = "Game/Level Designer";
      modalCompany.textContent =
        "Gixer Entertainment • Nov\u00A02023 – Oct\u00A02025";
    } else if (id === "main2") {
      modalRole.textContent = "Level Designer";
      modalCompany.textContent =
        "PopReach Incorporated • Dec\u00A02022 – Aug\u00A02023";
    } else if (id === "main3") {
      modalRole.textContent = "Game Designer";
      modalCompany.textContent =
        "Truly Social Games • Oct\u00A02021 – Nov\u00A02022";
    } else {
      const metaParts = data.meta.split(" • ");
      if (metaParts.length >= 2) {
        modalRole.textContent = metaParts[0];
        modalCompany.textContent = metaParts.slice(1).join(" • ");
      } else {
        modalRole.textContent = data.meta;
        modalCompany.textContent = "";
      }
    }
  } else {
    modalRole.textContent = "";
    modalCompany.textContent = "";
  }

  body.innerHTML = "";
  links.innerHTML = "";
  media.innerHTML = "";

  if (data.summary) {
    const p = document.createElement("p");
    p.textContent = data.summary;
    body.appendChild(p);
  }
  if (Array.isArray(data.experience) && data.experience.length) {
    const h = document.createElement("h4");
    h.textContent = "My role & contributions";
    body.appendChild(h);
    const ul = document.createElement("ul");
    data.experience.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    body.appendChild(ul);
  }

  const videoId = getYouTubeId(data.video);
  const imgs = Array.isArray(data.images) ? data.images : [];
  let mediaCount = 0;

  if (imgs.length) {
    const img = new Image();
    img.loading = "lazy";
    img.decoding = "async";
    img.src = imgs[0];
    img.alt = `${data.title} screenshot`;
    media.appendChild(img);
    mediaCount++;
  }

  if (videoId) {
    const wrap = document.createElement("div");
    wrap.className = "video-wrap";
    wrap.innerHTML = `<iframe class="video-frame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    media.appendChild(wrap);
    mediaCount++;
  }

  if (imgs.length > 1) {
    for (let i = 1; i < imgs.length; i++) {
      const src = imgs[i];
      const extraVid = getYouTubeId(src);
      if (extraVid) {
        const wrap = document.createElement("div");
        wrap.className = "video-wrap";
        wrap.innerHTML = `<iframe class="video-frame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${extraVid}?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        media.appendChild(wrap);
        mediaCount++;
      } else {
        const img = new Image();
        img.loading = "lazy";
        img.decoding = "async";
        img.src = src;
        img.alt = `${data.title} screenshot`;
        media.appendChild(img);
        mediaCount++;
      }
    }
  }

  if (mediaCount > 0) media.removeAttribute("aria-hidden");
  else media.setAttribute("aria-hidden", "true");

  if (Array.isArray(data.links) && data.links.length) {
    data.links.forEach((l) => {
      const a = document.createElement("a");
      a.href = l.href;
      a.target = /^(https?:)?:?\/\//.test(l.href) ? "_blank" : "_self";
      a.rel = "noopener";
      a.textContent = l.label;
      links.appendChild(a);
    });
  }

  openModal();

  if (prevBtn) prevBtn.disabled = currentProjectIndex <= 0;
  if (nextBtn) nextBtn.disabled = currentProjectIndex >= navOrder.length - 1;
}

function bindCards() {
  document.querySelectorAll(".card[data-id]").forEach((card) => {
    const id = card.getAttribute("data-id");
    try {
      const data = projects[id];
      if (data) setCardThumb(card, data);
    } catch {}
    const handler = () => openProject(id);
    card.addEventListener("click", handler);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handler();
      }
    });
  });
}

function bindModalEvents() {
  document
    .querySelectorAll("[data-close]")
    .forEach((btn) => btn.addEventListener("click", closeModal));
  modal.addEventListener("click", (e) => {
    if (e.target && e.target.hasAttribute("data-close")) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "false" && e.key === "Escape") {
      const lb = document.getElementById("img-lightbox");
      if (!lb || lb.getAttribute("aria-hidden") !== "false") closeModal();
    }
  });
  if (prevBtn) prevBtn.addEventListener("click", () => openRelative(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => openRelative(1));
  window.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "false") {
      if (e.key === "ArrowLeft") openRelative(-1);
      if (e.key === "ArrowRight") openRelative(1);
    }
  });
}

export function initModal() {
  bindCards();
  bindModalEvents();
}
