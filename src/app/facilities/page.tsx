import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building,
  Microscope,
  Monitor,
  Trophy,
  Bus,
  Utensils,
  BookOpen,
  Users,
  ArrowRight,
  Wifi,
  Shield,
  Heart,
  Camera,
  Activity,
  Gamepad2,
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Interactive digital boards and multimedia learning environment in every classroom",
    icon: Monitor,
    color: "bg-accent-100 text-accent-600",
    features: [
      "Digital Projectors",
      "Interactive Whiteboards",
      "Audio-Visual Systems",
      "Wi-Fi Connectivity",
    ],
  },
  {
    title: "Science Laboratories",
    description:
      "Well-equipped Physics, Chemistry, and Biology labs with modern equipment",
    icon: Microscope,
    color: "bg-emerald-100 text-emerald-600",
    features: [
      "Physics Lab",
      "Chemistry Lab",
      "Biology Lab",
      "Safety Equipment",
    ],
  },
  {
    title: "Computer Labs",
    description:
      "State-of-the-art computer labs with latest hardware and software",
    icon: Monitor,
    color: "bg-purple-100 text-purple-600",
    features: [
      "Latest Computers",
      "High-Speed Internet",
      "Programming Software",
      "Multimedia Tools",
    ],
  },
  {
    title: "Library & Reading Room",
    description:
      "Extensive collection of books, journals, and digital resources",
    icon: BookOpen,
    color: "bg-orange-100 text-orange-600",
    features: [
      "10,000+ Books",
      "Digital Library",
      "Newspapers & Magazines",
      "Quiet Study Areas",
    ],
  },
  {
    title: "Sports Complex",
    description:
      "Comprehensive sports facilities for various indoor and outdoor games",
    icon: Trophy,
    color: "bg-red-100 text-red-600",
    features: [
      "Football Ground",
      "Basketball Court",
      "Cricket Pitch",
      "Indoor Games Room",
    ],
  },
  {
    title: "Transportation",
    description: "Safe and reliable school bus service covering major areas",
    icon: Bus,
    color: "bg-cyan-100 text-cyan-600",
    features: [
      "GPS Tracking",
      "Trained Drivers",
      "CCTV Monitoring",
      "First Aid Kit",
    ],
  },
];

const safetyFeatures = [
  {
    title: "CCTV Surveillance",
    description: "24/7 security monitoring across campus",
    icon: Camera,
  },
  {
    title: "Security Guards",
    description: "Professional security personnel on duty",
    icon: Shield,
  },
  {
    title: "Medical Room",
    description: "First aid and basic medical facilities",
    icon: Heart,
  },
  {
    title: "Fire Safety",
    description: "Modern fire safety and evacuation systems",
    icon: Activity,
  },
];

export default function FacilitiesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              World-Class Infrastructure
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              State-of-the-Art Facilities
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our modern campus provides the perfect environment for learning,
              growth, and development with facilities designed for holistic
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Campus Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our 5-acre campus is thoughtfully designed to provide students
              with the best possible learning environment and recreational
              facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={facility.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div
                        className={`w-12 h-12 rounded-lg ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {facility.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {facility.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span className="text-gray-600 text-xs">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Facility Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Badge className="mb-4 bg-accent-100 text-accent-600">
                Academic Infrastructure
              </Badge>
              <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                Modern Learning Environments
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our classrooms and laboratories are equipped with the latest
                technology to facilitate interactive learning. Each space is
                designed to encourage collaboration, creativity, and critical
                thinking.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">
                    High-speed Wi-Fi throughout campus
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">
                    Interactive smart boards in every classroom
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Microscope className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">
                    Advanced laboratory equipment
                  </span>
                </div>
              </div>

              <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
                <Link href="/facilities/labs">
                  Explore Labs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                <Building className="h-16 w-16 text-white/80" />
              </div>
              <h4 className="text-xl font-bold mb-2">Campus Virtual Tour</h4>
              <p className="text-primary-100 text-sm">
                Take a virtual walk through our modern campus and explore our
                world-class facilities
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-primary rounded-2xl p-8 text-white order-2 lg:order-1">
              <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                <Trophy className="h-16 w-16 text-white/80" />
              </div>
              <h4 className="text-xl font-bold mb-2">Sports Facilities</h4>
              <p className="text-green-100 text-sm">
                Comprehensive sports infrastructure for physical fitness and
                competitive sports
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-emerald-100 text-emerald-600">
                Sports & Recreation
              </Badge>
              <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                Promoting Physical Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in the importance of physical fitness and sports in
                overall development. Our sports facilities cater to various
                interests and skill levels, from recreational activities to
                competitive sports.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">
                    Multi-purpose sports ground
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">
                    Indoor games and fitness center
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">
                    Professional sports coaching
                  </span>
                </div>
              </div>

              <Button
                asChild
                className="mt-6 bg-emerald-600 hover:bg-emerald-700"
              >
                <Link href="/facilities/sports">
                  Sports Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-600">Safety First</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Student Safety & Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The safety and security of our students is our top priority. We
              have implemented comprehensive measures to ensure a secure
              learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-100 text-cyan-600">
                Safe Transportation
              </Badge>
              <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                Reliable School Transport
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our comprehensive transport system ensures safe and comfortable
                commute for students across Firozabad and nearby areas. All
                buses are equipped with modern safety features and monitored in
                real-time.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">
                    Safety Features:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-cyan-600" />
                      <span>GPS tracking system</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Camera className="h-4 w-4 text-cyan-600" />
                      <span>CCTV monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-cyan-600" />
                      <span>Trained bus attendants</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">
                    Route Coverage:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Firozabad City Center</li>
                    <li>• Shikohabad</li>
                    <li>• Jasrana</li>
                    <li>• Tundla Junction</li>
                  </ul>
                </div>
              </div>

              <Button asChild className="mt-8 bg-cyan-600 hover:bg-cyan-700">
                <Link href="/facilities/transport">
                  Transport Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                <Bus className="h-16 w-16 text-white/80" />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Transport Inquiry</h4>
                <p className="text-cyan-100 text-sm mb-4">
                  Check route availability and fees for your area
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-cyan-600 hover:bg-gray-100"
                >
                  Check Routes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Experience Our Campus
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a campus visit to see our world-class facilities in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Link href="/contact">Schedule Campus Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/apply">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
