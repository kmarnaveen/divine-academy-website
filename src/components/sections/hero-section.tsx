"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  BookOpen,
  Trophy,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-4 py-2 text-sm font-medium">
                🎓 Admissions Open 2025 | CBSE Affiliated
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Shaping Futures Through{" "}
                <span className="text-accent">Learning by Doing</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                At Divine International Academy, we nurture young minds from
                Nursery to Class 12 with our comprehensive CBSE curriculum,
                modern facilities, and values-based education in the heart of
                Firozabad.
              </motion.p>
            </div>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-primary">13+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600">Pass Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Expert Teachers</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
              >
                <Link href="/apply" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/prospectus.pdf" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Prospectus
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4 text-accent" />
                <span>CBSE Affiliated</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-accent" />
                <span>Co-Ed School</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <BookOpen className="h-4 w-4 text-accent" />
                <span>Nursery to Class 12</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 shadow-2xl">
              {/* Placeholder for school image */}
              <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Campus Excellence</h3>
                  <p className="text-white/90 text-sm">
                    Modern facilities for holistic development
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-accent text-primary p-4 rounded-xl shadow-lg">
                <div className="font-bold text-lg">2131764</div>
                <div className="text-sm">CBSE Code</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white text-primary p-4 rounded-xl shadow-lg">
                <div className="font-bold text-lg">Est. 2012</div>
                <div className="text-sm text-gray-600">
                  Om Educational Trust
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
    </section>
  );
}
