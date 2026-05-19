import { MapPin } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function Testimonials() {
  return (
    <section className="bg-neutral-200 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-heading font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Real Sellers.
            <br />
            Real Buyer Confidence.
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-neutral-600 sm:text-lg">
            Sellers use Visibuy to prove the exact product before payment and
            help buyers feel more confident moving forward.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Testimonial 1 */}
          <Card className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <CardContent className="p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src="/images/home/tunde.jpg"
                      alt="Tunde"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Tunde
                    </h3>

                    <p className="text-sm text-neutral-600">
                      Sneakers Seller
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <MapPin className="h-4 w-4" />
                  <span>Lagos</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 text-base leading-relaxed text-neutral-700">
                “Before Visibuy, buyers kept asking if the sneakers were the
                exact pair in the pictures. Now I just send my verification
                link.”
              </blockquote>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <CardContent className="p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src="/images/home/amara.jpg"
                      alt="Amara"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Amara
                    </h3>

                    <p className="text-sm text-neutral-600">
                      Fashion Seller
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <MapPin className="h-4 w-4" />
                  <span>Abuja</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 text-base leading-relaxed text-neutral-700">
                “Sending proof upfront helped buyers take my products more
                seriously. Conversations move faster now.”
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 overflow-hidden rounded-[32px] bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
          <div className="px-6 py-10 text-center sm:px-8 md:px-12 md:py-14">
            <h3 className="text-2xl font-heading font-bold text-white sm:text-3xl">
              Start Proving Your Products
              <br />
              Before Payment
            </h3>

            <p className="mt-4 mx-auto max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              Create your first verification link and help buyers feel more
              confident before they pay.
            </p>

            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="mt-7 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Create Your First Verification →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}