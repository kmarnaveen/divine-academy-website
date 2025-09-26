// Service Worker for Divine International Academy PWA
const CACHE_NAME = "divine-academy-v1.0.0";
const STATIC_CACHE_NAME = "divine-academy-static-v1.0.0";
const DYNAMIC_CACHE_NAME = "divine-academy-dynamic-v1.0.0";

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/about",
  "/academics",
  "/facilities",
  "/admissions",
  "/student-life",
  "/contact",
  "/apply",
  "/manifest.json",
  "/images/logo.png",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Assets to cache dynamically
const CACHE_PATTERNS = [
  /^\/(?:about|academics|facilities|admissions|student-life)\/.*/,
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  /\.(?:css|js)$/,
  /^\/api\//,
];

// Network timeout for dynamic caching
const NETWORK_TIMEOUT = 3000;

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(STATIC_CACHE_NAME);
        console.log("Service Worker: Caching static assets");
        await cache.addAll(STATIC_ASSETS);
        console.log("Service Worker: Static assets cached successfully");
        self.skipWaiting();
      } catch (error) {
        console.error("Service Worker: Failed to cache static assets:", error);
      }
    })()
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        const deletePromises = cacheNames
          .filter(
            (name) =>
              name !== STATIC_CACHE_NAME &&
              name !== DYNAMIC_CACHE_NAME &&
              name.startsWith("divine-academy-")
          )
          .map((name) => {
            console.log("Service Worker: Deleting old cache:", name);
            return caches.delete(name);
          });

        await Promise.all(deletePromises);
        console.log("Service Worker: Old caches cleaned up");
        self.clients.claim();
      } catch (error) {
        console.error("Service Worker: Failed to clean up caches:", error);
      }
    })()
  );
});

// Fetch event - handle requests with different strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip Chrome extension requests
  if (url.protocol === "chrome-extension:") {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirstStrategy(request));
  } else if (isPageRequest(request)) {
    event.respondWith(networkFirstStrategy(request));
  } else if (isAPIRequest(request.url)) {
    event.respondWith(networkOnlyStrategy(request));
  } else {
    event.respondWith(staleWhileRevalidateStrategy(request));
  }
});

// Cache-first strategy for static assets
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error("Cache-first strategy failed:", error);
    return new Response("Offline content not available", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}

// Network-first strategy for pages
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Network timeout")), NETWORK_TIMEOUT)
      ),
    ]);

    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log("Network failed, trying cache:", error.message);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page for navigation requests
    if (request.mode === "navigate") {
      const offlineResponse = await caches.match("/");
      if (offlineResponse) {
        return offlineResponse;
      }
    }

    return new Response("Offline - Content not available", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}

// Network-only strategy for API requests
async function networkOnlyStrategy(request) {
  try {
    return await fetch(request);
  } catch (error) {
    console.error("Network-only request failed:", error);
    return new Response(JSON.stringify({ error: "Network unavailable" }), {
      status: 503,
      statusText: "Service Unavailable",
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Stale-while-revalidate strategy for other resources
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch((error) => {
      console.error("Stale-while-revalidate fetch failed:", error);
      return cachedResponse;
    });

  return cachedResponse || fetchPromise;
}

// Helper functions
function isStaticAsset(url) {
  return (
    /\.(png|jpg|jpeg|svg|gif|webp|css|js|woff|woff2|ttf|eot)$/.test(url) ||
    url.includes("/icons/") ||
    url.includes("/images/")
  );
}

function isPageRequest(request) {
  return (
    request.mode === "navigate" ||
    request.destination === "document" ||
    (request.method === "GET" &&
      request.headers.get("accept")?.includes("text/html"))
  );
}

function isAPIRequest(url) {
  return url.includes("/api/") || url.includes("/wp-json/");
}

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  console.log("Service Worker: Background sync triggered:", event.tag);

  if (event.tag === "background-sync-forms") {
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  try {
    // Handle queued form submissions when back online
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    const queuedRequests = await cache.match("/queued-requests");

    if (queuedRequests) {
      const requests = await queuedRequests.json();

      for (const requestData of requests) {
        try {
          await fetch(requestData.url, {
            method: requestData.method,
            headers: requestData.headers,
            body: requestData.body,
          });
          console.log("Background sync: Request sent successfully");
        } catch (error) {
          console.error("Background sync: Failed to send request:", error);
        }
      }

      // Clear processed requests
      await cache.delete("/queued-requests");
    }
  } catch (error) {
    console.error("Background sync handler failed:", error);
  }
}

// Push notification handling
self.addEventListener("push", (event) => {
  console.log("Service Worker: Push notification received");

  const options = {
    body: event.data
      ? event.data.text()
      : "New update from Divine International Academy",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "1",
    },
    actions: [
      {
        action: "explore",
        title: "View Details",
        icon: "/icons/icon-192x192.png",
      },
      {
        action: "close",
        title: "Dismiss",
        icon: "/icons/icon-192x192.png",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("Divine International Academy", options)
  );
});

// Notification click handling
self.addEventListener("notificationclick", (event) => {
  console.log("Service Worker: Notification clicked");
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"));
  }
});

// Handle updates
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

console.log("Service Worker: Loaded successfully");
