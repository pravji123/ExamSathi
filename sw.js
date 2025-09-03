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
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Activate SW immediately
      .catch(err => console.error("Cache add error:", err))
  );
});

// Fetch from Cache / Network Fallback
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // return cached file
        }
        return fetch(event.request) // fetch from network
          .then(fetchResponse => {
            // Optional: cache new requests dynamically
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          });
      })
      .catch(() => {
        // Optional: fallback page/image for offline
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
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
    ).then(() => self.clients.claim()) // take control immediately
  );
});
const CACHE_NAME = "testara-cache-v2"; // Updated cache version
const urlsToCache = [
  "/",                       
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
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Activate SW immediately
      .catch(err => console.error("Cache add error:", err))
  );
});

// Fetch from Cache / Network Fallback
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request)
          .then(fetchResponse => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          });
      })
      .catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
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
    ).then(() => self.clients.claim())
  );
});
