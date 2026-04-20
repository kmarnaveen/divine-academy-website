import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Smartphone, Wifi } from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { PWAStatus } from "@/components/pwa-status";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sanitizeReturnPath } from "@/lib/pwa";

const installSteps = [
  {
    title: "iPhone: use Safari first",
    description:
      "On iPhone or iPad, open DIA in Safari and use Share > Add to Home Screen.",
    icon: Smartphone,
  },
  {
    title: "Android and desktop: install directly",
    description:
      "On browsers that support it, use the install prompt or browser menu to install DIA directly.",
    icon: Download,
  },
  {
    title: "Return to the page you were viewing",
    description:
      "After install, jump back into the school route you were already browsing and continue from there.",
    icon: ArrowRight,
  },
] as const;

const appBenefits = [
  "Quick access to admissions, contact, and school updates",
  "An app-style experience when installed on supported devices",
  "Basic offline resilience when network conditions are weak",
] as const;

export const metadata: Metadata = {
  title: "DIA Web App | Divine International Academy Sirsaganj",
  description:
    "Check the Divine International Academy web app status, install support, connection state, and notification access on your device.",
};

type PWAPageProps = {
  searchParams?: Promise<{
    from?: string | string[];
  }>;
};

export default async function PWAPage({ searchParams }: PWAPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const returnPath = sanitizeReturnPath(resolvedSearchParams.from);
  const showReturnPath = returnPath !== "/";

  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              DIA Web App
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Install Divine on your phone for quicker access
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Check whether the web app is installed, see your connection
              status, and enable notifications when your device supports them.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)] sm:p-8 lg:p-10">
            <PWAStatus />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              How To Use It
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Install the app and check device support
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {installSteps.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Why It Helps
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  The web app keeps key school routes closer at hand
                </h3>

                <ul className="mt-6 space-y-4">
                  {appBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.2)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Continue
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  Continue after install
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Use the web app for quicker access, then jump back to the
                  route you were already viewing or continue to other main
                  school pages.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {showReturnPath ? (
                    <Button
                      asChild
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      <Link href={returnPath}>
                        Return To Your Page
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}

                  <Button
                    asChild
                    variant={showReturnPath ? "outline" : undefined}
                    className={
                      showReturnPath
                        ? "border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                        : "bg-primary text-white hover:bg-primary/90"
                    }
                  >
                    <Link href="/admissions">
                      Review Admissions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/contact">Contact the School</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
