import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="bg-neutral-100 overflow-hidden">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
          py-12
          sm:py-16
          md:px-6
          md:py-20
          lg:px-8
          lg:py-24
        "
      >
        {/* TEXT */}
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="
              font-heading
              text-3xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-neutral-900
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Prove the{" "}
            <span className="text-brand-primary">
              Exact Item
            </span>{" "}
            Before Payment
          </h1>

          <p
            className="
              mt-5
              mx-auto
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-600
              sm:text-lg
            "
          >
            Help buyers trust what they’re paying for by
            sharing visual proof of the exact product
            through one simple verification link.
          </p>

          {/* CTA */}
          {/* CTA */}
<div
  className="
    mt-8
    flex
    flex-col
    gap-3
    md:flex-row
    md:justify-center
    md:gap-4
  "
>
  <div className="w-full sm:w-auto">
    <Link
      href="https://app.visibuy.com.ng/signup"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <Button
        className="
          w-full
          px-6
          py-5
          text-base
          font-medium
          
        "
      >
        Create Your First Verification →
      </Button>
    </Link>
  </div>

  <div className="w-full sm:w-auto">
    <Link
      href="/how-its-works"
      className="block w-full"
    >
      <Button
        variant="secondary"
        className="
          w-full
          px-6
          py-5
          text-base
          font-medium
        "
      >
        See How It Works
      </Button>
    </Link>
  </div>
</div>
        </div>

        {/* HERO MEDIA */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-[980px]
              overflow-hidden
              rounded-[32px]
              border
              border-black/5
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src="/images/home/hero-proof-illustration.png"
              alt="Seller recording proof of the exact item before payment"
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}