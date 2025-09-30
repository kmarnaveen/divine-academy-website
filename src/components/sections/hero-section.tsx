"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Users,
  BookOpen,
  Trophy,
  Download,
  Heart,
  Target,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import { DivineAcademyVideoDialog } from "@/components/sections/divine-video-dialog";

export function HeroSection() {
  return (
    <section className="relative bg-white pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-crimson-100/20 bg-[size:15px_15px] sm:bg-[size:20px_20px] opacity-10" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
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
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary border-2 border-primary/25 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold inline-flex items-center justify-center text-center shadow-sm backdrop-blur-sm">
                <span className="hidden sm:inline">
                  🎓{" "}
                  <span className="text-primary font-bold">
                    Admissions Open 2025-26
                  </span>{" "}
                  — Nursery to Grade XII (CBSE Affiliation No. 2131764)
                </span>
                <span className="sm:hidden">
                  🎓{" "}
                  <span className="text-primary font-bold">
                    Admissions Open 2025-26
                  </span>{" "}
                  | CBSE
                </span>
              </Badge>
            </motion.div>

            {/* Hero Statement */}
            <div className="space-y-6">
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="block sm:inline">Shaping Tomorrow's </span>
                <span className="text-primary relative block sm:inline">
                  Leaders
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-primary/20 -skew-x-12" />
                </span>
                <span className="block sm:inline text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-0">
                  {" "}
                  — CBSE, Nursery–XII
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Activity-based learning, STEM labs, sports excellence.
                Empowering 1200+ students since 2012 with proven board results
                and holistic development.
              </motion.p>
            </div>

            {/* Proof & Trust Stats */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    12+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Years Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    1200+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Students (2025)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Board Results
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Expert Faculty
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <blockquote className="text-sm italic text-gray-700 text-center">
                  "My daughter scored 96% in Class XII boards and secured
                  admission to top engineering college. DIA's STEM labs and
                  dedicated faculty made all the difference."
                </blockquote>
                <p className="text-xs text-gray-600 text-center mt-2">
                  — Mrs. Priya Sharma, Parent of Ananya (Class XII, 2024
                  Graduate)
                </p>
              </div>
            </motion.div>

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
                  <Download className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Request Prospectus
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
                  Book Campus Visit
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
                <span className="whitespace-nowrap">CBSE No. 2131764</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-700">
                <Users className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">Co-Ed • Est. 2012</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-700">
                <BookOpen className="h-3 sm:h-4 w-3 sm:w-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">Nursery to XII</span>
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
            <div className="relative bg-primary rounded-2xl p-2 sm:p-4 shadow-2xl">
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
          </motion.div>
        </div>

        {/* Three Pillars Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Academic Rigor */}
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-red-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-primary"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Academic Rigor
            </h3>
            <p className="text-sm sm:text-base text-charcoal leading-relaxed">
              Comprehensive CBSE curriculum enhanced with innovative teaching
              methods, critical thinking development, and personalized learning
              approaches.
            </p>
          </motion.div>

          {/* Holistic Growth */}
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-yellow-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-accent"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Holistic Growth
            </h3>
            <p className="text-sm sm:text-base text-charcoal leading-relaxed">
              Character development through sports, arts, cultural activities,
              and community service, nurturing confident and compassionate
              leaders.
            </p>
          </motion.div>

          {/* Future Readiness */}
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-red-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-primary sm:col-span-2 md:col-span-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg border-2 border-accent">
              <Rocket className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Future Readiness
            </h3>
            <p className="text-sm sm:text-base text-charcoal leading-relaxed">
              21st-century skills through technology integration, life skills
              training, and career guidance preparing students for tomorrow's
              challenges.
            </p>
          </motion.div>
        </motion.div>

        {/* Audience Pathways */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
              Find Your Path at Divine Academy
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Choose your journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* For Parents */}
            <Link href="/admissions" className="group block">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-accent">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  For Parents
                </h3>
                <p className="text-charcoal mb-4">
                  Discover our admission process, fees, and what makes DIA
                  special for your child's future.
                </p>
                <div className="flex items-center text-accent font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* For Students */}
            <Link href="/student-life" className="group block">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-primary">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  For Students
                </h3>
                <p className="text-charcoal mb-4">
                  Explore clubs, sports, events, and the vibrant student life
                  that awaits you at DIA.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Explore Life <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* For Alumni */}
            <Link href="/contact" className="group block">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-accent">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Alumni Network
                </h3>
                <p className="text-charcoal mb-4">
                  Stay connected with your alma mater and fellow graduates.
                  Share your success stories.
                </p>
                <div className="flex items-center text-accent font-semibold">
                  Connect <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements - Hidden on mobile, scaled on larger screens */}
      <div className="hidden sm:block absolute top-10 sm:top-20 right-4 sm:right-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-accent/20 rounded-full blur-xl" />
      <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-primary/15 rounded-full blur-xl" />
    </section>
  );
}
