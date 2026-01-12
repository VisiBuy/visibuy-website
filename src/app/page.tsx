import { HomeHero } from "@/features/home";
import CTASection from "@/features/home/components/CTASection";
import EarnTrustAsYouSell from "@/features/home/components/EarnTrustAsYouSell";
import Footer from "@/features/home/components/Footer";
import HowItWorksSteps from "@/features/home/components/HowItWorksSteps";
import Navbar from "@/features/home/components/Navbar";
import SimpleCreditBilling from "@/features/home/components/SimpleCreditBilling";
import VisualVerificationEngine from "@/features/home/components/VisualVerificationEngine";
import WhatAIDetects from "@/features/home/components/WhatAIDetects";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col text-slate-50">
      <Navbar />
      <HomeHero />
      <HowItWorksSteps />
      <EarnTrustAsYouSell />
      <VisualVerificationEngine />
      <WhatAIDetects />
      <SimpleCreditBilling />
      <CTASection />
      <Footer />
    </main>
  );
}
