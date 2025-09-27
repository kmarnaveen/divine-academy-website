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
  MapPin,
  Shield,
  Trophy,
  Target,
  Star,
} from "lucide-react";

const admissionProcess = [
  {
    step: 1,
    title: "Application Submission",
    description: "Submit the completed application form with required documents online or visit our campus",
    icon: FileText,
    timeline: "Jan 15 - Apr 15, 2025",
    duration: "5 minutes online",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Age-appropriate entrance test and friendly interaction session to understand your child",
    icon: BookOpen,
    timeline: "Mar 10, 2025",
    duration: "45 minutes",
  },
  {
    step: 3,
    title: "Parent Interview",
    description: "Informal discussion about child's educational needs, interests, and our school policies",
    icon: Users,
    timeline: "Mar 15-18, 2025",
    duration: "30 minutes",
  },
  {
    step: 4,
    title: "Admission Confirmation",
    description: "Merit list publication, admission formalities, and welcome to the DIA family!",
    icon: CheckCircle,
    timeline: "Mar 20, 2025",
    duration: "Same day",
  },
];

const feeStructure = [
  {
    grade: "Nursery - UKG",
    admissionFee: "₹5,000",
    annualFee: "₹36,000",
    examFee: "₹1,200",
    total: "₹42,200",
  },
  {
    grade: "Class I - V",
    admissionFee: "₹8,000",
    annualFee: "₹48,000",
    examFee: "₹1,500",
    total: "₹57,500",
  },
  {
    grade: "Class VI - VIII",
    admissionFee: "₹10,000",
    annualFee: "₹60,000",
    examFee: "₹2,000",
    total: "₹72,000",
  },
  {
    grade: "Class IX - X",
    admissionFee: "₹12,000",
    annualFee: "₹72,000",
    examFee: "₹3,000",
    total: "₹87,000",
  },
  {
    grade: "Class XI - XII",
    admissionFee: "₹15,000",
    annualFee: "₹84,000",
    examFee: "₹4,000",
    total: "₹103,000",
  },
];

const requiredDocuments = [
  {
    document: "Birth Certificate",
    description: "Municipal/Government issued birth certificate",
    icon: FileText,
    mandatory: true,
  },
  {
    document: "Previous School Records",
    description: "Transfer certificate and progress report (for grades 1 and above)",
    icon: GraduationCap,
    mandatory: true,
  },
  {
    document: "Passport Size Photos",
    description: "4 recent colored photographs of the child",
    icon: Users,
    mandatory: true,
  },
  {
    document: "Address Proof",
    description: "Aadhaar card/Passport/Utility bill of parent/guardian",
    icon: FileText,
    mandatory: true,
  },
  {
    document: "Medical Certificate",
    description: "Health checkup report from registered medical practitioner",
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

const whyChooseUs = [
  {
    icon: Trophy,
    title: "Proven Excellence",
    description: "95% board exam results with 80% distinction rate",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "1:25 teacher-student ratio ensuring individual focus",
  },
  {
    icon: Shield,
    title: "Complete Safety",
    description: "360° safety protocols with GPS tracking and CCTV",
  },
  {
    icon: Target,
    title: "Holistic Development",
    description: "Academic excellence + character building + life skills",
  },
];

export default function AdmissionsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-red-900 to-red-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] opacity-15" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <Badge className="mb-6 bg-accent text-primary text-lg px-6 py-2">
                  🎓 Admissions Open 2025-26 | Limited Seats Available
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                  Your Child Deserves the{" "}
                  <span className="text-accent">DIA Advantage</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Join 1000+ families who've chosen excellence. Our simple 4-step 
                  admission process ensures your child starts their transformational 
                  journey with us smoothly.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-blue-200">Board Results</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">1:25</div>
                    <div className="text-sm text-blue-200">Teacher Ratio</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">13+</div>
                    <div className="text-sm text-blue-200">Years Trust</div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Call-to-Action Card */}
              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Start Your Journey Today</h3>
                  <p className="text-gray-600">Book a campus visit and see why families choose DIA</p>
                </div>
                
                <div className="space-y-4">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg py-3">
                    <Link href="#admission-form" className="flex items-center justify-center">
                      Apply Now - It's Free! <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg py-3">
                    <Link href="#campus-visit" className="flex items-center justify-center">
                      Schedule Campus Visit <Calendar className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  ✓ No application fee  •  ✓ Same-day response  •  ✓ Personal guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DIA - Quick Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Families Choose DIA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just promise excellence—we deliver it through proven programs and personalized attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold">
              <Link href="/why-dia" className="flex items-center">
                Learn More About DIA <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Simple 4-Step Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've made admissions stress-free. Follow these simple steps to secure your child's future with us.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {admissionProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={process.step} className="relative">
                  {/* Connector Line */}
                  {index !== admissionProcess.length - 1 && (
                    <div className="hidden lg:block absolute left-8 top-20 w-px h-20 bg-gradient-to-b from-accent to-primary" />
                  )}
                  
                  <Card className="mb-8 lg:mb-12 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Step Icon & Number */}
                        <div className="flex items-center gap-4 lg:gap-6">
                          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                            {process.step}
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-2xl font-bold text-primary mb-2 lg:mb-0">
                              {process.title}
                            </h3>
                            <div className="flex flex-col lg:items-end gap-1">
                              <Badge className="bg-emerald-100 text-emerald-800 w-fit">
                                {process.timeline}
                              </Badge>
                              <span className="text-sm text-gray-500">{process.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4">
              <Link href="#admission-form" className="flex items-center">
                Start Application Process <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Keep these documents ready to make your admission process smooth and quick.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {requiredDocuments.map((doc) => {
              const Icon = doc.icon;
              return (
                <Card
                  key={doc.document}
                  className={`p-6 hover:shadow-lg transition-all duration-300 ${
                    doc.mandatory
                      ? "border-l-4 border-red-400 bg-red-50/30"
                      : "border-l-4 border-green-400 bg-green-50/30"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        doc.mandatory ? "bg-red-100" : "bg-green-100"
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          doc.mandatory ? "text-red-600" : "text-green-600"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {doc.document}
                          </h3>
                          <Badge
                            className={`text-xs ${
                              doc.mandatory
                                ? "bg-red-100 text-red-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {doc.mandatory ? "Required" : "Optional"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-3">
              Need Help with Documents?
            </h3>
            <p className="text-gray-600 mb-6">
              Our admission counselors are here to guide you through the documentation process. 
              Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="tel:+919876543210" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: +91 98765 43210
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="mailto:admissions@divineacademy.edu.in" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email: admissions@divineacademy.edu.in
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Transparent Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality education at affordable fees. No hidden charges, complete transparency in our fee structure.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Grade</th>
                        <th className="px-6 py-4 text-left font-semibold">Admission Fee</th>
                        <th className="px-6 py-4 text-left font-semibold">Annual Fee</th>
                        <th className="px-6 py-4 text-left font-semibold">Exam Fee</th>
                        <th className="px-6 py-4 text-left font-semibold">Total (First Year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr
                          key={fee.grade}
                          className={`border-b ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:bg-blue-50 transition-colors`}
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {fee.grade}
                          </td>
                          <td className="px-6 py-4 text-gray-700">{fee.admissionFee}</td>
                          <td className="px-6 py-4 text-gray-700">{fee.annualFee}</td>
                          <td className="px-6 py-4 text-gray-700">{fee.examFee}</td>
                          <td className="px-6 py-4 font-bold text-primary">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-start gap-4">
                <IndianRupee className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Fee Payment & Scholarships
                  </h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Fees can be paid in quarterly installments</li>
                    <li>• Merit scholarships available for exceptional students</li>
                    <li>• Sibling discount: 10% on annual fees for second child onwards</li>
                    <li>• Payment methods: Cash, Cheque, Online Transfer, UPI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-800 text-white" id="admission-form">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Award className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Child's Future?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the DIA family and give your child the advantage of quality education, 
              personal attention, and holistic development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4">
                <Link href="/apply" className="flex items-center">
                  Apply Online Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
                <Link href="/contact" className="flex items-center">
                  Schedule Campus Visit <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
                <Link href="/prospectus.pdf" className="flex items-center">
                  Download Prospectus <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Located in Firozabad, UP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Admissions Open Till April 15</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>CBSE Affiliated (Code: 2131764)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export const metadata = {
  title: "Admissions 2025-26 | Divine International Academy Firozabad",
  description: "Secure admission to Divine International Academy for 2025-26. CBSE affiliated school with excellent results, modern facilities, and holistic education. Apply now!",
  keywords: "DIA admissions, CBSE school admissions Firozabad, school admission 2025, Divine International Academy fees, admission process",
};