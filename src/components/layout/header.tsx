"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Award,
  Users,
  GraduationCap,
  Building,
  BookOpen,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TypeScript interfaces for world-class type safety
interface SubmenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavigationItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
  featured?: boolean;
  cta?: boolean;
}

// World-Class Information Architecture - Reduced to 6 strategic items
const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Academics",
    href: "/academics",
    featured: true, // Mark as primary section
    submenu: [
      {
        name: "Curriculum",
        href: "/academics/curriculum",
        description: "CBSE-aligned progressive learning",
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        name: "Academic Streams",
        href: "/academics/streams",
        description: "Science, Commerce & Humanities",
        icon: <GraduationCap className="h-4 w-4" />,
      },
      {
        name: "Achievements",
        href: "/academics/achievements",
        description: "Awards & recognition",
        icon: <Award className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Campus Life",
    href: "/student-life",
    submenu: [
      {
        name: "Facilities",
        href: "/facilities",
        description: "Modern campus & infrastructure",
        icon: <Building className="h-4 w-4" />,
      },
      {
        name: "Student Activities",
        href: "/student-life",
        description: "Clubs, events & programs",
        icon: <Users className="h-4 w-4" />,
      },
      {
        name: "Sports",
        href: "/facilities/sports",
        description: "Athletic programs & facilities",
        icon: <Heart className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    cta: true, // Mark as conversion-focused
    submenu: [
      {
        name: "Admission Process",
        href: "/admissions/process",
        description: "Step-by-step admission guide",
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        name: "Fee Structure",
        href: "/admissions/fees",
        description: "Transparent fee details",
        icon: <Award className="h-4 w-4" />,
      },
      {
        name: "Apply Online",
        href: "/apply",
        description: "Start your application now",
        icon: <GraduationCap className="h-4 w-4" />,
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = React.useState<
    string | null
  >(null);

  // Enhanced mobile menu management
  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === itemName ? null : itemName);
  };

  // Close mobile menu with animation
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Keyboard navigation support
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Click-to-call functionality
  const handlePhoneClick = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:info@divineacademy.edu.in", "_self");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      {/* Trust & Contact Bar - World-Class Implementation */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Contact Info - Mobile Optimized */}
            <div className="flex items-center space-x-4 text-sm">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 hover:text-gray-200 transition-colors group"
                aria-label="Call Divine International Academy"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">+91 9876543210</span>
                <span className="sm:hidden">Call Now</span>
              </button>

              <button
                onClick={handleEmailClick}
                className="hidden md:flex items-center space-x-2 hover:text-gray-200 transition-colors group"
                aria-label="Email Divine International Academy"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>info@divineacademy.edu.in</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs bg-white/10 px-3 py-1 rounded-full">
                <Award className="h-3 w-3" />
                <span className="hidden sm:inline">CBSE Affiliated</span>
                <span className="sm:hidden">CBSE</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-xs">
                <MapPin className="h-3 w-3" />
                <span>Sirsaganj, Firozabad, UP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - World-Class Design */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Increased height for prominence */}
          {/* Logo & Brand - Proper Visual Hierarchy */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 relative">
              {" "}
              {/* Increased logo size */}
              <Image
                src="/images/logo.png"
                alt="Divine International Academy Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                width={56}
                height={56}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold font-heading text-gray-900 leading-tight">
                {" "}
                {/* Increased from text-xl */}
                Divine International Academy
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                {" "}
                {/* Increased from text-xs */}
                Excellence in Education Since 2011
              </p>
            </div>
            {/* Mobile Logo Text */}
            <div className="sm:hidden">
              <h1 className="text-lg font-bold font-heading text-gray-900">
                Divine Academy
              </h1>
            </div>
          </Link>
          {/* Desktop Navigation - Professional Implementation */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 font-semibold transition-all duration-200 rounded-lg",
                    item.featured
                      ? "text-primary hover:bg-primary/5"
                      : item.cta
                      ? "text-primary hover:text-primary/80"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  )}
                  aria-haspopup={item.submenu ? "true" : "false"}
                  aria-expanded={activeSubmenu === item.name ? "true" : "false"}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeSubmenu === item.name ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                {/* Enhanced Submenu with Rich Content */}
                {item.submenu && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-xl border border-gray-100 transition-all duration-300 transform",
                      activeSubmenu === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    )}
                    role="menu"
                  >
                    <div className="p-4">
                      <div className="space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                            role="menuitem"
                          >
                            {"icon" in subitem && subitem.icon && (
                              <div className="text-primary mt-0.5 group-hover:scale-110 transition-transform">
                                {subitem.icon}
                              </div>
                            )}
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-primary">
                                {subitem.name}
                              </div>
                              {"description" in subitem &&
                                subitem.description && (
                                  <div className="text-sm text-gray-500 mt-1">
                                    {subitem.description}
                                  </div>
                                )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Conversion-Optimized CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Link href="/apply" className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Apply Now</span>
              </Link>
            </Button>
          </div>
          {/* Mobile Menu Button - Touch Optimized with Animation */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 touch-manipulation active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            style={{ minWidth: "44px", minHeight: "44px" }} // WCAG touch target size
          >
            <div className="relative">
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 transform rotate-0 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 transform rotate-0 transition-transform duration-200" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu - World-Class Optimization */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Sidebar Panel */}
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out overflow-hidden"
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            {/* Scrollable Content */}
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto mobile-menu-scroll">
                {/* Quick Actions */}
                <div className="p-4 bg-primary/5">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handlePhoneClick();
                        closeMobileMenu();
                      }}
                      size="sm"
                      variant="outline"
                      className="justify-center border-primary/20 hover:bg-primary/10"
                    >
                      <Phone className="h-4 w-4 mr-1.5" />
                      <span className="text-xs">Call Now</span>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="justify-center bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link href="/apply" onClick={closeMobileMenu}>
                        <GraduationCap className="h-4 w-4 mr-1.5" />
                        <span className="text-xs">Apply Now</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="py-2">
                  {navigation.map((item, index) => (
                    <div
                      key={item.name}
                      className="border-b border-gray-50 last:border-b-0"
                    >
                      {/* Main Navigation Item */}
                      <div className="px-4">
                        {item.submenu ? (
                          <button
                            id={`button-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className={cn(
                              "flex items-center justify-between w-full py-4 font-semibold transition-all duration-200 touch-manipulation rounded-lg hover:bg-gray-50/80 active:bg-gray-100",
                              item.featured
                                ? "text-primary hover:text-primary/90"
                                : expandedMobileMenu === item.name
                                ? "text-primary bg-primary/5"
                                : "text-gray-900 hover:text-primary"
                            )}
                            style={{ minHeight: "56px" }}
                            aria-expanded={expandedMobileMenu === item.name}
                            aria-controls={`submenu-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <span className="text-left font-semibold">{item.name}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-all duration-300 ease-in-out flex-shrink-0",
                                expandedMobileMenu === item.name
                                  ? "rotate-180 text-primary"
                                  : "rotate-0 text-gray-600"
                              )}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              "flex items-center py-4 font-semibold transition-colors duration-200 touch-manipulation",
                              item.featured
                                ? "text-primary"
                                : "text-gray-900 hover:text-primary"
                            )}
                            style={{ minHeight: "56px" }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>

                      {/* Submenu Items with Smooth Accordion Animation */}
                      {item.submenu && (
                        <div
                          id={`submenu-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className={cn(
                            "accordion-content overflow-hidden transition-all duration-300 ease-in-out",
                            expandedMobileMenu === item.name
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0"
                          )}
                          role="region"
                          aria-labelledby={`button-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="bg-gray-50/50 border-t border-gray-100">
                            {item.submenu.map((subitem, subIndex) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeMobileMenu}
                                className={cn(
                                  "flex items-start space-x-3 px-6 py-4 text-gray-700 hover:text-primary hover:bg-white/70 transition-all duration-200 touch-manipulation border-b border-gray-100/50",
                                  subIndex === item.submenu!.length - 1 && "border-b-0"
                                )}
                                style={{ minHeight: "56px" }}
                              >
                                {"icon" in subitem && subitem.icon && (
                                  <div className="text-primary/70 mt-1 flex-shrink-0 transition-colors hover:text-primary">
                                    {subitem.icon}
                                  </div>
                                )}
                                <div className="min-w-0 flex-1">
                                  <div className="font-semibold text-sm leading-tight text-gray-900">
                                    {subitem.name}
                                  </div>
                                  {"description" in subitem &&
                                    subitem.description && (
                                      <div className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                                        {subitem.description}
                                      </div>
                                    )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer - Trust Signals & Contact */}
              <div className="border-t border-gray-100 p-4 bg-gray-50/80">
                <div className="text-center mb-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium">CBSE Affiliated School</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Est. 2011 • 1200+ Students • 98.5% Pass Rate
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmailClick();
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@divineacademy.edu.in</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
