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
    color: "from-blue-500 to-purple-600",
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
    color: "from-green-500 to-blue-500",
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
    color: "from-orange-500 to-red-500",
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
                Senior Secondary Streams
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Choose your path to success with our comprehensive stream
                options. Expert guidance, modern facilities, and proven results
                in Science, Commerce, and Humanities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/academics/curriculum">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View Curriculum
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/apply">
                    <Target className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stream Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {streams.map((stream, index) => (
                <motion.div
                  key={stream.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto p-4 rounded-full w-fit bg-gradient-to-br ${stream.color} text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stream.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {stream.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 text-center">
                        {stream.description}
                      </p>
                      <div className="space-y-4">
                        {stream.combinations.map((combo, idx) => (
                          <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-sm text-blue-900">
                                {combo.code}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {combo.careerPaths.length} Careers
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">
                              {combo.suitableFor}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {combo.careerPaths
                                .slice(0, 3)
                                .map((career, cidx) => (
                                  <Badge
                                    key={cidx}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {career}
                                  </Badge>
                                ))}
                              {combo.careerPaths.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{combo.careerPaths.length - 3} more
                                </Badge>
                              )}
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

        {/* Detailed Stream Information */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Detailed Stream Information
              </h2>
              <p className="text-gray-600">
                Comprehensive breakdown of subject combinations and career
                pathways
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="science" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="science">Science Stream</TabsTrigger>
                  <TabsTrigger value="commerce">Commerce Stream</TabsTrigger>
                  <TabsTrigger value="humanities">
                    Humanities Stream
                  </TabsTrigger>
                </TabsList>

                {streams.map((stream) => (
                  <TabsContent key={stream.id} value={stream.id}>
                    <div className="space-y-6">
                      {stream.combinations.map((combo, index) => (
                        <motion.div
                          key={combo.code}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Card>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="text-blue-900">
                                    {combo.name}
                                  </CardTitle>
                                  <p className="text-gray-600 mt-1">
                                    {combo.suitableFor}
                                  </p>
                                </div>
                                <Badge
                                  className={`bg-gradient-to-r ${stream.color} text-white`}
                                >
                                  {combo.code}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">
                                    Core Subjects
                                  </h4>
                                  <div className="space-y-2">
                                    {combo.subjects.map((subject, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-2"
                                      >
                                        <BookOpen className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm">
                                          {subject}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">
                                    Career Opportunities
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {combo.careerPaths.map((career, idx) => (
                                      <Badge
                                        key={idx}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {career}
                                      </Badge>
                                    ))}
                                  </div>
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

        {/* Stream Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Why Choose DIA for Senior Secondary?
              </h2>
              <p className="text-gray-600">
                Comprehensive support system designed for your academic and
                career success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {streamFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-blue-100 rounded-full text-blue-600 w-fit">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
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
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
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
