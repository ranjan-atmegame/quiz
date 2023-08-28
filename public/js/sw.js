//console.warn('sw from public folder');
let cacheData = 'atmequizV1';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        // '/static/js/vendors~main.chunk.js',
        // '/static/js/main.chunk.js',
        // '/static/js/0.chunk.js',
        // '/static/js/bundle.js',
        // '/static/css/main.chunk.css',
        // '/static/media/logo.02740d04.png',
        // '/img/india-flag-icon.svg',
        // '/img/heart-icon.svg',
        // '/icon.png',
        // '/bootstrap.min.css',
        // '/css/style.css',
        // '/index.html',
        '/start',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  // console.warn("url",event.request.url)
  //https://push.atmequiz.com/static/js/main.chunk.js
  if (!navigator.onLine) {
    if (event.request.url === 'https://push.atmequiz.com/static/js/bundle.js') {
      event.waitUntil(
        this.registration.showNotification('Atmequiz Offline', {
          body: 'Atmequiz internet not working!',
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});

this.addEventListener('activate', (event) => {
  console.log('Service worker activate event.');
});
