"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  ArrowRight,
  Shield,
  BookOpen,
  GraduationCap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const userRoles = [
  {
    title: "Teachers",
    icon: GraduationCap,
    href: "/login/teacher",
  },
  {
    title: "Students",
    icon: BookOpen,
    href: "/login/student",
  },
  {
    title: "Parents",
    icon: Heart,
    href: "/login/parent",
  },
  {
    title: "Admin",
    icon: Shield,
    href: "/login/admin",
  },
];

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Harvard Theme */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/3"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(165,28,48,0.1),transparent_50%)]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto mb-16"
            >
              {/* Login Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 text-lg font-semibold rounded-full">
                  <User className="w-4 h-4 mr-2" />
                  Choose Your Portal
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Access Your
                </span>
                <br />
                <span className="text-gray-700">DIA Portal</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
                Select your role to access personalized features with
                <span className="text-primary font-semibold">
                  {" "}
                  secure login
                </span>{" "}
                and
                <span className="text-primary font-semibold">
                  {" "}
                  tailored dashboard
                </span>{" "}
                for the Divine Academy community.
              </p>
            </motion.div>

            {/* Role Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {userRoles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer overflow-hidden">
                    <Link href={role.href} className="block h-full">
                      <CardContent className="p-8 text-center">
                        {/* Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 group-hover:scale-110">
                          <role.icon className="h-10 w-10" />
                        </div>

                        <CardTitle className="text-xl font-bold text-gray-900 mb-6">
                          {role.title}
                        </CardTitle>

                        {/* CTA Button */}
                        <Button className="w-full group-hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90 text-white">
                          Login as {role.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center mt-16"
            >
              <Card className="max-w-2xl mx-auto border-0 shadow-md bg-gray-50/50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Need Help Accessing Your Portal?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    If you're having trouble logging in or need assistance with
                    your account, our support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-primary hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/apply">New to DIA? Apply Here</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
