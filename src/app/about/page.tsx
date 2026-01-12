import AboutHero from "@/features/about/sections/AboutHero";
import BuyerSellerSection from "@/features/about/sections/BuyerSellerSection";
import SellWithProofSection from "@/features/about/sections/SellWithProofSection";
import TrustBadgesSection from "@/features/about/sections/TrustBadgesSection";
import TrustBrokenSection from "@/features/about/sections/TrustBrokenSection";
import VisualProofSection from "@/features/about/sections/VisualProofSection";
import VisualVerificationWithHowItWorks from "@/features/about/sections/VisualVerificationWithHowItWorks";
import Navbar from "@/shared/components/Navbar";
// import MissionVisionSection from "@/features/about/sections/MissionVisionSection";
// import TeamSection from "@/features/about/sections/TeamSection";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <TrustBrokenSection />
      <VisualVerificationWithHowItWorks />
      <BuyerSellerSection />
      <TrustBadgesSection />
      <VisualProofSection />
      <SellWithProofSection />
     

      {/*
        Uncomment these as you build them:
        <MissionVisionSection />
        <TeamSection />
      */}
    </main>
  );
}
