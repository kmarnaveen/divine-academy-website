"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Compass,
  Download,
  Plus,
  Share2,
  Smartphone,
  Wifi,
  WifiOff,
} from "lucide-react";

import {
  type BeforeInstallPromptEvent,
  getPwaEnvironment,
  type PwaEnvironment,
} from "@/lib/pwa";

export function PWAStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [environment, setEnvironment] = useState<PwaEnvironment | null>(null);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission | null>(null);

  useEffect(() => {
    const syncEnvironment = () => {
      setEnvironment(getPwaEnvironment(window));
      setIsOnline(navigator.onLine);

      if ("Notification" in window) {
        setNotificationPermission(Notification.permission);
      }
    };

    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      syncEnvironment();
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    syncEnvironment();

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const isInstalled = environment?.isStandalone ?? false;
  const showIOSGuide = Boolean(environment?.needsGuidedInstall) && !isInstalled;
  const showDirectInstall =
    Boolean(deferredPrompt) && !isInstalled && !showIOSGuide;
  const showBrowserFallback =
    Boolean(environment) && !isInstalled && !showIOSGuide && !showDirectInstall;

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    setDeferredPrompt(null);

    if (outcome === "accepted") {
      setEnvironment(getPwaEnvironment(window));
    }
  };

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="border-l-4 border-l-primary">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:items-center">
              {isOnline ? (
                <Wifi className="h-5 w-5 text-green-600" />
              ) : (
                <WifiOff className="h-5 w-5 text-red-600" />
              )}
              <div className="min-w-0">
                <p className="font-medium">{isOnline ? "Online" : "Offline"}</p>
                <p className="text-sm text-gray-600">
                  {isOnline
                    ? "All features available"
                    : "Limited features available"}
                </p>
              </div>
            </div>
            <Badge
              variant={isOnline ? "default" : "destructive"}
              className="self-start sm:self-auto"
            >
              {isOnline ? "Connected" : "Disconnected"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {showIOSGuide && environment ? (
        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div className="min-w-0">
                <p className="font-medium text-slate-950">
                  Add DIA to your {environment.deviceLabel}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {environment.isSafari
                    ? "iPhone uses Safari’s Share menu instead of a direct install prompt."
                    : "Open this page in Safari first, then use Add to Home Screen."}
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Compass className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Step 1
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {environment.isSafari ? "Stay in Safari" : "Open Safari"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Share2 className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Step 2
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Tap the Share button
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Plus className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Step 3
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Choose Add to Home Screen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {showDirectInstall ? (
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-3 sm:items-center">
                <Smartphone className="h-5 w-5 text-green-600" />
                <div className="min-w-0">
                  <p className="font-medium">Install Divine Academy App</p>
                  <p className="text-sm text-gray-600">
                    Install directly on this browser for quicker access and
                    offline support.
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                onClick={handleInstallClick}
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Install
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {showBrowserFallback ? (
        <Card className="border-l-4 border-l-slate-400">
          <CardContent className="p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-3 sm:items-center">
                <Download className="h-5 w-5 text-slate-600" />
                <div className="min-w-0">
                  <p className="font-medium">
                    Install support depends on the current browser
                  </p>
                  <p className="text-sm text-gray-600">
                    Chrome and Edge usually show the install prompt on Android
                    and desktop. If you are on iPhone, use Safari and Add to
                    Home Screen.
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="self-start sm:self-auto">
                Browser Check
              </Badge>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {isInstalled ? (
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-3 sm:items-center">
                <Smartphone className="h-5 w-5 text-purple-600" />
                <div className="min-w-0">
                  <p className="font-medium">App Installed</p>
                  <p className="text-sm text-gray-600">
                    Enjoying full PWA experience
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="self-start border-purple-600 text-purple-600 sm:self-auto"
              >
                PWA Mode
              </Badge>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {notificationPermission === "default" ? (
        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-3 sm:items-center">
                <Bell className="h-5 w-5 text-yellow-600" />
                <div className="min-w-0">
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
                className="w-full sm:w-auto"
              >
                Enable
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
