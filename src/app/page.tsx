import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { VideoCarousel } from "@/components/sections/video-carousel";
import { AdmissionsCTASection } from "@/components/sections/admissions-cta-section";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <VideoCarousel />
      <FeaturesSection />
      <AdmissionsCTASection />
    </MainLayout>
  );
}
