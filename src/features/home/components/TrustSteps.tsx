import { Button } from "@/shared/components/ui/button";
import { TrustStepCard } from "./TrustStepCard";
import { Upload, Link2, Eye } from "lucide-react";
import Link from "next/link";

export function TrustSteps() {
  return (
    <section className="bg-neutral-200">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl lg:text-3xl sm:text-4xl">
            Turn Doubts Into{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-success bg-clip-text text-transparent font-bold">
              Trusts In Seconds
            </span>
          </h2>

          <p className="mt-3 text-neutral-600 sm:text-base">
            Visibuy helps you prove your product is real before they pay.
          </p>
        </div>

        {/* Description box */}
        <div className="mx-auto mt-10 max-w-4xl rounded-card bg-slate-100 p-6 shadow-level1 md:p-8">
          <p className="text-neutral-700">
            Upload short videos or photos of the actual item, and Visibuy
            automatically stamps them with time, date, and seller ID. Share your
            verification link anywhere — WhatsApp, Instagram, or Jiji.
          </p>

          <p className="mt-3 text-neutral-700 font-bold">
            Your buyer sees{" "}
            <span className="text-brand-primary font-medium">real proof</span>,
            confirms it’s genuine, and moves forward confidently.
          </p>

          <div className="mt-6">
            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Create Verification Link →</Button>
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <TrustStepCard
            step="Step 1"
            title="Upload Proof"
            description="Add clear live pictures or videos of your actual product. Our system automatically timestamps it with your seller ID."
            icon={<Upload className="h-6 w-6 text-brand-primary" />}
            badgeColor="primary"
            bgColor="blue"
          />

          <TrustStepCard
            step="Step 2"
            title="Create Verification Link"
            description="Get your unique verification link instantly and share it wherever your buyers are."
            icon={<Link2 className="h-6 w-6 text-orange-500" />}
            badgeColor="warning"
            bgColor="orange"
          />

          <TrustStepCard
            step="Step 3"
            title="Buyer Views Verified Proof"
            description="Buyers see the verified proof, trust increases instantly, and they move forward with confidence."
            icon={<Eye className="h-6 w-6 text-brand-success" />}
            badgeColor="success"
            bgColor="green"
          />
        </div>
      </div>
    </section>
  );
}
