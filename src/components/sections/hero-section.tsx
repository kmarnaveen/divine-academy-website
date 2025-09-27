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
  Heart,
  Target,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 pt-16 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-red-100/30 bg-[size:20px_20px] opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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

            {/* Hero Statement */}
            <div className="space-y-6">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Shaping Tomorrow's{" "}
                <span className="text-accent relative">
                  Leaders
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -skew-x-12" />
                </span>{" "}
                Today
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                At Divine International Academy, students don't just learn — they{" "}
                <span className="font-bold text-primary">explore</span>,{" "}
                <span className="font-bold text-primary">build</span>, and{" "}
                <span className="font-bold text-primary">flourish</span> through 
                activity-based education that prepares them for tomorrow's world.
              </motion.p>
            </div>

            {/* Proof & Trust Stats */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">13+</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">Board Results</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Expert Faculty</div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <blockquote className="text-sm italic text-charcoal text-center">
                  "Divine Academy transformed my child's learning journey. The focus on 
                  practical learning and character development is exceptional."
                </blockquote>
                <p className="text-xs text-gray-600 text-center mt-2">
                  — Mrs. Priya Sharma, Parent of Class 10 Student
                </p>
              </div>
            </motion.div>

            {/* Primary CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4 shadow-xl"
              >
                <Link href="/admissions" className="flex items-center">
                  Visit Campus <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4"
              >
                <Link href="/prospectus.pdf" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Get Prospectus
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pt-4 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4 text-accent" />
                <span>CBSE Code: 2131764</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-accent" />
                <span>Co-Educational</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <BookOpen className="h-4 w-4 text-accent" />
                <span>Nursery to XII</span>
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
        
        {/* Three Pillars Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Academic Rigor */}
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Academic Rigor</h3>
            <p className="text-charcoal leading-relaxed">
              Comprehensive CBSE curriculum enhanced with innovative teaching methods, 
              critical thinking development, and personalized learning approaches.
            </p>
          </motion.div>

          {/* Holistic Growth */}
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-yellow-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Holistic Growth</h3>
            <p className="text-charcoal leading-relaxed">
              Character development through sports, arts, cultural activities, and 
              community service, nurturing confident and compassionate leaders.
            </p>
          </motion.div>

          {/* Future Readiness */}
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-accent">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Future Readiness</h3>
            <p className="text-charcoal leading-relaxed">
              21st-century skills through technology integration, life skills training, 
              and career guidance preparing students for tomorrow's challenges.
            </p>
          </motion.div>
        </motion.div>

        {/* Audience Pathways */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-red-50 to-yellow-50 rounded-3xl p-8 border border-red-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Find Your Path at Divine Academy</h2>
            <p className="text-gray-600 text-lg">Choose your journey with us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* For Parents */}
            <Link href="/admissions" className="group block">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-accent">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">For Parents</h3>
                <p className="text-charcoal mb-4">Discover our admission process, fees, and what makes DIA special for your child's future.</p>
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
                <h3 className="text-xl font-bold text-primary mb-3">For Students</h3>
                <p className="text-charcoal mb-4">Explore clubs, sports, events, and the vibrant student life that awaits you at DIA.</p>
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
                <h3 className="text-xl font-bold text-primary mb-3">Alumni Network</h3>
                <p className="text-charcoal mb-4">Stay connected with your alma mater and fellow graduates. Share your success stories.</p>
                <div className="flex items-center text-accent font-semibold">
                  Connect <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
    </section>
  );
}
