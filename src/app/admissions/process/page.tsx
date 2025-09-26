"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  FileText,
  Users,
  CreditCard,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const processSteps = [
  {
    step: 1,
    title: "Initial Inquiry",
    description: "Submit your inquiry or visit our campus",
    duration: "Immediate",
    actions: [
      "Fill online inquiry form",
      "Campus visit & tour",
      "Meet our counselors",
      "Collect prospectus",
    ],
    icon: <FileText className="w-6 h-6" />,
    status: "active",
  },
  {
    step: 2,
    title: "Application Submission",
    description: "Complete the admission application form",
    duration: "1-2 days",
    actions: [
      "Fill detailed application form",
      "Upload required documents",
      "Pay application fee (₹500)",
      "Submit birth certificate",
    ],
    icon: <Users className="w-6 h-6" />,
    status: "pending",
  },
  {
    step: 3,
    title: "Assessment & Interview",
    description: "Student assessment and parent interaction",
    duration: "3-5 days",
    actions: [
      "Age-appropriate assessment",
      "Parent-principal interaction",
      "Student observation",
      "Previous school verification",
    ],
    icon: <CheckCircle className="w-6 h-6" />,
    status: "pending",
  },
  {
    step: 4,
    title: "Admission Confirmation",
    description: "Admission decision and seat confirmation",
    duration: "Within 7 days",
    actions: [
      "Admission letter issued",
      "Fee payment deadline",
      "Seat confirmation",
      "Welcome orientation",
    ],
    icon: <CreditCard className="w-6 h-6" />,
    status: "pending",
  },
];

const admissionTimeline = [
  {
    phase: "Phase 1",
    period: "November - December",
    title: "Early Registration",
    description: "Priority admission for existing families and referrals",
    perks: [
      "5% early bird discount",
      "Guaranteed seat allocation",
      "Priority class selection",
    ],
  },
  {
    phase: "Phase 2",
    period: "January - February",
    title: "General Admission",
    description: "Open admission for all applicants",
    perks: [
      "Regular fee structure",
      "Subject to seat availability",
      "Standard process timeline",
    ],
  },
  {
    phase: "Phase 3",
    period: "March - April",
    title: "Late Admission",
    description: "Final admission window (subject to availability)",
    perks: [
      "Limited seats available",
      "Expedited process",
      "Immediate enrollment",
    ],
  },
];

const ageRequirements = [
  { grade: "Pre-KG", age: "2.5 - 3.5 years", cutoffDate: "31st March" },
  { grade: "LKG", age: "3.5 - 4.5 years", cutoffDate: "31st March" },
  { grade: "UKG", age: "4.5 - 5.5 years", cutoffDate: "31st March" },
  { grade: "Class I", age: "5.5 - 6.5 years", cutoffDate: "31st March" },
  { grade: "Class II+", age: "As per CBSE norms", cutoffDate: "31st March" },
];

export default function AdmissionProcessPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Admission Process
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join the Divine International Academy family through our simple,
                transparent admission process. We're here to guide you every
                step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/apply">
                    <FileText className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Campus Visit
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Simple 4-Step Admission Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined process ensures a smooth admission experience
                for both students and parents
              </p>
            </motion.div>

            <div className="grid gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`relative overflow-hidden ${
                      step.step === activeStep
                        ? "ring-2 ring-blue-500 shadow-lg"
                        : "hover:shadow-md"
                    } transition-all duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div
                          className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                            step.step === activeStep
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-600"
                          } transition-colors duration-300`}
                        >
                          {step.icon}
                        </div>

                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-xl font-bold text-blue-900">
                              Step {step.step}: {step.title}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="bg-yellow-100 text-yellow-800"
                            >
                              <Clock className="w-3 h-3 mr-1" />
                              {step.duration}
                            </Badge>
                          </div>

                          <p className="text-gray-600 mb-4">
                            {step.description}
                          </p>

                          <div className="grid md:grid-cols-2 gap-2">
                            {step.actions.map((action, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                {action}
                              </div>
                            ))}
                          </div>
                        </div>

                        {step.step < processSteps.length && (
                          <div className="hidden md:flex items-center">
                            <ArrowRight className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Timeline */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Admission Timeline 2024-25
              </h2>
              <p className="text-gray-600">
                Plan your admission journey with our structured timeline
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {admissionTimeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                        {index + 1}
                      </div>
                      <CardTitle className="text-blue-900">
                        {phase.title}
                      </CardTitle>
                      <Badge variant="outline" className="mx-auto">
                        {phase.period}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-center">
                        {phase.description}
                      </p>
                      <ul className="space-y-2">
                        {phase.perks.map((perk, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Age Requirements
              </h2>
              <p className="text-gray-600">
                Grade-wise age criteria as per CBSE guidelines
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-blue-900">
                            Grade
                          </th>
                          <th className="px-6 py-4 text-left font-semibold text-blue-900">
                            Age Range
                          </th>
                          <th className="px-6 py-4 text-left font-semibold text-blue-900">
                            Cut-off Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ageRequirements.map((req, index) => (
                          <tr
                            key={req.grade}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 font-medium text-blue-900">
                              {req.grade}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {req.age}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {req.cutoffDate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Begin Your Child's Journey?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Start the admission process today or contact us for personalized
                guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/apply">
                    <FileText className="mr-2 h-5 w-5" />
                    Apply Online Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/admissions/fees">
                    <CreditCard className="mr-2 h-5 w-5" />
                    View Fee Structure
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Admissions
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
