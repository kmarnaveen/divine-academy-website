"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Microscope,
  Computer,
  Atom,
  Calculator,
  Globe,
  Beaker,
  Monitor,
  Cpu,
  FlaskConical,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const labCategories = [
  {
    id: "science",
    name: "Science Laboratories",
    description: "State-of-the-art labs for Physics, Chemistry, and Biology",
    icon: <Microscope className="w-8 h-8" />,
    color: "bg-primary",
    labs: [
      {
        name: "Physics Laboratory",
        capacity: "25 students",
        equipment: [
          "Digital oscilloscopes",
          "Vernier calipers",
          "Optical benches",
          "Electronic kits",
          "Measurement tools",
        ],
        experiments: [
          "Mechanics",
          "Optics",
          "Electricity",
          "Magnetism",
          "Modern Physics",
        ],
        safety: [
          "Circuit breakers",
          "Fire extinguishers",
          "First aid",
          "Safety protocols",
        ],
      },
      {
        name: "Chemistry Laboratory",
        capacity: "25 students",
        equipment: [
          "Fume hoods",
          "Digital balances",
          "pH meters",
          "Burettes & pipettes",
          "Heating mantles",
        ],
        experiments: [
          "Organic synthesis",
          "Quantitative analysis",
          "Electrochemistry",
          "Thermodynamics",
        ],
        safety: [
          "Emergency shower",
          "Eye wash stations",
          "Ventilation",
          "Chemical storage",
        ],
      },
      {
        name: "Biology Laboratory",
        capacity: "25 students",
        equipment: [
          "Digital microscopes",
          "Specimen collection",
          "Slides & cover slips",
          "Dissection kits",
          "Models & charts",
        ],
        experiments: [
          "Cell biology",
          "Genetics",
          "Physiology",
          "Ecology",
          "Biotechnology",
        ],
        safety: [
          "Disinfectants",
          "Disposal systems",
          "Protective gear",
          "Sterilization",
        ],
      },
    ],
  },
  {
    id: "computer",
    name: "Computer Laboratories",
    description:
      "Modern computing facilities with latest hardware and software",
    icon: <Computer className="w-8 h-8" />,
    color: "bg-primary",
    labs: [
      {
        name: "Primary Computer Lab",
        capacity: "30 systems",
        equipment: [
          "Core i5 processors",
          "8GB RAM",
          "SSD storage",
          "LCD monitors",
          "Multimedia peripherals",
        ],
        software: [
          "MS Office Suite",
          "Adobe Creative",
          "Programming IDEs",
          "Educational software",
        ],
        features: [
          "High-speed internet",
          "Printer access",
          "Projector",
          "AC environment",
        ],
      },
      {
        name: "Programming Lab",
        capacity: "25 systems",
        equipment: [
          "High-end workstations",
          "Dual monitors",
          "Mechanical keyboards",
          "Graphics tablets",
        ],
        software: [
          "Python IDLE",
          "Java NetBeans",
          "Visual Studio",
          "Database tools",
          "Web development tools",
        ],
        features: [
          "Server access",
          "Version control",
          "Testing environments",
          "Collaboration tools",
        ],
      },
      {
        name: "Robotics & AI Lab",
        capacity: "20 students",
        equipment: [
          "Arduino kits",
          "Raspberry Pi",
          "Sensors",
          "3D printer",
          "Robot chassis",
        ],
        software: [
          "Scratch programming",
          "MIT App Inventor",
          "RoboCorp",
          "AI platforms",
        ],
        features: [
          "Project workspace",
          "Competition prep",
          "Innovation corner",
          "Maker space",
        ],
      },
    ],
  },
  {
    id: "language",
    name: "Language Laboratory",
    description: "Digital language learning with audio-visual technology",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-primary",
    labs: [
      {
        name: "English Language Lab",
        capacity: "30 students",
        equipment: [
          "Audio consoles",
          "Headphones",
          "Microphones",
          "Recording systems",
          "Interactive boards",
        ],
        features: [
          "Pronunciation practice",
          "Listening comprehension",
          "Speaking skills",
          "Grammar modules",
        ],
        software: [
          "Language learning apps",
          "Pronunciation tools",
          "Interactive exercises",
          "Progress tracking",
        ],
      },
      {
        name: "Multi-Language Center",
        capacity: "25 students",
        equipment: [
          "Digital pods",
          "Translation tools",
          "Cultural content",
          "Video conferencing",
        ],
        languages: [
          "Hindi literature",
          "Sanskrit basics",
          "French (optional)",
          "Spanish (optional)",
        ],
        features: [
          "Cultural immersion",
          "Native speaker sessions",
          "Exchange programs",
          "Certification prep",
        ],
      },
    ],
  },
  {
    id: "specialized",
    name: "Specialized Labs",
    description: "Dedicated spaces for advanced learning and research",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-primary",
    labs: [
      {
        name: "Mathematics Lab",
        capacity: "30 students",
        equipment: [
          "Geometric models",
          "Calculators",
          "Math software",
          "Interactive tools",
          "Graphing tablets",
        ],
        activities: [
          "Concept visualization",
          "Problem solving",
          "Mathematical modeling",
          "Competitive prep",
        ],
        features: [
          "Hands-on learning",
          "Real-world applications",
          "Group projects",
          "Individual practice",
        ],
      },
      {
        name: "Innovation Lab",
        capacity: "20 students",
        equipment: [
          "3D printers",
          "Electronics kits",
          "Prototyping tools",
          "Design software",
          "Testing equipment",
        ],
        projects: [
          "Science fair",
          "Innovation challenges",
          "Patent filings",
          "Startup incubation",
        ],
        features: [
          "Mentor guidance",
          "Industry connections",
          "Funding support",
          "Showcase events",
        ],
      },
    ],
  },
];

export default function LabsPage() {
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
                Advanced Laboratories
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                State-of-the-art laboratory facilities equipped with modern
                technology to provide hands-on learning experiences across all
                subjects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/facilities/campus">
                    <Microscope className="mr-2 h-5 w-5" />
                    Campus Overview
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <FlaskConical className="mr-2 h-5 w-5" />
                    Schedule Lab Visit
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lab Categories Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {labCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="mx-auto p-4 rounded-full w-fit bg-primary text-white group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                      <Badge className="mt-3">
                        {category.labs.length} Labs
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Lab Information */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Laboratory Details
              </h2>
              <p className="text-gray-600">
                Comprehensive facilities designed for practical learning and
                research
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="science" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {labCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name.split(" ")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {labCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="space-y-6">
                      {category.labs.map((lab, index) => (
                        <motion.div
                          key={lab.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Card>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-blue-900">
                                  {lab.name}
                                </CardTitle>
                                <Badge variant="outline">{lab.capacity}</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">
                                    Equipment
                                  </h4>
                                  <ul className="space-y-1 text-sm">
                                    {lab.equipment?.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-center gap-2"
                                      >
                                        <Atom className="w-3 h-3 text-blue-600" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">
                                    {(lab as any).experiments
                                      ? "Experiments"
                                      : (lab as any).software
                                      ? "Software"
                                      : (lab as any).activities
                                      ? "Activities"
                                      : "Features"}
                                  </h4>
                                  <ul className="space-y-1 text-sm">
                                    {(
                                      (lab as any).experiments ||
                                      (lab as any).software ||
                                      (lab as any).activities ||
                                      (lab as any).features
                                    )?.map((item: any, idx: any) => (
                                      <li
                                        key={idx}
                                        className="flex items-center gap-2"
                                      >
                                        <Beaker className="w-3 h-3 text-green-600" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">
                                    {(lab as any).safety
                                      ? "Safety Features"
                                      : (lab as any).features
                                      ? "Features"
                                      : (lab as any).languages
                                      ? "Languages"
                                      : "Projects"}
                                  </h4>
                                  <ul className="space-y-1 text-sm">
                                    {(
                                      (lab as any).safety ||
                                      (lab as any).features ||
                                      (lab as any).languages ||
                                      (lab as any).projects
                                    )?.map((item: any, idx: any) => (
                                      <li
                                        key={idx}
                                        className="flex items-center gap-2"
                                      >
                                        <Zap className="w-3 h-3 text-orange-600" />
                                        {item}
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
                  </TabsContent>
                ))}
              </Tabs>
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
                Experience Hands-on Learning
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Visit our world-class laboratories and see how we make learning
                interactive, practical, and engaging for our students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/academics/curriculum">
                    <Calculator className="mr-2 h-5 w-5" />
                    View Curriculum
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/facilities/campus">
                    <Monitor className="mr-2 h-5 w-5" />
                    Campus Tour
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <Microscope className="mr-2 h-5 w-5" />
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
