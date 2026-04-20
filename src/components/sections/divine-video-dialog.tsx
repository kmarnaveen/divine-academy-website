"use client";

import { HeroVideoDialog } from "@/registry/magicui/hero-video-dialog";

export function DivineAcademyVideoDialog() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="w-full max-w-2xl mx-auto"
        animationStyle="from-center"
        videoSrc="/PRAKRAM 2025 Coming Soon _ Divine International Academy, Sirsaganj _ Tribute to Indian Army.mp4"
        thumbnailSrc="/images/logo.png"
        thumbnailAlt="Divine International Academy featured video"
        title="PRAKRAM Tribute Showcase"
        description="A short look at the discipline, confidence, and stage presence our students bring to school life."
        duration="2:30"
        videoType="local"
        thumbnailFit="contain"
        previewMode="video"
      />
    </div>
  );
}
