import {
  TrustSafetyHero,
  RiskWarningSection,
  BuiltForTrustSection,
  TrustBadgesSection,
  ReputationSection,
} from "@/features/trust-safety";
import AiPoweredVerificationSection from "@/features/trust-safety/sections/AiPoweredVerificationSection";
import DataPrivacySecuritySection from "@/features/trust-safety/sections/DataPrivacySecuritySection";
import ResolutionAndRulesSection from "@/features/trust-safety/sections/ResolutionAndRulesSection";
import TrustMakesSellingSection from "@/features/trust-safety/sections/TrustMakesSellingSection";
// import Navbar from "@/shared/components/Navbar";

export default function TrustSafetyPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <TrustSafetyHero />
      <RiskWarningSection />
      <BuiltForTrustSection />
      <ReputationSection />
      <AiPoweredVerificationSection />
      <TrustBadgesSection />
      <ResolutionAndRulesSection/>
      <DataPrivacySecuritySection />
      <TrustMakesSellingSection />
    </main>
  );
}
