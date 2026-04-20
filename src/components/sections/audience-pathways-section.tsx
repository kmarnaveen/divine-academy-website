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
      "Check admission steps, fee details, campus visit options, and the documents needed before seat confirmation.",
    cta: "See admission details",
    href: "/admissions",
    icon: Users,
    iconClass: "bg-accent/15 text-accent",
    cardClass:
      "border-accent/15 bg-gradient-to-br from-white via-white to-amber-50/90 hover:border-accent/35",
    linkClass: "text-accent",
    gridClass: "xl:col-span-3",
  },
  {
    title: "Student Life, Sports & Events",
    eyebrow: "For Students",
    description:
      "See sports, clubs, stage events, and the everyday participation that shapes school life beyond classes.",
    cta: "Explore student life",
    href: "/student-life",
    icon: Trophy,
    iconClass: "bg-primary/12 text-primary",
    cardClass:
      "border-primary/10 bg-gradient-to-br from-white via-white to-red-50/80 hover:border-primary/30",
    linkClass: "text-primary",
    gridClass: "xl:col-span-3",
  },
  {
    title: "Alumni Network & Reconnect",
    eyebrow: "For Alumni",
    description:
      "Reconnect with teachers and peers, share updates, and stay involved in mentoring, events, and school initiatives.",
    cta: "Reconnect now",
    href: "/contact",
    icon: Award,
    iconClass: "bg-slate-100 text-primary",
    cardClass:
      "border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 hover:border-primary/25",
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
          "relative flex h-full min-h-[220px] flex-col rounded-[28px] border p-5 sm:p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_90px_-42px_rgba(15,23,42,0.45)]",
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
      className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-stone-50 via-white to-red-50/60 p-4 shadow-[0_28px_90px_-50px_rgba(15,23,42,0.3)] sm:rounded-[32px] sm:p-6 md:p-8 lg:p-10"
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
            Admissions, student life, and alumni updates in one place
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Choose the page you need now: admission and fee information, student
            activities and events, or alumni reconnect.
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
