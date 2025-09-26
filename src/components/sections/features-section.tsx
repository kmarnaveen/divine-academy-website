"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  GraduationCap,
  Microscope,
  Palette,
  Trophy,
  Bus,
  Heart,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "CBSE Excellence",
    description:
      "Comprehensive CBSE curriculum from Nursery to Class 12 with experienced faculty and proven results.",
    color: "bg-blue-100 text-blue-600",
    href: "/academics",
  },
  {
    icon: Microscope,
    title: "Modern Labs",
    description:
      "State-of-the-art science labs, computer labs, and digital classrooms for hands-on learning.",
    color: "bg-emerald-100 text-emerald-600",
    href: "/facilities/labs",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description:
      "Music, dance, art, and craft programs to nurture creativity and artistic expression.",
    color: "bg-purple-100 text-purple-600",
    href: "/student-life/clubs",
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description:
      "Professional sports facilities and coaching for physical fitness and competitive excellence.",
    color: "bg-orange-100 text-orange-600",
    href: "/facilities/sports",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    description:
      "GPS-enabled school buses with trained drivers ensuring safe commute for all students.",
    color: "bg-cyan-100 text-cyan-600",
    href: "/facilities/transport",
  },
  {
    icon: Heart,
    title: "Values Education",
    description:
      "Character building through moral values, ethics, and life skills development programs.",
    color: "bg-rose-100 text-rose-600",
    href: "/about/vision",
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
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            Why Choose Divine International Academy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Nurturing Excellence in Every Child
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From academics to character development, we provide a comprehensive
            educational experience that prepares students for success in the
            21st century.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="p-0 h-auto text-primary hover:text-primary/80 font-medium group/btn"
                      >
                        <Link href={feature.href} className="flex items-center">
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
          className="bg-white rounded-2xl p-8 shadow-lg"
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
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold font-heading text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
