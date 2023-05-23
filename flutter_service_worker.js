'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e4126aea611cd7a76c1acae1eb3ee673",
"assets/assets/images/elite_infielders_mantra.png": "da0b9510100039fb457bd04b9ff0a25f",
"assets/assets/images/field_entry_mantra.png": "312a2ae555bcf7305f329ef32d77aaa0",
"assets/assets/images/game_day_mantra.png": "4ec997e02a9eb0275d3d04047395136a",
"assets/assets/images/getting_centered_mantra.png": "9d950ca0b0ae8b7d046f63a304be1572",
"assets/assets/images/horizontal_straight_logo.png": "b971a8687061e6ea98e34ed78ce9b382",
"assets/assets/images/make_your_bed_mantra.png": "f6b5449b022d82040b56faf74475331c",
"assets/assets/images/mantra_final.png": "0016982d7ae2ae568442d63387e01a1b",
"assets/assets/images/morning_mantra.png": "83bf9cb31285a4cebcadd6adf6369d44",
"assets/assets/images/suave.png": "b0babb8f8aba80f12ed0addf7fd8d0b4",
"assets/assets/images/trosky_baseball_no_background_no_border.png": "dcc08a8b458fb633dc9dc58f81e30adf",
"assets/assets/images/trosky_circle_icon.png": "b81182a6fe1a086a03d55fbd5fad2ec2",
"assets/assets/images/trosky_color_logo.jpg": "06fe2e0b2aeb0b65a339995bd7b3de81",
"assets/assets/images/trosky_logo_vertical.png": "b6db0e1b3c30f97521bbdf65832d5b60",
"assets/assets/images/trosky_tb_blue.png": "b8dc579a1ebb0184827c8aab796aa030",
"assets/assets/images/trosky_toolbox_square_black.png": "1eb6d079a71ae4e1ee6205b8b153d60e",
"assets/assets/sounds/out.wav": "e04355fb83330d45fea21c9e125e519e",
"assets/assets/sounds/safe.wav": "f3c30db7ba61f3fcd52be46bc81ecaea",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "423886a728275cd41f45e2654a3f8ba8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59d5c5766aa1543475103905a08e0a13",
"/": "59d5c5766aa1543475103905a08e0a13",
"main.dart.js": "4e4ba9460bd097030faa2755331a0228",
"manifest.json": "c568eb5b7467c81f3e17a64f9ddd383b",
"splash/img/dark-1x.png": "62c95104e7fd830cf1d737cc1ab93b62",
"splash/img/dark-2x.png": "f61a656baee0eaaf4075d59bdf63751e",
"splash/img/dark-3x.png": "4f9f6ccc0086cf16f66cef02eb2934b0",
"splash/img/dark-4x.png": "8c8394afa189510fa0f2665c2c8f858e",
"splash/img/light-1x.png": "62c95104e7fd830cf1d737cc1ab93b62",
"splash/img/light-2x.png": "f61a656baee0eaaf4075d59bdf63751e",
"splash/img/light-3x.png": "4f9f6ccc0086cf16f66cef02eb2934b0",
"splash/img/light-4x.png": "8c8394afa189510fa0f2665c2c8f858e",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"version.json": "002c3ad4fe4a27eb7597972672fb28bc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
