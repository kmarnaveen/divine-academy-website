'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Mail, Phone, Award, GraduationCap, BookOpen, Heart, Star, Target, Calendar, Globe, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/main-layout'

const principalMessage = {
  name: "Dr. Rajesh Kumar Sharma",
  position: "Principal & Chief Academic Officer",
  qualification: "Ph.D. in Education, M.Ed., B.Ed.",
  experience: "25+ years in Educational Leadership",
  email: "principal@divineacademy.edu.in",
  phone: "+91-9876543210",
  message: "Welcome to Divine International Academy, where we believe that every child has the potential to excel and make a positive impact on the world. Our commitment is to provide an environment where students can discover their passions, develop their talents, and grow into confident, compassionate, and capable individuals. With our dedicated faculty, state-of-the-art facilities, and student-centered approach, we ensure that each child receives the personalized attention they deserve. Together, we are building tomorrow's leaders today.",
  achievements: [
    "National Award for Excellence in Educational Leadership (2023)",
    "Regional Recognition for Innovation in Teaching (2022)",
    "20+ research publications in educational journals",
    "Guest speaker at national education conferences"
  ],
  philosophy: "Education is not just about academic excellence but about nurturing complete human beings who can contribute meaningfully to society."
}

const managementTeam = [
  {
    name: "Mrs. Priya Agarwal",
    position: "Vice Principal (Academic)",
    department: "Academic Affairs",
    qualification: "M.Ed., M.A. English",
    experience: "18 years",
    email: "vp.academic@divineacademy.edu.in",
    specialization: "Curriculum Development & Assessment",
    achievements: [
      "Led curriculum revision for NEP 2020 implementation",
      "Designed innovative assessment strategies",
      "Mentored 50+ teachers in pedagogical practices"
    ],
    responsibilities: ["Academic planning and execution", "Faculty development programs", "Student assessment systems", "Curriculum innovation"]
  },
  {
    name: "Mr. Amit Verma",
    position: "Vice Principal (Administration)",
    department: "Operations & Administration",
    qualification: "MBA, B.Tech",
    experience: "15 years",
    email: "vp.admin@divineacademy.edu.in",
    specialization: "Educational Administration & Technology",
    achievements: [
      "Implemented digital transformation initiatives",
      "Streamlined administrative processes",
      "Led infrastructure development projects"
    ],
    responsibilities: ["Administrative operations", "Technology integration", "Infrastructure management", "Resource optimization"]
  },
  {
    name: "Dr. Sunita Rao",
    position: "Academic Director",
    department: "Curriculum & Research",
    qualification: "Ph.D. in Science Education",
    experience: "20 years",
    email: "academic.director@divineacademy.edu.in",
    specialization: "STEM Education & Research",
    achievements: [
      "Published 15+ research papers in education",
      "Developed innovative STEM curriculum",
      "National award for science education excellence"
    ],
    responsibilities: ["Research and development", "STEM program leadership", "Academic innovation", "Quality assurance"]
  }
]

const departmentHeads = [
  {
    name: "Ms. Kavita Jain",
    position: "Head of Primary Section",
    department: "Primary Education (Classes I-V)",
    qualification: "M.Ed., B.Ed.",
    experience: "16 years",
    specialization: "Early Childhood Education",
    students: "Classes I-V (300+ students)",
    achievements: ["Best Primary Educator Award", "Innovative teaching methodology", "Parent satisfaction rating 98%"]
  },
  {
    name: "Mr. Rohit Singh",
    position: "Head of Middle Section",
    department: "Middle School (Classes VI-VIII)",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "14 years",
    specialization: "Mathematics & Logical Reasoning",
    students: "Classes VI-VIII (250+ students)",
    achievements: ["Mathematics Olympiad trainer", "100% success rate in competitive exams", "Student mentor award"]
  },
  {
    name: "Dr. Anjali Verma",
    position: "Head of Senior Section",
    department: "Senior School (Classes IX-XII)",
    qualification: "Ph.D. English Literature",
    experience: "19 years",
    specialization: "Language Arts & Literature",
    students: "Classes IX-XII (200+ students)",
    achievements: ["Board exam excellence (98% pass rate)", "Literary society founder", "Inter-school debate champion coach"]
  },
  {
    name: "Coach Arjun Pandey",
    position: "Sports Director",
    department: "Physical Education & Sports",
    qualification: "M.P.Ed., Sports Science Diploma",
    experience: "12 years",
    specialization: "Athletics & Team Sports",
    students: "All sections (athletic programs)",
    achievements: ["State championship coach", "Sports excellence award", "Trained 20+ national level athletes"]
  },
  {
    name: "Ms. Rekha Gupta",
    position: "Cultural Activities Director",
    department: "Arts, Music & Cultural Programs",
    qualification: "M.A. Fine Arts, Classical Music",
    experience: "13 years",
    specialization: "Performing Arts & Cultural Education",
    students: "All sections (cultural activities)",
    achievements: ["Regional cultural competition winner", "Annual day director", "Arts integration specialist"]
  },
  {
    name: "Mr. Vikash Kumar",
    position: "Technology Director",
    department: "Information Technology & Digital Learning",
    qualification: "M.Tech Computer Science",
    experience: "10 years",
    specialization: "Educational Technology & Innovation",
    students: "Digital literacy programs (all sections)",
    achievements: ["Smart classroom implementation", "Coding curriculum developer", "Technology innovation award"]
  }
]

const supportStaff = [
  {
    name: "Ms. Pooja Malik",
    position: "Student Counselor",
    department: "Student Welfare",
    qualification: "M.A. Psychology, Counseling Certification",
    specialization: "Student Counseling & Mental Health"
  },
  {
    name: "Dr. Ashok Gupta",
    position: "Medical Officer",
    department: "Health & Wellness",
    qualification: "MBBS, Child Health Specialist",
    specialization: "Student Health & Emergency Care"
  },
  {
    name: "Mr. Suresh Chand",
    position: "Transport Manager",
    department: "Transportation",
    qualification: "Transport Management Diploma",
    specialization: "Safe Transportation & Fleet Management"
  },
  {
    name: "Mrs. Neha Sharma",
    position: "Librarian",
    department: "Library & Resources",
    qualification: "M.Lib.Sc., B.Ed.",
    specialization: "Information Management & Digital Resources"
  }
]

const organizationalValues = [
  {
    title: "Collaborative Leadership",
    description: "Our leadership team works together to ensure seamless coordination across all departments",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Professional Excellence",
    description: "Continuous learning and development to maintain the highest standards of education",
    icon: <Star className="w-8 h-8" />
  },
  {
    title: "Student-Centric Approach",
    description: "Every decision is made with student welfare and success as the primary consideration",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Innovation & Growth",
    description: "Embracing new ideas and methodologies to enhance the educational experience",
    icon: <Target className="w-8 h-8" />
  }
]

const teamStats = [
  {
    number: "50+",
    label: "Qualified Faculty",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-blue-600"
  },
  {
    number: "200+",
    label: "Years Combined Experience",
    icon: <Calendar className="w-6 h-6" />,
    color: "text-green-600"
  },
  {
    number: "15+",
    label: "Department Heads",
    icon: <Users className="w-6 h-6" />,
    color: "text-purple-600"
  },
  {
    number: "25+",
    label: "Support Staff",
    icon: <Heart className="w-6 h-6" />,
    color: "text-orange-600"
  }
]

export default function LeadershipPage() {
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
                Leadership Team
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Meet the dedicated professionals who guide our school's mission of 
                academic excellence, character development, and holistic education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#principal">
                    <Users className="mr-2 h-5 w-5" />
                    Principal's Message
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about/vision">
                    <Target className="mr-2 h-5 w-5" />
                    Our Vision
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`mx-auto p-3 bg-gray-100 rounded-full w-fit mb-4 ${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section id="principal" className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Principal's Message
              </h2>
              <p className="text-gray-600">
                A message from our school's visionary leader
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="max-w-5xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Principal Photo & Info */}
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        {/* Photo Placeholder */}
                        <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-gray-200 rounded-full flex items-center justify-center">
                          <Users className="w-20 h-20 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{principalMessage.name}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{principalMessage.position}</p>
                        <p className="text-gray-600 text-sm mb-4">{principalMessage.qualification}</p>
                        <Badge className="mb-4">{principalMessage.experience}</Badge>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600">{principalMessage.email}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600">{principalMessage.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Message Content */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-blue-900 mb-3">Welcome Message</h4>
                          <p className="text-gray-700 leading-relaxed">{principalMessage.message}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-blue-900 mb-3">Educational Philosophy</h4>
                          <p className="text-gray-700 italic leading-relaxed">{principalMessage.philosophy}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {principalMessage.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Senior Management Team
              </h2>
              <p className="text-gray-600">
                Strategic leaders driving our educational excellence
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {managementTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="text-center mb-4">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                          <Users className="w-12 h-12 text-blue-600" />
                        </div>
                        <CardTitle className="text-blue-900">{member.name}</CardTitle>
                        <p className="text-blue-600 font-medium text-sm">{member.position}</p>
                        <Badge variant="outline" className="text-xs mt-1">{member.department}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center space-y-1 text-sm">
                          <p><strong>Qualification:</strong> {member.qualification}</p>
                          <p><strong>Experience:</strong> {member.experience}</p>
                          <p><strong>Specialization:</strong> {member.specialization}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Responsibilities:</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.responsibilities.map((resp, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{resp}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Mail className="w-3 h-3" />
                            <span>{member.email}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Department Heads & Specialists
              </h2>
              <p className="text-gray-600">
                Experienced educators leading their respective departments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {departmentHeads.map((head, index) => (
                <motion.div
                  key={head.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-blue-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-blue-600" />
                        </div>
                        <CardTitle className="text-blue-900 text-sm">{head.name}</CardTitle>
                        <p className="text-blue-600 font-medium text-xs">{head.position}</p>
                        <Badge variant="outline" className="text-xs mt-1">{head.experience}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-xs space-y-1">
                          <p><strong>Department:</strong> {head.department}</p>
                          <p><strong>Qualification:</strong> {head.qualification}</p>
                          <p><strong>Specialization:</strong> {head.specialization}</p>
                          <p><strong>Students:</strong> {head.students}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 text-xs">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {head.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <Award className="w-2.5 h-2.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-600">{achievement}</span>
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

        {/* Support Staff */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Support & Specialist Staff
              </h2>
              <p className="text-gray-600">
                Dedicated professionals ensuring comprehensive student support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {supportStaff.map((staff, index) => (
                <motion.div
                  key={staff.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-7 h-7 text-green-600" />
                      </div>
                      <CardTitle className="text-blue-900 text-sm">{staff.name}</CardTitle>
                      <p className="text-blue-600 font-medium text-xs">{staff.position}</p>
                      <Badge variant="outline" className="text-xs mt-1">{staff.department}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs space-y-2">
                        <p><strong>Qualification:</strong> {staff.qualification}</p>
                        <p><strong>Specialization:</strong> {staff.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Values */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Leadership Principles
              </h2>
              <p className="text-gray-600">
                The core values that guide our leadership approach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {organizationalValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-blue-100 rounded-full text-blue-600 w-fit">
                        {value.icon}
                      </div>
                      <CardTitle className="text-blue-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{value.description}</p>
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
                Join Our Educational Community
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Experience the difference of learning under visionary leadership 
                committed to your child's holistic development and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/about/vision">
                    <Target className="mr-2 h-5 w-5" />
                    Our Vision
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/admissions">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Admissions Info
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-blue-600" asChild>
                  <Link href="/apply">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us
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