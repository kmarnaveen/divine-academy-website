import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Trophy,
  Users,
  ArrowRight,
  Award,
  Target,
  Brain,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Music,
  ChevronRight,
} from "lucide-react";

const subjects = [
  {
    category: "Primary (Classes I-V)",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "EVS",
      "Art & Craft",
      "Physical Education",
      "Music",
    ],
  },
  {
    category: "Middle (Classes VI-VIII)",
    icon: Brain,
    color: "bg-emerald-100 text-emerald-600",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Science",
      "Sanskrit",
      "Art Education",
    ],
  },
  {
    category: "Secondary (Classes IX-X)",
    icon: Microscope,
    color: "bg-purple-100 text-purple-600",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Information Technology",
      "Sanskrit",
      "Art Education",
    ],
  },
  {
    category: "Senior Secondary (Classes XI-XII)",
    icon: GraduationCap,
    color: "bg-orange-100 text-orange-600",
    subjects: [
      "English Core",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Computer Science",
      "Business Studies",
      "Accountancy",
      "Economics",
    ],
  },
];

const achievements = [
  {
    title: "CBSE Board Results 2024",
    description: "95% pass rate with distinction",
    icon: Trophy,
    highlight: "95%",
  },
  {
    title: "Science Olympiad",
    description: "State level winners in multiple categories",
    icon: Award,
    highlight: "State Level",
  },
  {
    title: "Academic Excellence",
    description: "Top 10 schools in district ranking",
    icon: Target,
    highlight: "Top 10",
  },
];

export default function AcademicsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              Academic Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Comprehensive CBSE Education
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From Nursery to Class XII, we provide a well-rounded education
              that balances academic rigor with practical learning and character
              development.
            </p>
          </div>
        </div>
      </section>

      {/* CBSE Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              CBSE Curriculum Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum follows the CBSE framework, ensuring students
              receive nationally recognized education with global perspectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {subjects.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card
                  key={level.category}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-full ${level.color} flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold font-heading text-primary">
                        {level.category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {level.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center space-x-2"
                        >
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span className="text-gray-600 text-sm">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Key Features */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-heading text-primary text-center mb-8">
              Our Academic Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Conceptual Learning
                </h4>
                <p className="text-gray-600 text-sm">
                  Focus on understanding concepts rather than rote memorization
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Skill Development
                </h4>
                <p className="text-gray-600 text-sm">
                  21st-century skills including critical thinking and
                  problem-solving
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Individual Attention
                </h4>
                <p className="text-gray-600 text-sm">
                  Small class sizes ensuring personalized learning experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Senior Secondary Streams
            </h2>
            <p className="text-lg text-gray-600">
              Choose from Science and Commerce streams in Classes XI & XII
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Microscope className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary mb-2">
                    Science Stream
                  </h3>
                  <p className="text-gray-600">
                    PCM & PCB combinations available
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Core Subjects:
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Physics, Chemistry, Mathematics</li>
                      <li>• Physics, Chemistry, Biology</li>
                      <li>• English Core</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Career Paths:
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Engineering & Technology</li>
                      <li>• Medical & Healthcare</li>
                      <li>• Research & Development</li>
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/academics/streams/science">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Calculator className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary mb-2">
                    Commerce Stream
                  </h3>
                  <p className="text-gray-600">Business & Economics focus</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Core Subjects:
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Business Studies</li>
                      <li>• Accountancy & Economics</li>
                      <li>• Mathematics (Optional)</li>
                      <li>• English Core</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Career Paths:
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Business & Management</li>
                      <li>• Banking & Finance</li>
                      <li>• Chartered Accountancy</li>
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-green-600 hover:bg-green-700"
                >
                  <Link href="/academics/streams/commerce">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Academic Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Our students consistently excel in academics and competitive
              examinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2 font-heading">
                      {achievement.highlight}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/academics/achievements">
                View All Achievements <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Join Our Academic Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Give your child the foundation for academic success and lifelong
            learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Link href="/apply">Apply for Admission</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Schedule Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
