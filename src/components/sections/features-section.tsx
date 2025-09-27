"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  GraduationCap,
  Palette,
  Trophy,
  Globe,
  Heart,
  Users,
  BookOpen,
  ArrowRight,
  Lightbulb,
  Target,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const signaturePrograms = [
  {
    icon: Lightbulb,
    title: "STEAM Innovation Lab",
    description:
      "Integrated Science, Technology, Engineering, Arts & Mathematics program fostering innovation, critical thinking, and creative problem-solving through hands-on projects.",
    highlight: "Award-Winning Program",
    color: "bg-red-100 text-primary border-red-200",
    href: "/academics/streams",
    badge: "New",
  },
  {
    icon: Globe,
    title: "Global Citizenship Program",
    description:
      "Model UN, international collaborations, and cross-cultural learning preparing students for global leadership and understanding diverse perspectives.",
    highlight: "International Recognition",
    color: "bg-yellow-100 text-accent border-yellow-200",
    href: "/academics/curriculum",
    badge: "Featured",
  },
  {
    icon: Target,
    title: "Life Skills Mastery",
    description:
      "Financial literacy, emotional intelligence, communication skills, and leadership development through real-world scenarios and practical applications.",
    highlight: "Industry Partnerships",
    color: "bg-red-50 text-primary border-red-100",
    href: "/academics",
    badge: "Essential",
  },
  {
    icon: Palette,
    title: "Creative Excellence Studio",
    description:
      "Professional-grade music, dance, drama, and visual arts programs with performance opportunities and competitions at state and national levels.",
    highlight: "State Champions",
    color: "bg-yellow-50 text-accent border-yellow-100",
    href: "/student-life/clubs",
    badge: "Elite",
  },
  {
    icon: Trophy,
    title: "Sports & Wellness Academy",
    description:
      "Olympic-standard training facilities with certified coaches, sports psychology, and nutrition guidance for aspiring athletes and fitness enthusiasts.",
    highlight: "District Champions",
    color: "bg-red-100 text-primary border-red-200",
    href: "/facilities/sports",
    badge: "Champions",
  },
  {
    icon: Heart,
    title: "Character Leadership Initiative",
    description:
      "Service learning, ethics workshops, and community engagement developing compassionate leaders who make positive impact in society.",
    highlight: "Community Impact",
    color: "bg-red-50 text-primary border-red-100",
    href: "/about/vision",
    badge: "Values",
  },
];

const stats = [
  { label: "Students Enrolled", value: "1000+", icon: Users },
  { label: "Faculty Members", value: "50+", icon: GraduationCap },
  { label: "Academic Programs", value: "15+", icon: BookOpen },
  { label: "Years of Excellence", value: "13+", icon: Trophy },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-accent/10 text-primary hover:bg-accent/10 border border-accent/20">
            🌟 Signature Programs at Divine Academy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Beyond Traditional Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our distinctive programs combine academic excellence with real-world skills, 
            preparing students not just for exams, but for life. Each program is designed 
            to unlock potential and ignite passion.
          </p>
        </motion.div>

        {/* Signature Programs Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {signaturePrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent/10 text-accent font-semibold">
                      {program.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="h-4 w-4 text-accent" />
                          <span className="text-sm font-semibold text-accent">
                            {program.highlight}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {program.description}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
                      >
                        <Link href={program.href} className="flex items-center">
                          Explore Program
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-red-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent/20">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold font-heading text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-charcoal font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
