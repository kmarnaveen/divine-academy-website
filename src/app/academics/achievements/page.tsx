"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Medal,
  Award,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Crown,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const boardResults = [
  {
    year: "2023-24",
    grade: "Class XII",
    passPercentage: 98.5,
    distinction: 85,
    toppers: [
      { name: "Arjun Sharma", percentage: 97.2, stream: "Science (PCM)" },
      { name: "Priya Patel", percentage: 96.8, stream: "Science (PCB)" },
      { name: "Rahul Gupta", percentage: 95.4, stream: "Commerce" },
    ],
    highlights: [
      "15 students scored above 95%",
      "45 students scored above 90%",
      "100% pass rate in Mathematics",
      "98% pass rate in Science subjects",
    ],
  },
  {
    year: "2023-24",
    grade: "Class X",
    passPercentage: 99.2,
    distinction: 88,
    toppers: [
      { name: "Anjali Singh", percentage: 98.6, stream: "All Subjects" },
      { name: "Vikram Kumar", percentage: 97.8, stream: "All Subjects" },
      { name: "Sneha Jain", percentage: 97.2, stream: "All Subjects" },
    ],
    highlights: [
      "25 students scored above 95%",
      "62 students scored above 90%",
      "Perfect scores in multiple subjects",
      "Outstanding improvement from previous year",
    ],
  },
];

const competitiveExams = [
  {
    category: "Engineering Entrance",
    exams: [
      {
        name: "JEE Main 2024",
        achievements: [
          "15 students qualified",
          "Top rank: AIR 2,847",
          "Average percentile: 87.5",
        ],
        icon: <Trophy className="w-6 h-6" />,
        color: "bg-yellow-500",
      },
      {
        name: "JEE Advanced 2024",
        achievements: [
          "8 students qualified",
          "Top rank: AIR 4,521",
          "IIT admissions: 5",
        ],
        icon: <Crown className="w-6 h-6" />,
        color: "bg-purple-500",
      },
      {
        name: "State Engineering",
        achievements: [
          "45 students qualified",
          "Top rank: State Rank 126",
          "Government seat allotments: 28",
        ],
        icon: <Medal className="w-6 h-6" />,
        color: "bg-primary",
      },
    ],
  },
  {
    category: "Medical Entrance",
    exams: [
      {
        name: "NEET 2024",
        achievements: [
          "22 students qualified",
          "Top score: 685/720",
          "AIIMS selections: 3",
        ],
        icon: <Trophy className="w-6 h-6" />,
        color: "bg-green-500",
      },
      {
        name: "State Medical",
        achievements: [
          "18 students qualified",
          "Government medical seats: 12",
          "Top state rank: 234",
        ],
        icon: <Medal className="w-6 h-6" />,
        color: "bg-teal-500",
      },
    ],
  },
  {
    category: "Other Competitive Exams",
    exams: [
      {
        name: "CLAT 2024",
        achievements: [
          "5 students qualified",
          "Top rank: AIR 1,247",
          "NLU admissions: 3",
        ],
        icon: <Award className="w-6 h-6" />,
        color: "bg-indigo-500",
      },
      {
        name: "CA Foundation",
        achievements: [
          "12 students cleared",
          "All India Rank 15",
          "Pass percentage: 85%",
        ],
        icon: <Star className="w-6 h-6" />,
        color: "bg-orange-500",
      },
    ],
  },
];

const olympiads = [
  {
    subject: "Mathematics",
    achievements: [
      { level: "International", count: 2, awards: "Gold: 1, Silver: 1" },
      { level: "National", count: 8, awards: "Gold: 3, Silver: 3, Bronze: 2" },
      {
        level: "Regional",
        count: 25,
        awards: "Gold: 10, Silver: 9, Bronze: 6",
      },
    ],
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-primary",
  },
  {
    subject: "Science",
    achievements: [
      { level: "International", count: 1, awards: "Silver: 1" },
      { level: "National", count: 12, awards: "Gold: 4, Silver: 5, Bronze: 3" },
      {
        level: "Regional",
        count: 35,
        awards: "Gold: 15, Silver: 12, Bronze: 8",
      },
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "bg-primary",
  },
  {
    subject: "English",
    achievements: [
      { level: "National", count: 6, awards: "Gold: 2, Silver: 2, Bronze: 2" },
      { level: "Regional", count: 18, awards: "Gold: 8, Silver: 6, Bronze: 4" },
    ],
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-primary",
  },
];

const sportsAchievements = [
  {
    sport: "Cricket",
    achievements: [
      "District Champions 2024",
      "State Quarter-finalists 2023",
      "Inter-school Tournament Winners",
    ],
    players: 15,
    icon: "🏏",
  },
  {
    sport: "Basketball",
    achievements: [
      "Regional Champions 2024",
      "State Semi-finalists 2024",
      "Best Team Spirit Award",
    ],
    players: 12,
    icon: "🏀",
  },
  {
    sport: "Athletics",
    achievements: [
      "State Gold Medalist - 100m Sprint",
      "District Champions - Relay Race",
      "Individual Excellence Awards: 8",
    ],
    players: 25,
    icon: "🏃‍♂️",
  },
  {
    sport: "Chess",
    achievements: [
      "National Under-16 Champion",
      "State Team Champions",
      "International Tournament Participation",
    ],
    players: 8,
    icon: "♟️",
  },
];

const culturalAchievements = [
  {
    activity: "Music & Dance",
    achievements: [
      "State Classical Music Competition - 1st Prize",
      "Inter-school Dance Championship - Winners",
      "Cultural Fest Best Performance Award",
    ],
    participants: 45,
  },
  {
    activity: "Debate & Oratory",
    achievements: [
      "National Debate Championship - Runners-up",
      "Model UN Best Delegate Awards: 5",
      "Public Speaking Competition Winners",
    ],
    participants: 30,
  },
  {
    activity: "Arts & Crafts",
    achievements: [
      "State Art Exhibition - Multiple Winners",
      "Craft Competition District Champions",
      "Creative Expression Awards: 12",
    ],
    participants: 40,
  },
];

const yearlyProgress = [
  {
    year: "2021-22",
    metrics: { passRate: 94.5, distinction: 75, avgScore: 82.3, olympiads: 45 },
  },
  {
    year: "2022-23",
    metrics: { passRate: 96.8, distinction: 82, avgScore: 85.1, olympiads: 58 },
  },
  {
    year: "2023-24",
    metrics: {
      passRate: 98.8,
      distinction: 86.5,
      avgScore: 87.6,
      olympiads: 67,
    },
  },
];

export default function AchievementsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-primary-900/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Academic Excellence
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Celebrating outstanding achievements of our students across
                academics, sports, and cultural activities. A testament to our
                commitment to holistic education and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-700"
                >
                  <Link href="/academics/curriculum">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Our Curriculum
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/apply">
                    <Target className="mr-2 h-5 w-5" />
                    Join Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Statistics */}
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
                    <div className="text-4xl font-bold text-primary mb-2">
                      98.8%
                    </div>
                    <div className="text-sm text-gray-600">
                      Board Pass Rate 2024
                    </div>
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
                      86%
                    </div>
                    <div className="text-sm text-gray-600">
                      Students with Distinction
                    </div>
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
                      67
                    </div>
                    <div className="text-sm text-gray-600">
                      Olympiad Winners 2024
                    </div>
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
                      37
                    </div>
                    <div className="text-sm text-gray-600">
                      Competitive Exam Qualifiers
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Board Results */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                CBSE Board Results 2024
              </h2>
              <p className="text-gray-600">
                Outstanding performance in Class X and XII board examinations
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {boardResults.map((result, index) => (
                <motion.div
                  key={`${result.grade}-${result.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-primary-900">
                          {result.grade} Results
                        </CardTitle>
                        <Badge className="bg-green-600">{result.year}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center p-3 bg-primary-50 rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            {result.passPercentage}%
                          </div>
                          <div className="text-sm text-gray-600">Pass Rate</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {result.distinction}%
                          </div>
                          <div className="text-sm text-gray-600">
                            Distinction
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Top Performers
                          </h4>
                          <div className="space-y-2">
                            {result.toppers.map((topper, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-2 bg-yellow-50 rounded"
                              >
                                <div>
                                  <span className="font-medium">
                                    {topper.name}
                                  </span>
                                  <div className="text-sm text-gray-600">
                                    {topper.stream}
                                  </div>
                                </div>
                                <Badge variant="secondary">
                                  {topper.percentage}%
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Key Highlights
                          </h4>
                          <ul className="space-y-1">
                            {result.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Star className="w-3 h-3 text-yellow-500" />
                                {highlight}
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

        {/* Competitive Exams */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Competitive Exam Success
              </h2>
              <p className="text-gray-600">
                Exceptional performance in national level entrance examinations
              </p>
            </motion.div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {competitiveExams.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary-900">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        {category.exams.map((exam, examIndex) => (
                          <div key={exam.name} className="text-center">
                            <div
                              className={`mx-auto w-12 h-12 ${exam.color} rounded-full flex items-center justify-center text-white mb-3`}
                            >
                              {exam.icon}
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {exam.name}
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {exam.achievements.map((achievement, idx) => (
                                <li key={idx}>• {achievement}</li>
                              ))}
                            </ul>
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

        {/* Olympiads */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Olympiad Achievements
              </h2>
              <p className="text-gray-600">
                Recognition at international, national, and regional levels
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {olympiads.map((olympiad, index) => (
                <motion.div
                  key={olympiad.subject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto p-4 rounded-full w-fit bg-primary text-white">
                        {olympiad.icon}
                      </div>
                      <CardTitle className="text-primary-900">
                        {olympiad.subject} Olympiad
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {olympiad.achievements.map((achievement, idx) => (
                          <div
                            key={achievement.level}
                            className="p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">
                                {achievement.level}
                              </span>
                              <Badge variant="secondary">
                                {achievement.count} Winners
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-600">
                              {achievement.awards}
                            </p>
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

        {/* Sports & Cultural */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="sports" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="sports">Sports Achievements</TabsTrigger>
                  <TabsTrigger value="cultural">
                    Cultural Excellence
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="sports">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {sportsAchievements.map((sport, index) => (
                      <Card
                        key={sport.sport}
                        className="hover:shadow-md transition-shadow duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{sport.icon}</span>
                            <div>
                              <CardTitle className="text-primary-900">
                                {sport.sport}
                              </CardTitle>
                              <p className="text-sm text-gray-600">
                                {sport.players} active players
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {sport.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Medal className="w-4 h-4 text-yellow-500" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="cultural">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    {culturalAchievements.map((activity, index) => (
                      <Card key={activity.activity}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-primary-900">
                              {activity.activity}
                            </CardTitle>
                            <Badge variant="outline">
                              {activity.participants} participants
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4">
                            {activity.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Award className="w-4 h-4 text-purple-500" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Progress Trend */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Consistent Growth
              </h2>
              <p className="text-gray-600">
                Three-year performance trend showing continuous improvement
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-primary-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-primary-900">
                            Year
                          </th>
                          <th className="px-4 py-3 text-center font-semibold text-primary-900">
                            Pass Rate
                          </th>
                          <th className="px-4 py-3 text-center font-semibold text-primary-900">
                            Distinction %
                          </th>
                          <th className="px-4 py-3 text-center font-semibold text-primary-900">
                            Avg Score
                          </th>
                          <th className="px-4 py-3 text-center font-semibold text-primary-900">
                            Olympiad Winners
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearlyProgress.map((year, index) => (
                          <motion.tr
                            key={year.year}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-4 py-3 font-medium text-primary-900">
                              {year.year}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <Badge className="bg-green-600">
                                {year.metrics.passRate}%
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <Badge variant="secondary">
                                {year.metrics.distinction}%
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-center font-semibold">
                              {year.metrics.avgScore}%
                            </td>
                            <td className="px-4 py-3 text-center">
                              <Badge className="bg-purple-600">
                                {year.metrics.olympiads}
                              </Badge>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
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
                Be Part of Our Success Story
              </h2>
              <p className="text-primary-100 mb-8 text-lg">
                Join Divine International Academy and unlock your potential for
                excellence in academics, sports, and personal development. Your
                success story starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/academics/streams">
                    <Target className="mr-2 h-5 w-5" />
                    Explore Programs
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-primary-50"
                  asChild
                >
                  <Link href="/admissions/process">
                    <Users className="mr-2 h-5 w-5" />
                    Admission Process
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-primary-600"
                  asChild
                >
                  <Link href="/apply">
                    <Award className="mr-2 h-5 w-5" />
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
