"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  Users,
  Trophy,
  Heart,
  Shield,
  Zap,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Globe,
  Lightbulb,
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: Lightbulb,
    title: "Innovation-First Learning",
    description:
      "Our STEM Innovation Lab isn't just a classroom—it's a laboratory for future inventors. Students design robots, conduct scientific experiments, and solve real-world problems using cutting-edge technology.",
    comparison: "While others teach theory, we build inventors",
    stats: "95% of our Grade 10 students create working prototypes annually",
    color: "bg-accent-100 text-accent-600 border-accent-200",
  },
  {
    icon: Globe,
    title: "Global Perspective, Local Values",
    description:
      "Through our Model UN program and international collaborations, students gain global awareness while staying rooted in Indian values and culture.",
    comparison: "Beyond textbook knowledge to world-ready citizens",
    stats: "Students from 12+ countries in our exchange programs",
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description:
      "Every child is unique. Our adaptive curriculum and small class sizes (max 25 students) ensure personalized attention and customized learning experiences.",
    comparison: "Individual growth over mass production",
    stats: "1:25 teacher-student ratio vs industry average 1:35",
    color: "bg-purple-100 text-purple-600 border-purple-200",
  },
  {
    icon: Shield,
    title: "Safety & Well-being First",
    description:
      "360° safety protocol with GPS-enabled transport, CCTV monitoring, trained counselors, and comprehensive health programs ensure your child's complete well-being.",
    comparison: "Peace of mind for every parent",
    stats: "Zero safety incidents in 13+ years of operation",
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    icon: TrendingUp,
    title: "Proven Academic Excellence",
    description:
      "95% board exam pass rate with 80% students scoring distinction. Our alumni are studying in top universities across India and abroad.",
    comparison: "Results that speak louder than promises",
    stats: "95% Board Results | 80% Distinction Rate",
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    icon: Heart,
    title: "Character Above Marks",
    description:
      "Leadership programs, community service, and ethics education develop not just intelligent students, but compassionate human beings who make a positive impact.",
    comparison: "Shaping leaders, not just learners",
    stats: "500+ hours of community service by our students annually",
    color: "bg-rose-100 text-rose-600 border-rose-200",
  },
];

const parentConcerns = [
  {
    concern: "Is my child getting individual attention?",
    answer: "With our 1:25 teacher-student ratio and personalized learning paths, every child receives focused attention and customized support.",
    icon: Users
  },
  {
    concern: "How does DIA prepare students for competitive exams?",
    answer: "Our specialized coaching programs, dedicated faculty, and proven track record ensure students excel in JEE, NEET, and other competitive examinations.",
    icon: Trophy
  },
  {
    concern: "What about safety and transportation?",
    answer: "GPS-enabled buses, trained drivers, CCTV monitoring, and strict safety protocols provide complete peace of mind for parents.",
    icon: Shield
  },
  {
    concern: "Are co-curricular activities given equal importance?",
    answer: "Our state-level champions in sports, arts, and cultural activities prove our commitment to holistic development beyond academics.",
    icon: Award
  }
];

const testimonials = [
  {
    quote:
      "DIA transformed my daughter from a shy introvert to a confident leader. The personalized attention and innovative programs made all the difference.",
    parent: "Mrs. Priya Sharma",
    student: "Ananya Sharma, Class 10",
    achievement: "School Captain & State-level Science Olympiad Winner",
    image: "/testimonials/parent-1.jpg",
  },
  {
    quote:
      "The STEM Innovation Lab ignited my son's passion for robotics. He's now designing solutions for real-world problems at just 15!",
    parent: "Mr. Rajesh Kumar",
    student: "Arjun Kumar, Class 9",
    achievement: "National Robotics Competition Finalist",
    image: "/testimonials/parent-2.jpg",
  },
  {
    quote:
      "DIA's global perspective program opened doors we never imagined. Our daughter is now part of an international youth leadership forum.",
    parent: "Dr. Meena Gupta",
    student: "Kavya Gupta, Class 11",
    achievement: "Youth Ambassador, UN Model Program",
    image: "/testimonials/parent-3.jpg",
  },
];

export function WhyDIASection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 text-lg px-6 py-2">
              🏆 Why Families Choose Divine International Academy
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary mb-6 leading-tight">
              More Than Just A School—
              <br />
              <span className="text-accent relative">
                A Launchpad for Life
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -skew-x-12" />
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              While other schools focus on cramming information, we focus on
              <span className="font-bold text-primary">
                {" "}
                unleashing potential
              </span>
              . Here's why 1000+ families trust us with their most precious
              gift—their children's future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4"
              >
                <Link href="/admissions" className="flex items-center">
                  Schedule Campus Visit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4"
              >
                <Link href="/contact" className="flex items-center">
                  Talk to Our Counselor <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes DIA Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Makes DIA Different?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just claim to be different—we prove it every day through
              innovative programs, personalized attention, and results that
              speak for themselves.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${item.color}`}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {item.description}
                        </p>

                        <div className="border-t pt-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-accent" />
                            <span className="text-sm font-semibold text-accent">
                              {item.comparison}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-orange-500" />
                            <span className="text-xs text-gray-600">
                              {item.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Addressing Parent Concerns */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              We Understand Your Concerns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As parents ourselves, we know the questions that keep you up at
              night. Here are honest answers to your most important concerns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {parentConcerns.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.concern}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-accent">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-primary">
                            {item.concern}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hear From DIA Families
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from real parents who've seen their children
              transform and thrive at DIA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.parent}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-gray-700 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="border-t pt-4">
                        <div className="font-semibold text-primary">
                          {testimonial.parent}
                        </div>
                        <div className="text-sm text-gray-600">
                          Parent of {testimonial.student}
                        </div>
                        <div className="text-xs text-accent font-medium mt-2">
                          {testimonial.achievement}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Give Your Child the DIA Advantage?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join 1000+ families who've made the right choice. Schedule a
              campus visit and see the difference yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4"
              >
                <Link href="/admissions" className="flex items-center">
                  Book Campus Visit <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4"
              >
                <Link href="/prospectus.pdf" className="flex items-center">
                  Download Prospectus <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Located in Firozabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Admissions Open</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>CBSE Affiliated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}