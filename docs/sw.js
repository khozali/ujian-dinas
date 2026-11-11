// Service worker: aplikasi bisa dibuka tanpa internet.
// VERSION diganti otomatis oleh build.mjs setiap kali isi soal/aplikasi berubah,
// sehingga iPhone mengunduh versi baru saat online.
const VERSION = 'b8607057';
const CACHE = 'udinas-' + VERSION;
const ASSETS = ["./","./index.html","./manifest.webmanifest","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('udinas-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

// Cache-first: buka dari penyimpanan iPhone dulu (cepat & offline).
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      if (req.mode === 'navigate') return caches.match('./index.html').then((r) => r || fetch(req));
      return fetch(req);
    })
  );
});
