
import {
  CheckCircle2,
  Copy,
  Lock,
  Upload,
  Video,
  ArrowRight,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="bg-neutral-200 py-12 sm:py-16 md:py-20 lg:py-32 lg:px-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-tight text-neutral-900 px-4">
            Proof, Payment, And{" "}
            <span className="text-brand-primary">Peace Of Mind</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm md:text-base text-neutral-600">
            in Three Steps.
          </p>
        </div>

        {/* DESKTOP LAYOUT (lg and up) */}
        <div className="hidden lg:block">
          <div className="relative space-y-20">
            {/* Centered gradient line - full height */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-brand-primary via-[#FF6B35] to-brand-success" />

            {/* Step 1 */}
            <div className="relative grid grid-cols-2 gap-12 items-center">
              {/* Left side  */}
              <div className="flex flex-col items-start pr-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-2xl font-bold text-white shadow-lg mb-4">
                  1
                </div>
                <div className="w-full">
                  <div className="ml-auto  lg:max-w-[75%] text-right space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-neutral-900">
                      Upload your product photo or video
                    </h3>
                    <p className="text-base leading-relaxed text-black">
                      Take a video showing your actual product from multiple
                      angles, or upload clear photos. Our AI automatically adds
                      verification stamps with timestamp, date, and your unique
                      seller ID.
                    </p>
                  </div>
                  {/* Features  */}
                  <div className="mt-5 flex flex-col gap-2 text-sm float-right">
                    <div className="flex items-center gap-2 text-black ">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                        <Video className="h-3 w-3 text-white" />
                      </div>
                      <span>Video and photos accepted</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Auto-timestamped</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Seller ID embedded</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[467px]">
                <div className="rounded-3xl bg-white border-2 border-blue-400/80 shadow-[0_4px_20px_rgba(59,130,246,0.25)] p-6">
                  <div className="w-full aspect-[419/301] bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Image
                      src="/images/home/Mini.jpg"
                      alt="Product"
                      width={125}
                      height={249}
                      className="h-auto w-auto max-h-[85%] object-contain"
                      priority
                    />
                  </div>
                  <div className="rounded-xl bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                        <Upload className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-neutral-900 text-sm">
                          Uploading...
                        </p>
                        <p className="text-xs text-neutral-500 truncate">
                          Product.video.mp4
                        </p>
                      </div>
                      <span className="text-lg font-bold text-brand-primary shrink-0">
                        80%
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                      <div
                        className="h-full bg-brand-primary rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative grid grid-cols-2 gap-12 items-center">
              <div className="w-full max-w-[467px] ml-auto">
                <div className="rounded-3xl bg-white border-2 border-orange-400 shadow-[0_10px_30px_rgba(251,146,60,0.25)] p-6">
                  <div className="rounded-2xl bg-orange-50 p-5 mb-6">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <p className="text-xs font-normal uppercase tracking-wide text-neutral-600">
                        Your Verification Link
                      </p>
                      <Button
                        size="sm"
                        className="h-8 text-orange-500 flex items-center gap-2 px-3 border-transparent bg-orange-50 text-sm"
                      >
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                    <input
                      type="text"
                      readOnly
                      value="VisiBuy.com/ver/fyghr145dbtr58"
                      className="w-full px-4 py-3 bg-white border-2 border-orange-400 rounded-lg text-xs font-medium text-neutral-900 focus:outline-none cursor-default"
                    />
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full h-11 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-medium">
                      <img
                        src="/images/shared/whatsapp.png"
                        alt="WhatsApp"
                        className="h-5 w-5 mr-2"
                      />
                      Share on WhatsApp
                    </Button>
                    <Button className="w-full h-11 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:opacity-90 text-white text-sm font-medium">
                      <img
                        src="/images/shared/instagram.png"
                        alt="Instagram"
                        className="h-5 w-5 mr-2"
                      />
                      Share on Instagram
                    </Button>
                  </div>
                </div>
              </div>
              {/* Right side */}
              <div className="flex flex-col items-start text-left pl-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B35] text-2xl font-bold text-white shadow-lg mb-4 ">
                  2
                </div>
                <div className="w-full">
                  <div className="ml-auto lg:max-w-[70%] space-y-3 text-right">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      Share your VisiBuy link with your buyer
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-black">
                      Get your unique verification link instantly. Copy and
                      share it anywhere — WhatsApp chat, Instagram DM, Jiji
                      listing, or Facebook Marketplace.
                    </p>
                  </div>
                  {/* Features  */}
                  <div className="mt-5 flex flex-col gap-2 text-sm float-right">
                    <div className="flex items-center gap-2 text-black">
                      <img
                        src="/images/shared/whatsapp.png"
                        alt="WhatsApp"
                        className="h-5 w-5 shrink-0"
                      />
                      <span>Share on WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <img
                        src="/images/shared/instagram.png"
                        alt="Instagram"
                        className="h-5 w-5 shrink-0"
                      />
                      <span>Share on Instagram</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <img
                        src="/images/shared/instagram.png"
                        alt="Marketplace"
                        className="h-5 w-5 shrink-0"
                      />
                      <span>Post on market places</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start pr-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-success text-2xl font-bold text-white shadow-lg mb-4">
                  3
                </div>
                <div className="w-full">
                  <div className="ml-auto  lg:max-w-[60%] text-right space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-neutral-900">
                      Get paid safely once delivery is confirmed
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-black">
                      Buyer sees your verified proof, pays through VisiBuy's
                      secure payment system, and their money is held safely.
                    </p>
                  </div>
                  {/* Features  */}
                  <div className="mt-5 flex flex-col gap-2 text-sm float-right">
                    <div className="flex items-center gap-2 text-black">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-success">
                        <Lock className="h-3 w-3 text-white" />
                      </div>
                      <span>Escrow protection</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-success">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Automatic payout</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-success">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>100% fraud protection</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[467px]">
                <div className="rounded-3xl bg-white border-2 border-brand-success shadow-[0_8px_25px_rgba(40,167,69,0.15)] p-6">
                  <div className="bg-green-50 px-4 py-4 rounded-2xl mb-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-success">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-900">
                          Payment Received
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Held in escrow
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-brand-success shrink-0">
                        ₦97,000
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-neutral-800">
                          Product shipped
                        </span>
                        <CheckCircle2 className="h-5 w-5 text-brand-success shrink-0" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-neutral-800">
                          Buyer confirmed
                        </span>
                        <CheckCircle2 className="h-5 w-5 text-brand-success shrink-0" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-neutral-800">
                          Payment released
                        </span>
                        <CheckCircle2 className="h-5 w-5 text-brand-success shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-brand-success px-4 py-4 text-white rounded-2xl">
                    <p className="text-xs font-medium opacity-90 mb-2">
                      Money sent to your account
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold">₦97,000</p>
                      <Button
                        size="sm"
                        className="bg-white hover:bg-white/95 text-brand-success font-semibold px-5 h-9 rounded-full"
                      >
                        Money sent
                        <CheckCircle2 className="h-4 w-4 ml-2 text-brand-success" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABLET  */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            {/* Numbers row with line */}
            <div className="relative flex items-center justify-between mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
                <div className="h-full w-full bg-gradient-to-r from-brand-primary via-orange-500 to-brand-success rounded-full" />
              </div>

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white shadow-md border-4 border-white z-10">
                1
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B35] text-xl font-bold text-white shadow-md border-4 border-white z-10">
                2
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-success text-xl font-bold text-white shadow-md border-4 border-white z-10">
                3
              </div>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  icon: <Upload className="h-6 w-6 text-brand-primary" />,
                  iconBg: "bg-blue-100",
                  title: "Upload Your Product",
                  desc: "Upload your product photos and video. show every angle, details and prove authenticity",
                },
                {
                  icon: <Share2 className="h-6 w-6 text-orange-600" />,
                  iconBg: "bg-orange-100",
                  title: "Share Your Link",
                  desc: "Share your VisiBuy link to your buyers on WhatsApp, Instagram, Jiji, or anywhere else.",
                },
                {
                  icon: <Lock className="h-6 w-6 text-brand-success" />,
                  iconBg: "bg-green-100",
                  title: "Get Paid Safely",
                  desc: "Get paid only once your buyer confirms delivery. Money is protected until both parties are satisfied.",
                },
              ].map((step, idx) => (
                <Card
                  key={idx}
                  className="bg-white border border-neutral-200 shadow-sm"
                >
                  <CardContent className="p-5">
                    <div
                      className={`flex items-center justify-center mb-3 h-12 w-12 mx-auto rounded-full ${step.iconBg}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-center text-base font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-center text-xs text-neutral-600">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE (below md) - Numbers ON gradient line */}
        <div className="md:hidden">
          <div className="relative space-y-8">
            {/* GRADIENT vertical line - full height */}
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-[#FF6B35] to-brand-success" />

            {[
              {
                num: 1,
                bg: "bg-brand-primary",
                icon: (
                  <Upload className="h-5 w-5 sm:h-6 sm:w-6 text-brand-primary" />
                ),
                iconBg: "bg-blue-100",
                title: "Upload Your Product.",
                desc: "Upload your product photos and video. Show every angle, details and prove authenticity",
                visual: (
                  <>
                    <div className="bg-blue-50 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-20 h-28 sm:w-24 sm:h-32 bg-white rounded-lg border-2 border-neutral-300 flex items-center justify-center shadow-sm">
                          <Image
                            src="/images/home/Mini.jpg"
                            alt="Phone 1"
                            width={60}
                            height={100}
                            className="object-contain"
                          />
                        </div>
                        <div className="w-20 h-28 sm:w-24 sm:h-32 bg-white rounded-lg border-2 border-neutral-300 flex items-center justify-center shadow-sm">
                          <Image
                            src="/images/home/Mini.jpg"
                            alt="Phone 2"
                            width={60}
                            height={100}
                            className="object-contain"
                          />
                        </div>
                        <div className="w-14 h-14 border-2 border-dashed border-blue-400 rounded-lg flex items-center justify-center">
                          <span className="text-3xl text-blue-400 font-light">
                            +
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm flex justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-neutral-700 shrink-0" />
                          <span className="text-neutral-700">
                            Up to 5 photos
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-neutral-700 shrink-0 " />
                          <span className="text-neutral-700">
                            1 video (60s)
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                num: 2,
                bg: "bg-[#FF6B35]",
                icon: (
                  <Share2 className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                ),
                iconBg: "bg-orange-100",
                title: "Share Your Link.",
                desc: "Share your VisiBuy link to your buyers on WhatsApp, Instagram, Jiji, or anywhere else.",
                visual: (
                  <>
                    <div className="bg-orange-100 rounded-xl p-3 mb-4 ">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] sm:text-xs text-neutral-600 mb-2">
                          Your Verification Link
                        </p>
                        <div className="flex">
                          <Copy className="h-4 w-4 text-orange-500 shrink-0" />
                          <p className="text-xs text-orange-500 font-medium ml-1">
                            Copy
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2 bg-neutral-100 border border-orange-300 rounded-lg px-3 py-2">
                        <span className="text-xs font-medium text-neutral-900 truncate ">
                          Visibuy.com/verify...
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 sm:gap-6">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-neutral-200 flex items-center justify-center">
                          <img
                            src="/images/shared/whatsapp.png"
                            alt="WhatsApp"
                            className="w-5 h-5 sm:w-7 sm:h-7 "
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-neutral-600">
                          WhatsApp
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-neutral-200 flex items-center justify-center">
                          <img
                            src="/images/shared/instagram.png"
                            alt="Instagram"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-neutral-600">
                          Instagram
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-neutral-200 flex items-center justify-center">
                          <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-neutral-600">
                          More
                        </span>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                num: 3,
                bg: "bg-brand-success",
                icon: (
                  <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-brand-success" />
                ),
                iconBg: "bg-green-100",
                title: "Get Paid. Safely.",
                desc: "Get paid only once your buyer confirms delivery. Money is protected until both parties are satisfied.",
                visual: (
                  <>
                    <div className="bg-green-50 p-4 rounded-md">
                      <div className="bg-white rounded-xl p-3 mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-200 ">
                            <svg
                              className="h-3 w-3 text-green-700 p-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-neutral-900">
                            Buyer confirms
                          </span>
                          <CheckCircle2 className="h-4 w-4 text-brand-success ml-auto" />
                        </div>
                        <p className="text-[10px] text-neutral-600">
                          Product received
                        </p>
                      </div>
                      <div className="bg-brand-success rounded-xl p-3 text-white">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <p className="text-xs font-bold">
                              Payment Received
                            </p>
                            <p className="text-[10px] opacity-90">
                              Transferred to account
                            </p>
                          </div>
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold">
                          ₦97,000
                        </p>
                      </div>
                    </div>
                  </>
                ),
              },
            ].map((step) => (
              <div key={step.num} className="relative pl-16 sm:pl-20">
                <div
                  className={`absolute left-0 top-5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full ${step.bg} text-xl sm:text-2xl font-bold text-white shadow-md`}
                >
                  {step.num}
                </div>
                <Card className="bg-white border border-neutral-200 shadow-sm">
                  <CardContent className="p-4 sm:p-5">
                    <div
                      className={`flex items-center justify-center mb-3 h-10 w-10 sm:h-12 sm:w-12 mx-auto rounded-full ${step.iconBg}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-center text-base sm:text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-center text-xs sm:text-sm text-neutral-600 mb-4">
                      {step.desc}
                    </p>
                    {step.visual}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 px-4">
          <div className="flex justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg max-w-md sm:max-w-none"
            >
              Start Free - Create Your First Verification
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
