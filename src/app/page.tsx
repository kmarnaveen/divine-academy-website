import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { AudiencePathwaysSection } from "@/components/sections/audience-pathways-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AdmissionsCTASection } from "@/components/sections/admissions-cta-section";
import { VideoCarousel } from "../components/sections/video-carousel";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <VideoCarousel />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 mt-12 sm:mt-16 md:mt-20">
        <AudiencePathwaysSection />
      </div>
      <FeaturesSection />
      <AdmissionsCTASection />
    </MainLayout>
  );
}
