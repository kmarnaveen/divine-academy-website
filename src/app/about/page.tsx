import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              About Divine International Academy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Empowering Minds, Building Futures
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Since 2012, Divine International Academy has been committed to
              providing quality education that nurtures young minds and prepares
              them for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-primary">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To be a leading educational institution that nurtures global
                  citizens with strong moral values, academic excellence, and
                  innovative thinking capabilities. We envision creating an
                  environment where every child discovers their potential and
                  develops into confident, compassionate leaders of tomorrow.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span>Excellence in academics and character</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>Global perspective with Indian values</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-accent" />
                    <span>Holistic development of each child</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-primary">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide quality education through innovative teaching
                  methodologies, state-of-the-art infrastructure, and dedicated
                  faculty. Our mission is to create a nurturing environment that
                  fosters critical thinking, creativity, and moral values while
                  preparing students for global challenges.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span>Student-centered learning approach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>Collaborative learning environment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-accent" />
                    <span>Values-based education system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              School Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key details about Divine International Academy and our educational
              foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Established</h3>
                <p className="text-3xl font-bold text-primary mb-2">2012</p>
                <p className="text-gray-600 text-sm">
                  Under Om Educational Trust
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CBSE Affiliation</h3>
                <p className="text-3xl font-bold text-primary mb-2">2131764</p>
                <p className="text-gray-600 text-sm">Valid until 2029</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Students</h3>
                <p className="text-3xl font-bold text-primary mb-2">1000+</p>
                <p className="text-gray-600 text-sm">Happy learners</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-lg font-bold text-primary mb-2">Sirsaganj</p>
                <p className="text-gray-600 text-sm">Firozabad, UP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Learn More About Us
            </h2>
            <p className="text-lg text-gray-600">
              Discover more about our leadership, values, and educational
              philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Leadership Team</h3>
                <p className="text-gray-600 mb-4">
                  Meet our experienced leadership team and their educational
                  philosophy
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/about/leadership" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Principal's Message
                </h3>
                <p className="text-gray-600 mb-4">
                  Read our Principal's vision and commitment to educational
                  excellence
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/about/principal" className="flex items-center">
                    Read Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600 mb-4">
                  Discover the core values that guide our educational approach
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/about/vision" className="flex items-center">
                    Explore Values <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
