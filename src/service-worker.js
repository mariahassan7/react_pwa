import { precacheAndRoute } from 'workbox-precaching';
// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);


console.log("Educative's service worker");
const educatives_cache = 'Educative PWA';
const cache_urls = ['/', '/index.html', '/manifest.json',];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(educatives_cache)
      .then(cache => cache.addAll(cache_urls))
  );
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});