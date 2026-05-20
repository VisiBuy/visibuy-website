import React from "react";
import Image from "next/image";

export default function BuyerSellerSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              Built for Social Commerce
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
              md:text-4xl
            "
          >
            Better for sellers.
            <br />
            Clearer for buyers.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
            Visibuy helps sellers prove products more clearly and helps buyers
            feel more confident before payment.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* ================= FOR SELLERS ================= */}
          <div
            className="
              rounded-[32px]
              border
              border-blue-100
              bg-blue-50/70
              p-7
              shadow-[0_12px_40px_rgba(0,0,0,0.04)]
              backdrop-blur-sm
              md:p-8
            "
          >
            {/* HEADER */}
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-brand-primary
                  shadow-sm
                "
              >
                <Image
                  src="/images/about/blue-profile.png"
                  alt="Seller icon"
                  width={22}
                  height={22}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  For Sellers
                </h3>

                <p className="mt-1 text-sm text-neutral-600">
                  Make buyers feel more confident before payment.
                </p>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="space-y-4">
              <Benefit
                color="bg-brand-primary"
                text="Prove the exact product before payment"
              />

              <Benefit
                color="bg-brand-success"
                text="Reduce buyer hesitation during conversations"
              />

              <Benefit
                color="bg-orange-400"
                text="Help buyers decide faster with visual proof"
              />
            </div>
          </div>

          {/* ================= FOR BUYERS ================= */}
          <div
            className="
              rounded-[32px]
              border
              border-green-100
              bg-green-50/70
              p-7
              shadow-[0_12px_40px_rgba(0,0,0,0.04)]
              backdrop-blur-sm
              md:p-8
            "
          >
            {/* HEADER */}
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-brand-success
                  shadow-sm
                "
              >
                <Image
                  src="/images/about/green-bag.png"
                  alt="Buyer icon"
                  width={22}
                  height={22}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  For Buyers
                </h3>

                <p className="mt-1 text-sm text-neutral-600">
                  Understand what you’re paying for more clearly.
                </p>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="space-y-4">
              <Benefit
                color="bg-brand-success"
                text="View the real product before payment"
              />

              <Benefit
                color="bg-brand-primary"
                text="Feel more confident during online purchases"
              />

              <Benefit
                color="bg-orange-400"
                text="Inspect proof before making a decision"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BENEFIT ================= */
function Benefit({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
      <span
        className={`
          mt-0.5
          inline-flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          ${color}
        `}
      >
        <Check />
      </span>

      <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
        {text}
      </p>
    </div>
  );
}

/* ================= CHECK ICON ================= */
function Check() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}