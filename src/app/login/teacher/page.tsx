"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  ArrowLeft,
  Lock,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { useState } from "react";

export default function TeacherLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Teacher login attempt:", formData);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Back Button - Fixed at top */}
        <div className="pt-6 pb-4">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
              asChild
            >
              <Link href="/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </Button>
          </div>
        </div>

        {/* Login Form - Centered */}
        <div className="flex items-center justify-center py-8 px-4">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <Card className="shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Teacher Login
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="teacher@divineacademy.edu.in"
                        className="pl-10 h-12"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-600">Remember me</span>
                    </label>
                    <Link
                      href="/login/forgot-password"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-semibold"
                  >
                    Login to Teacher Portal
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
