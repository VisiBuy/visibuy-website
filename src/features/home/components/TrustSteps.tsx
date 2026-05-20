import { Button } from "@/shared/components/ui/button";
import { TrustStepCard } from "./TrustStepCard";
import { Video, Link2, Eye } from "lucide-react";
import Link from "next/link";

export function TrustSteps() {
  return (
    <section className="bg-neutral-200">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Turn “Is This the Exact One?” Into Payment
          </h2>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Visibuy helps buyers feel more confident before they pay by letting
            them see proof of the exact product.
          </p>
        </div>

        {/* Description box */}
        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            rounded-[28px]
            border
            border-black/5
            bg-white
            p-6
            shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            md:p-8
          "
        >
          <p className="text-base leading-relaxed text-neutral-700">
            Record the actual item, generate your verification link instantly,
            and share it anywhere your buyers already shop — WhatsApp,
            Instagram, or Jiji.
          </p>

          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Buyers see proof of the exact product before payment, helping them
            move forward with more confidence.
          </p>

          <div className="mt-6">
            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                Create Verification Link →
              </Button>
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <TrustStepCard
            step="Step 1"
            title="Record the Exact Item"
            description="Capture clear live proof of the actual product your buyer will receive."
            icon={<Video className="h-6 w-6 text-brand-primary" />}
            badgeColor="primary"
            bgColor="blue"
          />

          <TrustStepCard
            step="Step 2"
            title="Share Your Verification Link"
            description="Generate your link instantly and send it anywhere your buyers already chat or shop."
            icon={<Link2 className="h-6 w-6 text-orange-500" />}
            badgeColor="warning"
            bgColor="orange"
          />

          <TrustStepCard
            step="Step 3"
            title="Buyer Views the Proof"
            description="Buyers see the exact item before payment and feel more confident moving forward."
            icon={<Eye className="h-6 w-6 text-brand-success" />}
            badgeColor="success"
            bgColor="green"
          />
        </div>
      </div>
    </section>
  );
}