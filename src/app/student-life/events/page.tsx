"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Trophy,
  Music,
  Palette,
  Users,
  BookOpen,
  Globe,
  Heart,
  Star,
  Award,
  Clock,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const upcomingEvents = [
  {
    title: "Annual Day Celebration",
    date: "December 15, 2024",
    time: "9:00 AM - 1:00 PM",
    venue: "School Auditorium",
    category: "Cultural",
    description:
      "Grand celebration showcasing student talents through dance, music, and drama performances",
    highlights: [
      "Cultural performances",
      "Award ceremony",
      "Guest performances",
      "Parent participation",
    ],
    participants: "All students",
    icon: <Music className="w-6 h-6" />,
    status: "upcoming",
  },
  {
    title: "Science Exhibition",
    date: "January 10, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Science Labs & Corridors",
    category: "Academic",
    description:
      "Students showcase innovative science projects, experiments, and research work",
    highlights: [
      "Student projects",
      "Live experiments",
      "Science fair",
      "Innovation awards",
    ],
    participants: "Classes VI-XII",
    icon: <BookOpen className="w-6 h-6" />,
    status: "upcoming",
  },
  {
    title: "Inter-House Sports Meet",
    date: "February 5-7, 2025",
    time: "8:00 AM - 5:00 PM",
    venue: "School Sports Complex",
    category: "Sports",
    description:
      "Three-day sports extravaganza with various indoor and outdoor sporting competitions",
    highlights: [
      "Track & field events",
      "Team sports",
      "House competitions",
      "Championship trophies",
    ],
    participants: "All houses",
    icon: <Trophy className="w-6 h-6" />,
    status: "upcoming",
  },
  {
    title: "Art & Craft Exhibition",
    date: "March 20, 2025",
    time: "11:00 AM - 3:00 PM",
    venue: "Art Rooms & Gallery",
    category: "Cultural",
    description: "Showcase of student artwork, crafts, and creative projects",
    highlights: [
      "Student artwork",
      "Craft displays",
      "Live demonstrations",
      "Art workshops",
    ],
    participants: "All students",
    icon: <Palette className="w-6 h-6" />,
    status: "upcoming",
  },
];

const annualEvents = [
  {
    month: "April",
    events: [
      {
        name: "New Academic Year Inauguration",
        description:
          "Welcome ceremony for new academic session with orientation programs",
        type: "Academic",
        duration: "1 day",
      },
      {
        name: "Earth Day Celebration",
        description:
          "Environmental awareness programs and tree plantation drives",
        type: "Social",
        duration: "1 week",
      },
    ],
  },
  {
    month: "May",
    events: [
      {
        name: "Mother's Day Special",
        description:
          "Celebrating mothers with special performances and appreciation events",
        type: "Social",
        duration: "1 day",
      },
      {
        name: "Summer Camp Activities",
        description:
          "Sports camps, skill development workshops, and recreational activities",
        type: "Activities",
        duration: "2 weeks",
      },
    ],
  },
  {
    month: "July",
    events: [
      {
        name: "Guru Purnima",
        description:
          "Honoring teachers with cultural programs and gratitude ceremonies",
        type: "Cultural",
        duration: "1 day",
      },
    ],
  },
  {
    month: "August",
    events: [
      {
        name: "Independence Day Celebration",
        description:
          "Patriotic programs, flag hoisting, and cultural performances",
        type: "National",
        duration: "1 day",
      },
      {
        name: "Inter-School Debate Competition",
        description:
          "Regional debate championship with multiple schools participating",
        type: "Academic",
        duration: "2 days",
      },
    ],
  },
  {
    month: "September",
    events: [
      {
        name: "Teachers' Day Celebration",
        description:
          "Student-organized programs honoring teachers and their contributions",
        type: "Social",
        duration: "1 day",
      },
      {
        name: "Hindi Diwas",
        description:
          "Celebrating Hindi language through poetry, essays, and cultural programs",
        type: "Cultural",
        duration: "1 day",
      },
    ],
  },
  {
    month: "October",
    events: [
      {
        name: "Dussehra Celebration",
        description:
          "Traditional festival celebration with cultural performances",
        type: "Cultural",
        duration: "1 day",
      },
      {
        name: "Gandhi Jayanti",
        description:
          "Commemorating Mahatma Gandhi with peace programs and community service",
        type: "National",
        duration: "1 day",
      },
    ],
  },
  {
    month: "November",
    events: [
      {
        name: "Diwali Celebration",
        description:
          "Festival of lights celebration with rangoli, lights, and cultural programs",
        type: "Cultural",
        duration: "1 day",
      },
      {
        name: "Children's Day",
        description:
          "Special day dedicated to children with fun activities and celebrations",
        type: "Social",
        duration: "1 day",
      },
    ],
  },
  {
    month: "December",
    events: [
      {
        name: "Annual Day & Prize Distribution",
        description:
          "Grand annual celebration with performances, awards, and recognition",
        type: "Cultural",
        duration: "1 day",
      },
      {
        name: "Christmas Celebration",
        description:
          "Christmas festivities with carol singing, decorations, and joy sharing",
        type: "Cultural",
        duration: "1 day",
      },
    ],
  },
  {
    month: "January",
    events: [
      {
        name: "Republic Day Celebration",
        description:
          "Patriotic celebration with march past, flag hoisting, and cultural programs",
        type: "National",
        duration: "1 day",
      },
      {
        name: "Science Fair",
        description:
          "Annual science exhibition showcasing student projects and innovations",
        type: "Academic",
        duration: "3 days",
      },
    ],
  },
  {
    month: "February",
    events: [
      {
        name: "Annual Sports Meet",
        description:
          "Grand sports competition with track & field, team sports, and athletics",
        type: "Sports",
        duration: "3 days",
      },
      {
        name: "Vasant Panchami",
        description:
          "Celebrating knowledge and learning with Saraswati Puja and cultural programs",
        type: "Cultural",
        duration: "1 day",
      },
    ],
  },
  {
    month: "March",
    events: [
      {
        name: "Holi Celebration",
        description:
          "Festival of colors celebration with traditional programs and joy",
        type: "Cultural",
        duration: "1 day",
      },
      {
        name: "Farewell Ceremony",
        description:
          "Emotional farewell for graduating students with memories and best wishes",
        type: "Social",
        duration: "1 day",
      },
    ],
  },
];

const eventCategories = [
  {
    category: "Academic Events",
    description:
      "Educational competitions, exhibitions, and learning celebrations",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-blue-500",
    count: 8,
  },
  {
    category: "Cultural Programs",
    description: "Arts, music, dance, and traditional festival celebrations",
    icon: <Music className="w-8 h-8" />,
    color: "bg-purple-500",
    count: 12,
  },
  {
    category: "Sports Competitions",
    description: "Athletic meets, tournaments, and physical fitness events",
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-orange-500",
    count: 6,
  },
  {
    category: "Social Activities",
    description:
      "Community service, awareness programs, and social celebrations",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-green-500",
    count: 10,
  },
];

const eventHighlights = [
  {
    title: "Annual Day 2023 Highlights",
    achievements: [
      "Over 500 students participated in various performances",
      "Cultural programs representing 8 different states",
      "Special recognition for 50+ meritorious students",
      "Guest performance by renowned classical dancers",
    ],
    image: "Annual Day celebration with colorful cultural performances",
  },
  {
    title: "Sports Meet 2024 Records",
    achievements: [
      "15 new school records established",
      "Participation from all 4 houses with 400+ athletes",
      "Inter-school relay race championship won",
      "Best sportsmanship award for overall conduct",
    ],
    image: "Athletic competitions with enthusiastic participation",
  },
];

export default function EventsPage() {
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
                School Events & Celebrations
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience vibrant school life through our diverse calendar of
                academic, cultural, and social events that create lasting
                memories and learning opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="#upcoming">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Events
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/student-life/gallery">
                    <Palette className="mr-2 h-5 w-5" />
                    Event Gallery
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {eventCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`mx-auto p-3 ${category.color} rounded-full text-white w-fit mb-4`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-blue-900 mb-2">
                        {category.category}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {category.description}
                      </p>
                      <Badge className="bg-gray-100 text-gray-800">
                        {category.count} events/year
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="upcoming" className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600">
                Don't miss these exciting events coming up in our school
                calendar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                            {event.icon}
                          </div>
                          <div>
                            <CardTitle className="text-blue-900">
                              {event.title}
                            </CardTitle>
                            <Badge className="mt-1">{event.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        {event.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span>{event.participants}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Event Highlights:
                          </h4>
                          <ul className="space-y-1">
                            {event.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-600"
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

        {/* Annual Calendar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Annual Event Calendar
              </h2>
              <p className="text-gray-600">
                Complete overview of all events throughout the academic year
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {annualEvents.map((monthData, monthIndex) => (
                  <motion.div
                    key={monthData.month}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: monthIndex * 0.05 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-blue-900 text-center">
                          {monthData.month}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {monthData.events.map((event, eventIndex) => (
                            <div
                              key={event.name}
                              className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-sm text-gray-800">
                                  {event.name}
                                </h4>
                                <Badge variant="outline" className="text-xs">
                                  {event.duration}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 mb-2">
                                {event.description}
                              </p>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${
                                  event.type === "Academic"
                                    ? "bg-blue-100 text-blue-800"
                                    : event.type === "Cultural"
                                    ? "bg-purple-100 text-purple-800"
                                    : event.type === "Sports"
                                    ? "bg-orange-100 text-orange-800"
                                    : event.type === "Social"
                                    ? "bg-green-100 text-green-800"
                                    : event.type === "National"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {event.type}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Event Highlights
              </h2>
              <p className="text-gray-600">
                Memorable moments from our recent celebrations and achievements
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {eventHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <p className="text-gray-600 text-center text-sm px-4">
                            {highlight.image}
                          </p>
                        </div>

                        <ul className="space-y-2">
                          {highlight.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-700">
                                {achievement}
                              </span>
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
                Be Part of Our Celebrations
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join us for exciting events, competitions, and celebrations that
                make school life memorable and enriching for every student.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/student-life/clubs">
                    <Users className="mr-2 h-5 w-5" />
                    Join Clubs
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
                    Event Photos
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <Calendar className="mr-2 h-5 w-5" />
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
