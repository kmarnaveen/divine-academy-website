"use client";

import { useState } from "react";
import { HeroVideoDialog } from "@/registry/magicui/hero-video-dialog";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc: string;
  duration: string;
  category: "campus" | "academics" | "testimonials" | "events" | "sports";
  featured?: boolean;
}

const videos: VideoItem[] = [
  {
    id: "campus-tour",
    title: "Campus Tour 2025",
    description:
      "Explore our modern facilities, labs, library, and sports complex in this comprehensive campus walkthrough.",
    videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
    thumbnailSrc:
      "https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/490067730_24047400994863377_8797237962693718954_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_uvPZuD_AoQ7kNvwEuWPx-&_nc_oc=Adm7PmdJddPZrkxSdKhWU8XLIuC-MERZ-0zHZb8TTxEX2EeC9Uo1OEu4PcxJ5jJ9Wi8&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=__Bk5kYblXIp0rSHZasGxg&oh=00_AfarEP8--oVhEhNLc7h2pj0o8VpfdJ7jL464UySviW4Fhw&oe=68DFA667",
    duration: "3:45",
    category: "campus",
    featured: true,
  },
  {
    id: "steam-labs",
    title: "STEAM Labs & Innovation Center",
    description:
      "Discover our cutting-edge science, technology, engineering, arts, and mathematics facilities.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailSrc:
      "https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/490067730_24047400994863377_8797237962693718954_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_uvPZuD_AoQ7kNvwEuWPx-&_nc_oc=Adm7PmdJddPZrkxSdKhWU8XLIuC-MERZ-0zHZb8TTxEX2EeC9Uo1OEu4PcxJ5jJ9Wi8&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=__Bk5kYblXIp0rSHZasGxg&oh=00_AfarEP8--oVhEhNLc7h2pj0o8VpfdJ7jL464UySviW4Fhw&oe=68DFA667",
    duration: "2:30",
    category: "academics",
  },
  {
    id: "student-success",
    title: "Parent Testimonials 2024",
    description:
      "Hear from parents about their children's remarkable growth and achievements at Divine Academy.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailSrc:
      "https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/490067730_24047400994863377_8797237962693718954_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_uvPZuD_AoQ7kNvwEuWPx-&_nc_oc=Adm7PmdJddPZrkxSdKhWU8XLIuC-MERZ-0zHZb8TTxEX2EeC9Uo1OEu4PcxJ5jJ9Wi8&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=__Bk5kYblXIp0rSHZasGxg&oh=00_AfarEP8--oVhEhNLc7h2pj0o8VpfdJ7jL464UySviW4Fhw&oe68DFA667",
    duration: "4:20",
    category: "testimonials",
  },
  {
    id: "annual-day",
    title: "Annual Day Celebration 2024",
    description:
      "Experience the vibrant cultural performances and achievements celebration from our annual day event.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailSrc:
      "https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/490067730_24047400994863377_8797237962693718954_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_uvPZuD_AoQ7kNvwEuWPx-&_nc_oc=Adm7PmdJddPZrkxSdKhWU8XLIuC-MERZ-0zHZb8TTxEX2EeC9Uo1OEu4PcxJ5jJ9Wi8&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=__Bk5kYblXIp0rSHZasGxg&oh=00_AfarEP8--oVhEhNLc7h2pj0o8VpfdJ7jL464UySviW4Fhw&oe=68DFA667",
    duration: "5:15",
    category: "events",
  },
  {
    id: "sports-excellence",
    title: "Sports & Physical Education",
    description:
      "Watch our students excel in various sports and physical activities that build character and teamwork.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailSrc:
      "https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/490067730_24047400994863377_8797237962693718954_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_uvPZuD_AoQ7kNvwEuWPx-&_nc_oc=Adm7PmdJddPZrkxSdKhWU8XLIuC-MERZ-0zHZb8TTxEX2EeC9Uo1OEu4PcxJ5jJ9Wi8&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=__Bk5kYblXIp0rSHZasGxg&oh=00_AfarEP8--oVhEhNLc7h2pj0o8VpfdJ7jL464UySviW4Fhw&oe=68DFA667",
    duration: "3:10",
    category: "sports",
  },
];

const categoryIcons = {
  campus: BookOpen,
  academics: Award,
  testimonials: Users,
  events: Play,
  sports: Users,
};

const categoryColors = {
  campus: "bg-primary/10 text-primary border-primary/20",
  academics: "bg-accent/10 text-accent border-accent/20",
  testimonials: "bg-green-100 text-green-700 border-green-200",
  events: "bg-purple-100 text-purple-700 border-purple-200",
  sports: "bg-blue-100 text-blue-700 border-blue-200",
};

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredVideos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length
    );
  };

  const categories = [
    "all",
    "campus",
    "academics",
    "testimonials",
    "events",
    "sports",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Experience Divine Academy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our world-class facilities, innovative programs, and
            vibrant community through these exclusive videos
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon =
              category === "all"
                ? Play
                : categoryIcons[category as keyof typeof categoryIcons];
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                }}
                className={`capitalize ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "hover:bg-primary/5"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category === "all" ? "All Videos" : category.replace("-", " ")}
              </Button>
            );
          })}
        </motion.div>

        {/* Main Video Display */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            {filteredVideos.length > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <HeroVideoDialog
                  className="w-full"
                  animationStyle="from-center"
                  videoSrc={filteredVideos[currentIndex]?.videoSrc}
                  thumbnailSrc={filteredVideos[currentIndex]?.thumbnailSrc}
                  thumbnailAlt={filteredVideos[currentIndex]?.title}
                  title={filteredVideos[currentIndex]?.title}
                  description={filteredVideos[currentIndex]?.description}
                  duration={filteredVideos[currentIndex]?.duration}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          {filteredVideos.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                onClick={prevVideo}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                onClick={nextVideo}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Video Thumbnails */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {filteredVideos.map((video, index) => {
            const Icon = categoryIcons[video.category];
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "scale-105 ring-2 ring-primary"
                    : "hover:scale-102"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="w-32 h-20 relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={video.thumbnailSrc}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" fill="currentColor" />
                  </div>
                  {/* Category Badge */}
                  <div
                    className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-xs font-medium border ${
                      categoryColors[video.category]
                    }`}
                  >
                    <Icon className="h-3 w-3 inline mr-1" />
                    {video.category}
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 py-0.5 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <p className="text-xs text-center mt-2 text-gray-600 max-w-32 truncate">
                  {video.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Video Counter */}
        {filteredVideos.length > 1 && (
          <div className="text-center mt-6">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {filteredVideos.length} videos
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
