const CACHE_NAME = "testara-cache-v1";
const urlsToCache = [
  "/",                       // root
  "/index.html",
  "/exam_details.html",
  "/ebooks.html",
  "/ssc_test.html",
  "/sscresult.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/image/testara-192.png",
  "/image/testara-512.png",
  "/image/testara.png"
];

// Install Service Worker & Cache Files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error("Cache add error:", err))
  );
});

// Fetch from Cache / Network Fallback
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate & Delete Old Caches
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
