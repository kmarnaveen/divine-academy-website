"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroVideoDialogProps {
  className?: string;
  animationStyle?:
    | "from-center"
    | "from-top"
    | "from-bottom"
    | "from-left"
    | "from-right";
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  title?: string;
  description?: string;
  duration?: string;
  videoType?: "youtube" | "local";
}

export function HeroVideoDialog({
  className,
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  title,
  description,
  duration = "2:30",
  videoType = "youtube",
}: HeroVideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const animationClasses = {
    "from-center": "hover:scale-105",
    "from-top": "hover:-translate-y-2",
    "from-bottom": "hover:translate-y-2",
    "from-left": "hover:-translate-x-2",
    "from-right": "hover:translate-x-2",
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "relative cursor-pointer group overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500",
            animationClasses[animationStyle],
            className
          )}
        >
          <div className="aspect-video relative">
            <img
              src={thumbnailSrc}
              alt={thumbnailAlt}
              className="w-full h-full object-cover"
            />

            {/* Divine Academy Branding Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Play Button - Divine Academy Style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-primary/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30"
              >
                <Play className="h-8 w-8 ml-1 text-white" fill="currentColor" />
              </motion.div>
            </div>

            {/* Video Duration Badge */}
            <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
              {duration}
            </div>

            {/* CBSE Trust Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center space-x-1">
              <Award className="h-3 w-3" />
              <span>CBSE Affiliated</span>
            </div>
          </div>

          {/* Video Info Section */}
          {(title || description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
              {title && (
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-white/90 leading-relaxed">
                  {description}
                </p>
              )}
              <div className="flex items-center mt-3 space-x-4 text-xs text-white/80">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>Divine International Academy</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </DialogTrigger>

      <DialogContent className="!max-w-none w-[90vw] max-h-[70vh] h-auto p-0 bg-transparent border-0 shadow-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <DialogTitle className="sr-only">
          {title || "Divine International Academy Video"}
        </DialogTitle>
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
          {videoType === "local" ? (
            <video
              src={videoSrc}
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
              poster={thumbnailSrc}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={`${videoSrc}?autoplay=1&rel=0&modestbranding=1`}
              title={title || "Divine International Academy Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
