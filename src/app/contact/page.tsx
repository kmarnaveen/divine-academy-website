import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quickContacts = [
  {
    label: "Admissions desk",
    value: "+91 9876543211",
    detail: "Class entry, fees, documents, and seat guidance",
    href: "tel:+919876543211",
    icon: Phone,
  },
  {
    label: "School office",
    value: "+91 9876543210",
    detail: "General enquiries, timings, and visit coordination",
    href: "tel:+919876543210",
    icon: Shield,
  },
  {
    label: "Admissions email",
    value: "admissions@divineacademy.edu.in",
    detail: "Share class, age, and admission questions by email",
    href: "mailto:admissions@divineacademy.edu.in?subject=Admissions%20Enquiry",
    icon: Mail,
  },
  {
    label: "Office hours",
    value: "Monday to Friday, 8 AM to 4 PM",
    detail: "Saturday, 8 AM to 12 PM",
    icon: Clock,
  },
] as const;

const contactRoutes = [
  {
    title: "Admissions support",
    description:
      "Use this route for class entry, age criteria, fee bands, required documents, and application-stage questions.",
    points: [
      "Pre-Primary to Class XII admission queries",
      "Documents, age guidance, and class entry support",
      "Fee overview and application follow-up",
    ],
    primaryAction: {
      label: "Call admissions desk",
      href: "tel:+919876543211",
    },
    secondaryAction: {
      label: "Email admissions team",
      href: "mailto:admissions@divineacademy.edu.in?subject=Admissions%20Enquiry",
    },
    icon: GraduationCap,
  },
  {
    title: "School office support",
    description:
      "Use the school office for general information, office timings, meeting coordination, and queries that are not admission-specific.",
    points: [
      "General school information and office support",
      "Office timings and visit coordination",
      "Parent guidance before reaching campus",
    ],
    primaryAction: {
      label: "Call main office",
      href: "tel:+919876543210",
    },
    secondaryAction: {
      label: "Email school office",
      href: "mailto:info@divineacademy.edu.in?subject=General%20Enquiry",
    },
    icon: Shield,
  },
  {
    title: "Campus visit planning",
    description:
      "Call before travelling if you want admissions guidance, document review, or support meeting the right school team on campus.",
    points: [
      "Preferred visit day and time",
      "Student class and date of birth",
      "Questions on fees, transport, or documents",
    ],
    primaryAction: {
      label: "Request a visit",
      href: "mailto:info@divineacademy.edu.in?subject=Campus%20Visit%20Request",
    },
    secondaryAction: {
      label: "Call before travelling",
      href: "tel:+919876543211",
    },
    icon: CalendarDays,
  },
] as const;

const enquiryChecklist = [
  "Student class, age, and date of birth",
  "Whether you need admissions help, office support, or a campus visit",
  "Questions on fees, transport, documents, or timings",
] as const;

const visitNotes = [
  "Weekday visits are better if you need admission guidance, fee clarification, or document review.",
  "Carry original documents only if the school has asked for a document check during the visit.",
  "Saturday hours are shorter, so call before travelling.",
] as const;

export const metadata: Metadata = {
  title: "Contact Divine International Academy | Sirsaganj",
  description:
    "Contact Divine International Academy, Sirsaganj for admissions support, school-office enquiries, office timings, and campus directions.",
  keywords: [
    "Divine International Academy contact",
    "school contact Sirsaganj",
    "admissions office Divine International Academy",
    "CBSE school contact Firozabad",
  ],
};

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Contact the School
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Call the admissions desk, school office, or confirm a campus visit
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Parents can use this page for admission questions, office timings,
              fee and document guidance, and campus directions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_380px] xl:items-start">
            <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.24)] sm:p-8 lg:p-10">
              <Badge className="border border-primary/10 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                Verified School Contacts
              </Badge>
              <h2 className="mt-5 text-2xl font-bold font-heading leading-tight text-slate-950 sm:text-[2rem] lg:text-[2.35rem]">
                Start with the right contact route.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Admissions questions, school-office support, and campus visits
                move faster when families contact the right desk first.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Admissions queries
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Class entry, fees, documents, and seat availability.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    School office help
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Office timings, general enquiries, and visit coordination.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Campus visit planning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Call before you travel if you need admissions help on
                    campus.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Link
                    href="tel:+919876543211"
                    className="flex items-center justify-center"
                  >
                    Call Admissions Desk
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
                    href="mailto:info@divineacademy.edu.in?subject=General%20Enquiry"
                    className="flex items-center justify-center"
                  >
                    Email School Office
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {quickContacts.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? Link : "div";

                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="rounded-[26px] border border-slate-200 bg-white px-5 py-5 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.18)] transition-colors hover:border-primary/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-slate-950 break-words">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Choose the Right Contact Route
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Who to contact for admissions, office support, and campus visits
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose the route that matches your need so the school can answer
              faster and with the right details.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <Card
                  key={route.title}
                  className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.18)]"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-950">
                      {route.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {route.description}
                    </p>

                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                      {route.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <Button
                        asChild
                        className="bg-primary text-white hover:bg-primary/90"
                      >
                        <Link
                          href={route.primaryAction.href}
                          className="flex items-center justify-center"
                        >
                          {route.primaryAction.label}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                      >
                        <Link
                          href={route.secondaryAction.href}
                          className="flex items-center justify-center"
                        >
                          {route.secondaryAction.label}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Before You Call or Visit
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Keep these details ready before you call or visit
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              A few details at the start save time for both parents and the
              school office.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
            <Card className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      Keep this ready before calling
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Useful details for quicker guidance from the school
                      office.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-700">
                  {enquiryChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[30px] border border-slate-200 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      Check office timings before you travel
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Useful reminders before visiting the campus.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-sm font-semibold text-slate-950">
                    Monday to Friday: 8 AM to 4 PM
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Saturday: 8 AM to 12 PM
                  </p>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  {visitNotes.map((note) => (
                    <div
                      key={note}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Campus Directions
            </Badge>
            <h2 className="mt-5 text-3xl font-bold font-heading text-primary sm:text-4xl">
              Find the school before you leave for campus
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Keep the address, office timings, and direct map link ready before
              you travel.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
            <div className="rounded-[30px] border border-slate-200 bg-gray-50 p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.16)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/6 text-primary shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Divine International Academy
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Sirsaganj campus and school office.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5">
                  <p className="font-semibold text-slate-950">Address</p>
                  <p className="mt-2 leading-6">
                    Divine International Academy
                    <br />
                    Sirsaganj, Firozabad
                    <br />
                    Uttar Pradesh, India - 283203
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5">
                  <p className="font-semibold text-slate-950">
                    Before you come
                  </p>
                  <p className="mt-2 leading-6">
                    Call first if you want admissions guidance, document review,
                    or help meeting the right team during your visit.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=Divine%20International%20Academy%20Sirsaganj%20Firozabad"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                  >
                    Open in Google Maps
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                >
                  <Link
                    href="tel:+919876543210"
                    className="flex items-center justify-center"
                  >
                    Call Main Office
                  </Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_28px_80px_-52px_rgba(15,23,42,0.22)]">
              <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Campus Map
                </p>
              </div>
              <div className="aspect-[16/10] bg-slate-100">
                <iframe
                  title="Divine International Academy campus map"
                  src="https://www.google.com/maps?q=Divine%20International%20Academy%20Sirsaganj%20Firozabad&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#7d1324_0%,#5f0d1b_40%,#22060b_100%)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold font-heading sm:text-4xl lg:text-5xl">
              Need to speak to the school today?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
              Call the admissions desk for class-entry guidance, or contact the
              school office for timings, general support, and visit planning.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/95"
              >
                <Link
                  href="tel:+919876543211"
                  className="flex items-center justify-center"
                >
                  Call Admissions Desk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/8 text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="mailto:info@divineacademy.edu.in?subject=General%20Enquiry"
                  className="flex items-center justify-center"
                >
                  Email School Office
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/72">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543211</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@divineacademy.edu.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Sirsaganj, Firozabad, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
