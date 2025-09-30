"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Microscope,
  TrendingUp,
  BookOpen,
  Users,
  Target,
  Award,
  Atom,
  Calculator,
  Building,
  Palette,
  Globe,
  Brain,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const streams = [
  {
    id: "science",
    name: "Science Stream",
    description:
      "Comprehensive science education with PCM/PCB combinations for engineering and medical aspirants",
    icon: <Microscope className="w-8 h-8" />,
    color: "bg-primary",
    combinations: [
      {
        name: "Physics, Chemistry, Mathematics (PCM)",
        code: "PCM",
        suitableFor: "Engineering, Architecture, Computer Science",
        careerPaths: [
          "Engineering",
          "Architecture",
          "Computer Science",
          "Data Science",
          "Research",
          "Defence",
        ],
        subjects: [
          "Physics",
          "Chemistry",
          "Mathematics",
          "English",
          "Physical Education",
        ],
      },
      {
        name: "Physics, Chemistry, Biology (PCB)",
        code: "PCB",
        suitableFor: "Medical, Life Sciences, Biotechnology",
        careerPaths: [
          "Medicine",
          "Dentistry",
          "Pharmacy",
          "Biotechnology",
          "Life Sciences",
          "Research",
        ],
        subjects: [
          "Physics",
          "Chemistry",
          "Biology",
          "English",
          "Physical Education",
        ],
      },
      {
        name: "Physics, Chemistry, Math, Biology (PCMB)",
        code: "PCMB",
        suitableFor: "Both Engineering & Medical preparation",
        careerPaths: [
          "All Engineering fields",
          "All Medical fields",
          "Research",
          "Multi-disciplinary careers",
        ],
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
      },
    ],
  },
  {
    id: "commerce",
    name: "Commerce Stream",
    description:
      "Business-focused education preparing students for management, finance, and entrepreneurship",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-primary",
    combinations: [
      {
        name: "Business Studies, Accountancy, Economics",
        code: "BAE",
        suitableFor: "Business Management, Finance, Economics",
        careerPaths: [
          "CA/CS/CMA",
          "Banking & Finance",
          "Business Management",
          "Economics",
          "Entrepreneurship",
        ],
        subjects: [
          "Business Studies",
          "Accountancy",
          "Economics",
          "English",
          "Mathematics/Physical Education",
        ],
      },
      {
        name: "Business Studies, Accountancy, Mathematics",
        code: "BAM",
        suitableFor: "Commerce with strong quantitative skills",
        careerPaths: [
          "Statistical Analysis",
          "Data Analytics",
          "Actuarial Science",
          "Financial Modeling",
        ],
        subjects: [
          "Business Studies",
          "Accountancy",
          "Mathematics",
          "English",
          "Economics/Physical Education",
        ],
      },
    ],
  },
  {
    id: "humanities",
    name: "Humanities Stream",
    description:
      "Liberal arts education focusing on social sciences, literature, and human development",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-primary",
    combinations: [
      {
        name: "History, Political Science, Psychology",
        code: "HPP",
        suitableFor: "Social Sciences, Psychology, Civil Services",
        careerPaths: [
          "Civil Services",
          "Psychology",
          "Social Work",
          "Journalism",
          "Politics",
          "Research",
        ],
        subjects: [
          "History",
          "Political Science",
          "Psychology",
          "English",
          "Physical Education",
        ],
      },
      {
        name: "Geography, Economics, Political Science",
        code: "GEP",
        suitableFor: "Geography, Urban Planning, Development Studies",
        careerPaths: [
          "Urban Planning",
          "Environmental Studies",
          "Tourism",
          "Development Work",
          "Research",
        ],
        subjects: [
          "Geography",
          "Economics",
          "Political Science",
          "English",
          "Physical Education",
        ],
      },
    ],
  },
];

const streamFeatures = [
  {
    title: "Expert Faculty",
    description:
      "Subject specialists with years of experience in their respective fields",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Modern Labs",
    description:
      "State-of-the-art laboratories for practical learning and experiments",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "Career Guidance",
    description:
      "Comprehensive counseling to help students choose the right career path",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Competitive Prep",
    description:
      "Specialized coaching for JEE, NEET, CLAT, and other entrance exams",
    icon: <Award className="w-6 h-6" />,
  },
];

const entranceExams = [
  {
    stream: "Science",
    exams: [
      {
        name: "JEE Main & Advanced",
        for: "Engineering Colleges",
        difficulty: "High",
      },
      { name: "NEET", for: "Medical Colleges", difficulty: "High" },
      { name: "BITSAT", for: "BITS Pilani", difficulty: "Medium" },
      {
        name: "State Engineering",
        for: "State Engineering Colleges",
        difficulty: "Medium",
      },
    ],
  },
  {
    stream: "Commerce",
    exams: [
      {
        name: "CA Foundation",
        for: "Chartered Accountancy",
        difficulty: "High",
      },
      { name: "CS Foundation", for: "Company Secretary", difficulty: "Medium" },
      {
        name: "BBA Entrance",
        for: "Business Administration",
        difficulty: "Medium",
      },
      { name: "CLAT", for: "Law Colleges", difficulty: "High" },
    ],
  },
  {
    stream: "Humanities",
    exams: [
      { name: "CLAT", for: "Law Colleges", difficulty: "High" },
      { name: "UPSC Prelims", for: "Civil Services", difficulty: "Very High" },
      { name: "BBA Entrance", for: "Management Studies", difficulty: "Medium" },
      {
        name: "Journalism Entrance",
        for: "Mass Communication",
        difficulty: "Medium",
      },
    ],
  },
];

const successStories = [
  {
    name: "Arjun Sharma",
    stream: "Science (PCM)",
    achievement: "IIT Delhi - Computer Science",
    year: "2023",
    quote:
      "The strong foundation in Mathematics and Physics at DIA helped me crack JEE Advanced.",
  },
  {
    name: "Priya Patel",
    stream: "Science (PCB)",
    achievement: "AIIMS Delhi - MBBS",
    year: "2023",
    quote:
      "Excellent lab facilities and dedicated biology teachers made NEET preparation seamless.",
  },
  {
    name: "Rahul Gupta",
    stream: "Commerce",
    achievement: "CA Foundation - All India Rank 15",
    year: "2024",
    quote:
      "The commerce curriculum perfectly prepared me for professional courses.",
  },
  {
    name: "Anjali Singh",
    stream: "Humanities",
    achievement: "JNU - Political Science",
    year: "2024",
    quote:
      "The critical thinking skills developed here helped me excel in humanities.",
  },
];

export default function StreamsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Enhanced Hero Section - Harvard Theme */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/3"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(165,28,48,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(165,28,48,0.05),transparent_50%)]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* CBSE Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-lg"
              >
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-gray-900">
                  CBSE Affiliated Senior Secondary
                </span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Academic Streams
                </span>
                <br />
                <span className="text-gray-700">for Future Leaders</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                Choose your path to success with our comprehensive stream
                options.
                <span className="text-primary font-semibold">
                  {" "}
                  Expert guidance
                </span>
                ,
                <span className="text-primary font-semibold">
                  {" "}
                  modern facilities
                </span>
                , and
                <span className="text-primary font-semibold">
                  {" "}
                  proven results
                </span>{" "}
                in Science, Commerce, and Humanities.
              </p>

              {/* Enhanced Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
              >
                {[
                  {
                    number: "98.5%",
                    label: "Pass Rate",
                    icon: <CheckCircle className="h-6 w-6" />,
                  },
                  {
                    number: "15+",
                    label: "Career Paths",
                    icon: <Target className="h-6 w-6" />,
                  },
                  {
                    number: "1200+",
                    label: "Students",
                    icon: <Users className="h-6 w-6" />,
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link
                    href="/academics/curriculum"
                    className="flex items-center"
                  >
                    <BookOpen className="mr-3 h-5 w-5" />
                    Explore Curriculum
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/apply" className="flex items-center">
                    <GraduationCap className="mr-3 h-5 w-5" />
                    Start Application
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stream Overview - Harvard Theme */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                Choose Your <span className="text-primary">Academic Path</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Three comprehensive streams designed to unlock your potential
                and prepare you for success in your chosen field
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {streams.map((stream, index) => (
                <motion.div
                  key={stream.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group border-0 bg-white/70 backdrop-blur-sm hover:bg-white group-hover:scale-105">
                    <CardHeader className="text-center pb-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative mx-auto mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25">
                          {stream.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
                      </div>

                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {stream.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-8 text-center text-base leading-relaxed">
                        {stream.description}
                      </p>

                      <div className="space-y-4">
                        <div className="text-sm font-semibold text-primary mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Available Combinations
                        </div>

                        {stream.combinations.map((combo, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-gradient-to-r from-gray-50 to-primary/5 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 group/combo"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-bold text-primary text-lg group-hover/combo:scale-105 transition-transform duration-200">
                                {combo.code}
                              </span>
                              <Badge
                                variant="outline"
                                className="text-xs border-primary/30 text-primary bg-primary/5 group-hover/combo:bg-primary group-hover/combo:text-white transition-all duration-200"
                              >
                                {combo.careerPaths.length} Paths
                              </Badge>
                            </div>

                            <p className="text-sm text-gray-700 mb-3 font-medium">
                              {combo.suitableFor}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {combo.careerPaths
                                .slice(0, 3)
                                .map((career, cidx) => (
                                  <Badge
                                    key={cidx}
                                    variant="secondary"
                                    className="text-xs bg-white border border-primary/20 hover:bg-primary hover:text-white transition-all duration-200"
                                  >
                                    {career}
                                  </Badge>
                                ))}
                              {combo.careerPaths.length > 3 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs text-primary border-primary/40 hover:bg-primary hover:text-white transition-all duration-200"
                                >
                                  +{combo.careerPaths.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Enhanced CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                        >
                          <span className="group-hover/btn:scale-105 transition-transform duration-200">
                            Explore {stream.name}
                          </span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Detailed Stream Information */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/3">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                <span className="text-primary">In-Depth</span> Stream Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive breakdown of subject combinations, career
                pathways, and academic requirements for each stream
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="science" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-2 shadow-lg">
                  <TabsTrigger
                    value="science"
                    className="rounded-xl font-semibold text-base py-4 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Microscope className="w-5 h-5 mr-2" />
                    Science Stream
                  </TabsTrigger>
                  <TabsTrigger
                    value="commerce"
                    className="rounded-xl font-semibold text-base py-4 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Commerce Stream
                  </TabsTrigger>
                  <TabsTrigger
                    value="humanities"
                    className="rounded-xl font-semibold text-base py-4 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Humanities Stream
                  </TabsTrigger>
                </TabsList>

                {streams.map((stream) => (
                  <TabsContent
                    key={stream.id}
                    value={stream.id}
                    className="space-y-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center mb-12"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-4 rounded-full bg-primary/10">
                          {stream.icon}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {stream.name} Combinations
                      </h3>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {stream.description}
                      </p>
                    </motion.div>

                    <div className="grid gap-8">
                      {stream.combinations.map((combo, index) => (
                        <motion.div
                          key={combo.code}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 }}
                          className="group"
                        >
                          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:scale-[1.02]">
                            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/10">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-4 mb-3">
                                    <Badge className="bg-primary text-white font-bold text-lg px-4 py-2 rounded-xl shadow-lg">
                                      {combo.code}
                                    </Badge>
                                    <div className="h-8 w-px bg-primary/20"></div>
                                    <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                                      {stream.name} Stream
                                    </span>
                                  </div>
                                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                    {combo.name}
                                  </CardTitle>
                                  <p className="text-gray-600 mt-2 font-medium">
                                    {combo.suitableFor}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Target className="w-4 h-4" />
                                  <span>
                                    {combo.careerPaths.length} Career Paths
                                  </span>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent className="p-8">
                              <div className="grid lg:grid-cols-2 gap-8">
                                {/* Core Subjects */}
                                <div>
                                  <h4 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                                    <BookOpen className="w-5 h-5 mr-3 text-primary" />
                                    Core Subjects
                                  </h4>
                                  <div className="space-y-3">
                                    {combo.subjects.map((subject, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-primary/5 rounded-lg border border-gray-100 hover:border-primary/20 transition-all duration-200"
                                      >
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="font-medium text-gray-700">
                                          {subject}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {/* Career Opportunities */}
                                <div>
                                  <h4 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                                    <Target className="w-5 h-5 mr-3 text-primary" />
                                    Career Opportunities
                                  </h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {combo.careerPaths.map((career, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/10 hover:border-primary/25 hover:shadow-md transition-all duration-200 group"
                                      >
                                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors duration-200">
                                          {career}
                                        </span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Quick Stats */}
                                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/8 rounded-xl border border-primary/10">
                                    <div className="flex items-center justify-between text-sm">
                                      <span className="text-gray-600">
                                        Total Career Paths:
                                      </span>
                                      <span className="font-bold text-primary text-lg">
                                        {combo.careerPaths.length}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Enhanced CTA Section */}
                              <div className="mt-8 pt-6 border-t border-primary/10">
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <Button
                                    variant="outline"
                                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                  >
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    View Detailed Curriculum
                                  </Button>
                                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-lg">
                                    <GraduationCap className="mr-2 h-4 w-4" />
                                    Apply for {combo.code}
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Enhanced Stream Features - Harvard Theme */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                Why Choose <span className="text-primary">Divine Academy</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive support system designed for your academic
                excellence and career success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {streamFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <Card className="h-full text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-primary/10">
                    <CardHeader className="pb-4">
                      <div className="mx-auto p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl text-primary w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mt-4">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Enhanced visual element */}
                      <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-300 rounded-full"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Entrance Exams */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Entrance Exam Preparation
              </h2>
              <p className="text-gray-600">
                Specialized coaching for major competitive exams across all
                streams
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {entranceExams.map((examCategory, index) => (
                <motion.div
                  key={examCategory.stream}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {examCategory.stream} Stream Exams
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {examCategory.exams.map((exam, idx) => (
                          <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">
                                {exam.name}
                              </span>
                              <Badge
                                variant={
                                  exam.difficulty === "High"
                                    ? "destructive"
                                    : exam.difficulty === "Very High"
                                    ? "destructive"
                                    : "secondary"
                                }
                              >
                                {exam.difficulty}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-600">{exam.for}</p>
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

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Success Stories
              </h2>
              <p className="text-gray-600">
                Our students' achievements across all streams
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <div className="text-center mb-3">
                        <h4 className="font-bold text-blue-900">
                          {story.name}
                        </h4>
                        <Badge variant="outline" className="mt-1">
                          {story.stream}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="font-semibold text-green-700">
                          {story.achievement}
                        </p>
                        <p className="text-gray-600 italic">"{story.quote}"</p>
                        <p className="text-xs text-gray-500">
                          Class of {story.year}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Shape Your Future?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join DIA's senior secondary program and unlock your potential
                with expert guidance, modern facilities, and a proven track
                record of success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/admissions/process">
                    <Target className="mr-2 h-5 w-5" />
                    Admission Process
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/academics/achievements">
                    <Award className="mr-2 h-5 w-5" />
                    View Achievements
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <BookOpen className="mr-2 h-5 w-5" />
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
