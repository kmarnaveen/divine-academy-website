import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Music,
  Palette,
  Theater,
  Microscope,
  Globe,
  Trophy,
  Calendar,
  Camera,
  Star,
  Award,
  Heart,
  BookOpen,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react";

const clubs = [
  {
    title: "Science Club",
    description:
      "Explore the wonders of science through experiments and projects",
    icon: Microscope,
    color: "bg-blue-100 text-blue-600",
    activities: [
      "Science Fair",
      "Lab Experiments",
      "Innovation Projects",
      "Science Olympiad",
    ],
  },
  {
    title: "Arts & Crafts Club",
    description: "Express creativity through various art forms and crafts",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
    activities: [
      "Painting",
      "Clay Modeling",
      "Craft Making",
      "Art Exhibitions",
    ],
  },
  {
    title: "Music & Dance",
    description: "Develop musical and dance talents with professional guidance",
    icon: Music,
    color: "bg-emerald-100 text-emerald-600",
    activities: ["Classical Music", "Western Dance", "Folk Dance", "Choir"],
  },
  {
    title: "Drama Club",
    description: "Build confidence through theater and dramatic performances",
    icon: Theater,
    color: "bg-orange-100 text-orange-600",
    activities: ["Stage Plays", "Storytelling", "Mime", "Public Speaking"],
  },
  {
    title: "Literary Society",
    description: "Enhance language skills and creative writing abilities",
    icon: BookOpen,
    color: "bg-red-100 text-red-600",
    activities: ["Creative Writing", "Debate", "Poetry", "Magazine"],
  },
  {
    title: "Environment Club",
    description: "Promote environmental awareness and sustainability",
    icon: Globe,
    color: "bg-green-100 text-green-600",
    activities: [
      "Tree Plantation",
      "Recycling",
      "Nature Walks",
      "Eco Projects",
    ],
  },
];

const events = [
  {
    title: "Annual Sports Day",
    date: "February 2025",
    description: "Inter-house competitions and athletic events",
    icon: Trophy,
    image_placeholder:
      "Sports Day celebrations with students participating in various events",
  },
  {
    title: "Cultural Festival",
    date: "December 2024",
    description: "Showcase of student talents in arts, music, and dance",
    icon: Star,
    image_placeholder: "Students performing cultural programs on stage",
  },
  {
    title: "Science Exhibition",
    date: "March 2025",
    description: "Student innovations and scientific project displays",
    icon: Microscope,
    image_placeholder: "Science projects and experiments displayed by students",
  },
  {
    title: "Founders Day",
    date: "April 2025",
    description: "Celebrating the school's establishment and achievements",
    icon: Award,
    image_placeholder: "School anniversary celebrations with award ceremonies",
  },
];

const galleryItems = [
  {
    category: "Academic Excellence",
    description: "Students achieving success in various academic competitions",
    icon: Award,
  },
  {
    category: "Sports Achievements",
    description: "Athletic victories and sports day celebrations",
    icon: Trophy,
  },
  {
    category: "Cultural Programs",
    description: "Annual functions and cultural festival moments",
    icon: Star,
  },
  {
    category: "Science Projects",
    description: "Innovation and scientific experiments by students",
    icon: Microscope,
  },
  {
    category: "Community Service",
    description: "Students participating in social service activities",
    icon: Heart,
  },
  {
    category: "Campus Life",
    description: "Daily moments and memories from school life",
    icon: Camera,
  },
];

export default function StudentLifePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-primary">
              Beyond Academics
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Vibrant Student Life
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              At Divine International Academy, learning extends beyond
              textbooks. We provide a rich ecosystem of clubs, events, and
              activities that nurture creativity, leadership, and personal
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Clubs & Societies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our diverse range of clubs and societies designed to explore
              interests, develop talents, and build lasting friendships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => {
              const Icon = club.icon;
              return (
                <Card
                  key={club.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div
                        className={`w-12 h-12 rounded-lg ${club.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                        {club.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {club.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800 text-sm">
                        Activities:
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {club.activities.map((activity) => (
                          <div
                            key={activity}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span className="text-gray-600 text-xs">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Join Club
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Annual Events & Celebrations
            </h2>
            <p className="text-lg text-gray-600">
              Throughout the academic year, we organize various events that
              bring our school community together and celebrate student
              achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card
                  key={event.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-0">
                    {/* Event Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Icon className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm px-4">
                          {event.image_placeholder}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-accent/10 text-accent hover:bg-accent/10">
                          {event.date}
                        </Badge>
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <h3 className="text-xl font-semibold font-heading text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/student-life/events">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Capture memories and moments from our vibrant school life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.category}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300">
                      <div className="text-center">
                        <Icon className="h-12 w-12 text-gray-400 group-hover:text-primary mx-auto mb-3 transition-colors" />
                        <h3 className="font-semibold text-gray-700 group-hover:text-primary transition-colors">
                          {item.category}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/student-life/gallery">
                View Full Gallery <Camera className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Student Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Celebrating the success stories and achievements of our talented
              students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600 font-medium">
                  Awards & Recognitions
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  In academics, sports, and cultural activities
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-gray-600 font-medium">Participation Rate</p>
                <p className="text-gray-500 text-sm mt-2">
                  Students actively involved in co-curricular activities
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600 font-medium">Active Clubs</p>
                <p className="text-gray-500 text-sm mt-2">
                  Diverse range of interest-based societies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Upcoming Events
            </h2>
            <p className="text-blue-100 text-lg">
              Mark your calendars for these exciting upcoming events
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Winter Carnival</h3>
                      <p className="text-blue-100 text-sm">
                        Fun-filled winter activities and competitions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-accent">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Dec 20, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-100 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>School Campus</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Annual Prize Distribution
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Celebrating academic and co-curricular achievements
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-accent">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Jan 15, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-100 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>School Auditorium</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90"
            >
              <Link href="/student-life/events">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Be Part of Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Divine International Academy and experience a vibrant student
            life filled with opportunities for growth, learning, and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Link href="/apply">Apply for Admission</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/contact">Schedule Campus Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
