"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff, Download, Smartphone, Bell } from "lucide-react";

export function PWAStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if running as PWA
    const checkInstalled = () => {
      setIsInstalled(
        window.matchMedia("(display-mode: standalone)").matches ||
          (window.navigator as any).standalone === true
      );
    };

    // Check online status
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // Event listeners
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    checkInstalled();
    updateOnlineStatus();

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShowInstallPrompt(false);
    }

    setDeferredPrompt(null);
  };

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      console.log("Notification permission:", permission);
    }
  };

  return (
    <div className="space-y-4">
      {/* Connection Status */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {isOnline ? (
                <Wifi className="h-5 w-5 text-green-600" />
              ) : (
                <WifiOff className="h-5 w-5 text-red-600" />
              )}
              <div>
                <p className="font-medium">{isOnline ? "Online" : "Offline"}</p>
                <p className="text-sm text-gray-600">
                  {isOnline
                    ? "All features available"
                    : "Limited features available"}
                </p>
              </div>
            </div>
            <Badge variant={isOnline ? "default" : "destructive"}>
              {isOnline ? "Connected" : "Disconnected"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Install Prompt */}
      {showInstallPrompt && !isInstalled && (
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Install Divine Academy App</p>
                  <p className="text-sm text-gray-600">
                    Get quick access and offline features
                  </p>
                </div>
              </div>
              <Button size="sm" onClick={handleInstallClick}>
                <Download className="h-4 w-4 mr-2" />
                Install
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* PWA Status */}
      {isInstalled && (
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">App Installed</p>
                  <p className="text-sm text-gray-600">
                    Enjoying full PWA experience
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="text-purple-600 border-purple-600"
              >
                PWA Mode
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notification Permission */}
      {"Notification" in window && Notification.permission === "default" && (
        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium">Enable Notifications</p>
                  <p className="text-sm text-gray-600">
                    Stay updated with school news and events
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={requestNotificationPermission}
              >
                Enable
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
