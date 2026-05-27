// Este es un Service Worker básico para cumplir el requisito de instalación PWA
self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('menu-minimalista-v1').then((cache) => cache.addAll([
        './index.html',
        './manifest.json'
      ]))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
