import React from "react";
import Image from "next/image";

export default function BuyerSellerSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-xl text-center md:max-w-2xl">
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
            Built For Real Sellers and Buyers
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            A platform designed about honesty.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* ================= FOR SELLERS ================= */}
          <div className="rounded-xl bg-blue-50 p-6 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                <Image
                  src="/images/about/blue-profile.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                For Sellers
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <Check />
                </span>
                Closes sales faster
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <Check />
                </span>
                Reduce COD losses
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <Check />
                </span>
                Build visible reputation buyers trust
              </li>
            </ul>
          </div>

          {/* ================= FOR BUYERS ================= */}
          <div className="rounded-xl bg-green-50 p-6 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600">
                <Image
                  src="/images/about/green-bag.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                For Buyers
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600">
                  <Check />
                </span>
                See the real product before buying
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600">
                  <Check />
                </span>
                Buy with more confidence
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600">
                  <Check />
                </span>
                Avoid scams and fake listings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
