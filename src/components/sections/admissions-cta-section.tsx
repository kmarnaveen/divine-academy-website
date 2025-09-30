"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CalendarDays,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const admissionSteps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out our online application form with required documents",
  },
  {
    icon: Users,
    title: "Entrance Assessment",
    description:
      "Age-appropriate assessment to understand your child's learning level",
  },
  {
    icon: CheckCircle,
    title: "Interview & Admission",
    description: "Parent-student interview followed by admission confirmation",
  },
];

const importantDates = [
  { event: "Application Opens", date: "January 15, 2025" },
  { event: "Entrance Test", date: "March 10, 2025" },
  { event: "Results Declaration", date: "March 20, 2025" },
  { event: "Admission Deadline", date: "April 15, 2025" },
];

export function AdmissionsCTASection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-accent text-white font-medium">
            🎓 Admissions Open for 2025-26
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Secure Your Child's Future Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join our community of learners and give your child the foundation
            for lifelong success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Admission Process */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">
                Simple Admission Process
              </h3>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          {step.title}
                        </h4>
                        <p className="text-blue-100">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary font-semibold flex-1"
                >
                  <Link
                    href="/apply"
                    className="flex items-center justify-center"
                  >
                    Apply Online Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-primary hover:bg-white hover:text-primary flex-1"
                >
                  <Link
                    href="/prospectus.pdf"
                    className="flex items-center justify-center"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Prospectus
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>Call: +91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>Mon-Sat: 9 AM - 5 PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Important Dates & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Important Dates */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CalendarDays className="h-5 w-5 text-accent" />
                  <h4 className="text-lg text-white font-semibold">
                    Important Dates
                  </h4>
                </div>
                <div className="space-y-3">
                  {importantDates.map((item, index) => (
                    <motion.div
                      key={item.event}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-blue-100">{item.event}</span>
                      <span className="font-semibold text-white">
                        {item.date}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Admission Highlights
                </h4>
                <div className="space-y-3 text-sm text-white">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>
                      Classes: Nursery to XII (Science, Commerce, Arts)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>CBSE Board Affiliation: 2131764</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Co-educational Institution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Transportation Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Scholarships for Meritorious Students</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
    </section>
  );
}
