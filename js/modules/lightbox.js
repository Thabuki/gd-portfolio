// Lightbox module: exposes a global hook window.__openLightbox to keep modal decoupled

(function () {
  const lb = document.getElementById("img-lightbox");
  const lbImg = document.getElementById("img-lightbox-img");
  const lbBackdrop = lb ? lb.querySelector(".img-lightbox-backdrop") : null;
  const lbClose = lb ? lb.querySelector(".img-lightbox-close") : null;
  const lbContent = lb ? lb.querySelector(".img-lightbox-content") : null;
  const lbDialog = lb ? lb.querySelector(".img-lightbox-dialog") : null;
  const lbZoomIndicator = lb
    ? lb.querySelector(".img-lightbox-zoom-indicator")
    : null;
  const lbResetBtn = lb ? lb.querySelector(".img-lightbox-reset") : null;

  let lbState = {
    open: false,
    scale: 1,
    baseScale: 1,
    tx: 0,
    ty: 0,
    natW: 0,
    natH: 0,
    lastFocus: null,
    fullResLoaded: false,
  };

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function updateZoomIndicator() {
    if (!lbZoomIndicator || !lbState.baseScale) return;
    const zoomPercent = Math.round((lbState.scale / lbState.baseScale) * 100);
    lbZoomIndicator.textContent = `${zoomPercent}%`;
  }
  function applyLBTransform() {
    if (!lbImg) return;
    lbImg.style.transform = `translate(${lbState.tx}px, ${lbState.ty}px) scale(${lbState.scale})`;
    updateZoomIndicator();
  }
  function centerLB() {
    if (!lbContent || !lbImg) return;
    const rect = lbContent.getBoundingClientRect();
    const imgW = lbState.natW * lbState.baseScale;
    const imgH = lbState.natH * lbState.baseScale;
    lbState.tx = rect.left + (rect.width - imgW) / 2;
    lbState.ty = rect.top + (rect.height - imgH) / 2;
    applyLBTransform();
  }
  function clampTranslate() {
    if (!lbContent) return;
    const rect = lbContent.getBoundingClientRect();
    const imgW = lbState.natW * lbState.scale;
    const imgH = lbState.natH * lbState.scale;
    const minX = rect.left + Math.min(0, rect.width - imgW);
    const maxX = rect.left + Math.max(0, rect.width - imgW);
    const minY = rect.top + Math.min(0, rect.height - imgH);
    const maxY = rect.top + Math.max(0, rect.height - imgH);
    lbState.tx = clamp(lbState.tx, minX, maxX);
    lbState.ty = clamp(lbState.ty, minY, maxY);
  }

  function getFitScales() {
    const rect = lbContent.getBoundingClientRect();
    const contain = Math.min(
      rect.width / lbState.natW,
      rect.height / lbState.natH
    );
    const cover = Math.max(
      rect.width / lbState.natW,
      rect.height / lbState.natH
    );
    return { contain, cover };
  }

  function loadFullResImage() {
    if (!lbImg || lbState.fullResLoaded) return;
    const fullResSrc = lbImg.getAttribute("data-full-src");
    if (!fullResSrc || lbImg.src === fullResSrc) return;
    lbState.fullResLoaded = true;
    const tempImg = new Image();
    tempImg.onload = () => {
      lbImg.src = fullResSrc;
      lbImg.removeAttribute("data-full-src");
    };
    tempImg.onerror = () => {
      lbState.fullResLoaded = false;
    };
    tempImg.src = fullResSrc;
  }

  function resetZoom() {
    if (!lb || !lbState.baseScale) return;
    lbState.scale = lbState.baseScale;
    lb.classList.remove("zoomed");
    if (lbImg) lbImg.style.cursor = "pointer";
    centerLB();
    applyLBTransform();
  }

  function openLightbox(src, focusEl) {
    if (!lb || !lbImg || !lbContent) return;
    lbState.lastFocus = focusEl || document.activeElement;
    lb.setAttribute("aria-hidden", "false");
    lbImg.style.transform = "none";
    lbImg.style.cursor = "pointer";
    lb.classList.remove("zoomed");

    // setup lazy
    lbImg.setAttribute("data-full-src", src);
    lbImg.src = src; // currently same src; can swap to thumbnail here later

    const onLoad = () => {
      lbState.natW = lbImg.naturalWidth || 0;
      lbState.natH = lbImg.naturalHeight || 0;
      const { contain } = getFitScales();
      lbState.baseScale = contain;
      lbState.scale = lbState.baseScale;
      centerLB();
      updateZoomIndicator();
      lbImg.style.cursor = "pointer";
    };
    if (lbImg.complete) onLoad();
    else lbImg.addEventListener("load", onLoad, { once: true });
    lbState.open = true;
    lbClose?.focus?.();
  }

  function closeLightbox() {
    if (!lb) return;
    lb.setAttribute("aria-hidden", "true");
    try {
      lbImg.src = "";
    } catch {}
    lbState.open = false;
    lbState.scale = lbState.baseScale = 1;
    lbState.tx = lbState.ty = 0;
    lbState.fullResLoaded = false;
    if (lbState.lastFocus && lbState.lastFocus.focus) lbState.lastFocus.focus();
  }

  // Expose hook for modal module
  window.__openLightbox = openLightbox;

  // Bind close buttons
  if (lbClose) {
    lbClose.addEventListener("click", closeLightbox);
    lbClose.addEventListener("touchend", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
    });
    lbClose.addEventListener("pointerup", (e) => {
      if (e.pointerType === "touch") {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
      }
    });
  }
  lbBackdrop?.addEventListener("click", closeLightbox);

  // Open by clicking images inside modal media
  function bindModalImages() {
    if (!lbContent) return;
    const media = document.getElementById("modal-media");
    if (!media) return;
    media.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.tagName.toLowerCase() === "img") {
        const src = target.getAttribute("src") || "";
        if (!src) return;
        e.preventDefault();
        e.stopPropagation();
        // Copy alt text for accessibility in the lightbox image
        const altText = target.getAttribute("alt") || "";
        if (lbImg) lbImg.setAttribute("alt", altText);
        openLightbox(src, target);
      }
    });
  }
  bindModalImages();

  // Gestures and interactions (kept concise; mirrors current logic)
  let dragging = false,
    didDrag = false;
  let lastX = 0,
    lastY = 0,
    lastMoveTime = 0;
  let velocityX = 0,
    velocityY = 0,
    momentumRAF = 0;

  function startMomentum() {
    const friction = 0.92;
    function animate() {
      const speed = Math.hypot(velocityX, velocityY);
      if (speed < 0.5) {
        cancelAnimationFrame(momentumRAF);
        momentumRAF = 0;
        return;
      }
      lbState.tx += velocityX;
      lbState.ty += velocityY;
      clampTranslate();
      applyLBTransform();
      velocityX *= friction;
      velocityY *= friction;
      momentumRAF = requestAnimationFrame(animate);
    }
    momentumRAF = requestAnimationFrame(animate);
  }

  if (lbContent) {
    lbContent.addEventListener("click", (e) => {
      if (!lbState.open) return;
      if (didDrag) {
        didDrag = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      // Close lightbox on any click (image or outside)
      closeLightbox();
    });
    if (lbResetBtn) {
      lbResetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetZoom();
      });
    }

    lbContent.addEventListener(
      "wheel",
      (e) => {
        if (!lbState.open) return;
        e.preventDefault();
        const rect = lbContent.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const delta = -e.deltaY;
        const factor = Math.exp(delta * 0.0015);
        const { contain, cover } = getFitScales();
        const minS = contain;
        const maxS = Math.max(3 * contain, cover);
        const newScale = clamp(lbState.scale * factor, minS, maxS);
        const px = (mx - lbState.tx) / lbState.scale;
        const py = (my - lbState.ty) / lbState.scale;
        lbState.scale = newScale;
        lbState.tx = mx - px * lbState.scale;
        lbState.ty = my - py * lbState.scale;
        clampTranslate();
        applyLBTransform();
        if (lbState.scale > minS + 0.001) {
          lb.classList.add("zoomed");
          lbImg.style.cursor = "grab";
          loadFullResImage();
        } else {
          lb.classList.remove("zoomed");
          lbImg.style.cursor = "zoom-in";
          centerLB();
        }
      },
      { passive: false }
    );

    lbContent.addEventListener("mousedown", (e) => {
      if (lbState.scale <= lbState.baseScale + 0.001) return;
      if (momentumRAF) {
        cancelAnimationFrame(momentumRAF);
        momentumRAF = 0;
        velocityX = velocityY = 0;
      }
      e.preventDefault();
      dragging = true;
      didDrag = false;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMoveTime = performance.now();
      lb.classList.add("zoomed");
      lbImg.style.cursor = "grabbing";
      loadFullResImage();
    });
    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;
      const dt = Math.max(1, now - lastMoveTime);
      velocityX = (dx / dt) * 16;
      velocityY = (dy / dt) * 16;
      lbState.tx += dx;
      lbState.ty += dy;
      clampTranslate();
      applyLBTransform();
      lastX = e.clientX;
      lastY = e.clientY;
      lastMoveTime = now;
    });
    window.addEventListener("mouseup", () => {
      if (!dragging) return;
      dragging = false;
      if (Math.hypot(velocityX, velocityY) > 1) startMomentum();
      lbImg.style.cursor = "grab";
    });

    lbContent.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 1) {
          if (lbState.scale <= lbState.baseScale + 0.001) return;
          if (momentumRAF) {
            cancelAnimationFrame(momentumRAF);
            momentumRAF = 0;
            velocityX = velocityY = 0;
          }
          const t = e.touches[0];
          dragging = true;
          didDrag = false;
          lastX = t.clientX;
          lastY = t.clientY;
          lastMoveTime = performance.now();
          lb.classList.add("zoomed");
          lbImg.style.cursor = "grabbing";
          loadFullResImage();
        }
      },
      { passive: true }
    );
    lbContent.addEventListener(
      "touchmove",
      (e) => {
        if (!dragging || e.touches.length !== 1) return;
        const t = e.touches[0];
        const now = performance.now();
        const dx = t.clientX - lastX;
        const dy = t.clientY - lastY;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) didDrag = true;
        const dt = Math.max(1, now - lastMoveTime);
        velocityX = (dx / dt) * 16;
        velocityY = (dy / dt) * 16;
        lbState.tx += dx;
        lbState.ty += dy;
        clampTranslate();
        applyLBTransform();
        lastX = t.clientX;
        lastY = t.clientY;
        lastMoveTime = now;
      },
      { passive: true }
    );
    lbContent.addEventListener("touchend", (e) => {
      if (e.touches.length === 0) {
        if (dragging) {
          dragging = false;
          if (Math.hypot(velocityX, velocityY) > 1) startMomentum();
          lbImg.style.cursor = "grab";
        }
      }
    });

    // Pinch zoom
    lbContent.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length === 2) {
          e.preventDefault();
          const [t1, t2] = e.touches;
          const dx = t2.clientX - t1.clientX;
          const dy = t2.clientY - t1.clientY;
          const dist = Math.hypot(dx, dy);
          if (!lbState._lastDist) lbState._lastDist = dist;
          const rect = lbContent.getBoundingClientRect();
          const mx = (t1.clientX + t2.clientX) / 2 - rect.left;
          const my = (t1.clientY + t2.clientY) / 2 - rect.top;
          const factor = dist / lbState._lastDist;
          const { contain, cover } = getFitScales();
          const minS = contain;
          const maxS = Math.max(3 * contain, cover);
          const targetScale = clamp(lbState.scale * factor, minS, maxS);
          const px = (mx - lbState.tx) / lbState.scale;
          const py = (my - lbState.ty) / lbState.scale;
          lbState.scale = targetScale;
          lbState.tx = mx - px * lbState.scale;
          lbState.ty = my - py * lbState.scale;
          clampTranslate();
          applyLBTransform();
          if (lbState.scale > lbState.baseScale + 0.001) {
            lb.classList.add("zoomed");
            loadFullResImage();
          } else {
            lb.classList.remove("zoomed");
            centerLB();
          }
          lbState._lastDist = dist;
        }
      },
      { passive: false }
    );
  }

  // Clicking outside image closes
  function onDialogClick(e) {
    if (!lbDialog) return;
    const isInside = lbContent.contains(e.target) || lbClose.contains(e.target);
    if (!isInside) closeLightbox();
  }
  lbDialog?.addEventListener("click", onDialogClick);
})();
