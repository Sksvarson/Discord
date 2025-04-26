const CACHE_NAME = "static-v4"; // <<--- zmieniaj numer przy każdej nowej wersji
const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// Instalacja service workera
self.addEventListener("install", (event) => {
  self.skipWaiting(); // Od razu aktywuj nowego SW
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Aktywacja service workera
self.addEventListener("activate", (event) => {
  clients.claim(); // Od razu przejmij kontrolę nad stroną
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
});

// Obsługa żądań
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
