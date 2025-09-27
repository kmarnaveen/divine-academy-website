"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bus,
  MapPin,
  Shield,
  Clock,
  Users,
  Smartphone,
  Camera,
  Heart,
  Route,
  Fuel,
} from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

const transportOverview = [
  {
    metric: "25",
    label: "Modern Buses",
    description: "Well-maintained fleet with regular servicing",
    icon: <Bus className="w-8 h-8" />,
    color: "bg-blue-600",
  },
  {
    metric: "45",
    label: "Routes Covered",
    description: "Comprehensive coverage across the city",
    icon: <Route className="w-8 h-8" />,
    color: "bg-green-600",
  },
  {
    metric: "800+",
    label: "Students Daily",
    description: "Safe transportation for students",
    icon: <Users className="w-8 h-8" />,
    color: "bg-purple-600",
  },
  {
    metric: "100%",
    label: "GPS Tracking",
    description: "Real-time location monitoring",
    icon: <MapPin className="w-8 h-8" />,
    color: "bg-orange-600",
  },
];

const safetyFeatures = [
  {
    feature: "GPS Tracking System",
    description: "Real-time bus location tracking with parent app integration",
    benefits: [
      "Live location updates",
      "Estimated arrival times",
      "Route optimization",
      "Emergency alerts",
    ],
    icon: <MapPin className="w-6 h-6" />,
    priority: "High",
  },
  {
    feature: "CCTV Surveillance",
    description: "Comprehensive video monitoring inside all buses",
    benefits: [
      "Continuous recording",
      "Behavior monitoring",
      "Incident investigation",
      "Driver supervision",
    ],
    icon: <Camera className="w-6 h-6" />,
    priority: "High",
  },
  {
    feature: "Trained Drivers & Attendants",
    description: "Professional staff with child safety training",
    benefits: [
      "Licensed drivers",
      "Background verification",
      "Regular training",
      "Child psychology awareness",
    ],
    icon: <Shield className="w-6 h-6" />,
    priority: "Critical",
  },
  {
    feature: "Speed Monitoring",
    description: "Automatic speed control and monitoring systems",
    benefits: [
      "Speed limit compliance",
      "Safe driving alerts",
      "Route timing optimization",
      "Fuel efficiency",
    ],
    icon: <Fuel className="w-6 h-6" />,
    priority: "High",
  },
  {
    feature: "Emergency Systems",
    description: "Comprehensive emergency response and safety protocols",
    benefits: [
      "Emergency contacts",
      "First aid kits",
      "Fire extinguishers",
      "Emergency exits",
    ],
    icon: <Heart className="w-6 h-6" />,
    priority: "Critical",
  },
  {
    feature: "Parent Communication",
    description: "Real-time updates and communication with parents",
    benefits: [
      "Mobile app alerts",
      "Pickup/drop notifications",
      "Route changes",
      "Emergency updates",
    ],
    icon: <Smartphone className="w-6 h-6" />,
    priority: "Medium",
  },
];

const routeZones = [
  {
    zone: "North Zone",
    areas: ["Sector 1-15", "Model Town", "Civil Lines", "Rajouri Garden"],
    buses: 6,
    students: 180,
    avgTime: "45 mins",
    routes: ["Route N1", "Route N2", "Route N3"],
  },
  {
    zone: "South Zone",
    areas: ["Greater Kailash", "Nehru Place", "Lajpat Nagar", "Defence Colony"],
    buses: 7,
    students: 210,
    avgTime: "50 mins",
    routes: ["Route S1", "Route S2", "Route S3", "Route S4"],
  },
  {
    zone: "East Zone",
    areas: ["Mayur Vihar", "Laxmi Nagar", "Preet Vihar", "Nirman Vihar"],
    buses: 5,
    students: 150,
    avgTime: "40 mins",
    routes: ["Route E1", "Route E2", "Route E3"],
  },
  {
    zone: "West Zone",
    areas: ["Janakpuri", "Vikaspuri", "Tilak Nagar", "Subhash Nagar"],
    buses: 7,
    students: 210,
    avgTime: "55 mins",
    routes: ["Route W1", "Route W2", "Route W3", "Route W4"],
  },
];

const busSpecifications = [
  {
    category: "Vehicle Standards",
    specifications: [
      { item: "Bus Capacity", value: "35-40 students" },
      { item: "Engine Type", value: "BS-VI compliant diesel" },
      { item: "Air Conditioning", value: "Full AC with temperature control" },
      {
        item: "Seating",
        value: "Comfortable cushioned seats with safety belts",
      },
      { item: "Emergency Exits", value: "Multiple exits with clear markings" },
      { item: "Fire Safety", value: "Extinguishers and smoke detectors" },
    ],
  },
  {
    category: "Technology Features",
    specifications: [
      { item: "GPS Tracking", value: "Real-time location with mobile app" },
      { item: "CCTV Cameras", value: "4-6 cameras with night vision" },
      { item: "Speed Monitoring", value: "Automatic speed control system" },
      { item: "Communication", value: "Two-way radio and mobile connectivity" },
      { item: "Fuel Monitoring", value: "Digital fuel management system" },
      { item: "Maintenance Alerts", value: "Automated service reminders" },
    ],
  },
  {
    category: "Safety Equipment",
    specifications: [
      { item: "First Aid Kit", value: "Complete medical emergency kit" },
      {
        item: "Safety Belts",
        value: "Individual seat belts for all passengers",
      },
      { item: "Emergency Hammer", value: "Glass breaking tools" },
      { item: "Reflective Strips", value: "High-visibility markings" },
      { item: "Stop Sign Arm", value: "Retractable stop sign for safety" },
      { item: "Reverse Camera", value: "Parking and maneuvering assistance" },
    ],
  },
];

const transportPolicies = [
  {
    policy: "Pickup & Drop Timings",
    details: [
      "Morning pickup starts from 7:00 AM",
      "School departure begins at 2:30 PM",
      "Timings may vary by 10-15 minutes",
      "Parents notified of any delays",
    ],
  },
  {
    policy: "Student Behavior",
    details: [
      "Students must remain seated during transit",
      "No eating or drinking in the bus",
      "Respectful behavior towards driver and attendant",
      "Immediate reporting of any issues",
    ],
  },
  {
    policy: "Fee Structure",
    details: [
      "Annual transport fee: ₹18,000 - ₹26,000",
      "Varies by distance and route",
      "Quarterly payment options available",
      "No refund for temporary non-usage",
    ],
  },
  {
    policy: "Emergency Procedures",
    details: [
      "Driver trained in emergency protocols",
      "Direct communication with school and parents",
      "Medical emergency response procedures",
      "Breakdown and alternate transport arrangements",
    ],
  },
];

const parentApp = [
  {
    feature: "Live Tracking",
    description: "Real-time bus location and estimated arrival time",
    benefits: [
      "Know exact bus location",
      "Plan pickup timing",
      "Receive delay notifications",
    ],
  },
  {
    feature: "Notifications",
    description: "Instant updates about pickup, drop, and any changes",
    benefits: [
      "Student boarding alerts",
      "Drop-off confirmations",
      "Route change notifications",
    ],
  },
  {
    feature: "Communication",
    description: "Direct communication with transport coordinator",
    benefits: [
      "Report issues directly",
      "Request route changes",
      "Emergency contact",
    ],
  },
  {
    feature: "History & Reports",
    description: "Access to transport history and monthly reports",
    benefits: ["Attendance tracking", "Journey history", "Performance reports"],
  },
];

export default function TransportPage() {
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
                Safe & Reliable Transport
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Modern, GPS-enabled bus fleet with comprehensive safety
                features, trained drivers, and real-time parent communication
                for secure daily commute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/facilities/campus">
                    <Bus className="mr-2 h-5 w-5" />
                    Campus Facilities
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <MapPin className="mr-2 h-5 w-5" />
                    Route Inquiry
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transport Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {transportOverview.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`mx-auto p-3 ${item.color} rounded-full text-white w-fit mb-4`}
                      >
                        {item.icon}
                      </div>
                      <div className="text-3xl font-bold text-blue-900 mb-2">
                        {item.metric}
                      </div>
                      <div className="font-semibold text-gray-800 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Comprehensive Safety Features
              </h2>
              <p className="text-gray-600">
                Multi-layered safety systems ensuring secure transportation for
                all students
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                          {feature.icon}
                        </div>
                        <div className="flex-grow">
                          <CardTitle className="text-blue-900 text-lg">
                            {feature.feature}
                          </CardTitle>
                          <Badge
                            variant={
                              feature.priority === "Critical"
                                ? "destructive"
                                : feature.priority === "High"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {feature.priority}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Shield className="w-3 h-3 text-green-600 flex-shrink-0" />
                            {benefit}
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

        {/* Route Zones */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Route Coverage
              </h2>
              <p className="text-gray-600">
                Comprehensive coverage across all city zones with optimized
                routes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {routeZones.map((zone, index) => (
                <motion.div
                  key={zone.zone}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-blue-900">
                          {zone.zone}
                        </CardTitle>
                        <div className="text-right text-sm text-gray-500">
                          <div>{zone.buses} buses</div>
                          <div>{zone.students} students</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Coverage Areas:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {zone.areas.map((area, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-600">
                              Average Journey Time:
                            </span>
                            <div className="font-semibold text-blue-900">
                              {zone.avgTime}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">
                              Active Routes:
                            </span>
                            <div className="font-semibold text-green-700">
                              {zone.routes.length}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {zone.routes.map((route, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {route}
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

        {/* Bus Specifications */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Bus Specifications
              </h2>
              <p className="text-gray-600">
                Modern, well-equipped buses meeting international safety
                standards
              </p>
            </motion.div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {busSpecifications.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.specifications.map((spec, specIndex) => (
                          <div
                            key={spec.item}
                            className="p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              {spec.item}
                            </div>
                            <div className="text-xs text-gray-600">
                              {spec.value}
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

        {/* Transport Policies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Transport Policies
              </h2>
              <p className="text-gray-600">
                Clear guidelines ensuring smooth and safe transportation
                experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {transportPolicies.map((policy, index) => (
                <motion.div
                  key={policy.policy}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {policy.policy}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {policy.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Clock className="w-3 h-3 text-blue-600 flex-shrink-0" />
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

        {/* Parent App */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Parent Mobile App
              </h2>
              <p className="text-gray-600">
                Stay connected with real-time updates and comprehensive
                transport management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {parentApp.map((app, index) => (
                <motion.div
                  key={app.feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {app.feature}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {app.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Smartphone className="w-3 h-3 text-green-600 flex-shrink-0" />
                            {benefit}
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
                Safe Journey Starts Here
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Ensure your child's safe and comfortable daily commute with our
                modern transport services and comprehensive safety measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    <MapPin className="mr-2 h-5 w-5" />
                    Check Route Availability
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/facilities/campus">
                    <Shield className="mr-2 h-5 w-5" />
                    Campus Safety
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-blue-600"
                  asChild
                >
                  <Link href="/apply">
                    <Bus className="mr-2 h-5 w-5" />
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
