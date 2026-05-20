import Image from "next/image";

export default function VisualVerificationWithHowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 text-neutral-900 md:py-20 lg:py-24">
        {/* TOP INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              How Visibuy Works
            </span>
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-neutral-900
              md:text-5xl
            "
          >
            Proving the exact
            <br />
            item is simple.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-600
              md:text-lg
            "
          >
            Record the product, share your verification link, and let buyers
            view proof before payment.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-16 space-y-20">
          {/* ================= STEP 1 ================= */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-primary">
                  Step 1
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-heading
                  font-bold
                  leading-tight
                  tracking-tight
                  text-neutral-900
                  md:text-4xl
                "
              >
                Record the
                <br />
                exact item.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Use your phone to record a short video or take photos of the
                exact product you’re selling before payment.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Live camera recording flow
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-success" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Show the real product clearly
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Capture proof before payment
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-black/5
                bg-white
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/images/about/how-it-works-step-1.png"
                alt="Seller recording the exact item with live camera proof"
                width={1600}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* ================= STEP 2 ================= */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* IMAGE */}
            <div
              className="
                order-2
                overflow-hidden
                rounded-[32px]
                border
                border-black/5
                bg-white
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                lg:order-1
              "
            >
              <Image
                src="/images/about/how-it-works-step-2.png"
                alt="Seller sharing Visibuy verification link"
                width={1600}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-success">
                  Step 2
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-heading
                  font-bold
                  leading-tight
                  tracking-tight
                  text-neutral-900
                  md:text-4xl
                "
              >
                Share your
                <br />
                verification link.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Every proof gets its own Visibuy link that you can instantly
                share on WhatsApp, Instagram, Jiji, or anywhere buyers already
                shop.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    One proof, one shareable link
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-success" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Works across social commerce platforms
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Simple for buyers to open and view
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= STEP 3 ================= */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-primary">
                  Step 3
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-heading
                  font-bold
                  leading-tight
                  tracking-tight
                  text-neutral-900
                  md:text-4xl
                "
              >
                Buyers view proof
                <br />
                before payment.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Buyers can watch the proof, inspect the exact product, and feel
                more confident about what they’re paying for.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    See the exact item clearly
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-success" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Reduce hesitation before payment
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <p className="text-sm text-neutral-700 md:text-base">
                    Help conversations move faster
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-black/5
                bg-white
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/images/about/how-it-works-step-3.png"
                alt="Buyer viewing product proof before payment"
                width={1600}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}