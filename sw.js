/* Service worker: network first (always fresh when online), cache as offline fallback. */
const CACHE = "dad-v1";
const CORE = ["./", "index.html", "app.js", "pwa.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE).catch(() => {});
    try {  /* cache every data file listed in index.html, so the app works offline after the first visit */
      const html = await (await fetch("index.html", { cache: "no-store" })).text();
      const files = [...html.matchAll(/src="(data\/[^"]+)"/g)].map(m => m[1]);
      await c.addAll(files);
    } catch (err) { /* offline during install: files will be cached as they are used */ }
  })());
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin || u.pathname.startsWith("/api/") || u.pathname.startsWith("/.netlify/")) return;
  e.respondWith(
    fetch(r).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
      return res;
    }).catch(async () => (await caches.match(r, { ignoreSearch: true })) || (r.mode === "navigate" ? caches.match("index.html") : Response.error()))
  );
});
