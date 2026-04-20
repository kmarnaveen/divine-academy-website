"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  BookOpen,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Heart,
  Monitor,
  Microscope,
  Rocket,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { DivineAcademyVideoDialog } from "@/components/sections/divine-video-dialog";
import { cn } from "@/lib/utils";

const admissionCycle = "2026-27";
const heroStats = [
  { value: "14+", label: "Years Serving Families" },
  { value: "1200+", label: "Students on Campus" },
  { value: "100%", label: "Board Pass Rate" },
  { value: "50+", label: "Faculty Members" },
];

const learningPillars = [
  {
    title: "Disciplined classrooms from day one",
    eyebrow: "Smart teaching and follow-up",
    description:
      "Smart-board lessons, regular classwork, revision, and teacher follow-up keep the academic day structured from foundational classes to board years.",
    points: [
      "Structured lesson flow",
      "Regular classwork and revision",
      "Teacher follow-up across terms",
    ],
    imageSrc:
      "https://divineinternationalacademy.com/assets/smartboard-class.jpg",
    imageAlt: "Smart classroom at Divine International Academy",
    imageLabel: "Classroom discipline",
    icon: BookOpen,
    cardClass:
      "border-primary/10 bg-gradient-to-br from-white via-white to-red-50/80 hover:border-primary/30",
    iconClass: "bg-red-100 text-primary",
    dotClass: "bg-primary",
  },
  {
    title: "Confidence grows through visible participation",
    eyebrow: "Sports, stage, and school culture",
    description:
      "Assemblies, stage events, sports periods, and house activities keep confidence, teamwork, and expression inside the weekly routine instead of outside it.",
    points: [
      "Assemblies and stage exposure",
      "Sports and team participation",
      "House-based activities and discipline",
    ],
    imageSrc:
      "https://divineinternationalacademy.com/assets/annual-day-performance-BGrA0t2k.jpg",
    imageAlt: "Annual day stage performance at Divine International Academy",
    imageLabel: "Student participation",
    icon: Heart,
    cardClass:
      "border-amber-200/80 bg-gradient-to-br from-white via-white to-amber-50/90 hover:border-accent/40",
    iconClass: "bg-amber-100 text-accent",
    dotClass: "bg-accent",
  },
  {
    title: "Practical readiness starts before board pressure",
    eyebrow: "Labs, application, and senior preparation",
    description:
      "Science practicals, computer learning, and subject guidance move students beyond textbook theory before they step fully into the senior-board years.",
    points: [
      "Regular practical exposure",
      "Computer learning and subject application",
      "Stronger readiness for senior classes",
    ],
    imageSrc:
      "https://divineinternationalacademy.com/assets/biology-lab-CXsSHf-3.avif",
    imageAlt: "Students in biology laboratory at Divine International Academy",
    imageLabel: "Practical learning",
    icon: Rocket,
    cardClass:
      "border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 hover:border-primary/25",
    iconClass: "bg-slate-100 text-primary",
    dotClass: "bg-slate-500",
  },
] as const;

const familySignals = [
  {
    title: "Progress is tracked through the term",
    description:
      "Classwork, assessments, and teacher follow-up keep performance visible instead of waiting for the final exam.",
    icon: Award,
  },
  {
    title: "Discipline supports the full school day",
    description:
      "Lesson timing, assemblies, activity blocks, movement, and dispersal follow clear routines across the campus.",
    icon: Heart,
  },
  {
    title: "Senior classes prepare ahead of deadlines",
    description:
      "Practical work, board-focused support, and future planning begin early so students are not rushed at the end.",
    icon: Rocket,
  },
] as const;

const heroParentChecklist = [
  {
    title: "100% board pass rate",
    description:
      "Senior students get steady subject support, practice, and exam preparation.",
  },
  {
    title: "1200+ students with 50+ faculty",
    description:
      "Families see a full school community with teaching strength across stages.",
  },
  {
    title: "One campus with key learning spaces",
    description:
      "Classrooms, labs, library, sports spaces, and transport support are in one system.",
  },
] as const;

const schoolFacilities = [
  {
    title: "Smart Classrooms",
    description:
      "40 smart classrooms are set up for structured teaching with digital boards, audio-visual support, natural light, and a working capacity of 30-35 students each.",
    points: [
      "30-35 students each",
      "Digital boards and AV support",
      "Natural light and ergonomic seating",
    ],
    imageSrc: "/images/submenu/academic-streams.jpg",
    imageAlt: "Smart classroom at Divine International Academy",
    imageLabel: "Academic classrooms",
    icon: Monitor,
    cardClass:
      "border-primary/10 bg-gradient-to-br from-white via-white to-red-50/80 hover:border-primary/25",
    iconClass: "bg-red-100 text-primary",
    dotClass: "bg-primary",
  },
  {
    title: "Science & Computer Labs",
    description:
      "Science laboratories run practical work in supervised batches of 25, while computer labs with 30 systems support regular digital learning, programming, and subject-based application.",
    points: [
      "25-student science lab batches",
      "Safety protocols and modern equipment",
      "30-system computer labs",
    ],
    imageSrc: "/images/submenu/facilities.avif",
    imageAlt: "Campus infrastructure block at Divine International Academy",
    imageLabel: "Laboratory complex",
    icon: Microscope,
    cardClass:
      "border-amber-200/80 bg-gradient-to-br from-white via-white to-amber-50/90 hover:border-accent/35",
    iconClass: "bg-amber-100 text-accent",
    dotClass: "bg-accent",
  },
  {
    title: "Library & Reading Rooms",
    description:
      "The library and reading rooms give students quiet reading time, reference support, and revision space with 15,000+ books, digital resources, and seating for up to 100 students.",
    points: [
      "15,000+ books",
      "Digital and reference resources",
      "100-student reading capacity",
    ],
    imageSrc: "/images/submenu/curriculum.jpg",
    imageAlt:
      "Students learning in the library at Divine International Academy",
    imageLabel: "Reading and reference",
    icon: BookOpen,
    cardClass:
      "border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 hover:border-slate-300",
    iconClass: "bg-slate-100 text-primary",
    dotClass: "bg-slate-500",
  },
  {
    title: "Safety & Transport",
    description:
      "Security is built into the routine with CCTV-supported monitoring, access control, supervised arrival and dispersal, GPS-tracked buses, and trained drivers and attendants.",
    points: [
      "CCTV-supported monitoring and access control",
      "GPS tracking on buses",
      "Drivers, attendants, and emergency kits",
    ],
    imageSrc: "/images/submenu/facilities.avif",
    imageAlt: "Secure campus view at Divine International Academy",
    imageLabel: "Transport and security",
    icon: Shield,
    cardClass:
      "border-emerald-200/80 bg-gradient-to-br from-white via-white to-emerald-50/90 hover:border-emerald-300",
    iconClass: "bg-emerald-100 text-emerald-700",
    dotClass: "bg-emerald-600",
  },
] as const;

const campusStats = [
  { value: "40", label: "Smart classrooms" },
  { value: "25", label: "Students per science lab batch" },
  { value: "15,000+", label: "Library books" },
  { value: "30", label: "Computer systems" },
] as const;

const campusSignals = [
  { label: "40 smart classrooms", icon: Monitor },
  { label: "25-student lab batches", icon: Microscope },
  { label: "CCTV-supported monitoring", icon: Shield },
] as const;

type LearningPillar = (typeof learningPillars)[number];
type SchoolFacility = (typeof schoolFacilities)[number];

function LearningPillarCard({
  pillar,
  index,
  className,
}: {
  pillar: LearningPillar;
  index: number;
  className?: string;
}) {
  const Icon = pillar.icon;

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-[28px] border p-5 sm:p-6 md:p-8 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] sm:hover:-translate-y-2",
        pillar.cardClass,
        className,
      )}
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-white/60 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary/60" />

      <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-black/5">
        <Image
          src={pillar.imageSrc}
          alt={pillar.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 88vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.18)_38%,rgba(2,6,23,0.74)_100%)]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {pillar.imageLabel}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm sm:h-16 sm:w-16",
            pillar.iconClass,
          )}
        >
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>
        <div className="text-right">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
            0{index + 1}
          </div>
          <span className="mt-2 inline-flex rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600 backdrop-blur-sm">
            {pillar.eyebrow}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl sm:text-2xl font-bold text-primary">
          {pillar.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-charcoal/90">
          {pillar.description}
        </p>
      </div>

      <div className="mt-6 border-t border-black/5 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
          Student outcomes
        </p>
        <ul className="mt-4 space-y-3">
          {pillar.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm font-medium text-slate-700"
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                  pillar.dotClass,
                )}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FacilityCard({ facility }: { facility: SchoolFacility }) {
  const Icon = facility.icon;

  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-[26px] border shadow-[0_20px_60px_-42px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1.5",
        facility.cardClass,
      )}
    >
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/65 blur-3xl" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/5">
        <Image
          src={facility.imageSrc}
          alt={facility.imageAlt}
          fill
          sizes="(min-width: 1024px) 26vw, (min-width: 640px) 44vw, 88vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.16)_40%,rgba(2,6,23,0.72)_100%)]" />

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {facility.imageLabel}
        </div>

        <div
          className={cn(
            "absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/88 shadow-sm backdrop-blur-sm",
            facility.iconClass,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="mt-1 text-lg font-bold leading-tight sm:text-xl">
            {facility.title}
          </h3>
        </div>
      </div>

      <div className="relative p-5">
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {facility.description}
        </p>

        <div className="mt-5 border-t border-black/5 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Proof points
          </p>
          <ul className="mt-3 space-y-2.5">
            {facility.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-medium text-slate-700"
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                    facility.dotClass,
                  )}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function HeroSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);
  const mobilePillarRefs = useRef<Array<HTMLDivElement | null>>([]);
  const facilityCarouselRef = useRef<HTMLDivElement | null>(null);
  const mobileFacilityRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const carouselElement = mobileCarouselRef.current;

    if (!carouselElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
          )[0];

        if (!mostVisibleEntry) {
          return;
        }

        const nextIndex = Number(
          mostVisibleEntry.target.getAttribute("data-pillar-index"),
        );

        if (!Number.isNaN(nextIndex)) {
          setActivePillarIndex(nextIndex);
        }
      },
      {
        root: carouselElement,
        threshold: 0.65,
      },
    );

    mobilePillarRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const carouselElement = facilityCarouselRef.current;

    if (!carouselElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
          )[0];

        if (!mostVisibleEntry) {
          return;
        }

        const nextIndex = Number(
          mostVisibleEntry.target.getAttribute("data-facility-index"),
        );

        if (!Number.isNaN(nextIndex)) {
          setActiveFacilityIndex(nextIndex);
        }
      },
      {
        root: carouselElement,
        threshold: 0.65,
      },
    );

    mobileFacilityRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToPillar = (index: number) => {
    const nextIndex = (index + learningPillars.length) % learningPillars.length;
    setActivePillarIndex(nextIndex);
    mobilePillarRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const scrollToFacility = (index: number) => {
    const nextIndex =
      (index + schoolFacilities.length) % schoolFacilities.length;
    setActiveFacilityIndex(nextIndex);
    mobileFacilityRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section className="relative bg-white pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-crimson-100/20 bg-[size:15px_15px] sm:bg-[size:20px_20px] opacity-10" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left Content */}
          <div className="space-y-8 lg:col-start-1 lg:row-start-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary border-2 border-primary/25 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold inline-flex items-center justify-center text-center shadow-sm backdrop-blur-sm">
                <span className="hidden sm:inline">
                  Admissions Open {admissionCycle} — Nursery to Class XII | CBSE
                  Affiliation No. 2131764
                </span>
                <span className="sm:hidden">
                  Admissions Open {admissionCycle} | CBSE
                </span>
              </Badge>
            </motion.div>

            {/* Hero Statement */}
            <div className="space-y-6">
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="block sm:inline">
                  A CBSE school in Sirsaganj where{" "}
                </span>
                <span className="text-primary block w-fit rounded-[22px] bg-gradient-to-r from-primary/14 via-rose-50 to-accent/18 px-2.5 py-1 shadow-[0_18px_45px_-30px_rgba(165,28,48,0.6)] sm:inline-block sm:px-4 sm:py-1.5">
                  academics and discipline
                </span>
                <span className="block sm:inline text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-0">
                  {" "}
                  grow together
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Divine International Academy serves Nursery to Class XII
                families across Sirsaganj and the Firozabad region with
                structured teaching, 100% board results, 50+ faculty members,
                co-curricular participation, and a campus planned for safer
                daily routines.
              </motion.p>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <motion.div
            className="relative lg:col-start-2 lg:row-span-2 lg:row-start-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative bg-primary rounded-2xl p-2 sm:p-4 shadow-2xl ">
              {/* Divine Academy Interactive Video */}
              <DivineAcademyVideoDialog />

              {/* Floating Cards - Hidden on very small screens, responsive sizing */}
              <div className="hidden xs:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white text-primary p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-200">
                <div className="font-bold text-sm sm:text-lg">2131764</div>
                <div className="text-xs sm:text-sm">CBSE Code</div>
              </div>

              <div className="hidden xs:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white text-primary p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg">
                <div className="font-bold text-sm sm:text-lg">Est. 2012</div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Om Educational Trust
                </div>
              </div>
            </div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 text-center">
                  Parent snapshot
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {heroParentChecklist.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm"
                    >
                      <div className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-4 lg:col-start-1 lg:row-start-2">
            {/* Primary CTA - Lead Capture Focused */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-crimson-700 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl w-full sm:w-auto"
              >
                <Link
                  href="/admissions"
                  className="flex items-center justify-center"
                >
                  See Admission Steps
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                >
                  <Trophy className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Book a Campus Visit
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 pt-4 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-700 font-medium">
                <Award className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">
                  CBSE Affiliation 2131764
                </span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-700">
                <Users className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">Co-Ed • Est. 2012</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-700">
                <BookOpen className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">Nursery to Class XII</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Facilities Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.76, duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50/90 px-4 py-6 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.42)] sm:px-6 sm:py-8 md:px-8 md:py-10">
            <div className="absolute left-0 top-0 h-44 w-44 -translate-x-10 -translate-y-10 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-44 w-44 translate-x-12 translate-y-12 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
              <div className="max-w-xl">
                <Badge className="border border-primary/15 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm hover:bg-white/90">
                  Safe, Structured Campus
                </Badge>
                <h2 className="mt-4 text-2xl font-bold font-heading leading-tight text-black sm:text-3xl md:text-4xl">
                  40 smart classrooms, 25-student lab batches, 15,000+ books,
                  and supervised campus systems
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                  Every core facility on campus has a clear job: protect
                  teaching time, make practical work safer, give students quiet
                  reading space, and keep movement supervised from gate to bus.
                  Classrooms run with digital teaching support, science
                  practicals happen in teacher-guided batches of 25, the library
                  holds 15,000+ books, and transport adds GPS tracking,
                  CCTV-supported monitoring, and trained staff.
                </p>

                <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-950 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.7)]">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src="/images/submenu/facilities.avif"
                      alt="Divine International Academy campus facilities"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.22)_35%,rgba(2,6,23,0.8)_100%)]" />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
                      {campusSignals.map((signal) => {
                        const Icon = signal.icon;

                        return (
                          <div
                            key={signal.label}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm"
                          >
                            <Icon className="h-3.5 w-3.5" />
                            <span>{signal.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        Supervised campus
                      </p>
                      <h3 className="mt-2 max-w-lg text-xl font-bold font-heading leading-tight sm:text-2xl">
                        One campus system for classroom learning, practical
                        work, reading periods, sports, and controlled daily
                        movement
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                  {campusStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] border border-slate-200/80 bg-white/90 px-4 py-4 shadow-[0_18px_40px_-35px_rgba(15,23,42,0.25)]"
                    >
                      <div className="text-lg font-bold text-primary sm:text-xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-5 border-2 border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/facilities" className="flex items-center">
                    Explore Campus Facilities
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>

              <div>
                <div
                  className="lg:hidden"
                  role="region"
                  aria-label="School facilities carousel"
                >
                  <p className="mb-4 text-sm font-medium text-slate-500">
                    Swipe through the classrooms, labs, library, and safety
                    systems.
                  </p>
                  <div
                    ref={facilityCarouselRef}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {schoolFacilities.map((facility, index) => (
                      <div
                        key={facility.title}
                        ref={(element) => {
                          mobileFacilityRefs.current[index] = element;
                        }}
                        data-facility-index={index}
                        className="min-w-[88%] snap-center first:pl-0 last:pr-1"
                      >
                        <FacilityCard facility={facility} />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full border border-primary/10 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                        {String(activeFacilityIndex + 1).padStart(2, "0")} /{" "}
                        {String(schoolFacilities.length).padStart(2, "0")}
                      </div>
                      <div className="flex items-center gap-2">
                        {schoolFacilities.map((facility, index) => (
                          <button
                            key={facility.title}
                            type="button"
                            aria-label={`Show ${facility.title}`}
                            aria-pressed={activeFacilityIndex === index}
                            onClick={() => scrollToFacility(index)}
                            className={cn(
                              "h-2.5 rounded-full transition-all duration-300",
                              activeFacilityIndex === index
                                ? "w-8 bg-primary"
                                : "w-2.5 bg-primary/25 hover:bg-primary/45",
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Show previous facility card"
                        onClick={() =>
                          scrollToFacility(activeFacilityIndex - 1)
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Show next facility card"
                        onClick={() =>
                          scrollToFacility(activeFacilityIndex + 1)
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid">
                  {schoolFacilities.map((facility) => (
                    <FacilityCard key={facility.title} facility={facility} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/60 px-4 py-6 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.45)] sm:px-6 sm:py-8 md:px-8 md:py-10">
            <div className="absolute left-0 top-0 h-40 w-40 -translate-x-10 -translate-y-10 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-12 translate-y-12 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end">
                <div className="max-w-3xl">
                  <Badge className="mb-4 border border-primary/15 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm hover:bg-white/85">
                    The DIA Difference
                  </Badge>
                  <h2 className="text-2xl font-bold font-heading text-black leading-tight sm:text-3xl md:text-4xl">
                    Disciplined classrooms, active student life, and earlier
                    senior-school readiness
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                    The difference is visible in the school day: lessons stay
                    structured, students participate beyond textbooks, and
                    practical preparation starts before the senior-board years
                    become high pressure.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Built into the school day
                  </p>
                  <div className="mt-5 space-y-4">
                    {familySignals.map((signal) => {
                      const Icon = signal.icon;

                      return (
                        <div
                          key={signal.title}
                          className="flex items-start gap-3"
                        >
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                              {signal.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                              {signal.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="mt-8 md:hidden"
                role="region"
                aria-label="The DIA Difference carousel"
              >
                <p className="mb-4 text-sm font-medium text-gray-500">
                  Swipe through classroom discipline, student life, and senior
                  preparation.
                </p>
                <div
                  ref={mobileCarouselRef}
                  className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {learningPillars.map((pillar, index) => (
                    <div
                      key={pillar.title}
                      ref={(element) => {
                        mobilePillarRefs.current[index] = element;
                      }}
                      data-pillar-index={index}
                      className="min-w-[88%] snap-center first:pl-0 last:pr-1"
                    >
                      <LearningPillarCard pillar={pillar} index={index} />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-primary/10 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                      {String(activePillarIndex + 1).padStart(2, "0")} /{" "}
                      {String(learningPillars.length).padStart(2, "0")}
                    </div>
                    <div className="flex items-center gap-2">
                      {learningPillars.map((pillar, index) => (
                        <button
                          key={pillar.title}
                          type="button"
                          aria-label={`Show ${pillar.title}`}
                          aria-pressed={activePillarIndex === index}
                          onClick={() => scrollToPillar(index)}
                          className={cn(
                            "h-2.5 rounded-full transition-all duration-300",
                            activePillarIndex === index
                              ? "w-8 bg-primary"
                              : "w-2.5 bg-primary/25 hover:bg-primary/45",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Show previous learning pillar"
                      onClick={() => scrollToPillar(activePillarIndex - 1)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Show next learning pillar"
                      onClick={() => scrollToPillar(activePillarIndex + 1)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 hidden md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
                {learningPillars.map((pillar, index) => (
                  <LearningPillarCard
                    key={pillar.title}
                    pillar={pillar}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements - Hidden on mobile, scaled on larger screens */}
      <div className="hidden sm:block absolute top-10 sm:top-20 right-4 sm:right-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-accent/20 rounded-full blur-xl" />
      <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-primary/15 rounded-full blur-xl" />
    </section>
  );
}
