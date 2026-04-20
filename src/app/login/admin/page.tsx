"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Shield,
  ArrowLeft,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { useState } from "react";

import {
  dummyCredentials,
  loginWithDummyAuth,
  persistDummySession,
  type DummyAuthSession,
} from "@/lib/dummy-auth-client";

const adminSignals = [
  "Authorised staff access only",
  "Use the official admin email",
  "Recover access before repeated attempts",
] as const;

const adminChecks = [
  "Keep the registered admin email ready",
  "Use the current password issued for your account",
  "Contact the school office if your role or access level changed",
] as const;

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [session, setSession] = useState<DummyAuthSession | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const nextSession = await loginWithDummyAuth({
        role: "admin",
        email: formData.email,
        password: formData.password,
      });

      persistDummySession(nextSession, rememberMe);
      setSession(nextSession);
      setFormData((current) => ({ ...current, password: "" }));
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Dummy login failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_100%)]">
        <div className="container mx-auto px-4 pt-6 pb-16">
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

          <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_470px] xl:items-stretch">
            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white shadow-[0_30px_90px_-50px_rgba(15,23,42,0.45)] sm:p-10 lg:p-12">
              <div className="absolute left-0 top-0 h-40 w-40 -translate-x-10 -translate-y-10 rounded-full bg-primary/25 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-12 translate-y-12 rounded-full bg-white/10 blur-3xl" />

              <div className="relative max-w-xl">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                  Admin Access
                </div>
                <h1 className="mt-6 text-4xl font-bold font-heading leading-tight sm:text-5xl">
                  Restricted login for authorised school operations
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                  Use this route only for approved administrative access. If the role, email, or password linked to your account has changed, recover access before attempting repeated login.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {adminSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/85"
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Before you continue
                  </p>
                  <ul className="mt-5 space-y-4">
                    {adminChecks.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span className="text-sm leading-6 text-white/78">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Dummy credentials for now
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/78">
                    Email: {dummyCredentials.admin.email}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/78">
                    Password: {dummyCredentials.admin.password}
                  </p>
                </div>
              </div>
            </div>

            <Card className="rounded-[34px] border border-slate-200/80 bg-white shadow-[0_30px_90px_-56px_rgba(15,23,42,0.3)]">
              <CardHeader className="px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="mt-5 text-2xl font-bold font-heading text-slate-950 sm:text-[2rem]">
                  Admin login
                </CardTitle>
                <p className="text-sm leading-6 text-slate-600 sm:text-base">
                  Continue with the authorised admin email and password linked to your school account.
                </p>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
                {session ? (
                  <div className="space-y-6">
                    <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 px-4 py-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                        <div>
                          <p className="text-sm font-semibold text-emerald-900">
                            Dummy admin login successful
                          </p>
                          <p className="mt-1 text-sm leading-6 text-emerald-800">
                            Signed in as {session.displayName} using {session.email}.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Session mode
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        Dummy session saved in {rememberMe ? "localStorage" : "sessionStorage"} until {new Date(session.expiresAt).toLocaleString()}.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button asChild className="h-12 bg-slate-950 text-white hover:bg-slate-900">
                        <Link href="/admin">Open Admin Workspace</Link>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-12 border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
                        onClick={() => setSession(null)}
                      >
                        Use Another Account
                      </Button>
                    </div>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Admin email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        type="email"
                        placeholder="admin@divineacademy.edu.in"
                        className="h-12 border-slate-200 pl-10"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter secure password"
                        className="h-12 border-slate-200 pl-10 pr-10"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-primary/10 bg-primary/5 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm leading-6 text-slate-700">
                        This route is intended only for authorised administrative accounts. If access needs review, contact the school office instead of reusing old credentials.
                      </p>
                    </div>
                  </div>

                  {errorMessage ? (
                    <div className="rounded-[24px] border border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 text-red-700">
                      {errorMessage}
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <label className="flex items-center text-slate-600">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-primary focus:ring-primary"
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                      />
                      <span className="ml-2">Remember me</span>
                    </label>
                    <Link
                      href="/login/forgot-password"
                      className="font-medium text-primary hover:text-primary/80"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full bg-slate-950 text-base font-semibold text-white hover:bg-slate-900"
                  >
                    {isSubmitting ? "Checking admin access..." : "Access Admin Console"}
                    {isSubmitting ? null : <ArrowRight className="ml-2 h-4 w-4" />}
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
