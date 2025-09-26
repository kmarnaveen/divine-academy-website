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
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl font-heading">
                  D
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading">
                  Divine International Academy
                </h3>
                <p className="text-sm text-gray-400">
                  Learning by Doing, Growing for Life
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering young minds since 2012 with quality CBSE education,
              nurturing creativity, critical thinking, and character development
              in a supportive learning environment.
            </p>
            <div className="text-sm text-gray-400">
              <p>
                <strong>CBSE Affiliation No:</strong> 2131764
              </p>
              <p>
                <strong>Valid Until:</strong> 2029
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/student-life"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/academics/curriculum"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  CBSE Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/streams"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Science Stream
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/streams"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Commerce Stream
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/streams"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Arts Stream
                </Link>
              </li>
              <li>
                <Link
                  href="/student-life/clubs"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Co-curricular Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Apply Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-gray-300">Divine International Academy</p>
                  <p className="text-gray-300">Sirsaganj, Firozabad</p>
                  <p className="text-gray-300">Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-gray-300">info@divineacademy.edu.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-accent" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
                  <p>Sat: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-accent hover:text-primary transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div>
              <p>
                &copy; 2025 Divine International Academy. All rights reserved.
              </p>
              <p className="mt-1">Managed by Om Educational Trust since 2012</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                href="/privacy"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-accent transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
