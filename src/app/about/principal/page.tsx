import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award, Heart, BookOpen, Users } from "lucide-react";

export default function PrincipalMessagePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              Leadership Message
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Principal's Message
            </h1>
            <p className="text-xl text-blue-100">
              A message from our Principal about our commitment to educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Principal Photo & Info */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-lg sticky top-8">
                  <CardContent className="p-6 text-center">
                    {/* Placeholder for Principal Photo */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Dr. [Principal Name]</h3>
                    <p className="text-gray-600 mb-4">Principal & Academic Director</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span>M.Ed., Ph.D. in Education</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <BookOpen className="h-4 w-4 text-accent" />
                        <span>25+ Years Experience</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="relative">
                  <Quote className="h-12 w-12 text-accent absolute -top-6 -left-2 opacity-20" />
                  <Card className="border-l-4 border-primary shadow-md">
                    <CardContent className="p-8">
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg font-medium text-primary">
                          Dear Parents, Students, and Well-wishers,
                        </p>

                        <p>
                          It gives me immense pleasure to welcome you to Divine International Academy, 
                          a place where dreams take flight and futures are shaped. Since our establishment 
                          in 2012, we have been committed to providing holistic education that goes beyond 
                          textbooks and examinations.
                        </p>

                        <p>
                          Our philosophy of <strong>"Learning by Doing, Growing for Life"</strong> is not 
                          just a motto; it's the foundation of everything we do. We believe that true 
                          education is about nurturing curious minds, building strong character, and 
                          preparing our students to be responsible global citizens.
                        </p>

                        <p>
                          At DIA, we understand that each child is unique, with their own set of talents, 
                          interests, and potential. Our dedicated faculty works tirelessly to create an 
                          environment where every student can discover their strengths, overcome their 
                          challenges, and excel in their chosen fields.
                        </p>

                        <p>
                          Our CBSE-affiliated curriculum is complemented by a wide range of co-curricular 
                          activities, modern facilities, and innovative teaching methodologies. We strive 
                          to strike the perfect balance between academic excellence and overall personality 
                          development.
                        </p>

                        <p>
                          As we move forward in this digital age, we continue to evolve and adapt our 
                          teaching methods while staying true to our core values of integrity, compassion, 
                          and excellence. Our students are not just prepared for examinations; they are 
                          prepared for life.
                        </p>

                        <p className="text-lg font-medium text-primary">
                          Together, let us continue this beautiful journey of learning, growing, and 
                          achieving greatness.
                        </p>

                        <div className="border-t pt-6">
                          <p className="font-semibold text-primary">Warm Regards,</p>
                          <p className="text-lg font-bold text-primary">Dr. [Principal Name]</p>
                          <p className="text-gray-600">Principal, Divine International Academy</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Principles */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold">Student-Centered Approach</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Every decision we make is focused on what's best for our students' 
                        learning, growth, and well-being.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <h4 className="text-lg font-semibold">Excellence in Everything</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        We strive for excellence not just in academics but in character, 
                        sports, arts, and all aspects of school life.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h4 className="text-lg font-semibold">Innovation in Learning</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        We continuously evolve our teaching methods to incorporate the 
                        latest educational practices and technologies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-orange-600" />
                        </div>
                        <h4 className="text-lg font-semibold">Community Partnership</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        We believe in working closely with parents and the community to 
                        provide the best possible education for our children.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}