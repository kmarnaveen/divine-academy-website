"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Award,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AudiencePathway {
  title: string;
  eyebrow: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  iconClass: string;
  cardClass: string;
  linkClass: string;
  gridClass: string;
  wide?: boolean;
}

const audiencePathways: AudiencePathway[] = [
  {
    title: "Admissions, Fees & Campus Visit",
    eyebrow: "For Parents",
    description:
      "Admissions steps, fee details, campus visits, and document guidance before seat confirmation.",
    cta: "See admission details",
    href: "/admissions",
    icon: Users,
    iconClass: "bg-accent/15 text-accent",
    cardClass:
      "border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,251,235,0.5)_100%)] hover:border-accent/18",
    linkClass: "text-accent",
    gridClass: "xl:col-span-3",
  },
  {
    title: "Student Life, Sports & Events",
    eyebrow: "For Students",
    description:
      "Sports, clubs, events, and the everyday experiences that shape school life.",
    cta: "Explore student life",
    href: "/student-life",
    icon: Trophy,
    iconClass: "bg-primary/12 text-primary",
    cardClass:
      "border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(253,244,246,0.42)_100%)] hover:border-primary/18",
    linkClass: "text-primary",
    gridClass: "xl:col-span-3",
  },
  {
    title: "Alumni Network & Reconnect",
    eyebrow: "For Alumni",
    description:
      "Reconnect with teachers and classmates, share updates, and stay part of the school community.",
    cta: "Reconnect now",
    href: "/contact",
    icon: Award,
    iconClass: "bg-slate-100 text-primary",
    cardClass:
      "border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.9)_100%)] hover:border-primary/18",
    linkClass: "text-primary",
    gridClass: "sm:col-span-2 xl:col-span-6",
    wide: true,
  },
];

function AudiencePathwayCard({ pathway }: { pathway: AudiencePathway }) {
  const Icon = pathway.icon;

  return (
    <Link
      href={pathway.href}
      className={cn("group block h-full", pathway.gridClass)}
    >
      <article
        className={cn(
          "relative flex h-full min-h-[220px] flex-col rounded-[28px] border p-6 sm:p-7 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_62px_-48px_rgba(15,23,42,0.14)]",
          pathway.cardClass,
          pathway.wide
            ? "xl:flex-row xl:items-end xl:justify-between xl:gap-8"
            : undefined,
        )}
      >
        <div
          className={cn("flex-1", pathway.wide ? "xl:max-w-2xl" : undefined)}
        >
          <div className="flex items-start justify-between gap-4">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm sm:h-14 sm:w-14",
                pathway.iconClass,
              )}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <span className="rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600 backdrop-blur-sm">
              {pathway.eyebrow}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-primary">
              {pathway.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/90 sm:text-base">
              {pathway.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center font-semibold transition-transform duration-300 group-hover:translate-x-1 xl:mt-0">
          <span className={pathway.linkClass}>{pathway.cta}</span>
          <ArrowRight className={cn("ml-2 h-4 w-4", pathway.linkClass)} />
        </div>
      </article>
    </Link>
  );
}

export function AudiencePathwaysSection() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfc_100%)] p-5 shadow-[0_22px_68px_-52px_rgba(15,23,42,0.1)] sm:p-7 md:p-9 lg:p-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.8 }}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 lg:pr-4">
          <Badge className="mb-4 border border-primary/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:bg-white/80">
            Start Here
          </Badge>
          <h2 className="text-2xl font-bold font-heading text-primary sm:text-3xl md:text-4xl">
            Choose your next step
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Start with admissions and fees, student life, or alumni reconnect.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:max-w-md">
            <div className="rounded-2xl border border-primary/10 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary">2026-27</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Admission session
              </div>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
              <div className="text-lg font-bold text-primary">Campus visit</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Fee and document guidance
              </div>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-8 xl:grid-cols-6">
          {audiencePathways.map((pathway) => (
            <AudiencePathwayCard key={pathway.title} pathway={pathway} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
