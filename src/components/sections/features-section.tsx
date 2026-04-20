"use client";

import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const learningHighlights = [
  "CBSE Nursery to Class XII",
  "40 smart classrooms",
  "25-student science lab batches",
  "15,000+ books and references",
];

const atGlanceSignals = [
  {
    title: "CBSE Nursery to Class XII",
    detail:
      "One academic system from foundational years to senior secondary classes.",
  },
  {
    title: "25-student science lab batches",
    detail:
      "Practical work stays supervised, safer, and easier for teachers to manage.",
  },
  {
    title: "15,000+ books and references",
    detail:
      "Reading periods, subject reference, and revision support continue beyond the timetable.",
  },
] as const;

const stats = [
  {
    label: "School Strength",
    value: "1200+",
    detail:
      "A full student community across foundational, primary, middle, and senior secondary stages.",
    icon: Users,
    cardClass:
      "border-primary/10 bg-gradient-to-br from-red-50/90 via-white to-white",
    iconClass: "bg-primary/10 text-primary",
    valueClass: "text-primary",
  },
  {
    label: "Teaching Coverage",
    value: "50+",
    detail:
      "50+ faculty members cover subject teaching, class routines, supervision, and student follow-up across the school day.",
    icon: GraduationCap,
    cardClass:
      "border-amber-200/70 bg-gradient-to-br from-amber-50/90 via-white to-white",
    iconClass: "bg-amber-100 text-accent",
    valueClass: "text-accent",
  },
  {
    label: "Working Classrooms",
    value: "40",
    detail:
      "40 digitally supported classrooms help lessons run in a more structured, visual, and trackable way across sections.",
    icon: BookOpen,
    cardClass:
      "border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white",
    iconClass: "bg-slate-100 text-slate-700",
    valueClass: "text-slate-900",
  },
  {
    label: "Board Results",
    value: "100%",
    detail:
      "Senior-school results reflect steady subject support, revision, and exam preparation in board classes.",
    icon: Trophy,
    cardClass:
      "border-emerald-200/70 bg-gradient-to-br from-emerald-50/90 via-white to-white",
    iconClass: "bg-emerald-100 text-emerald-700",
    valueClass: "text-emerald-700",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            1200+ students, 50+ faculty, 40 smart classrooms, and 100% board
            results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These figures show school size, teaching coverage, classroom
            capacity, and senior-school performance at a glance.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {learningHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
              >
                {highlight}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="relative overflow-hidden rounded-[30px] border border-primary/10 bg-gradient-to-br from-white via-white to-rose-50/60 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.45)] sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-0 top-0 h-40 w-40 -translate-x-12 -translate-y-12 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-16 translate-y-16 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
            <div className="rounded-[26px] bg-slate-950 px-5 py-6 text-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.75)] sm:px-6 sm:py-7">
              <Badge className="border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10">
                DIA At A Glance
              </Badge>
              <h3 className="mt-4 text-2xl font-bold font-heading leading-tight sm:text-[2rem]">
                Four numbers that show whether the school can sustain quality at
                scale
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/72 sm:text-[15px]">
                School size matters only when teaching, supervision, classrooms,
                and board outcomes hold together. These figures show how DIA
                supports daily learning and senior-school preparation from
                Nursery to Class XII.
              </p>

              <div className="mt-6 space-y-3">
                {atGlanceSignals.map((signal) => (
                  <div
                    key={signal.title}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-white">
                      {signal.title}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-white/70">
                      {signal.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.article
                    key={stat.label}
                    className={`relative overflow-hidden rounded-[24px] border p-5 shadow-[0_22px_60px_-45px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1 ${stat.cardClass}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/80 blur-2xl" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${stat.iconClass}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="relative mt-6">
                      <div
                        className={`text-4xl font-bold font-heading sm:text-[2.6rem] ${stat.valueClass}`}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-2 text-base font-semibold text-slate-900">
                        {stat.label}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {stat.detail}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
