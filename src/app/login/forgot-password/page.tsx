"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const portalOptions = [
  "Teacher portal",
  "Student portal",
  "Parent portal",
  "Admin portal",
] as const;

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    portal: portalOptions[0],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-50">
        <div className="pt-6 pb-4">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="text-slate-600 hover:bg-primary/5 hover:text-primary"
              asChild
            >
              <Link href="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto flex px-4 pb-16 pt-4">
          <div className="mx-auto w-full max-w-lg">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-950">
                  Reset login access
                </CardTitle>
                <p className="text-sm leading-6 text-slate-600">
                  Share the registered email and portal type. The school office
                  can verify the account and guide the next reset step.
                </p>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5 text-left">
                    <h2 className="text-base font-semibold text-emerald-900">
                      Request recorded
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-emerald-800">
                      If <span className="font-semibold">{formData.email}</span>{" "}
                      is registered for the{" "}
                      <span className="font-semibold">{formData.portal}</span>,
                      the school team can use it to guide the password reset
                      process.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className="bg-primary text-white hover:bg-primary/90"
                      >
                        <Link href="/contact">Contact School Office</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Link href="/login">Return to Login</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        Registered email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <Input
                          type="email"
                          placeholder="name@divineacademy.edu.in"
                          className="h-12 pl-10"
                          value={formData.email}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              email: event.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        Portal type
                      </label>
                      <select
                        value={formData.portal}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            portal: event.target.value,
                          })
                        }
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      >
                        {portalOptions.map((portal) => (
                          <option key={portal} value={portal}>
                            {portal}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-sm leading-6 text-slate-600">
                        This page records the reset request in the interface
                        only. Until API-based account recovery is added, the
                        final reset step still needs school-office support.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="h-12 w-full bg-primary text-base font-semibold text-white hover:bg-primary/90"
                    >
                      Continue Reset Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
