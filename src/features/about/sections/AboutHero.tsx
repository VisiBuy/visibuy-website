import Image from "next/image";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-100 py-14 sm:py-20 lg:py-28">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              Why Visibuy Exists
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6
              font-heading
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-neutral-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Buyers hesitate when
            <br />
            they can’t verify the
            <br />
            exact item.
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-relaxed
              text-neutral-600
              sm:text-lg
            "
          >
            Visibuy was built to help sellers prove the exact product before
            payment, so buyers can feel more confident about what they’re paying
            for.
          </p>

          {/* CTA */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:justify-center
            "
          >
            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-6
                  text-base
                  font-semibold
                "
              >
                Create Your First Verification →
              </Button>
            </Link>

            <Link
              href="/how-its-works"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-6
                  text-base
                  font-semibold
                "
              >
                See How Visibuy Works
              </Button>
            </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="mt-14 flex justify-center sm:mt-16 lg:mt-20">
          <div
            className="
              relative
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[32px]
              border
              border-black/5
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src="/images/about/about-hero-proof.png"
              alt="Seller proving the exact product before payment"
              width={1600}
              height={1100}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}