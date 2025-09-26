"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Download,
  Calendar,
  AlertCircle,
  CheckCircle,
  IndianRupee,
  FileText,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const feeStructure = [
  {
    grade: "Pre-KG & LKG",
    annualFee: 45000,
    admissionFee: 5000,
    quarterly: 11250,
    monthly: 3750,
    transport: 18000,
    activities: 3000,
  },
  {
    grade: "UKG & Class I",
    annualFee: 50000,
    admissionFee: 5000,
    quarterly: 12500,
    monthly: 4167,
    transport: 18000,
    activities: 3500,
  },
  {
    grade: "Class II - V",
    annualFee: 55000,
    admissionFee: 7500,
    quarterly: 13750,
    monthly: 4583,
    transport: 20000,
    activities: 4000,
  },
  {
    grade: "Class VI - VIII",
    annualFee: 65000,
    admissionFee: 10000,
    quarterly: 16250,
    monthly: 5417,
    transport: 22000,
    activities: 5000,
  },
  {
    grade: "Class IX - X",
    annualFee: 75000,
    admissionFee: 12500,
    quarterly: 18750,
    monthly: 6250,
    transport: 24000,
    activities: 6000,
  },
  {
    grade: "Class XI - XII",
    annualFee: 85000,
    admissionFee: 15000,
    quarterly: 21250,
    monthly: 7083,
    transport: 26000,
    activities: 7500,
  },
];

const additionalCharges = [
  {
    category: "Laboratory Charges",
    items: [
      { name: "Science Lab (VI-XII)", amount: 2500, frequency: "Annual" },
      { name: "Computer Lab (All Classes)", amount: 2000, frequency: "Annual" },
      { name: "Language Lab (VI-XII)", amount: 1500, frequency: "Annual" },
    ],
  },
  {
    category: "Activity Charges",
    items: [
      { name: "Sports & Games", amount: 1500, frequency: "Annual" },
      { name: "Cultural Activities", amount: 1000, frequency: "Annual" },
      { name: "Field Trips", amount: 1200, frequency: "Annual" },
    ],
  },
  {
    category: "Examination Charges",
    items: [
      { name: "Internal Assessments", amount: 500, frequency: "Annual" },
      {
        name: "Board Exam Registration (X & XII)",
        amount: 2000,
        frequency: "One-time",
      },
      { name: "Report Cards & Certificates", amount: 300, frequency: "Annual" },
    ],
  },
];

const paymentPlans = [
  {
    title: "Annual Payment",
    discount: "5% Early Bird Discount",
    description: "Pay full year fees by March 31st",
    perks: [
      "5% discount on tuition fees",
      "Priority in all activities",
      "Free uniform set",
      "Complimentary ID card",
    ],
    recommended: true,
  },
  {
    title: "Quarterly Payment",
    discount: "2% Discount",
    description: "Pay in 4 installments throughout the year",
    perks: [
      "2% discount on tuition fees",
      "Flexible payment dates",
      "EMI convenience",
      "Online payment options",
    ],
    recommended: false,
  },
  {
    title: "Monthly Payment",
    discount: "No Discount",
    description: "Pay monthly fees by 10th of each month",
    perks: [
      "Maximum flexibility",
      "No large upfront payment",
      "Monthly budgeting",
      "Auto-debit facility",
    ],
    recommended: false,
  },
];

const scholarships = [
  {
    name: "Academic Excellence Scholarship",
    eligibility: "Students scoring 95%+ in previous class",
    benefit: "25% fee waiver on tuition",
    duration: "Valid for one academic year",
  },
  {
    name: "Sibling Discount",
    eligibility: "2nd child onwards in the same family",
    benefit: "15% discount on tuition fees",
    duration: "Throughout school tenure",
  },
  {
    name: "Sports Achievement Scholarship",
    eligibility: "State/National level sports achievements",
    benefit: "20% fee waiver on tuition",
    duration: "Valid for one academic year",
  },
  {
    name: "Staff Ward Concession",
    eligibility: "Children of school staff members",
    benefit: "40% discount on tuition fees",
    duration: "Throughout employment",
  },
];

export default function AdmissionFeesPage() {
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
                Fee Structure 2024-25
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transparent, competitive fees with flexible payment options and
                scholarship opportunities. Quality education that's worth every
                investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-5 w-5" />
                  Download Fee Structure
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/apply">
                    <FileText className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fee Structure Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Grade-wise Fee Structure
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive fee breakdown with multiple payment options to
                suit your convenience
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="px-4 py-4 text-left font-semibold">
                            Grade
                          </th>
                          <th className="px-4 py-4 text-center font-semibold">
                            <div className="flex items-center justify-center gap-1">
                              <IndianRupee className="w-4 h-4" />
                              Annual Fee
                            </div>
                          </th>
                          <th className="px-4 py-4 text-center font-semibold">
                            Admission Fee
                          </th>
                          <th className="px-4 py-4 text-center font-semibold">
                            Quarterly
                          </th>
                          <th className="px-4 py-4 text-center font-semibold">
                            Monthly
                          </th>
                          <th className="px-4 py-4 text-center font-semibold">
                            Transport
                          </th>
                          <th className="px-4 py-4 text-center font-semibold">
                            Activities
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructure.map((fee, index) => (
                          <motion.tr
                            key={fee.grade}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`${
                              index % 2 === 0 ? "bg-blue-50/50" : "bg-white"
                            } hover:bg-yellow-50/50 transition-colors duration-200`}
                          >
                            <td className="px-4 py-4 font-semibold text-blue-900">
                              {fee.grade}
                            </td>
                            <td className="px-4 py-4 text-center font-bold text-green-700">
                              ₹{fee.annualFee.toLocaleString()}
                            </td>
                            <td className="px-4 py-4 text-center">
                              ₹{fee.admissionFee.toLocaleString()}
                            </td>
                            <td className="px-4 py-4 text-center">
                              ₹{fee.quarterly.toLocaleString()}
                            </td>
                            <td className="px-4 py-4 text-center">
                              ₹{fee.monthly.toLocaleString()}
                            </td>
                            <td className="px-4 py-4 text-center">
                              ₹{fee.transport.toLocaleString()}
                            </td>
                            <td className="px-4 py-4 text-center">
                              ₹{fee.activities.toLocaleString()}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <strong>Note:</strong> All fees are in Indian Rupees.
                    Transport charges are optional and route-specific. Activity
                    charges cover sports, cultural events, and co-curricular
                    programs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Plans */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Flexible Payment Plans
              </h2>
              <p className="text-gray-600">
                Choose the payment option that works best for your family
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {paymentPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full relative ${
                      plan.recommended
                        ? "ring-2 ring-yellow-400 shadow-lg"
                        : "hover:shadow-md"
                    } transition-all duration-300`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-yellow-500 text-white">
                          Recommended
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-blue-900">
                        {plan.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="mx-auto text-green-700 border-green-300"
                      >
                        {plan.discount}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-center">
                        {plan.description}
                      </p>
                      <ul className="space-y-2">
                        {plan.perks.map((perk, idx) => (
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

        {/* Additional Charges */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Additional Charges
              </h2>
              <p className="text-gray-600">
                Optional services and facilities with transparent pricing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {additionalCharges.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-blue-900 text-center">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                          >
                            <div>
                              <div className="font-medium text-sm">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.frequency}
                              </div>
                            </div>
                            <div className="font-semibold text-blue-900">
                              ₹{item.amount.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Scholarships & Concessions
              </h2>
              <p className="text-gray-600">
                Merit-based scholarships and family-friendly concessions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        {scholarship.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-sm text-gray-700">
                            Eligibility:{" "}
                          </span>
                          <span className="text-sm">
                            {scholarship.eligibility}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-sm text-gray-700">
                            Benefit:{" "}
                          </span>
                          <span className="text-sm font-semibold text-green-700">
                            {scholarship.benefit}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-sm text-gray-700">
                            Duration:{" "}
                          </span>
                          <span className="text-sm">
                            {scholarship.duration}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Calculator CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Calculate Your Total Investment
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Use our fee calculator to estimate total costs including
                optional services and applicable discounts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Calculator className="mr-2 h-5 w-5" />
                  Fee Calculator
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/admissions/process">
                    <FileText className="mr-2 h-5 w-5" />
                    Admission Process
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Apply Now
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
