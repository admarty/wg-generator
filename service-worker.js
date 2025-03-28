const CACHE_NAME = 'wireguard-config-generator-v1';
const urlsToCache = [
  '/wg-generator/',
  '/wg-generator/index.html',
  '/wg-generator/wireguard.js',
  '/wg-generator/manifest.json',
  '/wg-generator/ico/favicon-64.png',
  '/wg-generator/icon-192.png'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});