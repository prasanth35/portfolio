// const CACHE_V2 = 'site-cache'
// const CACHE_STATIC_ASSETS = ['lottie-react.js?v=8c717958']

// self.addEventListener("install", event => {
//    event.waitUntil(
//       caches.open("CACHE_V1")
//       .then(cache => {
//          return cache.addAll(CACHE_STATIC_ASSETS);
//       })
//    )
// })

// // self.addEventListener('activate',event => {
// //         console.log("WORKER ACTIVATED")
// // })

// self.addEventListener("fetch", function(event) {
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(CACHE_V1).then(function(cache) {
//                 cache.put(event.request.url, res.clone());
//                 return res;
//               });
//             })
//         }
//       })
//     );
//   });
  