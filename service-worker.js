const CACHE_NAME = 'login-supabase-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/bem-vindo.html',
  '/perfil.html',
  '/inicio.css',
  '/perfil.css',
  '/supabase.js',
  '/images/favicon.ico',
  '/images/fundo-principal.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
