"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, ArrowRight, Shield, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const userRoles = [
  {
    title: "Students",
    icon: BookOpen,
    href: "/login/student",
    eyebrow: "Student Portal",
    description:
      "For registered students using school-issued credentials for portal access.",
    points: [
      "Use your registered school email",
      "Keep your current password ready",
      "Use forgot-password if access has changed",
    ],
    cardClass:
      "border-amber-200/70 bg-[linear-gradient(180deg,#fffdf8_0%,#fff6df_100%)]",
    iconClass: "bg-amber-100 text-amber-700",
    buttonClass:
      "bg-amber-500 text-white group-hover:bg-amber-600",
  },
  {
    title: "Admin",
    icon: Shield,
    href: "/login/admin",
    eyebrow: "Admin Access",
    description:
      "For authorised school staff handling protected administrative access.",
    points: [
      "Use official admin email credentials",
      "Access is intended for authorised staff only",
      "Contact the school office if access has changed",
    ],
    cardClass:
      "border-slate-200/80 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]",
    iconClass: "bg-slate-900 text-white",
    buttonClass:
      "bg-slate-900 text-white group-hover:bg-slate-800",
  },
] as const;

const accessChecks = [
  "Student and admin access only on this page",
  "Use the email registered with the school system",
  "Recover access through the forgot-password flow or school office",
] as const;

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,28,48,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="flex justify-center">
                <Badge className="rounded-full border border-primary/15 bg-white/85 px-5 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
                  <User className="mr-2 h-4 w-4" />
                  Portal Login
                </Badge>
              </div>

              <h1 className="mt-6 text-4xl font-bold font-heading leading-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
                Student and admin access, without extra portal clutter
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                This login page is now focused on the two access paths that
                matter here: student portal access and authorised admin access.
                Choose the correct route before entering credentials.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-start">
              <div className="grid gap-6 md:grid-cols-2">
                {userRoles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2 + index * 0.12 }}
                    className="group"
                  >
                    <Card
                      className={`h-full overflow-hidden rounded-[30px] border shadow-[0_25px_70px_-48px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1.5 ${role.cardClass}`}
                    >
                      <Link href={role.href} className="block h-full">
                        <CardContent className="flex h-full flex-col p-6 sm:p-7">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                {role.eyebrow}
                              </p>
                              <CardTitle className="mt-3 text-2xl font-bold font-heading text-slate-950">
                                {role.title}
                              </CardTitle>
                            </div>
                            <div
                              className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${role.iconClass}`}
                            >
                              <role.icon className="h-7 w-7" />
                            </div>
                          </div>

                          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                            {role.description}
                          </p>

                          <ul className="mt-6 space-y-3">
                            {role.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span className="text-sm leading-6 text-slate-700">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div
                            className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${role.buttonClass}`}
                          >
                            <span>Open {role.title} Login</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <Card className="overflow-hidden rounded-[30px] border-0 bg-slate-950 text-white shadow-[0_30px_90px_-50px_rgba(15,23,42,0.55)]">
                  <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(165,28,48,0.85)_0%,rgba(127,19,34,1)_100%)] px-6 py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Access Checks
                    </p>
                    <h2 className="mt-3 text-2xl font-bold font-heading">
                      Before you continue to login
                    </h2>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {accessChecks.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                          <span className="text-sm leading-6 text-white/78">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Need Help?
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        If the registered email, password, or access level has
                        changed, use the recovery flow or contact the school
                        office before trying multiple times.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <Button
                        asChild
                        className="bg-white text-slate-950 hover:bg-white/90"
                      >
                        <Link href="/login/forgot-password">
                          Recover Access
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950"
                      >
                        <Link href="/contact">Contact School Office</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
