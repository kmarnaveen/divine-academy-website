"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Camera,
  Users,
  Trophy,
  Music,
  Palette,
  BookOpen,
  Heart,
  Award,
  Filter,
  Eye,
  Download,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const galleryCategories = [
  {
    category: "Academic Events",
    description: "Science exhibitions, competitions, and academic celebrations",
    count: 45,
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-blue-500",
  },
  {
    category: "Cultural Programs",
    description: "Annual day, festivals, dance, music, and drama performances",
    count: 60,
    icon: <Music className="w-5 h-5" />,
    color: "bg-purple-500",
  },
  {
    category: "Sports Activities",
    description: "Sports meets, tournaments, and athletic competitions",
    count: 35,
    icon: <Trophy className="w-5 h-5" />,
    color: "bg-orange-500",
  },
  {
    category: "Campus Life",
    description: "Daily activities, classroom moments, and campus facilities",
    count: 80,
    icon: <Users className="w-5 h-5" />,
    color: "bg-green-500",
  },
  {
    category: "Achievements",
    description: "Awards, recognitions, and milestone celebrations",
    count: 25,
    icon: <Award className="w-5 h-5" />,
    color: "bg-yellow-500",
  },
  {
    category: "Art & Creativity",
    description: "Student artwork, craft exhibitions, and creative showcases",
    count: 40,
    icon: <Palette className="w-5 h-5" />,
    color: "bg-pink-500",
  },
];

const featuredPhotos = [
  {
    id: 1,
    title: "Annual Day Grand Finale",
    description:
      "Students performing the spectacular finale of Annual Day 2024",
    category: "Cultural Programs",
    date: "December 15, 2023",
    photographer: "School Photography Team",
    tags: ["Annual Day", "Cultural", "Performance", "Students"],
    featured: true,
  },
  {
    id: 2,
    title: "Science Exhibition Winner",
    description: "Students showcasing their award-winning robotics project",
    category: "Academic Events",
    date: "January 20, 2024",
    photographer: "Mr. Rajesh Kumar",
    tags: ["Science", "Exhibition", "Robotics", "Innovation"],
    featured: true,
  },
  {
    id: 3,
    title: "Athletic Championship Victory",
    description: "Our relay team celebrating their state championship win",
    category: "Sports Activities",
    date: "February 10, 2024",
    photographer: "Sports Department",
    tags: ["Sports", "Athletics", "Championship", "Victory"],
    featured: true,
  },
  {
    id: 4,
    title: "Art Gallery Opening",
    description:
      "Students admiring artwork at the annual art exhibition opening",
    category: "Art & Creativity",
    date: "March 5, 2024",
    photographer: "Ms. Kavita Jain",
    tags: ["Art", "Exhibition", "Creativity", "Students"],
    featured: true,
  },
];

const photoCollections = {
  academic: [
    {
      id: "ac1",
      title: "Science Fair 2024",
      description:
        "Students presenting innovative projects at annual science fair",
      images: 18,
      date: "January 2024",
      highlights: [
        "Robotics projects",
        "Environmental solutions",
        "Student research",
        "Innovation awards",
      ],
    },
    {
      id: "ac2",
      title: "Math Olympiad Preparation",
      description:
        "Intensive training sessions for national mathematics competition",
      images: 12,
      date: "November 2023",
      highlights: [
        "Problem solving",
        "Team collaboration",
        "Advanced concepts",
        "Peer learning",
      ],
    },
    {
      id: "ac3",
      title: "Inter-School Debate Championship",
      description: "Regional debate competition hosted at our school",
      images: 15,
      date: "August 2023",
      highlights: [
        "Public speaking",
        "Critical thinking",
        "School representation",
        "Victory celebration",
      ],
    },
  ],
  cultural: [
    {
      id: "cu1",
      title: "Annual Day Celebration 2024",
      description: "Grand cultural extravaganza showcasing student talents",
      images: 50,
      date: "December 2023",
      highlights: [
        "Dance performances",
        "Drama presentations",
        "Music concerts",
        "Traditional shows",
      ],
    },
    {
      id: "cu2",
      title: "Diwali Festival Celebration",
      description: "Traditional festival celebration with lights and joy",
      images: 22,
      date: "October 2023",
      highlights: [
        "Rangoli competition",
        "Cultural programs",
        "Traditional wear",
        "Community celebration",
      ],
    },
    {
      id: "cu3",
      title: "Independence Day Program",
      description: "Patriotic celebration honoring our nation",
      images: 20,
      date: "August 2023",
      highlights: [
        "Flag hoisting",
        "Patriotic songs",
        "March past",
        "Cultural programs",
      ],
    },
  ],
  sports: [
    {
      id: "sp1",
      title: "Annual Sports Meet 2024",
      description: "Three-day sports extravaganza with various competitions",
      images: 40,
      date: "February 2024",
      highlights: [
        "Track events",
        "Field competitions",
        "Team sports",
        "House competitions",
      ],
    },
    {
      id: "sp2",
      title: "Inter-House Cricket Tournament",
      description: "Exciting cricket matches between all four houses",
      images: 25,
      date: "January 2024",
      highlights: [
        "Cricket matches",
        "Team spirit",
        "Sportsmanship",
        "Victory celebrations",
      ],
    },
    {
      id: "sp3",
      title: "Basketball Championship",
      description: "Regional basketball tournament finals",
      images: 18,
      date: "December 2023",
      highlights: [
        "Basketball skills",
        "Team coordination",
        "Championship finals",
        "Awards ceremony",
      ],
    },
  ],
  campus: [
    {
      id: "ca1",
      title: "Campus Life Moments",
      description:
        "Candid moments of students enjoying daily campus activities",
      images: 35,
      date: "Throughout 2023-24",
      highlights: [
        "Classroom interactions",
        "Library studies",
        "Cafeteria fun",
        "Friendship moments",
      ],
    },
    {
      id: "ca2",
      title: "New Academic Year Welcome",
      description: "Welcoming new students and beginning of academic session",
      images: 20,
      date: "April 2023",
      highlights: [
        "Orientation program",
        "New friendships",
        "Campus tour",
        "Welcome activities",
      ],
    },
    {
      id: "ca3",
      title: "Green Campus Initiative",
      description:
        "Students participating in environmental conservation activities",
      images: 15,
      date: "June 2023",
      highlights: [
        "Tree plantation",
        "Environmental awareness",
        "Student participation",
        "Green initiatives",
      ],
    },
  ],
  achievements: [
    {
      id: "ah1",
      title: "Academic Excellence Awards",
      description: "Recognition ceremony for outstanding academic achievements",
      images: 12,
      date: "March 2024",
      highlights: [
        "Merit certificates",
        "Academic toppers",
        "Subject excellence",
        "Recognition ceremony",
      ],
    },
    {
      id: "ah2",
      title: "National Competition Winners",
      description: "Students receiving awards at national level competitions",
      images: 8,
      date: "February 2024",
      highlights: [
        "National awards",
        "Competition victories",
        "Student achievements",
        "Pride moments",
      ],
    },
  ],
  art: [
    {
      id: "ar1",
      title: "Student Art Exhibition",
      description: "Showcase of creative artwork by talented students",
      images: 30,
      date: "March 2024",
      highlights: ["Paintings", "Sculptures", "Crafts", "Creative expressions"],
    },
    {
      id: "ar2",
      title: "Craft Workshop",
      description: "Hands-on craft workshop sessions with expert guidance",
      images: 16,
      date: "January 2024",
      highlights: [
        "Craft techniques",
        "Creative skills",
        "Handmade items",
        "Artistic learning",
      ],
    },
  ],
};

const photoStats = [
  {
    number: "2000+",
    label: "Photos Captured",
    icon: <Camera className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    number: "50+",
    label: "Events Covered",
    icon: <Users className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    number: "1500+",
    label: "Happy Moments",
    icon: <Heart className="w-6 h-6" />,
    color: "text-pink-600",
  },
  {
    number: "100%",
    label: "Memories Preserved",
    icon: <Award className="w-6 h-6" />,
    color: "text-purple-600",
  },
];

export default function GalleryPage() {
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
                School Photo Gallery
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Capturing precious moments, celebrating achievements, and
                preserving memories of our vibrant school community and student
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="#featured">
                    <Camera className="mr-2 h-5 w-5" />
                    Featured Photos
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#collections">
                    <Eye className="mr-2 h-5 w-5" />
                    Browse Collections
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Photo Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {photoStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`mx-auto p-3 bg-gray-100 rounded-full w-fit mb-4 ${stat.color}`}
                      >
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-blue-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Photo Categories
              </h2>
              <p className="text-gray-600">
                Explore our organized photo collections by category and theme
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {galleryCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-2 ${category.color} rounded-full text-white`}
                        >
                          {category.icon}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-blue-900">
                            {category.category}
                          </h3>
                          <Badge variant="outline" className="text-xs mt-1">
                            {category.count} photos
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Photos */}
        <section id="featured" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Featured Photos
              </h2>
              <p className="text-gray-600">
                Our most memorable and impactful moments captured beautifully
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      {/* Photo Placeholder */}
                      <div className="h-64 bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                          <p className="text-gray-600 font-medium">
                            {photo.title}
                          </p>
                        </div>
                      </div>

                      {/* Photo Details */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-grow">
                            <h3 className="font-bold text-blue-900 mb-1">
                              {photo.title}
                            </h3>
                            <Badge className="text-xs">{photo.category}</Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-2">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-2">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                          {photo.description}
                        </p>

                        <div className="space-y-2 text-xs text-gray-500">
                          <div>
                            <strong>Date:</strong> {photo.date}
                          </div>
                          <div>
                            <strong>Photographer:</strong> {photo.photographer}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {photo.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
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

        {/* Photo Collections */}
        <section id="collections" className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Photo Collections
              </h2>
              <p className="text-gray-600">
                Explore our comprehensive photo collections organized by events
                and activities
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="academic" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                  <TabsTrigger
                    value="academic"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="hidden sm:inline">Academic</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="cultural"
                    className="flex items-center gap-2"
                  >
                    <Music className="w-4 h-4" />
                    <span className="hidden sm:inline">Cultural</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="sports"
                    className="flex items-center gap-2"
                  >
                    <Trophy className="w-4 h-4" />
                    <span className="hidden sm:inline">Sports</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="campus"
                    className="flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    <span className="hidden sm:inline">Campus</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="achievements"
                    className="flex items-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span className="hidden sm:inline">Awards</span>
                  </TabsTrigger>
                  <TabsTrigger value="art" className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span className="hidden sm:inline">Art</span>
                  </TabsTrigger>
                </TabsList>

                {Object.entries(photoCollections).map(
                  ([category, collections]) => (
                    <TabsContent
                      key={category}
                      value={category}
                      className="mt-6"
                    >
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collections.map((collection, index) => (
                          <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                              <CardContent className="p-0">
                                {/* Collection Cover */}
                                <div className="h-48 bg-gray-100 flex items-center justify-center">
                                  <div className="text-center">
                                    <Camera className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gray-700">
                                      {collection.images}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      Photos
                                    </div>
                                  </div>
                                </div>

                                {/* Collection Info */}
                                <div className="p-6">
                                  <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-bold text-blue-900 flex-grow">
                                      {collection.title}
                                    </h3>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {collection.date}
                                    </Badge>
                                  </div>

                                  <p className="text-gray-600 text-sm mb-4">
                                    {collection.description}
                                  </p>

                                  <div className="space-y-2">
                                    <div className="text-xs text-gray-500 font-semibold">
                                      Highlights:
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {collection.highlights.map(
                                        (highlight, idx) => (
                                          <Badge
                                            key={idx}
                                            variant="secondary"
                                            className="text-xs"
                                          >
                                            {highlight}
                                          </Badge>
                                        )
                                      )}
                                    </div>
                                  </div>

                                  <Button
                                    className="w-full mt-4"
                                    variant="outline"
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Collection
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  )
                )}
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
                Create Your Own Memories
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join our vibrant school community and become part of these
                beautiful moments and memorable experiences that last a
                lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/student-life/clubs">
                    <Users className="mr-2 h-5 w-5" />
                    Join Activities
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/student-life/events">
                    <Camera className="mr-2 h-5 w-5" />
                    Upcoming Events
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <Heart className="mr-2 h-5 w-5" />
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
