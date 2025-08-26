// const CACHE_NAME = "testara-cache-v1";
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/exam_details.html",
//   "/ebooks.html",
//   "/ssc_test.html",
//   "/sscresult.html",
//   "/style.css",
//   "/script.js",
//   "/image/testara.png"
// ];

const CACHE_NAME = "testara-cache-v1";
const urlsToCache = [
  "/index.html",
  "/manifest.json",
  "/image/testara-192.png",
  "/image/testara-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error("Cache add error:", err))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from Cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Update old cache
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
