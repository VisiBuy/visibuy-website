import Image from "next/image";
import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="bg-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Text content */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Buyer Don't Trust Words,
            <br />
            <span className="text-brand-primary">Show Them Proof</span>
          </h1>

          <p className="mt-4 text-sm text-neutral-600 max-w-xl mx-auto sm:text-base px-2">
            Visibuy helps you close more sales by letting buyers see real proof
            of your product before they pay — all through one simple link.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center md:gap-6 px-4 md:px-0">
            <Button className="w-full md:w-auto px-8 py-6 text-base font-medium">
              Create Your First Verification →
            </Button>
            <Button
              variant="secondary"
              className="w-full md:w-auto px-8 py-6 text-base font-medium"
            >
              See How Visibuy Works
            </Button>
          </div>
        </div>

        {/* Images */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:justify-center lg:gap-8">
          {/* iPhone container */}
          <div className="flex w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[422px] aspect-[422/400] items-center justify-center rounded-card bg-neutral-200">
            <Image
              src="/images/home/iPhone-12-Mini.png"
              alt="Visibuy mobile verification flow"
              width={193}
              height={391}
              className="h-auto w-auto max-h-full max-w-[70%] rounded-card object-contain"
              priority
            />
          </div>

          {/* Product image container */}
          <div className="flex w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[422px] aspect-[422/400] items-center justify-center rounded-card overflow-hidden">
            <Image
              src="/images/home/Product-hero.png"
              alt="Product thumbnail with Visibuy verified badge"
              width={422}
              height={400}
              className="h-full w-full rounded-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}