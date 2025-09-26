import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileText,
  Users,
  CheckCircle,
  Calendar,
  IndianRupee,
  Award,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Download,
  AlertCircle,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const admissionProcess = [
  {
    step: 1,
    title: "Application Submission",
    description:
      "Submit the completed application form with required documents",
    icon: FileText,
    timeline: "Jan 15 - Apr 15, 2025",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Age-appropriate entrance test and interaction session",
    icon: BookOpen,
    timeline: "Mar 10, 2025",
  },
  {
    step: 3,
    title: "Parent Interview",
    description:
      "Discussion about child's educational needs and school policies",
    icon: Users,
    timeline: "Mar 15-18, 2025",
  },
  {
    step: 4,
    title: "Admission Confirmation",
    description: "Merit list publication and admission formalities",
    icon: CheckCircle,
    timeline: "Mar 20, 2025",
  },
];

const feeStructure = [
  {
    class: "Nursery - KG II",
    admissionFee: "5,000",
    tuitionFee: "2,500",
    developmentFee: "1,000",
    total: "8,500",
  },
  {
    class: "Class I - V",
    admissionFee: "7,500",
    tuitionFee: "3,000",
    developmentFee: "1,200",
    total: "11,700",
  },
  {
    class: "Class VI - VIII",
    admissionFee: "10,000",
    tuitionFee: "3,500",
    developmentFee: "1,500",
    total: "15,000",
  },
  {
    class: "Class IX - X",
    admissionFee: "12,500",
    tuitionFee: "4,000",
    developmentFee: "1,800",
    total: "18,300",
  },
  {
    class: "Class XI - XII",
    admissionFee: "15,000",
    tuitionFee: "4,500",
    developmentFee: "2,000",
    total: "21,500",
  },
];

const requiredDocuments = [
  {
    document: "Birth Certificate",
    description: "Original and photocopy (Government issued)",
    icon: Award,
    mandatory: true,
  },
  {
    document: "Previous School Records",
    description: "Transfer certificate and progress report",
    icon: GraduationCap,
    mandatory: true,
  },
  {
    document: "Passport Size Photos",
    description: "4 recent colored photographs",
    icon: Users,
    mandatory: true,
  },
  {
    document: "Address Proof",
    description: "Aadhaar card/Passport/Utility bill",
    icon: FileText,
    mandatory: true,
  },
  {
    document: "Medical Certificate",
    description: "Health checkup report from registered doctor",
    icon: CheckCircle,
    mandatory: true,
  },
  {
    document: "Caste Certificate",
    description: "For reserved category students (if applicable)",
    icon: Award,
    mandatory: false,
  },
];

export default function AdmissionsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              🎓 Admissions Open 2025-26
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Join Divine International Academy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Secure your child's future with quality CBSE education. Admissions
              are now open for the academic year 2025-26.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary"
              >
                <Link href="/apply">Apply Online Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/prospectus.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Prospectus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Important Admission Dates
            </h2>
            <p className="text-lg text-gray-600">
              Mark these important dates in your calendar for a smooth admission
              process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Jan 15, 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Application Opens</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Mar 10, 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Entrance Test</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Mar 20, 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Results Declaration</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Apr 15, 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Last Date</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 mt-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Important Notice
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Early applications are encouraged as seats are limited. Late
                    applications will be considered based on seat availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600">
              Our simple and transparent admission process ensures a smooth
              experience for parents and students
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {admissionProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex items-center">
                    <Card className="w-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                              {step.step}
                            </div>
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                              <Icon className="h-6 w-6 text-accent" />
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {step.description}
                            </p>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-accent" />
                              <span className="text-sm text-accent font-medium">
                                {step.timeline}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {index < admissionProcess.length - 1 && (
                      <div className="w-8 flex justify-center">
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Fee Structure 2025-26
            </h2>
            <p className="text-lg text-gray-600">
              Transparent and competitive fee structure with no hidden charges
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">
                          Class
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          <div className="flex items-center justify-center space-x-1">
                            <IndianRupee className="h-4 w-4" />
                            <span>Admission Fee</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          <div className="flex items-center justify-center space-x-1">
                            <IndianRupee className="h-4 w-4" />
                            <span>Monthly Tuition</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          <div className="flex items-center justify-center space-x-1">
                            <IndianRupee className="h-4 w-4" />
                            <span>Development Fee</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          <div className="flex items-center justify-center space-x-1">
                            <IndianRupee className="h-4 w-4" />
                            <span>Total (First Month)</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr
                          key={fee.class}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {fee.class}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-700">
                            {fee.admissionFee}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-700">
                            {fee.tuitionFee}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-700">
                            {fee.developmentFee}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-primary">
                            {fee.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">
                    Additional Charges
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      • Transport Fee: ₹800-1,200/month (depending on route)
                    </li>
                    <li>• Books & Uniform: ₹3,000-5,000 (one-time)</li>
                    <li>• Activity Fee: ₹500/month</li>
                    <li>• Examination Fee: ₹200/exam</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">
                    Payment Terms
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Fees payable by 10th of every month</li>
                    <li>• Late payment charges: ₹100 after due date</li>
                    <li>• Sibling discount: 10% on tuition fee</li>
                    <li>
                      • Merit scholarships available for deserving students
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600">
              Please ensure all documents are ready before starting the
              application process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {requiredDocuments.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <Card key={doc.document} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {doc.document}
                            </h3>
                            {doc.mandatory && (
                              <Badge className="bg-red-100 text-red-600 text-xs">
                                Required
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Help with Admissions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our admissions team is here to assist you throughout the process
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-blue-100 text-sm">+91 9876543211</p>
                  <p className="text-blue-100 text-xs">Mon-Sat: 9 AM - 5 PM</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-blue-100 text-sm">
                    admissions@divineacademy.edu.in
                  </p>
                  <p className="text-blue-100 text-xs">24-hour response time</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Visit Campus</h3>
                  <p className="text-blue-100 text-sm">Schedule a tour</p>
                  <p className="text-blue-100 text-xs">
                    See facilities firsthand
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary"
              >
                <Link href="/apply">Start Application</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Contact Admissions Office</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
