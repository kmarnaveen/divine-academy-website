"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Download, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PWAInstallPrompt } from "@/components/ui/pwa-install-prompt";
import {
  type BeforeInstallPromptEvent,
  getInternalReturnPath,
  getPwaEnvironment,
  type PwaEnvironment,
} from "@/lib/pwa";

export function PWAInstallButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [environment, setEnvironment] = useState<PwaEnvironment | null>(null);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const syncEnvironment = () => {
      setEnvironment(getPwaEnvironment(window));
    };

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      syncEnvironment();
    };

    syncEnvironment();

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const returnPath = getInternalReturnPath(pathname);
  const installPageHref =
    returnPath === "/" ? "/pwa" : `/pwa?from=${encodeURIComponent(returnPath)}`;

  if (
    !environment ||
    pathname === "/pwa" ||
    pathname?.startsWith("/login") ||
    environment.isStandalone
  ) {
    return null;
  }

  const canInstallDirectly = deferredPrompt !== null;

  const handleClick = async () => {
    if (environment.needsGuidedInstall) {
      setShowGuide(true);
      return;
    }

    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      setDeferredPrompt(null);

      if (outcome === "accepted") {
        setEnvironment(getPwaEnvironment(window));
      }

      return;
    }

    router.push(installPageHref);
  };

  const buttonLabel = environment.needsGuidedInstall
    ? `Add DIA to ${environment.deviceLabel}`
    : "Install DIA App";

  const helperText = environment.needsGuidedInstall
    ? environment.isSafari
      ? "Tap Share, then Add to Home Screen"
      : "Open Safari for the install steps"
    : canInstallDirectly
      ? "Install directly on this browser"
      : "Open the device setup page";

  return (
    <>
      <div className="fixed bottom-4 left-4 right-20 z-50 sm:right-auto sm:left-5 sm:w-auto">
        <div className="rounded-[24px] border border-slate-200/80 bg-white/95 p-2 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl">
          <Button
            type="button"
            onClick={handleClick}
            size="lg"
            className="h-auto min-h-14 w-full justify-start gap-3 rounded-[18px] bg-primary px-4 py-3 text-left text-white shadow-none hover:bg-primary/90 sm:min-w-[260px] sm:px-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-white">
              {environment.needsGuidedInstall ? (
                <Smartphone className="h-5 w-5" />
              ) : (
                <Download className="h-5 w-5" />
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold sm:text-[15px]">
                {buttonLabel}
              </span>
              <span className="mt-0.5 block text-xs font-medium text-white/80 sm:text-[13px]">
                {helperText}
              </span>
            </span>
          </Button>
        </div>
      </div>

      <PWAInstallPrompt
        open={showGuide}
        onOpenChange={setShowGuide}
        deviceLabel={environment.deviceLabel}
        isSafari={environment.isSafari}
        installPageHref={installPageHref}
      />
    </>
  );
}
