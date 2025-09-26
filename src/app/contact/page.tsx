import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  GraduationCap,
  Users,
  Building,
} from "lucide-react";

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Contact Divine International Academy
            </h1>
            <p className="text-xl text-blue-100">
              We're here to help you with admissions, queries, and any
              information you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-heading text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about admissions, academics, or our programs?
                  We'd love to hear from you. Reach out to us through any of the
                  following ways.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          School Address
                        </h3>
                        <p className="text-gray-600">
                          Divine International Academy
                          <br />
                          Sirsaganj, Firozabad
                          <br />
                          Uttar Pradesh, India - 283203
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Phone Numbers
                        </h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Main Office: +91 9876543210</p>
                          <p>Admissions: +91 9876543211</p>
                          <p>Principal: +91 9876543212</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Email Addresses
                        </h3>
                        <div className="space-y-1 text-gray-600">
                          <p>info@divineacademy.edu.in</p>
                          <p>admissions@divineacademy.edu.in</p>
                          <p>principal@divineacademy.edu.in</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Office Hours
                        </h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                          <p>Saturday: 8:00 AM - 12:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-primary mb-6">
                    Send us a Message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input placeholder="What is this regarding?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Please provide details about your inquiry"
                        rows={6}
                      />
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                      Send Message
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      * Required fields. We'll respond to your inquiry within 24
                      hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-gray-600">
              Reach out to specific departments for specialized assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Admissions Office
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  New admissions, entrance tests, fee information
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">+91 9876543211</p>
                  <p className="text-gray-600">
                    admissions@divineacademy.edu.in
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Academic Office</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Academic programs, curriculum, examinations
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">+91 9876543213</p>
                  <p className="text-gray-600">academic@divineacademy.edu.in</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transport Office</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Bus routes, transport fees, safety information
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">+91 9876543214</p>
                  <p className="text-gray-600">
                    transport@divineacademy.edu.in
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Administration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  General inquiries, feedback, suggestions
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-gray-600">admin@divineacademy.edu.in</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Sirsaganj, Firozabad - easily accessible
              by road
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-sm">
                    Divine International Academy, Sirsaganj, Firozabad, UP
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Directions by Car
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• From Firozabad city center - 15 minutes drive</li>
                    <li>• From Agra - 45 minutes via Firozabad Road</li>
                    <li>• From Delhi - 3 hours via Yamuna Expressway</li>
                    <li>• Ample parking available on campus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Public Transport
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Local bus service available</li>
                    <li>• Auto-rickshaw from Sirsaganj market</li>
                    <li>• School bus service covers major areas</li>
                    <li>• Railway station: Firozabad Junction (12 km)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
