"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,123,255,0.08)_0%,transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        {/* ================= CTA CONTAINER ================= */}
        <div
          className="
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-[#007BFF]
            to-[#28A745]
            px-8
            py-16
            text-center
            text-white
            shadow-[0_30px_100px_rgba(0,123,255,0.18)]
            md:px-12
            md:py-20
          "
        >
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/90">
              Start Creating Verifications
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              md:text-6xl
            "
          >
            Start sharing
            <br />
            clearer proof today.
          </h2>

          {/* SUBTEXT */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-white/90
              md:text-lg
            "
          >
            Record products, generate verification links, and help buyers
            inspect products more confidently before payment.
          </p>

          {/* CTA BUTTON */}
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
                  bg-white
                  px-8
                  text-base
                  font-semibold
                  text-brand-primary
                  shadow-[0_12px_40px_rgba(255,255,255,0.20)]
                  hover:bg-neutral-100
                "
              >
                Create Your First Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* FOOTER POINTS */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              text-sm
              text-white/85
              md:gap-8
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <span>No subscriptions required</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <span>Start in minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <span>Share verification links easily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}