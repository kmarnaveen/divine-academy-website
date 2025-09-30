"use client";

import { HeroVideoDialog } from "@/registry/magicui/hero-video-dialog";

export function DivineAcademyVideoDialog() {
  return (
    <div className="relative">
      {/* Main Campus Tour Video */}
      <HeroVideoDialog
        className="w-full max-w-2xl mx-auto"
        animationStyle="from-center"
        videoSrc="/PRAKRAM 2025 Coming Soon _ Divine International Academy, Sirsaganj _ Tribute to Indian Army.mp4"
        thumbnailSrc="https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/490067730_24047400994863377_8797237962693718954_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8_uvPZuD_AoQ7kNvwEuWPx-&_nc_oc=Adm7PmdJddPZrkxSdKhWU8XLIuC-MERZ-0zHZb8TTxEX2EeC9Uo1OEu4PcxJ5jJ9Wi8&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=__Bk5kYblXIp0rSHZasGxg&oh=00_AfarEP8--oVhEhNLc7h2pj0o8VpfdJ7jL464UySviW4Fhw&oe=68DFA667"
        thumbnailAlt="PRAKRAM 2025 - Divine International Academy Tribute to Indian Army"
        title="PRAKRAM 2025 Coming Soon"
        description="Divine International Academy's tribute to the Indian Army - showcasing patriotism and excellence in education."
        duration="2:30"
        videoType="local"
      />
    </div>
  );
}
