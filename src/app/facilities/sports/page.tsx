'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Trophy, Medal, Target, Users, Clock, MapPin, Award, Zap, Heart, Shield } from 'lucide-react'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/main-layout'

const sportsCategories = [
  {
    category: "Outdoor Sports",
    description: "Expansive grounds for various outdoor sporting activities",
    icon: "🏃‍♂️",
    facilities: [
      {
        name: "Football Ground",
        area: "Full-size FIFA standard",
        capacity: "22 players + spectators",
        features: ["Natural grass", "Goal posts", "Floodlights", "Spectator seating"],
        sports: ["Football", "Athletics track events", "Sports day events"]
      },
      {
        name: "Cricket Pitch",
        area: "Standard 22-yard pitch",
        capacity: "11 players per team",
        features: ["Turf wicket", "Practice nets", "Pavilion", "Equipment storage"],
        sports: ["Cricket", "Soft ball cricket", "Training sessions"]
      },
      {
        name: "Basketball Courts",
        area: "2 full courts",
        capacity: "10 players per court",
        features: ["Synthetic flooring", "Professional hoops", "Outdoor lighting", "Boundary markings"],
        sports: ["Basketball", "Volleyball", "Badminton (outdoor)"]
      },
      {
        name: "Athletics Track",
        area: "400m standard track",
        capacity: "8 lanes",
        features: ["Synthetic surface", "Field events area", "Starting blocks", "Timing systems"],
        sports: ["Running events", "Long jump", "Shot put", "Javelin"]
      }
    ]
  },
  {
    category: "Indoor Sports",
    description: "Climate-controlled indoor facilities for year-round training",
    icon: "🏐",
    facilities: [
      {
        name: "Multipurpose Gymnasium",
        area: "2000 sq ft",
        capacity: "100 spectators",
        features: ["Wooden flooring", "Professional lighting", "AC environment", "Sound system"],
        sports: ["Basketball", "Volleyball", "Badminton", "Table tennis"]
      },
      {
        name: "Badminton Courts",
        area: "4 courts",
        capacity: "8 players simultaneously",
        features: ["Synthetic courts", "Professional nets", "LED lighting", "Non-slip flooring"],
        sports: ["Badminton singles", "Badminton doubles", "Training sessions"]
      },
      {
        name: "Table Tennis Hall",
        area: "6 tables",
        capacity: "12 players",
        features: ["Tournament tables", "Professional lighting", "Ventilation", "Storage area"],
        sports: ["Table tennis", "Tournaments", "Club activities"]
      },
      {
        name: "Chess & Indoor Games",
        area: "Dedicated hall",
        capacity: "50 students",
        features: ["Tournament boards", "Digital clocks", "Quiet environment", "Library corner"],
        sports: ["Chess", "Carrom", "Strategic games", "Mind sports"]
      }
    ]
  },
  {
    category: "Fitness & Wellness",
    description: "Health and fitness facilities promoting physical well-being",
    icon: "💪",
    facilities: [
      {
        name: "Fitness Center",
        area: "500 sq ft",
        capacity: "20 students",
        features: ["Modern equipment", "Cardio machines", "Weight training", "Professional supervision"],
        programs: ["Strength training", "Cardio workouts", "Flexibility sessions", "Health monitoring"]
      },
      {
        name: "Yoga & Meditation Hall",
        area: "800 sq ft",
        capacity: "40 students",
        features: ["Peaceful ambiance", "Yoga mats", "Sound system", "Natural lighting"],
        programs: ["Daily yoga", "Meditation", "Breathing exercises", "Wellness workshops"]
      },
      {
        name: "Swimming Pool",
        area: "25m x 12m",
        capacity: "30 swimmers",
        features: ["Filtered water", "Safety equipment", "Changing rooms", "Trained lifeguards"],
        programs: ["Swimming lessons", "Water safety", "Competitions", "Aqua fitness"]
      }
    ]
  }
]

const sportsAchievements = [
  {
    sport: "Cricket",
    level: "District Champions",
    year: "2024",
    achievement: "Won inter-school tournament",
    students: 15,
    icon: "🏏"
  },
  {
    sport: "Basketball",
    level: "Regional Champions",
    year: "2024", 
    achievement: "State level semi-finalists",
    students: 12,
    icon: "🏀"
  },
  {
    sport: "Athletics",
    level: "State Gold Medal",
    year: "2024",
    achievement: "100m Sprint & Long Jump",
    students: 25,
    icon: "🏃‍♀️"
  },
  {
    sport: "Chess",
    level: "National Participant",
    year: "2024",
    achievement: "Under-16 National Championship",
    students: 8,
    icon: "♟️"
  },
  {
    sport: "Swimming",
    level: "Regional Records",
    year: "2024",
    achievement: "Freestyle & Butterfly events",
    students: 10,
    icon: "🏊‍♂️"
  },
  {
    sport: "Badminton",
    level: "District Winners",
    year: "2024",
    achievement: "Singles & Doubles categories",
    students: 16,
    icon: "🏸"
  }
]

const coachingPrograms = [
  {
    program: "Professional Coaching",
    description: "Qualified coaches for specialized sports training",
    features: ["Certified instructors", "Structured curriculum", "Skill development", "Performance tracking"],
    sports: ["Cricket", "Basketball", "Swimming", "Athletics"]
  },
  {
    program: "Age-Group Training",
    description: "Tailored programs for different age groups and skill levels", 
    features: ["Beginner friendly", "Progressive difficulty", "Safety focus", "Fun learning"],
    sports: ["All sports", "Basic skills", "Game awareness", "Team spirit"]
  },
  {
    program: "Competitive Preparation", 
    description: "Intensive training for inter-school and district competitions",
    features: ["Advanced techniques", "Strategy sessions", "Mental conditioning", "Competition exposure"],
    sports: ["Tournament preparation", "Selection trials", "Performance analysis"]
  },
  {
    program: "Fitness & Wellness",
    description: "General fitness and healthy lifestyle programs",
    features: ["Physical fitness", "Health education", "Injury prevention", "Wellness habits"],
    sports: ["General fitness", "Yoga", "Aerobics", "Strength training"]
  }
]

const sportsCalendar = [
  {
    event: "Annual Sports Day",
    month: "February",
    description: "School-wide sports competition with track & field events",
    participants: "All students"
  },
  {
    event: "Inter-House Tournaments",
    month: "September-October", 
    description: "House-wise competitions in various sports",
    participants: "House teams"
  },
  {
    event: "District Championships",
    month: "November-December",
    description: "Representing school in district level competitions",
    participants: "Selected athletes"
  },
  {
    event: "Swimming Gala",
    month: "January",
    description: "Annual swimming competition and water sports festival",
    participants: "Swimming club members"
  },
  {
    event: "Chess Tournament",
    month: "August",
    description: "School chess championship and strategy games",
    participants: "Chess club members"
  },
  {
    event: "Summer Sports Camp",
    month: "May-June",
    description: "Intensive sports training during summer break",
    participants: "Interested students"
  }
]

export default function SportsPage() {
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
                Sports Excellence
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Comprehensive sports facilities promoting physical fitness, team spirit, and competitive excellence. 
                From recreational activities to championship-level training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/facilities/campus">
                    <Trophy className="mr-2 h-5 w-5" />
                    Campus Facilities
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/student-life/clubs">
                    <Users className="mr-2 h-5 w-5" />
                    Sports Clubs
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sports Statistics */}
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
                    <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Sports Facilities</div>
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
                    <div className="text-4xl font-bold text-green-600 mb-2">300+</div>
                    <div className="text-sm text-gray-600">Active Athletes</div>
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
                    <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
                    <div className="text-sm text-gray-600">Championships Won</div>
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
                    <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
                    <div className="text-sm text-gray-600">Professional Coaches</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sports Facilities */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                World-Class Sports Facilities
              </h2>
              <p className="text-gray-600">
                Comprehensive sports infrastructure catering to all interests and skill levels
              </p>
            </motion.div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {sportsCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{category.icon}</span>
                        <div>
                          <CardTitle className="text-blue-900">{category.category}</CardTitle>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.facilities.map((facility, facilityIndex) => (
                          <div key={facility.name} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-gray-800">{facility.name}</h4>
                              <div className="text-right text-xs text-gray-500">
                                <div>{facility.area}</div>
                                <div>{facility.capacity}</div>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div>
                                <h5 className="text-sm font-medium text-gray-700 mb-1">Features:</h5>
                                <div className="flex flex-wrap gap-1">
                                  {facility.features.map((feature, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-medium text-gray-700 mb-1">
                                  {facility.sports ? 'Sports:' : 'Programs:'}
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {(facility.sports || facility.programs)?.map((sport, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {sport}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
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

        {/* Sports Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Recent Achievements
              </h2>
              <p className="text-gray-600">
                Celebrating our students' sporting excellence and competitive success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sportsAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.sport}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <CardTitle className="text-blue-900">{achievement.sport}</CardTitle>
                          <Badge className="bg-yellow-500 text-white">{achievement.level}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">{achievement.achievement}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{achievement.students} participants</span>
                          <span>{achievement.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Programs */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Coaching & Training Programs
              </h2>
              <p className="text-gray-600">
                Professional coaching programs designed for all skill levels
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {coachingPrograms.map((program, index) => (
                <motion.div
                  key={program.program}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-blue-900">{program.program}</CardTitle>
                      <p className="text-gray-600 text-sm">{program.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Program Features:</h4>
                          <div className="space-y-1">
                            {program.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Target className="w-3 h-3 text-blue-600" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Focus Areas:</h4>
                          <div className="flex flex-wrap gap-1">
                            {program.sports.map((sport, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {sport}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Calendar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Annual Sports Calendar
              </h2>
              <p className="text-gray-600">
                Year-round sporting events and competitions
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {sportsCalendar.map((event, index) => (
                      <motion.div
                        key={event.event}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                      >
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-blue-600 rounded-full">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-blue-900">{event.event}</h4>
                            <Badge variant="outline">{event.month}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">{event.description}</p>
                          <p className="text-xs text-gray-500 mt-1">Participants: {event.participants}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                Join Our Sports Community
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Discover your sporting potential with our comprehensive programs, 
                professional coaching, and world-class facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/student-life/clubs">
                    <Users className="mr-2 h-5 w-5" />
                    Join Sports Clubs
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/facilities/campus">
                    <MapPin className="mr-2 h-5 w-5" />
                    Visit Campus
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-blue-600" asChild>
                  <Link href="/apply">
                    <Trophy className="mr-2 h-5 w-5" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}