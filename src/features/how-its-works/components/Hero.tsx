import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-blue-50">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,123,255,0.10)_0%,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-16 md:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-24">
        {/* ================= TEXT ================= */}
        <div className="mx-auto max-w-4xl text-center">
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-medium text-brand-primary">
              From Product Proof To Buyer Confidence
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              mt-6
              text-4xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-neutral-900
              sm:text-5xl
              lg:text-7xl
            "
          >
            See how{" "}
            <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
              Visibuy
            </span>
            <br />
            works in 3 simple steps
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-600
              md:text-lg
            "
          >
            Record product proof, share your verification link, and help
            buyers inspect products more confidently before payment.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-brand-primary
                  to-brand-success
                  px-8
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_12px_40px_rgba(0,123,255,0.25)]
                  hover:opacity-95
                "
              >
                Create Your First Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}
        <div className="mt-16 flex justify-center">
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-white
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src="/images/how-it-works/how-it-works-hero.png"
              alt="How Visibuy works process illustration"
              width={1600}
              height={1200}
              priority
              className="w-full max-w-6xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}