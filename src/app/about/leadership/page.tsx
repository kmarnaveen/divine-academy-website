import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  MapPin,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const leadershipSignals = [
  "Principal Dr. Garima Gupta",
  "Om Educational Trust stewardship",
  "Leadership that shapes the school day",
] as const;

const leadershipProfile = [
  {
    label: "School leadership",
    value:
      "Principal-led academic and campus oversight across Pre-Primary to Class XII",
  },
  {
    label: "Management support",
    value: "Operational and institutional support under Om Educational Trust",
  },
  {
    label: "Academic coordination",
    value:
      "Section-wise planning, teacher follow-up, and student supervision across stages",
  },
  {
    label: "School guidance",
    value:
      "Admissions, office support, and timely guidance when families need clarity",
  },
] as const;

const leadershipAreas = [
  {
    title: "Principal leadership",
    description:
      "The principal's office sets the academic tone, classroom expectations, and discipline standards that shape the school year.",
    points: [
      "Academic quality and school direction",
      "Student discipline and conduct standards",
      "Campus expectations across sections",
    ],
    icon: GraduationCap,
  },
  {
    title: "Academic coordination",
    description:
      "School leadership works through teachers and section-level coordination so teaching remains structured and class progress is monitored consistently.",
    points: [
      "Lesson planning and classroom continuity",
      "Assessment and academic follow-up",
      "Support from foundational to board classes",
    ],
    icon: BookOpen,
  },
  {
    title: "Student safety and supervision",
    description:
      "Leadership is also judged by how well the campus runs: arrival, dispersal, supervision, movement, safety routines, and activity control.",
    points: [
      "Daily discipline and monitored routines",
      "Visible supervision across campus spaces",
      "Support during activities, events, and transport transitions",
    ],
    icon: Shield,
  },
  {
    title: "School communication and guidance",
    description:
      "Clear communication helps the school day run smoothly for admissions, office coordination, and everyday school support.",
    points: [
      "Admissions and office guidance",
      "Clear school process explanations",
      "Support when families need academic or campus information",
    ],
    icon: MessageSquare,
  },
] as const;

const leadershipSystems = [
  {
    title: "Clarity in school direction",
    description:
      "Academic direction, student routines, and campus systems stay easier to trust when leadership responsibilities are clear.",
  },
  {
    title: "Daily school responsibility",
    description:
      "Teaching quality, discipline, safety, teacher accountability, and the consistency of the school day matter more than decorative titles or long biographies.",
  },
  {
    title: "Daily confidence on campus",
    description:
      "A school feels stronger when it is organised, responsive, and serious about both academics and supervision.",
  },
] as const;

const parentTouchpoints = [
  "Admissions and office guidance when families need the next step clarified",
  "Class-level coordination through regular teacher follow-up",
  "Principal-led direction on academics, conduct, and school expectations",
  "School office support before visits and key school interactions",
] as const;

const nextSteps = [
  {
    title: "Read the principal's message",
    description:
      "Hear directly from Dr. Garima Gupta about the academic and cultural priorities of the school.",
    href: "/about/principal",
    cta: "Go to principal's message",
    icon: GraduationCap,
  },
  {
    title: "Review school vision",
    description:
      "See how the school's values show up in teaching, routines, and student participation.",
    href: "/about/vision",
    cta: "Go to vision and mission",
    icon: Users,
  },
  {
    title: "Plan a visit or enquiry",
    description:
      "Use the contact page for timings, directions, and the easiest way to speak with the school.",
    href: "/contact",
    cta: "Go to contact page",
    icon: MapPin,
  },
] as const;

export const metadata: Metadata = {
  title: "School Leadership | Divine International Academy Sirsaganj",
  description:
    "Understand the leadership structure at Divine International Academy, Sirsaganj, including principal-led academic direction, campus supervision, and school communication support.",
  keywords: [
    "Divine International Academy leadership",
    "school principal Sirsaganj",
    "CBSE school management Firozabad",
    "school leadership structure",
  ],
};

export default function LeadershipPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              School Leadership
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Leadership that shapes academics, discipline, and the school day
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Divine International Academy is led by Principal Dr. Garima Gupta
              and managed under Om Educational Trust. Leadership here shows up
              in the rhythm of classrooms, campus supervision, school
              communication, and the consistency students experience every day.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-stretch">
              <div className="relative min-h-[320px] border-b border-slate-200/80 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r lg:border-slate-200/80">
                <Image
                  src="/images/submenu/curriculum.jpg"
                  alt="Academic leadership at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_38%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Everyday School Direction
                  </Badge>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.45rem]">
                    Calm routines, clear expectations, and dependable school
                    systems begin with strong leadership.
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Leadership at Divine supports the academic environment, keeps
                  school systems steady, and helps the campus run with clarity
                  through the year.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {leadershipSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                  {leadershipProfile.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 leading-6 text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 sm:flex-1"
                  >
                    <Link href="/about/principal">
                      Principal&apos;s Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white sm:flex-1"
                  >
                    <Link href="/contact">Contact the School</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Leadership Responsibilities
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              What leadership protects every day inside the school
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {leadershipAreas.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold font-heading text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
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
        </div>
      </section>

      <section className="bg-slate-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.98fr)_360px] xl:items-start">
            <div>
              <Badge className="border border-primary/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-white">
                Leadership Standards
              </Badge>
              <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                Leadership becomes real in routines, accountability, and school
                support.
              </h2>

              <div className="mt-8 grid gap-4">
                {leadershipSystems.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-[24px] border-slate-200/80 bg-white"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="text-base font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
              <CardContent className="p-6 sm:p-7">
                <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                  Everyday Touchpoints
                </Badge>
                <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                  Where school leadership shows up each day
                </h3>

                <ul className="mt-6 space-y-4">
                  {parentTouchpoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Next Step
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Continue to the principal&apos;s message, school vision, or direct
              school contact
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {nextSteps.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)]"
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

                    <Button
                      asChild
                      size="lg"
                      className="mt-6 w-full bg-primary text-white hover:bg-primary/90"
                    >
                      <Link href={item.href}>
                        {item.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
