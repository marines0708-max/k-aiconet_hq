// K-AI CONET — minimal service worker: network first, cached copy when offline
const CACHE = "kaiconet-v1";
const CORE = ["/", "/index.html", "/newyork.html", "/korea.html", "/usai-coin-192.webp", "/usai-coin-384.webp", "/world-map-1056.webp", "/app-icon-192.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); return res; }).catch(() => caches.match(req).then(r => r || caches.match("/index.html"))));
});
