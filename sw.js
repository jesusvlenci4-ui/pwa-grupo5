const CACHE_NAME = 'pwa-grupo5-v1';
const ARCHIVOS = [
    '/',
    '/index.html',
    '/icon.png'
];

// INSTALAR: guarda los archivos en el cache del celular
self.addEventListener('install', function(evento) {
    evento.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ARCHIVOS);
        })
    );
});

// BUSCAR: cuando la app pide un archivo, primero busca en cache
self.addEventListener('fetch', function(evento) {
    evento.respondWith(
        caches.match(evento.request).then(function(respuesta) {
            return respuesta || fetch(evento.request);
        })
    );
});