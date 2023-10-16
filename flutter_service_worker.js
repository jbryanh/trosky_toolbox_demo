'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "002c3ad4fe4a27eb7597972672fb28bc",
"splash/img/light-2x.png": "f61a656baee0eaaf4075d59bdf63751e",
"splash/img/dark-4x.png": "8c8394afa189510fa0f2665c2c8f858e",
"splash/img/light-3x.png": "6345295f6da0a007d1b3a463bf6226cd",
"splash/img/dark-3x.png": "6345295f6da0a007d1b3a463bf6226cd",
"splash/img/light-4x.png": "8c8394afa189510fa0f2665c2c8f858e",
"splash/img/dark-2x.png": "f61a656baee0eaaf4075d59bdf63751e",
"splash/img/dark-1x.png": "7b0a0eaae7ef765d234e5c5147c4e013",
"splash/img/light-1x.png": "7b0a0eaae7ef765d234e5c5147c4e013",
"splash/splash.json": "90bc946a5b03e1d81490eaa4cfd8cc42",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "c8c9d901e6739bae6e89c3c9c044aa46",
"index.html": "67b4df2e28464a32940b847a1d06529c",
"/": "67b4df2e28464a32940b847a1d06529c",
"main.dart.js": "0b3d6c4871956fb38d67a1943d49ce45",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "30fda59b2d6f9a3f5290e3db93c19b7c",
"icons/Icon-192.png": "8fbd3924e431c6b29cf283cf46a87476",
"icons/Icon-maskable-192.png": "8fbd3924e431c6b29cf283cf46a87476",
"icons/Icon-maskable-512.png": "90c5c1a60fb7aa738263325f064cba8b",
"icons/Icon-512.png": "90c5c1a60fb7aa738263325f064cba8b",
"manifest.json": "bb4b5e6f3f1ba1aa777a4d86e1029585",
"assets/AssetManifest.json": "f37728bba28e4cf3834092e70e2e4d81",
"assets/NOTICES": "2951dddc274662e61620e92f7daea606",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "cbb20d639dff1d723e6f39bdaca8ea8a",
"assets/fonts/MaterialIcons-Regular.otf": "d7ce652f9faf24c8977db918c8ac0ef6",
"assets/assets/images/horizontal_straight_logo.png": "b971a8687061e6ea98e34ed78ce9b382",
"assets/assets/images/game_day_mantra.png": "4ec997e02a9eb0275d3d04047395136a",
"assets/assets/images/field_entry_mantra.png": "312a2ae555bcf7305f329ef32d77aaa0",
"assets/assets/images/trosky_baseball_no_background_no_border.png": "dcc08a8b458fb633dc9dc58f81e30adf",
"assets/assets/images/elite_infielders_mantra.png": "da0b9510100039fb457bd04b9ff0a25f",
"assets/assets/images/trosky_splash.json": "90bc946a5b03e1d81490eaa4cfd8cc42",
"assets/assets/images/trosky_circle_icon.png": "b81182a6fe1a086a03d55fbd5fad2ec2",
"assets/assets/images/trosky_tb_blue.png": "b8dc579a1ebb0184827c8aab796aa030",
"assets/assets/images/mantra_final.png": "0016982d7ae2ae568442d63387e01a1b",
"assets/assets/images/trosky_logo_vertical.png": "b6db0e1b3c30f97521bbdf65832d5b60",
"assets/assets/images/trosky_toolbox_transparent.png": "b1bba52f982f0ded7a62263498b96cea",
"assets/assets/images/make_your_bed_mantra.png": "f6b5449b022d82040b56faf74475331c",
"assets/assets/images/trosky_color_logo.jpg": "06fe2e0b2aeb0b65a339995bd7b3de81",
"assets/assets/images/morning_mantra.png": "83bf9cb31285a4cebcadd6adf6369d44",
"assets/assets/images/suave.png": "b0babb8f8aba80f12ed0addf7fd8d0b4",
"assets/assets/images/getting_centered_mantra.png": "9d950ca0b0ae8b7d046f63a304be1572",
"assets/assets/images/trosky_toolbox_square_black.png": "1eb6d079a71ae4e1ee6205b8b153d60e",
"assets/assets/sounds/safe.wav": "f3c30db7ba61f3fcd52be46bc81ecaea",
"assets/assets/sounds/out.wav": "e04355fb83330d45fea21c9e125e519e",
"assets/assets/sounds/bell.m4a": "0bb6fa11ad30663f6ff5bc9c5dca6611",
"assets/assets/sounds/woodbat.mp3": "ce34aec3d55688adae57afaf3cd5efa9",
"assets/assets/sounds/start_tones.m4a": "d722860c56581cab3743b38461b07284",
"assets/assets/sounds/bellbuzz.m4a": "b20d52f2948e7ad19dc9e79f12c1e5c7",
"assets/assets/sounds/crowd.wav": "9f7ddcc41e64af9314ea706f0e7b4721",
"assets/assets/sounds/safe.m4a": "65f962a35882aa52893dbdfcdb666ddd",
"assets/assets/sounds/crowd_low.m4a": "872c51466bbe6e05418f6db61b117c29",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
