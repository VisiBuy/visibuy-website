
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function IntegrationsAndPricing() {
  return (
    <section className="bg-neutral-200 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Integrations Section */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-center">
          <h2 className="text-2xl font-heading font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Works Where You Already Sell
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base md:text-lg lg:text-xl px-4">
            VisiBuy Fits Right Into Your Sales Flow — No Extra Apps Or Complex
            Setup.
          </p>

          {/* Platform Logos Grid */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* WhatsApp */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center transition-transform hover:scale-110">
              <Image
                src="/images/shared/whatsapp.png"
                alt="WhatsApp"
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
            </div>

            {/* Shopify */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center transition-transform hover:scale-110">
              <Image
                src="/images/shared/shopify.png"
                alt="Shopify"
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
            </div>

            {/* Jiji */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center transition-transform hover:scale-110">
              <Image
                src="/images/shared/jiji.png"
                alt="Jiji"
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
            </div>

            {/* WooCommerce */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center transition-transform hover:scale-110">
              <Image
                src="/images/shared/woocommerce.png"
                alt="WooCommerce"
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
            </div>

            {/* Instagram */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center transition-transform hover:scale-110">
              <Image
                src="/images/shared/instagram.png"
                alt="Instagram"
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center">
          <h3 className="text-xl font-heading font-bold text-neutral-900 sm:text-2xl md:text-3xl px-4">
            Simple Credit Billing, Pay Only For What You Use
          </h3>
          <p className="mt-3 text-xs text-neutral-600 sm:text-sm md:text-base px-4 max-w-3xl mx-auto">
            Each verification link costs 3 credits (₦1,500). Load credits
            anytime — no subscriptions or hidden fees.
          </p>

          {/* Pricing Cards */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {/* Starter Pack */}
            <Card className="relative bg-white border-2 border-transparent hover:border-brand-primary shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-6 sm:p-6 text-left">
                {/* Pack Label */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-neutral-100 px-3 py-3 text-xs font-semibold text-neutral-700 sm:text-sm">
                    Starter Pack
                  </span>
                </div>

                {/* Price */}
                <h4 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
                  ₦5,000
                </h4>
                <p className="mt-3 text-xs text-neutral-500 sm:text-sm items-center mb-4 ">
                  Perfect for new sellers testing VisiBuy.
                </p>

                {/* What you get */}
                <div className="text-left">
                  <p className="text-xs font-semibold text-neutral-700 sm:text-sm mb-3">
                    What you get:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs text-neutral-700 sm:text-sm">
                      10 Credits for verification
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Pack - Most Popular */}
            <Card className="relative bg-white border-2 border-transparent hover:border-brand-primary shadow-lg hover:shadow-xl transition-all cursor-pointer">
              {/* Most Popular Badge - Top Right */}
              <div className="absolute -top-3 -right-3 sm:-top-3 sm:-right-3 ">
                <span className="inline-block rounded-full bg-orange-500 px-3 py-2 text-xs font-bold text-white shadow-sm sm:px-4 sm:text-sm">
                  Most Popular
                </span>
              </div>

              <CardContent className="p-5 sm:p-6 text-left">
                {/* Pack Label - Top Left */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-blue-950 px-3 py-3 text-xs font-semibold text-white sm:text-sm">
                    Pro Pack
                  </span>
                </div>

                {/* Price */}
                <h4 className="text-3xl font-bold  sm:text-4xl">₦25,000</h4>
                <p className="mt-2 text-xs text-neutral-500 sm:text-sm mb-4">
                  Perfect for active sellers building trust.
                </p>

                {/* What you get */}
                <div className="text-left">
                  <p className="text-xs font-semibold text-neutral-700 sm:text-sm  mt-3 mb-3">
                    What you get:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs text-neutral-700 sm:text-sm">
                      50 Credits for verification
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Pack */}
            <Card className="relative bg-white border-2 border-transparent hover:border-brand-primary shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <CardContent className="p-5 sm:p-6 text-left">
                {/* Pack Label - Top Left */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-neutral-100 px-3 py-3 text-xs font-semibold text-neutral-700 sm:text-sm">
                    Growth Pack
                  </span>
                </div>

                {/* Price */}
                <h4 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
                  ₦15,000
                </h4>
                <p className="mt-2 text-xs text-neutral-500 sm:text-sm mb-4 ">
                  Perfect for consistent sellers.
                </p>

                {/* What you get */}
                <div className="text-left">
                  <p className="text-xs font-semibold text-neutral-700 sm:text-sm mt-3 mb-3">
                    What you get:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs text-neutral-700 sm:text-sm ">
                      30 Credits for verification
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Note & CTA */}
          <div className="mt-6 sm:mt-8 md:mt-10 text-center px-4 space-y-4 sm:space-y-5">
            <div className="inline-block rounded-full bg-orange-50 px-4 py-2 sm:px-5 sm:py-2.5">
              <p className="text-xs text-orange-700 font-semibold sm:text-sm">
                1 credit = ₦500 • Each verification link cost 3 credits (₦1,500)
              </p>
            </div>
            <div>
              <Button
                size="lg"
                className="mt-5 h-10 px-6 text-xs font-semibold shadow-lg sm:mt-6 sm:h-11 sm:px-8 sm:text-sm md:h-12 md:px-10 md:text-base"
              >
                Load Credit And Start Verifying →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
