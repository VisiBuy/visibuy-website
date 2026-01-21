import { HomeHero } from "@/features/how-its-works";
import CTASection from "@/features/how-its-works/components/CTASection";
import EarnTrustAsYouSell from "@/features/how-its-works/components/EarnTrustAsYouSell";
// import Footer from "@/features/how-its-works/components/Footer";
import HowItWorksSteps from "@/features/how-its-works/components/HowItWorksSteps";
// import Navbar from "@/shared/components/Navbar";
import SimpleCreditBilling from "@/features/how-its-works/components/SimpleCreditBilling";
import VisualVerificationEngine from "@/features/how-its-works/components/VisualVerificationEngine";
import WhatAIDetects from "@/features/how-its-works/components/WhatAIDetects";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col text-slate-50">
      {/* <Navbar /> */}
      <HomeHero />
      <HowItWorksSteps />
      <EarnTrustAsYouSell />
      <VisualVerificationEngine />
      <WhatAIDetects />
      <SimpleCreditBilling />
      <CTASection />
      {/* <Footer /> */}
    </main>
  );
}
