import {
  Camera,
  Link2,
  ShieldCheck,
} from "lucide-react";

import { PaymentTrustCard } from "./PaymentTrustCard";

export function PaymentTrust() {
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
            When Buyers Feel Confident,
            <br />
            Sales Move Faster.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-300 md:text-lg">
            Visibuy helps buyers feel more comfortable before payment by letting
            them see proof of the exact product first.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PaymentTrustCard
            title="Record the Exact Item"
            description="Show buyers the actual product they’ll receive through clear visual proof."
            points={[
              "Record live product proof",
              "Capture the exact item",
              "Reduce buyer hesitation",
            ]}
            icon={<Camera className="h-10 w-10" />}
            bgColor="bg-brand-primary"
          />

          <PaymentTrustCard
            title="Share Anywhere Buyers Shop"
            description="Send your verification link across WhatsApp, Instagram, Jiji, or anywhere buyers already chat."
            points={[
              "One shareable verification link",
              "Works across social commerce",
              "Simple buyer experience",
            ]}
            icon={<Link2 className="h-10 w-10" />}
            bgColor="bg-orange-500"
          />

          <PaymentTrustCard
            title="Build Buyer Confidence"
            description="Help buyers feel more confident before payment by showing proof of the exact product."
            points={[
              "Increase buyer confidence",
              "Create trust through visibility",
              "Help buyers move forward",
            ]}
            icon={<ShieldCheck className="h-10 w-10" />}
            bgColor="bg-brand-success"
          />
        </div>
      </div>
    </section>
  );
}