import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { AudiencePathwaysSection } from "@/components/sections/audience-pathways-section";
import { AdmissionsCTASection } from "@/components/sections/admissions-cta-section";
import { ValueFrameworkHomeSection } from "@/components/sections/value-framework-section";
import { VideoCarousel } from "../components/sections/video-carousel";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ValueFrameworkHomeSection />
      <VideoCarousel />
      <AdmissionsCTASection />
      <div className="container mx-auto mt-12 px-3 sm:mt-16 sm:px-4 md:mt-20 md:px-6 lg:px-4">
        <AudiencePathwaysSection />
      </div>
    </MainLayout>
  );
}
