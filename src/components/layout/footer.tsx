import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Shield,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const footerProofs = [
  {
    title: "1200+",
    label: "Students on campus",
    icon: Users,
  },
  {
    title: "50+",
    label: "Faculty members",
    icon: GraduationCap,
  },
  {
    title: "40",
    label: "Smart classrooms",
    icon: BookOpen,
  },
  {
    title: "100%",
    label: "Board results",
    icon: Trophy,
  },
] as const;

const footerLinkGroups = [
  {
    title: "Explore DIA",
    links: [
      { label: "About DIA", href: "/about" },
      { label: "Why DIA", href: "/why-dia" },
      { label: "Principal's Message", href: "/about/principal" },
      { label: "Contact & Directions", href: "/contact" },
    ],
  },
  {
    title: "Admissions & Student Life",
    links: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Apply Online", href: "/apply" },
      { label: "Facilities", href: "/facilities" },
      { label: "Student Life", href: "/student-life" },
      { label: "Clubs & Activities", href: "/student-life/clubs" },
      { label: "Academic Achievements", href: "/academics/achievements" },
    ],
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[linear-gradient(180deg,#7d1324_0%,#5f0d1b_40%,#22060b_100%)] text-white">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {footerProofs.map((proof) => {
              const Icon = proof.icon;

              return (
                <div
                  key={proof.label}
                  className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading text-white">
                        {proof.title}
                      </div>
                      <div className="mt-1 text-sm text-white/72">
                        {proof.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)_minmax(320px,0.95fr)] xl:gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_18px_45px_-28px_rgba(255,255,255,0.8)]">
                <Image
                  src="/images/logo.png"
                  alt="Divine International Academy logo"
                  width={46}
                  height={46}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white sm:text-2xl">
                  Divine International Academy
                </h3>
                <p className="mt-1 text-sm text-white/72">
                  CBSE school in Sirsaganj serving Nursery to Class XII
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-[15px]">
              Divine International Academy serves families across Sirsaganj and
              the Firozabad region with structured teaching, 50+ faculty
              members, smart classrooms, practical learning, supervised
              routines, and board-focused support.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <div className="rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                CBSE Affiliation 2131764
              </div>
              <div className="rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                Established 2012
              </div>
              <div className="rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                Om Educational Trust
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/95"
              >
                <Link
                  href="/apply"
                  className="flex items-center justify-center"
                >
                  Apply Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/8 text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                >
                  Book a Campus Visit
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center text-white/82 transition-colors hover:text-white"
                      >
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white shadow-sm">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-white">
                  Visit or call the school office
                </h4>
                <p className="mt-1 text-sm text-white/68">
                  Admissions, general enquiries, and campus visits.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-white/82">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <div>
                  <p className="font-medium text-white">
                    Divine International Academy
                  </p>
                  <p>Sirsaganj, Firozabad</p>
                  <p>Uttar Pradesh, India - 283203</p>
                </div>
              </div>

              <Link
                href="tel:+919876543210"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-white" />
                <div>
                  <div className="font-medium text-white">+91 9876543210</div>
                  <div className="text-xs text-white/60">Main office</div>
                </div>
              </Link>

              <Link
                href="tel:+919876543211"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-white" />
                <div>
                  <div className="font-medium text-white">+91 9876543211</div>
                  <div className="text-xs text-white/60">Admissions office</div>
                </div>
              </Link>

              <Link
                href="mailto:info@divineacademy.edu.in"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-white" />
                <div>
                  <div className="font-medium text-white">
                    info@divineacademy.edu.in
                  </div>
                  <div className="text-xs text-white/60">General enquiries</div>
                </div>
              </Link>

              <Link
                href="mailto:admissions@divineacademy.edu.in"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-white" />
                <div>
                  <div className="font-medium text-white">
                    admissions@divineacademy.edu.in
                  </div>
                  <div className="text-xs text-white/60">Admissions desk</div>
                </div>
              </Link>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <div>
                  <p>Monday to Friday: 8:00 AM - 4:00 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/15">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-white/82">
                &copy; {currentYear} Divine International Academy. Managed by Om
                Educational Trust.
              </p>
              <p className="mt-1 text-white/58">
                CBSE affiliation number 2131764 • Sirsaganj, Firozabad, Uttar
                Pradesh
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:justify-end">
              <Link
                href="/about"
                className="text-white/70 transition-colors hover:text-white"
              >
                About DIA
              </Link>
              <Link
                href="/admissions"
                className="text-white/70 transition-colors hover:text-white"
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className="text-white/70 transition-colors hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/apply"
                className="text-white/70 transition-colors hover:text-white"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
