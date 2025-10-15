/* Simple service worker for offline caching and faster repeat visits */
const CACHE_VERSION = "v3-2025-10-15";
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;
const PRECACHE = `precache-${CACHE_VERSION}`;

// Core assets to precache (add/adjust as needed)
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/404.html",
  "/css/base.css",
  "/css/sections.css",
  "/css/layout.css",
  "/css/cards.css",
  "/css/modal.css",
  "/css/secrets.css",
  "/css/responsive.css",
  "/css/about.css",
  "/css/skip-link.css",
  "/js/main.js",
  "/js/modules/modal.js",
  "/js/modules/lightbox.js",
  "/js/modules/secrets.js",
  "/js/data/projects.js",
  "/img/logo.png",
  "/img/thales.jpg",
  "/img/social-card.jpg",
  "/img/favicon/favicon-16x16.png",
  "/img/favicon/favicon-32x32.png",
  "/img/favicon/apple-touch-icon.png",
  "/img/favicon/android-chrome-192x192.png",
  "/img/favicon/android-chrome-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  const currentCaches = new Set([PRECACHE, RUNTIME_CACHE]);
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !currentCaches.has(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // Network-first for navigation (HTML)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() =>
          caches
            .match(req)
            .then((cached) => cached || caches.match("/404.html"))
        )
    );
    return;
  }

  // Stale-while-revalidate for CSS/JS
  if (req.destination === "style" || req.destination === "script") {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req).then((res) => {
          const resClone = res.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, resClone));
          return res;
        });
        return cached || networkFetch;
      })
    );
    return;
  }

  // Cache-first for images & icons
  if (req.destination === "image" || req.destination === "font") {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const resClone = res.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, resClone));
          return res;
        });
      })
    );
    return;
  }
});
