let CACHE_NAME = 'my_site_cache';

let urlsToCache = [
    './',
    './assets/images/dog.png',
    './assets/css/style.css',
    './assets/icons/icon-512x512.png',
    './index.html',
    './info.html',
];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache)
        })
    );
});

self.addEventListener('fetch', function(e){
    console.log('intercept req: ' +e.request.url);
});

//Cach fallback network
 self.addEventListener('fetch', function (event) {
     //Det der returner noget der kommer tilbage til browseren (respondWith)
     event.respondWith(
       caches.match(event.request).then(function (response) {
         return response || fetch(event.request);
       }),
     );
   });