import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AdmissionsCTASection } from "@/components/sections/admissions-cta-section";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <AdmissionsCTASection />
    </MainLayout>
  );
}
