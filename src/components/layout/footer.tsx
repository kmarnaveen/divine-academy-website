import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Award,
  Shield,
  Star,
  Users,
  BookOpen,
  Trophy,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Achievements Banner */}
      <div className="bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="h-5 w-5 text-white" />
              <div>
                <div className="text-xl font-bold text-white">98.5%</div>
                <div className="text-xs text-gray-200">Pass Rate 2024</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-white" />
              <div>
                <div className="text-xl font-bold text-white">1200+</div>
                <div className="text-xs text-gray-200">Happy Students</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-white" />
              <div>
                <div className="text-xl font-bold text-white">15+</div>
                <div className="text-xs text-gray-200">Awards Won</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <BookOpen className="h-5 w-5 text-white" />
              <div>
                <div className="text-xl font-bold text-white">13</div>
                <div className="text-xs text-gray-200">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-xl font-heading">
                    D
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Divine International Academy
                  </h3>
                  <p className="text-sm text-gray-200">
                    Shaping Tomorrow's Leaders Today
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-200 text-sm leading-relaxed">
              Empowering young minds since 2012 with world-class CBSE education,
              fostering innovation, excellence, and character development in a
              nurturing learning environment.
            </p>

            <div className="bg-white/5 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">
                  CBSE Affiliated
                </span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <p>
                  <strong>Affiliation No:</strong> 2131764
                </p>
                <p>
                  <strong>Valid Until:</strong> 2029
                </p>
                <p>
                  <strong>Recognition:</strong> Government of Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-heading text-white flex items-center space-x-2">
              <Star className="h-5 w-5 text-white" />
              <span>Explore</span>
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                  School
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-200 hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <span>About Divine Academy</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-dia"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      Why Choose Us?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/principal"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Principal's Message
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Contact & Directions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                  Admissions
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/admissions"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/apply"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Apply Online
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admissions#fees"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Fee Structure
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Excellence */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-heading text-white flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-white" />
              <span>Excellence</span>
            </h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                  Academics
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/academics"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      CBSE Curriculum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academics/achievements"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Academic Achievements
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academics#streams"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Science, Commerce, Arts
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-accent-200 mb-3 uppercase tracking-wide">
                  Campus Life
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/student-life"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Student Life
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/facilities"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      World-Class Facilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/facilities/sports"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Sports Excellence
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student-life/clubs"
                      className="text-accent-100 hover:text-accent transition-colors"
                    >
                      Clubs & Activities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Connect */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-heading text-white flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-white" />
              <span>Connect</span>
            </h4>

            {/* Contact Information */}
            <div className="bg-accent/5 rounded-lg p-4 space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Visit Us
                </h5>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-white flex-shrink-0" />
                  <div className="text-gray-200 text-sm">
                    <p className="font-medium">Divine International Academy</p>
                    <p>Sirsaganj, Firozabad</p>
                    <p>Uttar Pradesh 283135, India</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-white" />
                  <div>
                    <span className="text-gray-200 text-sm">
                      +91 9876543210
                    </span>
                    <p className="text-xs text-gray-300">Admissions Helpline</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-white" />
                  <div>
                    <span className="text-gray-200 text-sm">
                      info@divineacademy.edu.in
                    </span>
                    <p className="text-xs text-gray-300">General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 mt-1 text-white" />
                  <div className="text-gray-200 text-sm">
                    <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
                    <p>Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-xs text-gray-300 mt-1">Office Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                Follow Our Journey
              </h5>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 group"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 group"
                  title="Twitter"
                >
                  <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 group"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 group"
                  title="YouTube"
                >
                  <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
              <p className="text-xs text-gray-300 mt-2">
                Stay updated with our latest news and events
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Recognition */}
      <div className="border-t border-white/20 bg-crimson-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h5 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Trusted by Parents, Recognized by Excellence
            </h5>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-200">
              <span className="flex items-center space-x-1">
                <Shield className="h-3 w-3 text-white" />
                <span>CBSE Affiliated</span>
              </span>
              <span className="flex items-center space-x-1">
                <Award className="h-3 w-3 text-white" />
                <span>Government Recognized</span>
              </span>
              <span className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-white" />
                <span>ISO 9001:2015 Certified</span>
              </span>
              <span className="flex items-center space-x-1">
                <Trophy className="h-3 w-3 text-accent" />
                <span>Excellence in Education Award 2024</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between text-sm">
            <div className="text-center lg:text-left">
              <p className="text-gray-200">
                &copy; 2025{" "}
                <span className="font-semibold text-white">
                  Divine International Academy
                </span>
                . All rights reserved.
              </p>
              <p className="mt-1 text-gray-300">
                Proudly managed by{" "}
                <span className="text-white font-medium">
                  Om Educational Trust
                </span>{" "}
                since 2012 •{" "}
                <span className="text-white font-medium">
                  Shaping Tomorrow's Leaders Today
                </span>
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy"
                className="text-accent-200 hover:text-accent transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <span className="text-accent-300">•</span>
              <Link
                href="/terms"
                className="text-accent-200 hover:text-accent transition-colors text-xs"
              >
                Terms of Service
              </Link>
              <span className="text-accent-300">•</span>
              <Link
                href="/sitemap"
                className="text-accent-200 hover:text-accent transition-colors text-xs"
              >
                Sitemap
              </Link>
              <span className="text-accent-300">•</span>
              <Link
                href="/careers"
                className="text-accent-200 hover:text-accent transition-colors text-xs"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
