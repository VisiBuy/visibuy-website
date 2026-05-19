import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function IntegrationsAndPricing() {
  return (
    <section className="bg-neutral-200 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Platforms Section */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-center">
          <h2 className="text-3xl font-heading font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Works Where Buyers
            <br />
            Already Shop
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-neutral-600 sm:text-lg">
            Share your verification link across WhatsApp, Instagram, and Jiji —
            wherever your buyers already chat and buy.
          </p>

          {/* Platform Logos */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14">
            {/* WhatsApp */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Image
                  src="/images/shared/whatsapp.png"
                  alt="WhatsApp"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <span className="text-sm font-medium text-neutral-700">
                WhatsApp
              </span>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Image
                  src="/images/shared/instagram.png"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <span className="text-sm font-medium text-neutral-700">
                Instagram
              </span>
            </div>

            {/* Jiji */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Image
                  src="/images/shared/jiji.png"
                  alt="Jiji"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <span className="text-sm font-medium text-neutral-700">
                Jiji
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
            Simple Credit Pricing
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-neutral-600 sm:text-base md:text-lg">
            Pay only for the verification links you create. No subscriptions. No
            hidden fees.
          </p>

          {/* Pricing Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <CardContent className="p-6 text-left">
                <div className="mb-5">
                  <span className="inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                    Starter Pack
                  </span>
                </div>

                <h4 className="text-4xl font-bold text-neutral-900">
                  ₦5,000
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Great for sellers creating their first product proofs.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-neutral-800">
                    What you get:
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>

                    <span className="text-sm text-neutral-700">
                      10 verification credits
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="rounded-[28px] border border-brand-primary bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">
              {/* Badge */}
              <div className="absolute -top-3 right-5">
                <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-sm">
                  Most Popular
                </span>
              </div>

              <CardContent className="p-6 text-left">
                <div className="mb-5">
                  <span className="inline-flex rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white">
                    Growth Pack
                  </span>
                </div>

                <h4 className="text-4xl font-bold text-neutral-900">
                  ₦15,000
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Perfect for sellers consistently proving products before
                  payment.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-neutral-800">
                    What you get:
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>

                    <span className="text-sm text-neutral-700">
                      30 verification credits
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <CardContent className="p-6 text-left">
                <div className="mb-5">
                  <span className="inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                    Pro Pack
                  </span>
                </div>

                <h4 className="text-4xl font-bold text-neutral-900">
                  ₦25,000
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Built for active sellers handling larger buyer conversations.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-neutral-800">
                    What you get:
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>

                    <span className="text-sm text-neutral-700">
                      50 verification credits
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Note */}
          <div className="mt-8">
            <div className="inline-flex rounded-full bg-orange-50 px-5 py-3">
              <p className="text-sm font-semibold text-orange-700">
                1 credit = ₦500 • Each verification link costs 3 credits
                (₦1,500)
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="px-8 text-base font-semibold shadow-lg"
              >
                Start Proving Products →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}