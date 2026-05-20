import {
  CheckCircle2,
  Copy,
  Video,
  ArrowRight,
  MoreHorizontal,
  Share2,
  Eye,
} from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export function HowItWorks() {
  return (
    <section className="bg-neutral-200 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-neutral-900">
            From Product Proof
            <br />
            To Buyer Confidence
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Prove the exact product, share your verification link, and help
            buyers feel more confident before payment.
          </p>
        </div>

        {/* DESKTOP + TABLET */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Gradient line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-orange-500 to-brand-success" />

            <div className="grid grid-cols-3 gap-6 relative">
              {/* STEP 1 */}
              <Card className="bg-white border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
                    1
                  </div>

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <Video className="h-7 w-7 text-brand-primary" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-neutral-900">
                    Record the Exact Item
                  </h3>

                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    Capture live proof of the actual product your buyer will
                    receive.
                  </p>

                  <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                    <Image
                      src="/images/home/how-step-1.png"
                      alt="Seller recording product proof"
                      width={900}
                      height={700}
                      className="w-full h-auto rounded-xl object-contain bg-white"
                    />
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                      <span>Prove the exact product</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                      <span>Capture clear live proof</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* STEP 2 */}
              <Card className="bg-white border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                    2
                  </div>

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <Share2 className="h-7 w-7 text-orange-500" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-neutral-900">
                    Share Your Verification Link
                  </h3>

                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    Send your verification link anywhere buyers already shop or
                    chat.
                  </p>

                  <div className="mt-6 rounded-2xl bg-orange-50 p-4">
                    <div className="rounded-xl bg-white border border-orange-200 px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="truncate text-sm font-medium text-neutral-800">
                          visibuy.com/verify/...
                        </span>

                        <div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
                          <Copy className="h-4 w-4" />
                          Copy
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                          <img
                            src="/images/shared/whatsapp.png"
                            alt="WhatsApp"
                            className="h-6 w-6"
                          />
                        </div>

                        <span className="text-xs text-neutral-600">
                          WhatsApp
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                          <img
                            src="/images/shared/instagram.png"
                            alt="Instagram"
                            className="h-6 w-6"
                          />
                        </div>

                        <span className="text-xs text-neutral-600">
                          Instagram
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                          <MoreHorizontal className="h-6 w-6 text-neutral-600" />
                        </div>

                        <span className="text-xs text-neutral-600">
                          More
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" />
                      <span>One simple verification link</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" />
                      <span>Works across social commerce</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* STEP 3 */}
              <Card className="bg-white border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-success text-xl font-bold text-white">
                    3
                  </div>

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Eye className="h-7 w-7 text-brand-success" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-neutral-900">
                    Buyer Verifies the Product
                  </h3>

                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    Buyers view proof of the exact item before payment and feel
                    more confident moving forward.
                  </p>

                  <div className="mt-6 rounded-2xl bg-green-50 p-4">
                    <Image
                      src="/images/home/how-step-3.png"
                      alt="Buyer viewing verification proof"
                      width={900}
                      height={700}
                      className="w-full h-auto rounded-xl object-contain bg-white"
                    />
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-success" />
                      <span>Reduce buyer hesitation</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-success" />
                      <span>Increase confidence before payment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="space-y-6 md:hidden">
          {[
            {
              num: 1,
              bg: "bg-brand-primary",
              icon: (
                <Video className="h-6 w-6 text-brand-primary" />
              ),
              iconBg: "bg-blue-100",
              title: "Record the Exact Item",
              desc: "Capture live proof of the actual product your buyer will receive.",
              image: "/images/home/how-step-1.png",
            },
            {
              num: 2,
              bg: "bg-orange-500",
              icon: (
                <Share2 className="h-6 w-6 text-orange-500" />
              ),
              iconBg: "bg-orange-100",
              title: "Share Your Verification Link",
              desc: "Send your verification link anywhere buyers already shop or chat.",
            },
            {
              num: 3,
              bg: "bg-brand-success",
              icon: (
                <Eye className="h-6 w-6 text-brand-success" />
              ),
              iconBg: "bg-green-100",
              title: "Buyer Verifies the Product",
              desc: "Buyers view proof of the exact item before payment and feel more confident moving forward.",
              image: "/images/home/how-step-3.png",
            },
          ].map((step) => (
            <Card
              key={step.num}
              className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <CardContent className="p-5">
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white ${step.bg}`}
                >
                  {step.num}
                </div>

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${step.iconBg}`}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-heading font-bold text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.desc}
                </p>

                <div className="mt-5">
                  {step.num === 2 ? (
                    <div className="rounded-2xl bg-orange-50 p-4">
                      <div className="rounded-xl bg-white border border-orange-200 px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="truncate text-sm font-medium text-neutral-800">
                            visibuy.com/verify/...
                          </span>

                          <div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
                            <Copy className="h-4 w-4" />
                            Copy
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-5">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                            <img
                              src="/images/shared/whatsapp.png"
                              alt="WhatsApp"
                              className="h-6 w-6"
                            />
                          </div>

                          <span className="text-xs text-neutral-600">
                            WhatsApp
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                            <img
                              src="/images/shared/instagram.png"
                              alt="Instagram"
                              className="h-6 w-6"
                            />
                          </div>

                          <span className="text-xs text-neutral-600">
                            Instagram
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                            <MoreHorizontal className="h-6 w-6 text-neutral-600" />
                          </div>

                          <span className="text-xs text-neutral-600">
                            More
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={step.image!}
                      alt={step.title}
                      width={900}
                      height={700}
                      className="w-full rounded-2xl object-contain bg-white"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="https://app.visibuy.com.ng/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="px-8 text-base font-semibold shadow-lg"
            >
              Create Your First Verification
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}