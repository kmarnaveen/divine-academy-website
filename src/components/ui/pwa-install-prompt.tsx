"use client";

import Link from "next/link";
import { ArrowRight, Compass, Plus, Share2, Smartphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PWAInstallPromptProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deviceLabel: string;
  isSafari: boolean;
  installPageHref: string;
};

const safariSteps = [
  {
    title: "Keep DIA open in Safari",
    description:
      "Safari is the browser that can add DIA to your home screen on iPhone.",
    icon: Compass,
  },
  {
    title: "Tap the Share button",
    description:
      "Use the Share icon in Safari’s toolbar at the bottom or top of the screen.",
    icon: Share2,
  },
  {
    title: "Choose Add to Home Screen",
    description:
      "Scroll through the action list until you see Add to Home Screen.",
    icon: Plus,
  },
  {
    title: "Tap Add and launch DIA",
    description:
      "Once added, you can open DIA from your home screen like a regular app.",
    icon: Smartphone,
  },
] as const;

const browserSwitchSteps = [
  {
    title: "Open this page in Safari",
    description:
      "iPhone home-screen install works through Safari, not through other iPhone browsers.",
    icon: Compass,
  },
  {
    title: "Tap the Share button",
    description:
      "Once the page is open in Safari, use the Share icon in the toolbar.",
    icon: Share2,
  },
  {
    title: "Choose Add to Home Screen",
    description:
      "Scroll through the list of actions and tap Add to Home Screen.",
    icon: Plus,
  },
  {
    title: "Tap Add and reopen DIA",
    description:
      "After adding, launch DIA from your home screen for the app-style experience.",
    icon: Smartphone,
  },
] as const;

export function PWAInstallPrompt({
  open,
  onOpenChange,
  deviceLabel,
  isSafari,
  installPageHref,
}: PWAInstallPromptProps) {
  const steps = isSafari ? safariSteps : browserSwitchSteps;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-1.5rem)] overflow-hidden rounded-[28px] border-slate-200/80 p-0 sm:max-w-2xl">
        <div className="bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_42%,#ffffff_100%)]">
          <div className="border-b border-slate-200/80 px-6 py-6 sm:px-7 sm:py-7">
            <Badge className="border border-primary/10 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-white/90">
              iPhone Install Guide
            </Badge>

            <DialogHeader className="mt-4 text-left">
              <DialogTitle className="text-2xl font-bold font-heading leading-tight text-slate-950 sm:text-3xl">
                {isSafari
                  ? `Add DIA to your ${deviceLabel}`
                  : `Open DIA in Safari on your ${deviceLabel}`}
              </DialogTitle>
              <DialogDescription className="text-sm leading-7 text-slate-600 sm:text-base">
                {isSafari
                  ? "iPhone uses Safari’s Add to Home Screen flow instead of a direct install prompt. Follow these steps once and DIA will sit on your home screen like an app."
                  : "You are on iPhone, but this browser cannot add DIA to the home screen directly. Open the same page in Safari and follow the steps below."}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="grid gap-3 px-6 py-6 sm:px-7 sm:py-7">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-[24px] border border-slate-200/80 bg-white/92 p-4 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.12)] sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-slate-950 sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <DialogFooter className="border-t border-slate-200/80 px-6 py-6 sm:flex-row sm:justify-between sm:px-7 sm:py-7">
            <Button
              type="button"
              variant="outline"
              className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
              onClick={() => onOpenChange(false)}
            >
              Continue Browsing
            </Button>
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Link href={installPageHref} onClick={() => onOpenChange(false)}>
                Open Full Install Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
