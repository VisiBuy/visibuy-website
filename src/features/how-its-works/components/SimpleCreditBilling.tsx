"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export default function SimpleCreditBilling() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,123,255,0.05)_0%,transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              Simple Seller Access
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-6
              text-3xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-neutral-900
              md:text-5xl
            "
          >
            Start creating
            <br />
            verifications easily.
          </h2>

          {/* SUBTEXT */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-600
              md:text-lg
            "
          >
            Pay only for the verifications you create with simple
            pay-as-you-go access.
          </p>
        </div>

        {/* ================= PRICING CARD ================= */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              w-full
              max-w-2xl
              overflow-hidden
              rounded-[36px]
              border
              border-neutral-200
              bg-white
              shadow-[0_25px_100px_rgba(0,0,0,0.06)]
            "
          >
            {/* TOP */}
            <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] px-8 py-10 text-center text-white">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">
                Pay-As-You-Go
              </p>

              <h3 className="mt-4 text-5xl font-bold tracking-tight">
                ₦1,500
              </h3>

              <p className="mt-3 text-base text-white/90">
                Per verification
              </p>
            </div>

            {/* CONTENT */}
            <div className="px-8 py-10 text-center">
              <div className="space-y-4">
                <div className="rounded-2xl bg-neutral-50 px-5 py-4">
                  <p className="text-base font-medium text-neutral-900">
                    3 Credits = 1 Verification
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 px-5 py-4">
                  <p className="text-base font-medium text-neutral-900">
                    No subscriptions required
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 px-5 py-4">
                  <p className="text-base font-medium text-neutral-900">
                    Load credits anytime
                  </p>
                </div>
              </div>

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
                      shadow-[0_12px_40px_rgba(0,123,255,0.20)]
                      hover:opacity-95
                    "
                  >
                    Create Your First Verification
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-10 text-center">
          <p
            className="
              text-sm
              leading-relaxed
              text-neutral-500
              md:text-base
            "
          >
            Simple pricing helps sellers get started without complicated plans.
          </p>
        </div>
      </div>
    </section>
  );
}