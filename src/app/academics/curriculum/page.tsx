"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Users,
  Target,
  Award,
  Brain,
  Heart,
  Globe,
  Microscope,
  Calculator,
  Languages,
  Palette,
  Music,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const curriculumPhases = [
  {
    phase: "Foundation Phase",
    grades: "Pre-KG to Class II",
    focus: "Learning through Play & Exploration",
    description:
      "Building fundamental skills through activity-based learning, creative expression, and social interaction.",
    keyAreas: [
      "Language Development (English & Hindi)",
      "Number Concepts & Basic Math",
      "Environmental Awareness",
      "Creative Arts & Music",
      "Physical Development",
      "Social & Emotional Skills",
    ],
    methodology: [
      "Play-based learning",
      "Storytelling & rhymes",
      "Hands-on activities",
      "Art & craft integration",
      "Field trips & nature walks",
    ],
    icon: <Heart className="w-6 h-6" />,
  },
  {
    phase: "Preparatory Phase",
    grades: "Class III to V",
    focus: "Skill Building & Conceptual Learning",
    description:
      "Developing core academic skills while maintaining creativity and curiosity through structured learning.",
    keyAreas: [
      "English Language & Literature",
      "Hindi Language & Literature",
      "Mathematics & Problem Solving",
      "Environmental Science",
      "Computer Basics",
      "Physical Education & Sports",
    ],
    methodology: [
      "Activity-based learning",
      "Project work & presentations",
      "Group discussions",
      "Digital learning tools",
      "Laboratory experiments",
    ],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    phase: "Middle School Phase",
    grades: "Class VI to VIII",
    focus: "Subject Specialization & Critical Thinking",
    description:
      "Introducing specialized subjects while developing analytical and critical thinking capabilities.",
    keyAreas: [
      "English & Hindi Literature",
      "Mathematics & Algebra",
      "Science (Physics, Chemistry, Biology)",
      "Social Science (History, Geography, Civics)",
      "Computer Science",
      "Sanskrit (Optional)",
    ],
    methodology: [
      "Subject-wise specialization",
      "Laboratory-based learning",
      "Research projects",
      "Debates & discussions",
      "Technology integration",
    ],
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    phase: "Secondary Phase",
    grades: "Class IX to X",
    focus: "Board Preparation & Career Guidance",
    description:
      "Comprehensive CBSE curriculum preparation with focus on board exams and career orientation.",
    keyAreas: [
      "English Language & Literature",
      "Hindi/Sanskrit",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science",
      "Information Technology (Optional)",
    ],
    methodology: [
      "Board exam preparation",
      "Regular assessments",
      "Career counseling",
      "Competitive exam guidance",
      "Life skills development",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "Senior Secondary Phase",
    grades: "Class XI to XII",
    focus: "Stream Specialization & Higher Education Prep",
    description:
      "Specialized stream-based education preparing students for higher education and competitive exams.",
    keyAreas: [
      "Science Stream: PCM/PCB combinations",
      "Commerce Stream: Business, Economics, Accountancy",
      "Humanities: Psychology, History, Political Science",
      "Elective Subjects based on interest",
      "Career Counseling & Guidance",
    ],
    methodology: [
      "Stream-specific teaching",
      "Advanced laboratory work",
      "Entrance exam coaching",
      "University preparation",
      "Industry exposure",
    ],
    icon: <Globe className="w-6 h-6" />,
  },
];

const subjectDetails = {
  foundation: [
    {
      subject: "English",
      focus: "Phonics, vocabulary, storytelling",
      hours: 6,
    },
    { subject: "Hindi", focus: "Basic conversation, rhymes", hours: 4 },
    { subject: "Mathematics", focus: "Numbers, patterns, shapes", hours: 5 },
    { subject: "EVS", focus: "Nature, family, community", hours: 4 },
    {
      subject: "Art & Craft",
      focus: "Creative expression, motor skills",
      hours: 3,
    },
    {
      subject: "Music & Dance",
      focus: "Rhythm, movement, expression",
      hours: 2,
    },
    {
      subject: "Physical Education",
      focus: "Gross motor development",
      hours: 3,
    },
  ],
  preparatory: [
    { subject: "English", focus: "Grammar, comprehension, writing", hours: 6 },
    { subject: "Hindi", focus: "Literature, grammar, composition", hours: 5 },
    {
      subject: "Mathematics",
      focus: "Operations, geometry, measurement",
      hours: 6,
    },
    { subject: "EVS", focus: "Science concepts, social studies", hours: 5 },
    { subject: "Computer", focus: "Basic operations, typing", hours: 2 },
    { subject: "Art Education", focus: "Drawing, painting, crafts", hours: 2 },
    {
      subject: "Physical Education",
      focus: "Sports skills, fitness",
      hours: 3,
    },
  ],
  middle: [
    {
      subject: "English",
      focus: "Literature analysis, creative writing",
      hours: 5,
    },
    { subject: "Hindi", focus: "Advanced grammar, literature", hours: 4 },
    {
      subject: "Mathematics",
      focus: "Algebra, geometry, statistics",
      hours: 6,
    },
    {
      subject: "Science",
      focus: "Physics, chemistry, biology basics",
      hours: 6,
    },
    {
      subject: "Social Science",
      focus: "History, geography, civics",
      hours: 5,
    },
    {
      subject: "Computer Science",
      focus: "Programming basics, applications",
      hours: 2,
    },
    { subject: "Sanskrit", focus: "Basics of Sanskrit language", hours: 2 },
  ],
  secondary: [
    {
      subject: "English",
      focus: "Board exam preparation, literature",
      hours: 5,
    },
    { subject: "Hindi", focus: "Advanced literature, composition", hours: 4 },
    {
      subject: "Mathematics",
      focus: "Algebra, geometry, trigonometry",
      hours: 6,
    },
    { subject: "Science", focus: "Detailed PCB concepts", hours: 6 },
    {
      subject: "Social Science",
      focus: "In-depth historical, geographical study",
      hours: 5,
    },
    { subject: "IT", focus: "Computer applications, internet", hours: 2 },
  ],
};

const teachingMethodology = [
  {
    method: "Activity-Based Learning",
    description:
      "Hands-on experiences that make learning engaging and memorable",
    icon: <Users className="w-8 h-8" />,
    examples: [
      "Science experiments",
      "Math manipulatives",
      "Role-playing",
      "Field trips",
    ],
  },
  {
    method: "Digital Integration",
    description:
      "Technology-enhanced learning with smart classrooms and digital resources",
    icon: <Calculator className="w-8 h-8" />,
    examples: [
      "Smart boards",
      "Educational apps",
      "Online resources",
      "Virtual labs",
    ],
  },
  {
    method: "Collaborative Learning",
    description: "Group projects and peer learning to develop teamwork skills",
    icon: <Users className="w-8 h-8" />,
    examples: [
      "Group projects",
      "Peer teaching",
      "Team challenges",
      "Discussion circles",
    ],
  },
  {
    method: "Multilingual Approach",
    description:
      "Developing proficiency in multiple languages for global communication",
    icon: <Languages className="w-8 h-8" />,
    examples: [
      "English medium",
      "Hindi literature",
      "Sanskrit optional",
      "Foreign language clubs",
    ],
  },
];

export default function CurriculumPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
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
                CBSE Curriculum Excellence
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A comprehensive curriculum designed to nurture well-rounded
                individuals through activity-based learning, critical thinking,
                and holistic development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/academics/streams">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Streams
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/apply">
                    <Award className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Five-Phase Learning Journey
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our curriculum is structured in five progressive phases, each
                designed to meet the developmental needs of students at
                different stages.
              </p>
            </motion.div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {curriculumPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/3">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                              {phase.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-blue-900">
                                {phase.phase}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {phase.grades}
                              </Badge>
                            </div>
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {phase.focus}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {phase.description}
                          </p>
                        </div>

                        <div className="lg:w-1/3">
                          <h4 className="font-semibold text-blue-900 mb-3">
                            Key Subject Areas
                          </h4>
                          <ul className="space-y-2">
                            {phase.keyAreas.map((area, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <BookOpen className="w-3 h-3 text-blue-600 flex-shrink-0" />
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="lg:w-1/3">
                          <h4 className="font-semibold text-blue-900 mb-3">
                            Teaching Methodology
                          </h4>
                          <ul className="space-y-2">
                            {phase.methodology.map((method, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Target className="w-3 h-3 text-green-600 flex-shrink-0" />
                                {method}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Breakdown */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Subject-wise Curriculum Details
              </h2>
              <p className="text-gray-600">
                Detailed breakdown of subjects and weekly hours across different
                phases
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="foundation" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="foundation">Foundation</TabsTrigger>
                  <TabsTrigger value="preparatory">Preparatory</TabsTrigger>
                  <TabsTrigger value="middle">Middle School</TabsTrigger>
                  <TabsTrigger value="secondary">Secondary</TabsTrigger>
                </TabsList>

                {Object.entries(subjectDetails).map(([phase, subjects]) => (
                  <TabsContent key={phase} value={phase}>
                    <Card>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-blue-50">
                              <tr>
                                <th className="px-4 py-3 text-left font-semibold text-blue-900">
                                  Subject
                                </th>
                                <th className="px-4 py-3 text-left font-semibold text-blue-900">
                                  Focus Areas
                                </th>
                                <th className="px-4 py-3 text-center font-semibold text-blue-900">
                                  Weekly Hours
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {subjects.map((subject, index) => (
                                <tr
                                  key={subject.subject}
                                  className={
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                  }
                                >
                                  <td className="px-4 py-3 font-medium text-blue-900">
                                    {subject.subject}
                                  </td>
                                  <td className="px-4 py-3 text-gray-700">
                                    {subject.focus}
                                  </td>
                                  <td className="px-4 py-3 text-center font-semibold">
                                    {subject.hours} hrs
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Innovative Teaching Methodology
              </h2>
              <p className="text-gray-600">
                Modern pedagogical approaches that make learning engaging and
                effective
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teachingMethodology.map((method, index) => (
                <motion.div
                  key={method.method}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto p-4 bg-blue-100 rounded-full text-blue-600 w-fit">
                        {method.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {method.method}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">
                        {method.description}
                      </p>
                      <ul className="space-y-1">
                        {method.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-gray-500">
                            • {example}
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
                Experience Excellence in Education
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join us to provide your child with a curriculum that balances
                academic excellence with holistic development and prepares them
                for future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/academics/streams">
                    <Target className="mr-2 h-5 w-5" />
                    Senior Secondary Streams
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
                    Academic Achievements
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
