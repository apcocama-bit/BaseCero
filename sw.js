const CACHE_NAME = 'ynab-pwa-v2';
const ASSETS = [
  './index.html',
  './manifest.json',
  '[suspicious link removed]',
  '[suspicious link removed]'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
