// PWA Registration Script for Divine International Academy

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      // Register service worker
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      console.log("PWA: Service Worker registered successfully:", registration);

      // Handle service worker updates
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // New update available
                showUpdateNotification();
              } else {
                // Content is cached for offline use
                showOfflineReadyNotification();
              }
            }
          });
        }
      });

      // Handle controller changes
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
    } catch (error) {
      console.error("PWA: Service Worker registration failed:", error);
    }
  });
}

// Check for app install prompt
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("PWA: Install prompt triggered");

  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Show custom install button
  showInstallButton();
});

// Handle app installation
window.addEventListener("appinstalled", (event) => {
  console.log("PWA: App was installed successfully");

  // Hide install button
  hideInstallButton();

  // Track installation (analytics)
  trackAppInstall();
});

// Show update notification
function showUpdateNotification() {
  if (Notification.permission === "granted") {
    new Notification("Divine International Academy - Update Available", {
      body: "A new version is available. Refresh to update.",
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-72x72.png",
      tag: "app-update",
    });
  } else {
    // Fallback to in-app notification
    showInAppUpdateBanner();
  }
}

// Show offline ready notification
function showOfflineReadyNotification() {
  console.log("PWA: App is ready for offline use");

  // Show subtle notification
  showInAppMessage("App is ready for offline use", "success");
}

// Show install button
function showInstallButton() {
  const installButton = document.getElementById("pwa-install-button");
  if (installButton) {
    installButton.style.display = "block";
    installButton.addEventListener("click", handleInstallClick);
  } else {
    // Create and show install banner
    createInstallBanner();
  }
}

// Hide install button
function hideInstallButton() {
  const installButton = document.getElementById("pwa-install-button");
  if (installButton) {
    installButton.style.display = "none";
  }

  const installBanner = document.getElementById("pwa-install-banner");
  if (installBanner) {
    installBanner.remove();
  }
}

// Handle install button click
async function handleInstallClick() {
  if (!deferredPrompt) {
    return;
  }

  // Show install prompt
  deferredPrompt.prompt();

  // Wait for user response
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`PWA: User ${outcome} the install prompt`);

  // Track user choice
  trackInstallChoice(outcome);

  // Clear deferred prompt
  deferredPrompt = null;

  // Hide install button
  hideInstallButton();
}

// Create install banner
function createInstallBanner() {
  const banner = document.createElement("div");
  banner.id = "pwa-install-banner";
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: linear-gradient(135deg, #1E3A8A, #3B82F6);
      color: white;
      padding: 16px 20px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      border-radius: 12px;
      font-family: system-ui, -apple-system, sans-serif;
      backdrop-filter: blur(10px);
    ">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img src="/images/logo.png" alt="Logo" style="width: 24px; height: 24px; object-fit: contain;">
        <div>
          <div style="font-weight: 600; font-size: 14px;">Install Divine Academy App</div>
          <div style="font-size: 12px; opacity: 0.9;">Get quick access and offline features</div>
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <button id="pwa-install-btn" style="
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        ">Install</button>
        <button id="pwa-dismiss-btn" style="
          background: transparent;
          border: none;
          color: white;
          padding: 4px;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          opacity: 0.8;
        ">×</button>
      </div>
    </div>
  `;

  document.body.prepend(banner);

  // Add event listeners
  document
    .getElementById("pwa-install-btn")
    .addEventListener("click", handleInstallClick);
  document.getElementById("pwa-dismiss-btn").addEventListener("click", () => {
    banner.remove();
    trackInstallChoice("dismissed");
  });

  // Add hover effects
  const installBtn = document.getElementById("pwa-install-btn");
  installBtn.addEventListener("mouseenter", () => {
    installBtn.style.background = "rgba(255,255,255,0.3)";
  });
  installBtn.addEventListener("mouseleave", () => {
    installBtn.style.background = "rgba(255,255,255,0.2)";
  });
}

// Show in-app update banner
function showInAppUpdateBanner() {
  const updateBanner = document.createElement("div");
  updateBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      background: #10B981;
      color: white;
      padding: 16px;
      border-radius: 12px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <div>
        <div style="font-weight: 600; margin-bottom: 4px;">Update Available</div>
        <div style="font-size: 14px; opacity: 0.9;">Refresh to get the latest version</div>
      </div>
      <button onclick="window.location.reload()" style="
        background: rgba(255,255,255,0.2);
        border: 1px solid rgba(255,255,255,0.3);
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
      ">Refresh</button>
    </div>
  `;

  document.body.appendChild(updateBanner);

  // Auto remove after 10 seconds
  setTimeout(() => {
    updateBanner.remove();
  }, 10000);
}

// Show in-app message
function showInAppMessage(message, type = "info") {
  const colors = {
    success: "#10B981",
    info: "#3B82F6",
    warning: "#F59E0B",
    error: "#EF4444",
  };

  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${colors[type]};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      max-width: 300px;
    ">
      ${message}
    </div>
  `;

  document.body.appendChild(messageDiv);

  // Auto remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Request notification permission
function requestNotificationPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      console.log("PWA: Notification permission:", permission);
    });
  }
}

// Track app installation
function trackAppInstall() {
  // Analytics tracking
  if (typeof gtag !== "undefined") {
    gtag("event", "pwa_install", {
      event_category: "PWA",
      event_label: "App Installed",
    });
  }

  console.log("PWA: App installation tracked");
}

// Track install choice
function trackInstallChoice(choice) {
  // Analytics tracking
  if (typeof gtag !== "undefined") {
    gtag("event", "pwa_install_prompt", {
      event_category: "PWA",
      event_label: choice,
      value: choice === "accepted" ? 1 : 0,
    });
  }

  console.log("PWA: Install choice tracked:", choice);
}

// Initialize PWA features
function initializePWA() {
  // Request notification permission after user interaction
  document.addEventListener("click", requestNotificationPermission, {
    once: true,
  });

  // Check if app is running in standalone mode
  if (window.matchMedia("(display-mode: standalone)").matches) {
    console.log("PWA: Running in standalone mode");
    document.documentElement.classList.add("pwa-standalone");
  }

  // Add PWA-specific styles
  const pwaStyles = document.createElement("style");
  pwaStyles.textContent = `
    .pwa-standalone {
      --pwa-safe-area-top: env(safe-area-inset-top, 0px);
      --pwa-safe-area-bottom: env(safe-area-inset-bottom, 0px);
    }
    
    .pwa-standalone body {
      padding-top: var(--pwa-safe-area-top);
      padding-bottom: var(--pwa-safe-area-bottom);
    }
    
    @media (display-mode: standalone) {
      .pwa-only { display: block !important; }
      .pwa-hidden { display: none !important; }
    }
  `;
  document.head.appendChild(pwaStyles);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePWA);
} else {
  initializePWA();
}

console.log("PWA: Registration script loaded");
