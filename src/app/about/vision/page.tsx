'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Target, Eye, Heart, Star, Users, BookOpen, Globe, Award, Lightbulb, Compass, TreePine, Handshake } from 'lucide-react'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/main-layout'

const visionMission = {
  vision: {
    title: "Our Vision",
    description: "To be a leading educational institution that nurtures global citizens with strong moral values, innovative thinking, and a lifelong passion for learning and service to humanity.",
    icon: <Eye className="w-12 h-12" />,
    color: "from-blue-500 to-blue-700",
    details: [
      "Becoming a globally recognized center of educational excellence",
      "Developing future leaders with strong ethical foundations",
      "Creating an inclusive learning environment for all students",
      "Fostering innovation and critical thinking skills",
      "Building a sustainable and environmentally conscious community"
    ]
  },
  mission: {
    title: "Our Mission",
    description: "To provide holistic education that develops intellectual curiosity, character building, and practical skills while fostering creativity, collaboration, and compassionate leadership in a nurturing environment.",
    icon: <Target className="w-12 h-12" />,
    color: "from-green-500 to-green-700",
    details: [
      "Delivering quality education aligned with global standards",
      "Cultivating critical thinking and problem-solving abilities",
      "Promoting cultural diversity and global awareness",
      "Encouraging active participation in community service",
      "Supporting individual talents and interests of every student"
    ]
  }
}

const coreValues = [
  {
    value: "Excellence",
    description: "Striving for the highest standards in all aspects of education and character development",
    icon: <Star className="w-8 h-8" />,
    color: "bg-yellow-500",
    examples: ["Academic achievements", "Character building", "Professional development", "Continuous improvement"]
  },
  {
    value: "Integrity",
    description: "Upholding honesty, transparency, and moral principles in all our actions and decisions",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-red-500",
    examples: ["Truthfulness", "Ethical conduct", "Moral responsibility", "Authentic leadership"]
  },
  {
    value: "Innovation",
    description: "Embracing creativity, technology, and modern teaching methodologies for effective learning",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "bg-purple-500",
    examples: ["Creative thinking", "Technology integration", "Modern pedagogy", "Research orientation"]
  },
  {
    value: "Inclusivity",
    description: "Creating a welcoming environment that celebrates diversity and ensures equal opportunities",
    icon: <Users className="w-8 h-8" />,
    color: "bg-blue-500",
    examples: ["Cultural diversity", "Equal opportunities", "Respect for all", "Collaborative learning"]
  },
  {
    value: "Compassion",
    description: "Fostering empathy, kindness, and social responsibility towards the community and environment",
    icon: <Handshake className="w-8 h-8" />,
    color: "bg-green-500",
    examples: ["Community service", "Environmental care", "Social responsibility", "Helping others"]
  },
  {
    value: "Growth",
    description: "Promoting continuous learning, personal development, and adaptation to changing world needs",
    icon: <TreePine className="w-8 h-8" />,
    color: "bg-orange-500",
    examples: ["Lifelong learning", "Personal development", "Skill enhancement", "Adaptability"]
  }
]

const educationalPhilosophy = [
  {
    principle: "Student-Centered Learning",
    description: "Every student is unique and learns differently. We adapt our teaching methods to meet individual learning styles and needs.",
    icon: <Users className="w-6 h-6" />,
    implementation: [
      "Personalized learning plans",
      "Multiple intelligence approach",
      "Individual attention and support",
      "Flexible assessment methods"
    ]
  },
  {
    principle: "Holistic Development",
    description: "Education goes beyond academics to include physical, emotional, social, and spiritual development of each child.",
    icon: <Globe className="w-6 h-6" />,
    implementation: [
      "Comprehensive curriculum design",
      "Sports and physical activities",
      "Arts and cultural programs",
      "Character and values education"
    ]
  },
  {
    principle: "Critical Thinking",
    description: "We encourage students to question, analyze, and think independently to become confident problem solvers.",
    icon: <BookOpen className="w-6 h-6" />,
    implementation: [
      "Inquiry-based learning",
      "Project-based assessments",
      "Discussion and debate",
      "Research and exploration"
    ]
  },
  {
    principle: "Global Perspective",
    description: "Preparing students to be responsible global citizens who understand and respect cultural diversity.",
    icon: <Compass className="w-6 h-6" />,
    implementation: [
      "International curriculum standards",
      "Cultural exchange programs",
      "Language learning",
      "Global awareness initiatives"
    ]
  }
]

const futureGoals = [
  {
    goal: "Academic Excellence Enhancement",
    description: "Achieve 100% pass rate with 90% distinction in board examinations",
    timeline: "2024-2026",
    status: "In Progress",
    milestones: [
      "Advanced teacher training programs",
      "Upgraded laboratory facilities",
      "Personalized learning systems",
      "Regular assessment and feedback"
    ]
  },
  {
    goal: "Infrastructure Development",
    description: "Expand campus facilities and upgrade technology infrastructure",
    timeline: "2024-2027",
    status: "Planned",
    milestones: [
      "New academic building construction",
      "Smart classroom installation",
      "Upgraded sports complex",
      "Digital library expansion"
    ]
  },
  {
    goal: "International Recognition",
    description: "Achieve international accreditation and establish global partnerships",
    timeline: "2025-2028",
    status: "Planning",
    milestones: [
      "International curriculum adoption",
      "Global school partnerships",
      "Student exchange programs",
      "International teaching standards"
    ]
  },
  {
    goal: "Sustainability Initiative",
    description: "Become a carbon-neutral, environmentally sustainable school",
    timeline: "2024-2030",
    status: "Ongoing",
    milestones: [
      "Solar energy installation",
      "Waste management systems",
      "Green building certification",
      "Environmental education programs"
    ]
  }
]

const achievements = [
  {
    year: "2024",
    achievement: "Recognized as 'Best School for Holistic Development' by Regional Education Board",
    icon: <Award className="w-6 h-6" />
  },
  {
    year: "2023",
    achievement: "100% Pass Rate in Class XII Board Examinations with 85% Distinction",
    icon: <Star className="w-6 h-6" />
  },
  {
    year: "2023",
    achievement: "Green School Certification for Environmental Sustainability",
    icon: <TreePine className="w-6 h-6" />
  },
  {
    year: "2022",
    achievement: "Excellence Award for Innovation in Teaching Methodology",
    icon: <Lightbulb className="w-6 h-6" />
  }
]

export default function VisionPage() {
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
                Our Vision & Mission
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Guided by our core values and educational philosophy, we are committed to 
                nurturing tomorrow's leaders with integrity, innovation, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#vision-mission">
                    <Target className="mr-2 h-5 w-5" />
                    Our Purpose
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about/leadership">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Leadership
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision-mission" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {Object.entries(visionMission).map(([key, content], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className={`mx-auto p-4 bg-gradient-to-r ${content.color} rounded-full text-white w-fit mb-4`}>
                        {content.icon}
                      </div>
                      <CardTitle className="text-2xl text-blue-900 text-center">{content.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-center mb-6 leading-relaxed text-lg">
                        {content.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800">Key Focus Areas:</h4>
                        <ul className="space-y-2">
                          {content.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These fundamental principles guide every aspect of our educational approach 
                and shape the character of our school community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className={`mx-auto p-3 ${value.color} rounded-full text-white w-fit mb-3`}>
                        {value.icon}
                      </div>
                      <CardTitle className="text-center text-blue-900">{value.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm text-center mb-4">{value.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">Demonstrated Through:</h4>
                        <div className="flex flex-wrap gap-1">
                          {value.examples.map((example, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{example}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Philosophy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Our Educational Philosophy
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our teaching and learning approach is built on proven educational principles 
                that ensure comprehensive development of every student
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {educationalPhilosophy.map((principle, index) => (
                <motion.div
                  key={principle.principle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                          {principle.icon}
                        </div>
                        <CardTitle className="text-blue-900">{principle.principle}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{principle.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">Implementation:</h4>
                        <ul className="space-y-1">
                          {principle.implementation.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Strategic Goals & Future Vision
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our roadmap for continuous improvement and excellence in education
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={goal.goal}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <CardTitle className="text-blue-900 mb-2">{goal.goal}</CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge 
                              className={`text-xs ${
                                goal.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                goal.status === 'Planned' ? 'bg-orange-100 text-orange-800' :
                                goal.status === 'Planning' ? 'bg-purple-100 text-purple-800' :
                                'bg-green-100 text-green-800'
                              }`}
                            >
                              {goal.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">{goal.timeline}</Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{goal.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800">Key Milestones:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {goal.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Recent Achievements
              </h2>
              <p className="text-gray-600">
                Recognitions and milestones that reflect our commitment to excellence
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.year + achievement.achievement}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                            {achievement.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-blue-600 text-white">{achievement.year}</Badge>
                            </div>
                            <p className="text-gray-700">{achievement.achievement}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
                Join Our Vision of Excellence
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Be part of a school community committed to nurturing future leaders 
                with strong values and academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/about/leadership">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/admissions">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Admissions
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-blue-600" asChild>
                  <Link href="/apply">
                    <Target className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}