import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-neutral-200">
                Trusted social-commerce verification
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-heading font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start Proving Products
              <br />
              Before Payment
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Create your first verification link and help buyers feel more
              confident before they pay.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-primary" />

                <p className="text-sm text-neutral-200 sm:text-base">
                  Prove the exact product
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-success" />

                <p className="text-sm text-neutral-200 sm:text-base">
                  Share verification links anywhere
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />

                <p className="text-sm text-neutral-200 sm:text-base">
                  Help buyers feel more confident
                </p>
              </div>
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
                    h-12
                    rounded-full
                    bg-white
                    px-8
                    text-sm
                    font-semibold
                    text-neutral-950
                    shadow-[0_10px_40px_rgba(255,255,255,0.12)]
                    hover:bg-neutral-100
                    sm:h-14
                    sm:px-10
                    sm:text-base
                  "
                >
                  Create Your First Verification →
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-brand-primary/20 to-brand-success/10 blur-3xl" />

            {/* Image container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                backdrop-blur-sm
              "
            >
              <Image
                src="/images/home/final-cta-proof.png"
                alt="Seller proving the exact product before payment"
                width={1400}
                height={1200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}