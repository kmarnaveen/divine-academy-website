"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  Award,
  BookOpen,
  Palette,
  Music,
  Microscope,
  Globe,
  Heart,
  Zap,
  Trophy,
  Target,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const clubCategories = [
  {
    category: "Academic Clubs",
    description:
      "Subject-focused clubs for deeper learning and academic excellence",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-500 to-purple-600",
    clubs: [
      {
        name: "Science Club",
        description:
          "Hands-on experiments, science fair participation, and research projects",
        activities: [
          "Weekly experiments",
          "Science fair preparation",
          "Guest lectures",
          "Field trips",
        ],
        members: 45,
        achievements: [
          "State Science Fair - 2nd Place",
          "National Innovation Award",
        ],
        meetingDay: "Wednesdays",
        teacher: "Ms. Priya Sharma",
        icon: <Microscope className="w-6 h-6" />,
      },
      {
        name: "Mathematics Club",
        description:
          "Problem-solving, mathematical modeling, and competitive mathematics",
        activities: [
          "Math Olympiad prep",
          "Problem solving sessions",
          "Mathematical modeling",
          "Peer tutoring",
        ],
        members: 38,
        achievements: [
          "Regional Math Olympiad Winners",
          "Inter-school Competition Champions",
        ],
        meetingDay: "Fridays",
        teacher: "Mr. Rajesh Kumar",
        icon: <Target className="w-6 h-6" />,
      },
      {
        name: "English Literary Society",
        description:
          "Creative writing, debates, drama, and literary appreciation",
        activities: [
          "Creative writing workshops",
          "Debate competitions",
          "Drama productions",
          "Poetry sessions",
        ],
        members: 52,
        achievements: [
          "Inter-school Debate Championship",
          "Published school magazine",
        ],
        meetingDay: "Mondays",
        teacher: "Dr. Anjali Verma",
        icon: <BookOpen className="w-6 h-6" />,
      },
      {
        name: "Computer Programming Club",
        description: "Coding, app development, and technology innovation",
        activities: [
          "Coding workshops",
          "App development",
          "Robotics projects",
          "Hackathons",
        ],
        members: 35,
        achievements: [
          "National Coding Competition Finalists",
          "School App Development",
        ],
        meetingDay: "Thursdays",
        teacher: "Mr. Arjun Singh",
        icon: <Zap className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Arts & Culture",
    description:
      "Creative expression through various art forms and cultural activities",
    icon: <Palette className="w-8 h-8" />,
    color: "from-pink-500 to-orange-500",
    clubs: [
      {
        name: "Art & Craft Club",
        description: "Visual arts, handicrafts, and creative design projects",
        activities: [
          "Painting workshops",
          "Craft projects",
          "Art exhibitions",
          "Design competitions",
        ],
        members: 48,
        achievements: [
          "State Art Exhibition Winners",
          "Craft Competition Champions",
        ],
        meetingDay: "Tuesdays",
        teacher: "Ms. Kavita Jain",
        icon: <Palette className="w-6 h-6" />,
      },
      {
        name: "Music & Dance Club",
        description:
          "Classical and contemporary music, dance, and musical performances",
        activities: [
          "Vocal training",
          "Instrumental music",
          "Dance choreography",
          "Cultural performances",
        ],
        members: 60,
        achievements: [
          "Regional Dance Competition Winners",
          "Inter-school Music Festival Champions",
        ],
        meetingDay: "Saturdays",
        teacher: "Ms. Rekha Gupta",
        icon: <Music className="w-6 h-6" />,
      },
      {
        name: "Drama & Theatre Club",
        description:
          "Acting, script writing, stage production, and theatrical performances",
        activities: [
          "Acting workshops",
          "Script writing",
          "Stage productions",
          "Theatre festivals",
        ],
        members: 32,
        achievements: [
          "Best School Drama Award",
          "Young Theatre Festival Winners",
        ],
        meetingDay: "Wednesdays",
        teacher: "Mr. Vikash Pandey",
        icon: <Users className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Social & Leadership",
    description:
      "Community service, leadership development, and social awareness",
    icon: <Heart className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    clubs: [
      {
        name: "Student Council",
        description:
          "Student leadership, school governance, and peer representation",
        activities: [
          "Student leadership",
          "Event organization",
          "Peer mediation",
          "School policy input",
        ],
        members: 25,
        achievements: [
          "Successful student-led initiatives",
          "Improved student services",
        ],
        meetingDay: "Mondays",
        teacher: "Ms. Neha Agarwal",
        icon: <Trophy className="w-6 h-6" />,
      },
      {
        name: "Eco Club",
        description:
          "Environmental awareness, sustainability projects, and green initiatives",
        activities: [
          "Tree plantation drives",
          "Waste management projects",
          "Environmental awareness campaigns",
          "Green innovation",
        ],
        members: 55,
        achievements: [
          "Green School Certification",
          "Environmental Innovation Award",
        ],
        meetingDay: "Fridays",
        teacher: "Dr. Sunita Rao",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        name: "Community Service Club",
        description:
          "Social service, community outreach, and humanitarian activities",
        activities: [
          "Community service projects",
          "Charity drives",
          "Elderly care programs",
          "Skill development workshops",
        ],
        members: 40,
        achievements: ["Community Impact Award", "Youth Volunteer Recognition"],
        meetingDay: "Saturdays",
        teacher: "Ms. Pooja Malik",
        icon: <Heart className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Sports & Fitness",
    description:
      "Physical fitness, competitive sports, and athletic development",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    clubs: [
      {
        name: "Athletics Club",
        description:
          "Track and field events, running, and athletic competitions",
        activities: [
          "Daily training sessions",
          "Inter-house competitions",
          "District championships",
          "Fitness camps",
        ],
        members: 65,
        achievements: [
          "State Athletics Championship",
          "Multiple district records",
        ],
        meetingDay: "Daily (Evening)",
        teacher: "Mr. Rohit Sharma",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        name: "Sports Teams",
        description:
          "Various team sports including cricket, basketball, football",
        activities: [
          "Team practice sessions",
          "Inter-school matches",
          "Tournament participation",
          "Sports camps",
        ],
        members: 80,
        achievements: [
          "District Cricket Champions",
          "Regional Basketball Winners",
        ],
        meetingDay: "Daily (After school)",
        teacher: "Coach Amit Verma",
        icon: <Trophy className="w-6 h-6" />,
      },
    ],
  },
];

const clubBenefits = [
  {
    benefit: "Skill Development",
    description:
      "Learn new skills and enhance existing talents through structured activities",
    icon: <Target className="w-6 h-6" />,
  },
  {
    benefit: "Leadership Opportunities",
    description:
      "Take leadership roles and develop organizational and management skills",
    icon: <Users className="w-6 h-6" />,
  },
  {
    benefit: "Social Connections",
    description:
      "Build friendships and networks with like-minded peers across different grades",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    benefit: "Recognition & Awards",
    description:
      "Participate in competitions and earn recognition for achievements",
    icon: <Award className="w-6 h-6" />,
  },
];

const membershipProcess = [
  {
    step: 1,
    title: "Choose Your Interests",
    description:
      "Explore different clubs and identify areas that match your interests and passions",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    step: 2,
    title: "Attend Information Sessions",
    description:
      "Join club information sessions to learn about activities, requirements, and expectations",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    step: 3,
    title: "Submit Application",
    description:
      "Complete the club membership form and submit it to the supervising teacher",
    icon: <Users className="w-6 h-6" />,
  },
  {
    step: 4,
    title: "Start Participating",
    description:
      "Begin attending regular meetings and actively participate in club activities",
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function ClubsPage() {
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
                Student Clubs & Activities
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover your passion, develop your talents, and make lifelong
                friendships through our diverse range of clubs and
                extracurricular activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="#clubs">
                    <Users className="mr-2 h-5 w-5" />
                    Explore Clubs
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/student-life/events">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Events
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Club Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">Active Clubs</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      450+
                    </div>
                    <div className="text-sm text-gray-600">Club Members</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Awards Won</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      120
                    </div>
                    <div className="text-sm text-gray-600">Events Per Year</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Club Categories */}
        <section id="clubs" className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Explore Our Clubs
              </h2>
              <p className="text-gray-600">
                Find your passion and join like-minded peers in pursuing
                excellence
              </p>
            </motion.div>

            <div className="space-y-12 max-w-7xl mx-auto">
              {clubCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${category.color} text-white`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">
                          {category.category}
                        </h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.clubs.map((club, clubIndex) => (
                      <motion.div
                        key={club.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: clubIndex * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                {club.icon}
                              </div>
                              <div className="flex-grow">
                                <CardTitle className="text-blue-900">
                                  {club.name}
                                </CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline">
                                    {club.members} members
                                  </Badge>
                                  <Badge variant="secondary">
                                    {club.meetingDay}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                              {club.description}
                            </p>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                                  Activities:
                                </h4>
                                <div className="space-y-1">
                                  {club.activities.map((activity, idx) => (
                                    <div
                                      key={idx}
                                      className="text-xs text-gray-600"
                                    >
                                      • {activity}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                                  Recent Achievements:
                                </h4>
                                <div className="space-y-1">
                                  {club.achievements.map((achievement, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-1"
                                    >
                                      <Award className="w-3 h-3 text-yellow-500" />
                                      <span className="text-xs text-gray-700">
                                        {achievement}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-2 border-t border-gray-100">
                                <div className="text-xs text-gray-500">
                                  <strong>Supervisor:</strong> {club.teacher}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Joining */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Benefits of Club Membership
              </h2>
              <p className="text-gray-600">
                Joining clubs offers numerous advantages for personal and
                academic growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {clubBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-blue-100 rounded-full text-blue-600 w-fit">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {benefit.benefit}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Process */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                How to Join a Club
              </h2>
              <p className="text-gray-600">
                Simple steps to become a member of your favorite club
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {membershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                        {step.step}
                      </div>
                      <CardTitle className="text-blue-900">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="mx-auto p-2 bg-blue-100 rounded-full text-blue-600 w-fit">
                          {step.icon}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
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
                Ready to Join Our Community?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Discover your talents, make new friends, and create lasting
                memories through our vibrant club activities and programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/student-life/events">
                    <Calendar className="mr-2 h-5 w-5" />
                    View Events
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/student-life/gallery">
                    <Palette className="mr-2 h-5 w-5" />
                    Photo Gallery
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <Users className="mr-2 h-5 w-5" />
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
