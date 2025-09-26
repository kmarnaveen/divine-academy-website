"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Users,
  Wifi,
  Shield,
  Camera,
  TreePine,
  Car,
  Utensils,
  Heart,
  BookOpen,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const campusHighlights = [
  {
    title: "Sprawling 8-Acre Campus",
    description:
      "Eco-friendly campus with lush green spaces and modern infrastructure",
    icon: <TreePine className="w-6 h-6" />,
    details: [
      "Green building design",
      "Natural lighting",
      "Rainwater harvesting",
      "Solar panels",
    ],
  },
  {
    title: "Smart Classrooms",
    description:
      "Technology-enabled learning environments with modern amenities",
    icon: <Building className="w-6 h-6" />,
    details: [
      "Interactive whiteboards",
      "Audio-visual systems",
      "Air conditioning",
      "Ergonomic furniture",
    ],
  },
  {
    title: "24/7 Security",
    description: "Comprehensive security system ensuring student safety",
    icon: <Shield className="w-6 h-6" />,
    details: [
      "CCTV surveillance",
      "Access control",
      "Security guards",
      "Emergency protocols",
    ],
  },
  {
    title: "Digital Infrastructure",
    description: "High-speed internet connectivity throughout the campus",
    icon: <Wifi className="w-6 h-6" />,
    details: [
      "Fiber optic network",
      "Wi-Fi coverage",
      "Digital learning platforms",
      "Smart attendance",
    ],
  },
];

const infrastructureDetails = [
  {
    category: "Academic Block",
    facilities: [
      {
        name: "40 Smart Classrooms",
        capacity: "30-35 students each",
        features: ["Interactive boards", "AC", "Natural lighting"],
      },
      {
        name: "Science Laboratories",
        capacity: "25 students each",
        features: [
          "Modern equipment",
          "Safety protocols",
          "Digital microscopes",
        ],
      },
      {
        name: "Computer Labs",
        capacity: "30 systems each",
        features: ["Latest hardware", "Licensed software", "Internet access"],
      },
      {
        name: "Library & Reading Rooms",
        capacity: "100 students",
        features: ["15,000+ books", "Digital resources", "Quiet zones"],
      },
    ],
  },
  {
    category: "Activity Zones",
    facilities: [
      {
        name: "Multipurpose Hall",
        capacity: "500 students",
        features: ["Stage facility", "Sound system", "AC"],
      },
      {
        name: "Music & Dance Rooms",
        capacity: "25 students each",
        features: ["Sound proofing", "Mirrors", "Instruments"],
      },
      {
        name: "Art & Craft Studios",
        capacity: "20 students each",
        features: ["Natural lighting", "Storage", "Display areas"],
      },
      {
        name: "Activity Rooms",
        capacity: "15-20 students",
        features: ["Flexible seating", "Project displays", "Storage"],
      },
    ],
  },
  {
    category: "Support Facilities",
    facilities: [
      {
        name: "Medical Room",
        capacity: "Emergency care",
        features: ["Qualified nurse", "First aid", "Emergency contacts"],
      },
      {
        name: "Cafeteria",
        capacity: "200 students",
        features: ["Hygienic kitchen", "Healthy meals", "Seating area"],
      },
      {
        name: "Transport Hub",
        capacity: "25 buses",
        features: ["Covered parking", "Maintenance", "GPS tracking"],
      },
      {
        name: "Administrative Block",
        capacity: "Staff offices",
        features: ["Principal cabin", "Staff rooms", "Reception"],
      },
    ],
  },
];

const safetyFeatures = [
  {
    feature: "Fire Safety",
    details: [
      "Smoke detectors",
      "Fire extinguishers",
      "Emergency exits",
      "Evacuation plans",
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "bg-red-500",
  },
  {
    feature: "Health & Hygiene",
    details: [
      "Water purifiers",
      "Sanitizers",
      "Clean restrooms",
      "Regular cleaning",
    ],
    icon: <Heart className="w-8 h-8" />,
    color: "bg-green-500",
  },
  {
    feature: "Child Safety",
    details: [
      "Boundary walls",
      "Single entry/exit",
      "Visitor management",
      "Child-safe equipment",
    ],
    icon: <Users className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    feature: "Digital Monitoring",
    details: [
      "CCTV surveillance",
      "Access cards",
      "Attendance tracking",
      "Parent app updates",
    ],
    icon: <Camera className="w-8 h-8" />,
    color: "bg-purple-500",
  },
];

const campusMap = [
  {
    zone: "Main Entrance",
    description: "Reception & Administrative Block",
    coordinates: "A1",
  },
  {
    zone: "Primary Block",
    description: "Pre-KG to Class V",
    coordinates: "B2",
  },
  {
    zone: "Secondary Block",
    description: "Class VI to XII",
    coordinates: "C2",
  },
  {
    zone: "Laboratory Complex",
    description: "Science & Computer Labs",
    coordinates: "D1",
  },
  {
    zone: "Sports Complex",
    description: "Indoor & Outdoor Sports",
    coordinates: "E3",
  },
  {
    zone: "Activity Center",
    description: "Arts, Music, Dance",
    coordinates: "F2",
  },
  {
    zone: "Library & Resource Center",
    description: "Books & Digital Resources",
    coordinates: "G1",
  },
  {
    zone: "Cafeteria & Medical",
    description: "Food Court & Health Services",
    coordinates: "H2",
  },
  {
    zone: "Transport Hub",
    description: "Bus Parking & Maintenance",
    coordinates: "I3",
  },
];

const sustainabilityInitiatives = [
  {
    initiative: "Green Energy",
    description: "Solar panels and energy-efficient systems",
    impact: "40% reduction in electricity consumption",
    icon: "🌞",
  },
  {
    initiative: "Water Conservation",
    description: "Rainwater harvesting and recycling systems",
    impact: "60% water savings annually",
    icon: "💧",
  },
  {
    initiative: "Waste Management",
    description: "Segregation, composting, and recycling programs",
    impact: "Zero waste to landfill achieved",
    icon: "♻️",
  },
  {
    initiative: "Green Spaces",
    description: "Botanical garden and tree plantation drives",
    impact: "200+ trees planted annually",
    icon: "🌳",
  },
];

export default function CampusPage() {
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
                World-Class Campus
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A thoughtfully designed 8-acre campus that combines modern
                infrastructure with eco-friendly features, creating the perfect
                environment for learning and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/facilities/labs">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Labs
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <MapPin className="mr-2 h-5 w-5" />
                    Schedule Visit
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Campus Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Campus Highlights
              </h2>
              <p className="text-gray-600">
                Modern facilities designed with student safety and comfort in
                mind
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {campusHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-blue-100 rounded-full text-blue-600 w-fit">
                        {highlight.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">
                        {highlight.description}
                      </p>
                      <ul className="space-y-1">
                        {highlight.details.map((detail, idx) => (
                          <li key={idx} className="text-xs text-gray-500">
                            • {detail}
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

        {/* Infrastructure Details */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Infrastructure Overview
              </h2>
              <p className="text-gray-600">
                Comprehensive facilities to support academic excellence and
                holistic development
              </p>
            </motion.div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {infrastructureDetails.map((block, blockIndex) => (
                <motion.div
                  key={block.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: blockIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {block.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {block.facilities.map((facility, facilityIndex) => (
                          <div
                            key={facility.name}
                            className="p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-800">
                                {facility.name}
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                {facility.capacity}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {facility.features.map((feature, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {feature}
                                </Badge>
                              ))}
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

        {/* Safety Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Safety & Security
              </h2>
              <p className="text-gray-600">
                Comprehensive safety measures ensuring a secure learning
                environment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {safetyFeatures.map((safety, index) => (
                <motion.div
                  key={safety.feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div
                        className={`mx-auto p-3 ${safety.color} rounded-full text-white w-fit`}
                      >
                        {safety.icon}
                      </div>
                      <CardTitle className="text-blue-900">
                        {safety.feature}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        {safety.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Shield className="w-3 h-3 text-green-600 flex-shrink-0" />
                            {detail}
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

        {/* Campus Map */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Campus Layout
              </h2>
              <p className="text-gray-600">
                Strategic placement of facilities for optimal functionality and
                accessibility
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900 text-center">
                    Campus Zone Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {campusMap.map((zone, index) => (
                      <motion.div
                        key={zone.zone}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-blue-900">
                            {zone.zone}
                          </span>
                          <Badge variant="outline">{zone.coordinates}</Badge>
                        </div>
                        <p className="text-xs text-gray-600">
                          {zone.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Sustainability Initiatives
              </h2>
              <p className="text-gray-600">
                Environmental responsibility and green practices for a
                sustainable future
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {sustainabilityInitiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.initiative}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="text-4xl mb-2">{initiative.icon}</div>
                      <CardTitle className="text-blue-900">
                        {initiative.initiative}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">
                        {initiative.description}
                      </p>
                      <Badge className="bg-green-600 text-white">
                        {initiative.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Experience Our Campus
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                See our world-class facilities in person. Schedule a campus
                visit to explore our infrastructure and meet our faculty and
                staff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Camera className="mr-2 h-5 w-5" />
                  Virtual Campus Tour
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/contact">
                    <Clock className="mr-2 h-5 w-5" />
                    Schedule Visit
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <Building className="mr-2 h-5 w-5" />
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
