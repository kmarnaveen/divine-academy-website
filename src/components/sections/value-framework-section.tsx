import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Compass,
  Shield,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const frameworkPillars = [
  {
    key: "vidya",
    title: "Vidya",
    subtitle: "Academic Education",
    homeSummary: "Strong academics",
    shortDescription:
      "Clear teaching, strong fundamentals, and board readiness built through disciplined classroom routines.",
    description:
      "Vidya at DIA means clear teaching, steady practice, and academic confidence from Nursery to Class XII.",
    points: [
      "Planned lessons, assessments, and revision support",
      "40 smart classrooms, lab access, and reading support",
      "Academic continuity from Nursery to Class XII",
    ],
    icon: BookOpen,
    titleClassName: "text-primary",
    circleClassName: "border-primary/20",
    orbitClassName: "border-primary/10",
    cardClassName:
      "border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(253,244,246,0.42)_100%)]",
    diagramPosition: { left: "50%", top: "30%" },
  },
  {
    key: "sadvidya",
    title: "Sadvidya",
    subtitle: "Character Education",
    homeSummary: "Character and habits",
    shortDescription:
      "Discipline, respect, empathy, and responsibility that shape how children behave in school and beyond it.",
    description:
      "Sadvidya is the discipline, respect, and responsibility children carry into classrooms, activities, and daily life.",
    points: [
      "Respectful routines, discipline, and accountability",
      "Teacher-guided conduct across classes and campus movement",
      "Confidence through participation, teamwork, and school culture",
    ],
    icon: Shield,
    titleClassName: "text-accent",
    circleClassName: "border-amber-200/80",
    orbitClassName: "border-amber-200/70",
    cardClassName:
      "border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,251,235,0.52)_100%)]",
    diagramPosition: { left: "34%", top: "60%" },
  },
  {
    key: "brahmavidya",
    title: "Brahmavidya",
    subtitle: "Inner Education",
    homeSummary: "Inner steadiness",
    shortDescription:
      "Reflection, purpose, and inner balance that help children grow with calmness and maturity.",
    description:
      "Brahmavidya is the inner side of education: reflection, gratitude, self-control, and purpose alongside achievement.",
    points: [
      "Reflection, gratitude, and self-awareness alongside academics",
      "Inner discipline that supports better behaviour and focus",
      "Purpose-driven growth, not marks-only pressure",
    ],
    icon: Compass,
    titleClassName: "text-slate-900",
    circleClassName: "border-slate-300",
    orbitClassName: "border-slate-300",
    cardClassName:
      "border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.88)_100%)]",
    diagramPosition: { left: "66%", top: "60%" },
  },
] as const;

const orbitItems = [
  { label: "Curiosity", pillar: "vidya", left: "38%", top: "12%" },
  { label: "Communication", pillar: "vidya", left: "50%", top: "8%" },
  { label: "Creativity", pillar: "vidya", left: "62%", top: "12%" },
  { label: "Leadership", pillar: "vidya", left: "74%", top: "22%" },
  { label: "Problem Solving", pillar: "vidya", left: "26%", top: "22%" },
  { label: "Discipline", pillar: "sadvidya", left: "15%", top: "41%" },
  { label: "Integrity", pillar: "sadvidya", left: "9%", top: "55%" },
  { label: "Empathy", pillar: "sadvidya", left: "13%", top: "75%" },
  { label: "Gratitude", pillar: "sadvidya", left: "25%", top: "86%" },
  {
    label: "Responsibility",
    pillar: "sadvidya",
    left: "37%",
    top: "88%",
  },
  { label: "Reflection", pillar: "brahmavidya", left: "85%", top: "41%" },
  {
    label: "Self-awareness",
    pillar: "brahmavidya",
    left: "91%",
    top: "55%",
  },
  { label: "Purpose", pillar: "brahmavidya", left: "87%", top: "71%" },
  { label: "Service", pillar: "brahmavidya", left: "77%", top: "88%" },
  { label: "Inner Calm", pillar: "brahmavidya", left: "64%", top: "88%" },
] as const;

const pillarStyleMap = Object.fromEntries(
  frameworkPillars.map((pillar) => [pillar.key, pillar]),
);

export function ValueFrameworkHomeSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfc_46%,#ffffff_100%)] py-18 sm:py-22">
      <div className="absolute left-0 top-0 h-44 w-44 -translate-x-10 -translate-y-12 rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-52 w-52 translate-x-12 translate-y-12 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="max-w-2xl">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              DIA Value Framework
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight tracking-[-0.02em] text-primary sm:text-4xl lg:text-[2.7rem]">
              Vidya, Sadvidya &amp; Brahmavidya
            </h2>
            <p className="mt-3 text-xl font-medium text-slate-700 sm:text-[1.45rem]">
              Framework of Our Value System
            </p>
            <p className="mt-6 text-2xl font-semibold leading-tight text-primary sm:text-[1.85rem]">
              || सा विद्या या विमुक्तये ||
            </p>
            <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
              Knowledge is that which liberates.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-[1.75] text-slate-600 sm:text-base">
              At Divine, children grow through three connected strengths:
              strong learning, good conduct, and inner values.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {frameworkPillars.map((pillar) => (
                <Card
                  key={pillar.key}
                  className={`rounded-[24px] border bg-white/96 shadow-[0_16px_48px_-40px_rgba(15,23,42,0.1)] ${pillar.cardClassName}`}
                >
                  <CardContent className="p-5">
                    <p
                      className={`text-sm font-bold font-heading uppercase tracking-[0.04em] ${pillar.titleClassName}`}
                    >
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                      {pillar.homeSummary}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/why-dia">
                  See Why DIA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto h-[620px] max-w-[700px]">
              {orbitItems.map((item) => {
                const pillar = pillarStyleMap[item.pillar];

                return (
                  <div
                    key={`home-${item.label}`}
                    className={`absolute flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white px-2 text-center shadow-[0_14px_36px_-28px_rgba(15,23,42,0.1)] ${pillar.orbitClassName}`}
                    style={{ left: item.left, top: item.top }}
                  >
                    <span className="max-w-[62px] text-[11px] font-medium leading-[1.1] text-slate-700 [overflow-wrap:anywhere]">
                      {item.label}
                    </span>
                  </div>
                );
              })}

              {frameworkPillars.map((pillar) => (
                <div
                  key={`home-${pillar.key}`}
                  className={`absolute flex h-[182px] w-[182px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white/96 shadow-[0_18px_54px_-40px_rgba(15,23,42,0.12)] ${pillar.circleClassName}`}
                  style={{
                    left: pillar.diagramPosition.left,
                    top: pillar.diagramPosition.top,
                  }}
                >
                  <div className="max-w-[122px] px-4 text-center">
                    <p
                      className={`text-[1.1rem] font-bold font-heading uppercase leading-[1.05] tracking-[0.04em] [overflow-wrap:anywhere] ${pillar.titleClassName}`}
                    >
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-[11px] font-medium leading-tight text-slate-700">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              <div
                className="absolute z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white bg-[radial-gradient(circle_at_top,#ffffff_0%,#f8fafc_78%,#e2e8f0_100%)] shadow-[0_16px_44px_-24px_rgba(15,23,42,0.14)]"
                style={{ left: "50%", top: "50%" }}
              >
                <div className="relative h-16 w-16">
                  <Image
                    src="/3%20Gurukul%20Brochure.png"
                    alt="DIA student symbol"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValueFrameworkSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff8f3_44%,#ffffff_100%)] py-20 sm:py-24">
      <div className="absolute left-0 top-0 h-52 w-52 -translate-x-14 -translate-y-16 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-60 w-60 translate-x-16 translate-y-16 rounded-full bg-accent/8 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
            DIA Value Framework
          </Badge>
          <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-primary sm:text-4xl lg:text-[2.9rem]">
            Vidya, Sadvidya &amp; Brahmavidya
          </h2>
          <p className="mt-3 text-xl font-medium text-slate-700 sm:text-[1.55rem]">
            Framework of Our Value System
          </p>
          <p className="mt-6 text-2xl font-semibold leading-tight text-primary sm:text-[2rem]">
            || सा विद्या या विमुक्तये ||
          </p>
          <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
            Knowledge is that which liberates.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            At Divine, children grow through three connected strengths: strong
            learning, good conduct, and inner values. That is the spirit
            behind Vidya, Sadvidya, and Brahmavidya.
          </p>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="relative mx-auto h-[860px] max-w-[980px]">
            {orbitItems.map((item) => {
              const pillar = pillarStyleMap[item.pillar];

              return (
                <div
                  key={item.label}
                  className={`absolute flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white px-3 text-center shadow-[0_18px_45px_-35px_rgba(15,23,42,0.3)] ${pillar.orbitClassName}`}
                  style={{ left: item.left, top: item.top }}
                >
                  <span className="max-w-[88px] text-[13px] font-medium leading-4 text-slate-700 [overflow-wrap:anywhere]">
                    {item.label}
                  </span>
                </div>
              );
            })}

            {frameworkPillars.map((pillar) => (
              <div
                key={pillar.key}
                className={`absolute flex h-[248px] w-[248px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white/95 shadow-[0_26px_80px_-46px_rgba(15,23,42,0.34)] ${pillar.circleClassName}`}
                style={{
                  left: pillar.diagramPosition.left,
                  top: pillar.diagramPosition.top,
                }}
              >
                <div className="max-w-[164px] px-5 text-center">
                  <p
                    className={`text-[1.4rem] font-bold font-heading uppercase leading-[1.05] tracking-[0.04em] [overflow-wrap:anywhere] ${pillar.titleClassName}`}
                  >
                    {pillar.title}
                  </p>
                  <p className="mt-1 text-[14px] font-medium leading-tight text-slate-700">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-3 text-[12px] leading-[1.35] text-slate-500">
                    {pillar.shortDescription}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="absolute z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[radial-gradient(circle_at_top,#ffffff_0%,#f8fafc_78%,#e2e8f0_100%)] shadow-[0_20px_60px_-26px_rgba(15,23,42,0.48)]"
              style={{ left: "50%", top: "50%" }}
            >
              <div className="relative h-24 w-24">
                <Image
                  src="/3%20Gurukul%20Brochure.png"
                  alt="DIA student symbol"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {frameworkPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card
                key={pillar.key}
                className={`rounded-[28px] shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)] ${pillar.cardClassName}`}
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className={`h-6 w-6 ${pillar.titleClassName}`} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                    {pillar.title}: {pillar.subtitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {pillar.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm leading-6 text-slate-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950 px-6 py-8 text-white shadow-[0_30px_90px_-55px_rgba(15,23,42,0.62)] sm:px-8 sm:py-10">
          <Badge className="border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10">
            What It Means at DIA
          </Badge>
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h3 className="text-2xl font-bold font-heading leading-tight sm:text-[2rem]">
                We want children to leave school with knowledge, character, and
                inner steadiness.
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                That means clearer thinking in class, better habits on campus,
                and a stronger sense of purpose beyond marks alone.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-950 hover:bg-white/90"
              >
                <Link href="/about/vision">
                  Read Vision &amp; Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950"
              >
                <Link href="/admissions">Review Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
