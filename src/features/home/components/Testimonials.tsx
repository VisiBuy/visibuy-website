import { Star, MapPin, Crown } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function Testimonials() {
  return (
    <section className="bg-neutral-200 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl lg:text-4xl">
            Real Sellers.{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-success bg-clip-text text-transparent font-bold">
              Real Trust.
            </span>{" "}
            Real Sales
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 - Tunde */}
          <Card className="overflow-hidden border-none bg-neutral-100 shadow-lg">
            <CardContent className="p-6">
              {/* Header with Avatar and Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-neutral-200">
                    <Image
                      src="/images/home/tunde.jpg"
                      alt="Tunde"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-neutral-900 text-base">
                      Tunde
                    </h3>
                    <p className="text-xs text-neutral-600 sm:text-sm">
                      Sneakers Seller
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500 sm:text-sm shrink-0 mt-6">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Lagos State</span>
                </div>
              </div>

              {/* Badge */}
              <div className="rounded-lg my-4 pb-3 px-3 bg-slate-100">
                <div className="mt-4 inline-flex items-center gap-2  px-1 py-1.5">
                  <Crown className="h-5 w-5 fill-white bg-orange-500 text-white rounded-full" />
                  <span className="text-xs font-semibold  sm:text-sm">
                    Gold Verified Seller
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-xs leading-relaxed text-neutral-700 ">
                  "Before VisiBuy, I Kept Explaining To Buyers That My Sneakers
                  Were Original. Now I Just Send My Verification Link — No Long
                  Talk."
                </blockquote>
              </div>

              {/* Stats */}
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
                <div className="flex-1 text-center">
                  <p className="text-lg font-bold text-green-600 sm:text-xl">
                    156
                  </p>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">
                    Verified Sales
                  </p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div className="flex-1 text-center">
                  <p className="text-lg font-bold text-brand-primary sm:text-xl">
                    98%
                  </p>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">
                    Satisfaction Rate
                  </p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                    <p className="text-lg font-bold text-orange-600 sm:text-xl">
                      4.9
                    </p>
                    <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400 sm:h-4 sm:w-4" />
                  </div>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">
                    Avg. Rating
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 - Amara */}
          <Card className="overflow-hidden border-none bg-white shadow-lg">
            <CardContent className="p-6">
              {/* Header with Avatar and Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-neutral-200">
                    <Image
                      src="/images/home/amara.jpg"
                      alt="Amara"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-neutral-900 text-base">
                      Amara
                    </h3>
                    <p className="text-xs text-neutral-600 sm:text-sm">
                      Fashion Vendor
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500 sm:text-sm shrink-0 mt-6">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Abuja, Nigeria</span>
                </div>
              </div>

              {/* Badge */}
              <div className="rounded-lg my-4 pb-3 bg-slate-100 px-3">
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1">
                  <Crown className="h-5 w-5 fill-white bg-orange-500 text-white rounded-full " />
                  <span className="text-xs font-semibold sm:text-sm">
                    Silver Verified Seller
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-xs leading-relaxed text-neutral-700">
                  "Sending Proof Upfront Helped Me Avoid Timewasters. Buyers Pay
                  Faster Now."
                </blockquote>
              </div>

              {/* Stats */}
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
                <div className="flex-1 text-center">
                  <p className="text-lg font-bold text-green-600 sm:text-xl">
                    87
                  </p>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">
                    Verified Sales
                  </p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div className="flex-1 text-center">
                  <p className="text-lg font-bold text-brand-primary sm:text-xl">
                    99%
                  </p>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">
                    Satisfaction Rate
                  </p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                    <p className="text-lg font-bold text-orange-600 sm:text-xl">
                      4.9
                    </p>
                    <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400 sm:h-4 sm:w-4" />
                  </div>
                  <p className="text-[10px] text-neutral-600 sm:text-xs">
                    Avg. Rating
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Banner */}
        <div className="mt-12 overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-success to-brand-primary shadow-xl">
          <div className="px-6 py-8 text-center sm:px-8 sm:py-10 md:py-12 lg:px-16">
            <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Join 10,000+ Verified Sellers
            </h3>
            <p className="mt-2 text-sm text-white/90 sm:text-base md:text-lg">
              Start building trust and closing more sales today
            </p>

            <Link
  href="https://app.visibuy.com.ng/signup"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="mt-5 h-10 px-6 text-xs font-semibold text-brand-primary hover:bg-neutral-50 shadow-lg sm:mt-6 sm:h-11 sm:px-8 sm:text-sm bg-white"
  >
    Create Your Free Account →
  </Button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
