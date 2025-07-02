self.addEventListener('install', function(e) {
  console.log('Service Worker instalado.');
});

self.addEventListener('fetch', function(e) {
  // No hace caché, es solo para registrar el PWA.
});
