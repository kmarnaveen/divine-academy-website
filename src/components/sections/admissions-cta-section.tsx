"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  Quote,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { schoolContact } from "@/lib/school-contact";

type AdmissionStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ParentTestimonial = {
  quote: string;
  parentName: string;
  studentContext: string;
};

const admissionCycle = "2026-27";

const admissionSteps: AdmissionStep[] = [
  {
    title: "Share class and age details",
    description:
      "Call or enquire online with your child’s current class, age, and target admission session.",
    icon: FileText,
  },
  {
    title: "Visit campus and review essentials",
    description:
      "Check classrooms, safety systems, facilities, fee details, and document requirements during the campus visit.",
    icon: Users,
  },
  {
    title: "Submit documents and confirm seat",
    description:
      "Submit the application and documents, then complete confirmation subject to review and class-wise availability.",
    icon: CheckCircle,
  },
];

const admissionWindows = [
  { event: "Enquiries and campus visits", date: "Open now" },
  { event: "Document check and parent interaction", date: "Rolling" },
  { event: "Seat confirmation", date: "As per availability" },
];

const admissionHighlights = [
  "Admissions open from Nursery to Class XII.",
  "Fees, documents, and transport are reviewed before confirmation.",
  "Campus visits help parents check classrooms, safety, and facilities.",
  "Seat confirmation depends on document review and class-wise availability.",
];

const admissionSignals = [
  "Nursery to Class XII",
  "Campus visit booking",
  "Fee and document guidance",
];

const parentTestimonials: ParentTestimonial[] = [
  {
    quote:
      "Divine International Academy has transformed my child's life. The teachers are dedicated and the facilities are excellent. I'm proud to see my daughter excel in both academics and extracurriculars.",
    parentName: "Rajesh Kumar",
    studentContext: "Parent of a Class X Student",
  },
  {
    quote:
      "The school provides a perfect balance of education and values. My son has become more confident and disciplined since joining DIA. The CBSE curriculum is well-implemented.",
    parentName: "Priya Sharma",
    studentContext: "Parent of a Class VII Student",
  },
  {
    quote:
      "As a parent, I feel assured that my child is in safe hands. The caring staff, modern infrastructure, and focus on holistic development make DIA the best school in our area.",
    parentName: "Amit Verma",
    studentContext: "Parent of a Class III Student",
  },
  {
    quote:
      "My daughter has blossomed since joining DIA. The teachers genuinely care about each child's growth. The school environment is safe, nurturing, and truly world-class.",
    parentName: "Mrs. Sunita Agarwal",
    studentContext: "Parent of a Class VIII Student",
  },
  {
    quote:
      "The smart classrooms and dedicated faculty have made a huge difference in my son's learning. He actually enjoys going to school every day!",
    parentName: "Mr. Rakesh Gupta",
    studentContext: "Parent of a Class V Student",
  },
  {
    quote:
      "DIA prepared my child exceptionally well for board exams. The 100% pass rate speaks for itself. The discipline and values they instill are remarkable.",
    parentName: "Mrs. Pooja Singhal",
    studentContext: "Parent of a Class X Student",
  },
  {
    quote:
      "The co-curricular activities - dance, sports, art - give children a complete education. Truly holistic development!",
    parentName: "Mr. Vivek Sharma",
    studentContext: "Parent of a Class III Student",
  },
  {
    quote:
      "From the cafeteria to the labs, everything is well-maintained. The organic farming initiative teaches children real-world skills.",
    parentName: "Mrs. Neha Jain",
    studentContext: "Parent of a Class VII Student",
  },
  {
    quote:
      "We are thrilled with the academic standards at Divine International Academy. The fact that they achieved a 100% board pass rate in 2024 shows their commitment to education. Under the guidance of Dr. Garima Gupta and the expert faculty, my child is getting the personalized attention they need to succeed in their CBSE exams.",
    parentName: "Mrs. Kavita Tiwari",
    studentContext: "Academic excellence and board results",
  },
  {
    quote:
      "DIA is not just about academics; their sports infrastructure is fantastic. My son is part of the sports program and participating in the inter-school DPL Cricket Championship was a proud moment for us. The school truly believes in creating champions on and off the field.",
    parentName: "Mr. Sandeep Yadav",
    studentContext: "Sports and DPL Cricket Championship",
  },
  {
    quote:
      "I highly recommend this school for parents who want holistic growth for their kids. The opportunities here are amazing-from the Art Club exhibitions to participating in the district-wide Kr8ivity League. It's wonderful to see the school encouraging so much creativity and teamwork.",
    parentName: "Mrs. Ritu Agarwal",
    studentContext: "Extracurriculars and innovation",
  },
  {
    quote:
      "As a parent, safety and a good learning environment are my top priorities. Divine International Academy provides a fully CCTV-monitored campus, a dedicated medical room, and smart classrooms. Knowing my child is in a safe, nurturing, and modern environment gives me complete peace of mind.",
    parentName: "Mrs. Meena Bansal",
    studentContext: "Safety and infrastructure",
  },
  {
    quote:
      "The school goes above and beyond traditional learning. I was so impressed to see the students win first prize at the state-level organic farming competition! Teaching children these kinds of practical, real-world skills proves that DIA is focused on building well-rounded citizens for the future.",
    parentName: "Mr. Anil Chauhan",
    studentContext: "Real-world skills and organic farming",
  },
];

export function AdmissionsCTASection() {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: parentTestimonials.length > 1,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const syncEmblaState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    syncEmblaState();
    emblaApi.on("select", syncEmblaState);
    emblaApi.on("reInit", syncEmblaState);

    return () => {
      emblaApi.off("select", syncEmblaState);
      emblaApi.off("reInit", syncEmblaState);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || shouldReduceMotion || parentTestimonials.length <= 1) {
      return;
    }

    const autoplayInterval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4800);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, [emblaApi, shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfc_46%,#ffffff_100%)] py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/3 to-transparent" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
            Admissions {admissionCycle}
          </Badge>
          <h2 className="mt-5 text-3xl font-bold font-heading leading-tight tracking-[-0.02em] text-primary sm:text-4xl lg:text-[2.8rem]">
            Admissions open for 2026-27 from Nursery to Class XII
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            See the steps, current status, and admissions contacts before you
            visit.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-6xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center justify-between gap-3 px-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Testimonials & Parent Reviews
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary/20 hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary/20 hover:text-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex pb-2">
              {parentTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.parentName}-${testimonial.studentContext}-${index}`}
                  className="min-w-0 shrink-0 basis-full pl-4 md:basis-1/2 xl:basis-1/3"
                >
                  <article className="flex min-h-[280px] h-full flex-col justify-between rounded-[28px] border border-slate-200/80 bg-white/96 p-6 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.16)]">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                        <Quote className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-slate-200/80 pt-4">
                      <p className="text-base font-semibold text-slate-950">
                        {testimonial.parentName}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {testimonial.studentContext}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => {
              const isActive = selectedIndex === index;

              return (
                <button
                  key={`testimonial-dot-${index}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={isActive}
                />
              );
            })}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_24px_72px_-54px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/8] border-b border-slate-200/80 bg-slate-100">
                <Image
                  src="/images/submenu/admission-process.jpg"
                  alt="Admissions guidance at Divine International Academy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 52vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_32%,rgba(15,23,42,0.62)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <Badge className="border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/12">
                    Admissions Office
                  </Badge>

                  <h3 className="mt-4 max-w-2xl text-2xl font-bold font-heading leading-tight text-white sm:text-[2rem] lg:text-[2.35rem]">
                    Book a campus visit, review fees, and understand the next
                    step.
                  </h3>
                </div>
              </div>

              <div className="grid gap-7 p-7 sm:p-9 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
                <div className="min-w-0">
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    Check class entry, documents, transport, and seat
                    availability before you commit.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {admissionSignals.map((signal) => (
                      <div
                        key={signal}
                        className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                      >
                        {signal}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      <Link
                        href="/apply"
                        className="flex items-center justify-center"
                      >
                        Apply Online
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                    >
                      <Link
                        href="/admissions/fees"
                        className="flex items-center justify-center"
                      >
                        View Fee Details
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/70 p-6 shadow-[0_16px_46px_-40px_rgba(15,23,42,0.08)] sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Admissions desk
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5 text-sm text-slate-700">
                    <Link
                      href={schoolContact.phoneHref}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-colors hover:border-primary/20"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{schoolContact.phoneDisplay}</span>
                    </Link>
                    <Link
                      href={schoolContact.admissionsEnquiryHref}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-colors hover:border-primary/20"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{schoolContact.emailDisplay}</span>
                    </Link>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{schoolContact.officeHoursDisplay}</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                      <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{schoolContact.fullAddress}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.1)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-950 sm:text-2xl">
                      Admission in 3 steps
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      A simple path from first enquiry to seat confirmation.
                    </p>
                  </div>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  3 Steps
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                {admissionSteps.map((step, index) => {
                  return (
                    <motion.article
                      key={step.title}
                      className="rounded-[22px] border border-slate-200/80 bg-slate-50/65 px-5 py-5"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                          <span className="text-sm font-bold">
                            0{index + 1}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-base font-semibold text-slate-950 sm:text-lg">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.1)] sm:p-7">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-950">
                      Admission timeline
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Current status for enquiries, document checks, and seat
                      confirmation.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {admissionWindows.map((item, index) => (
                    <motion.div
                      key={item.event}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.3 + index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm leading-6 text-slate-700">
                        {item.event}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200">
                        {item.date}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-950">
                      Before you confirm a seat
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Fees, documents, transport, and seat rules at a glance.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {admissionHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.35 + index * 0.08,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <CheckCircle className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm leading-6 text-slate-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-amber-200/70 bg-amber-50 px-4 py-3 text-sm leading-6 text-slate-700">
                  Seats are confirmed only after document review and class-wise
                  availability.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}