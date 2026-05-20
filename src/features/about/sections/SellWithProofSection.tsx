import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

const SellWithProofSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-[#007BFF]
            via-[#1D8CF8]
            to-[#28A745]
            shadow-[0_30px_120px_rgba(0,0,0,0.12)]
          "
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18)_0%,transparent_35%)]" />

          <div
            className="
              relative
              grid
              gap-12
              px-6
              py-12
              text-white
              md:px-10
              md:py-16
              lg:grid-cols-2
              lg:items-center
              lg:px-14
              lg:py-16
            "
          >
            {/* ================= TEXT ================= */}
            <div className="max-w-xl">
              {/* LABEL */}
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">
                  Built for Honest Sellers
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  mt-6
                  text-4xl
                  font-heading
                  font-bold
                  leading-tight
                  tracking-tight
                  md:text-5xl
                "
              >
                Let buyers see the
                <br />
                exact item before payment.
              </h2>

              {/* SUBTEXT */}
              <p
                className="
                  mt-6
                  max-w-lg
                  text-base
                  leading-relaxed
                  text-white/90
                  md:text-lg
                "
              >
                Visibuy helps sellers prove products more clearly so
                conversations feel smoother and buyers feel more confident.
              </p>

              {/* BENEFITS */}
              <div className="mt-8 space-y-4">
                <Benefit text="Record proof before payment" />
                <Benefit text="Share verification links instantly" />
                <Benefit text="Help buyers feel more confident" />
              </div>

              {/* CTA */}
              <div className="mt-10">
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
                      text-sm
                      font-semibold
                      text-brand-primary
                      hover:bg-neutral-100
                      md:text-base
                    "
                  >
                    Create Your First Verification →
                  </Button>
                </Link>
              </div>
            </div>

            {/* ================= IMAGE ================= */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/10
                  shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                  backdrop-blur-sm
                "
              >
                <Image
                  src="/images/about/sell-with-proof.png"
                  alt="Seller confidently showing proof before payment"
                  width={1600}
                  height={1400}
                  className="w-full max-w-[640px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellWithProofSection;

/* ================= BENEFIT ================= */
function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="
          mt-1
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white/20
          backdrop-blur-sm
        "
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6L5 9L10 3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p className="text-sm leading-relaxed text-white/90 md:text-base">
        {text}
      </p>
    </div>
  );
}