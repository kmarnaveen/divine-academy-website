"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Vision & Mission", href: "/about/vision" },
      { name: "Principal's Message", href: "/about/principal" },
      { name: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    submenu: [
      { name: "Curriculum", href: "/academics/curriculum" },
      { name: "Streams", href: "/academics/streams" },
      { name: "Achievements", href: "/academics/achievements" },
    ],
  },
  {
    name: "Facilities",
    href: "/facilities",
    submenu: [
      { name: "Campus", href: "/facilities/campus" },
      { name: "Labs", href: "/facilities/labs" },
      { name: "Sports", href: "/facilities/sports" },
      { name: "Transport", href: "/facilities/transport" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    submenu: [
      { name: "Process", href: "/admissions/process" },
      { name: "Fee Structure", href: "/admissions/fees" },
      { name: "Apply Now", href: "/apply" },
    ],
  },
  {
    name: "Student Life",
    href: "/student-life",
    submenu: [
      { name: "Clubs", href: "/student-life/clubs" },
      { name: "Events", href: "/student-life/events" },
      { name: "Gallery", href: "/student-life/gallery" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@divineacademy.edu.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sirsaganj, Firozabad, UP</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <span className="text-xs">CBSE Affiliation No: 2131764</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/logo.png"
                alt="Divine International Academy Logo"
                className="w-full h-full object-contain"
                width={48}
                height={48}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-heading text-primary">
                Divine International Academy
              </h1>
              <p className="text-xs text-muted-foreground">
                Learning by Doing, Growing for Life
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                    <div className="p-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-1 text-gray-600 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-primary"
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
