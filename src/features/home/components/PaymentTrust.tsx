import { Camera, CreditCard, Award } from "lucide-react";
import { PaymentTrustCard } from "./PaymentTrustCard";

export function PaymentTrust() {
  return (
    <section className="bg-neutral-800">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-neutral-50 md:text-3xl lg:text-4xl ">
            Once They Trust What They See, Make Them
            <br />
            Trust How They Pay.
          </h2>

          <p className="mt-4 text-neutral-300 text-2xl sm:text-base">
            With Visibuy, You Can Take Safe Payments And Build A Trusted
            Reputation That Grows With Every Sale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PaymentTrustCard
            title="Visual Verification"
            description="Upload your proof once. Share it anywhere. Let buyers see it’s real."
            points={[
              "Auto-timestamped proof",
              "Seller ID watermark",
              "Share on any platform",
            ]}
            icon={<Camera className="h-10 w-10 " />}
            bgColor="bg-brand-primary"
          />

          <PaymentTrustCard
            title="Protected Payment"
            description="Let buyers pay confidently. Their money stays safe until delivery."
            points={[
              "Escrow protection",
              "No COD fraud risk",
              "Guaranteed payment on delivery",
            ]}
            icon={<CreditCard className="h-10 w-10 " />}
            bgColor="bg-brand-success"
          />

          <PaymentTrustCard
            title="Trust Badges"
            description="Earn badges that show buyers you’re a verified seller they can rely on."
            points={[
              "Build verified reputation",
              "Stand out from competitors",
              "Attract more buyers",
            ]}
            icon={<Award className="h-10 w-10 " />}
            bgColor="bg-orange-500"
          />
        </div>
      </div>
    </section>
  );
}
