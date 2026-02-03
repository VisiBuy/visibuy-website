"use client";

import Link from "next/link";

export default function SimpleCreditBilling() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-black mb-2">
          Simple Credit Billing, Pay Only For What You Use
        </h2>
        <p className="text-base text-gray-500 font-semibold mb-16">
          Each verification link costs 3 credits (₦1,500). Load credits anytime —
          no subscriptions or hidden fees.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Starter Pack */}
          <div className="shadow-xl border border-gray-300 rounded-2xl px-8 py-10 text-center">
            <h3 className="text-3xl text-black font-semibold mb-1">
              Starter Pack
            </h3>
            <p className="text-2xl text-black font-semibold mb-1">₦5,000</p>
            <p className="text-sm text-gray-500 mb-8">
              Perfect for new sellers testing VisiBuy.
            </p>

            <ul className="space-y-3 text-sm text-left ml-3 mb-10">
              <li className="flex items-center gap-8">
                <span className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-black font-semibold">
                  10 credits for verification
                </span>
              </li>
            </ul>

            <Link
              href="https://app.visibuy.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-3 rounded-full bg-[#EFF6FF] text-black font-medium text-sm">
                Choose Starter Pack
              </button>
            </Link>
          </div>

          {/* Pro Pack (Highlighted) */}
          <div className="relative rounded-2xl px-8 py-12 text-center bg-gradient-to-b from-blue-600 to-green-500 text-white shadow-xl">
            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-semibold px-10 py-2 rounded-full">
              Most Popular
            </span>

            <h3 className="text-2xl font-semibold mb-2 tracking-normal">
              Pro Pack
            </h3>
            <p className="text-2xl font-semibold mb-4">₦25,000</p>
            <p className="text-sm text-white/80 mb-8">
              Perfect for active sellers building trust.
            </p>

            <ul className="space-y-3 text-white text-sm text-left mb-10">
              <li className="flex items-center gap-8">
                <span className="w-4 h-4 rounded-full bg-white" />
                <span>50 credits for verification</span>
              </li>
            </ul>

            <Link
              href="https://app.visibuy.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-3 rounded-full bg-[#FCFCFC] font-medium text-blue-600 text-sm">
                Choose Pro Pack
              </button>
            </Link>
          </div>

          {/* Growth Pack */}
          <div className="border border-gray-300 shadow-xl rounded-2xl px-8 py-10 text-center">
            <h3 className="text-3xl text-black font-semibold mb-2">
              Growth Pack
            </h3>
            <p className="text-2xl text-black font-semibold mb-1">₦15,000</p>
            <p className="text-sm text-gray-500 mb-8">
              Perfect for consistent sellers.
            </p>

            <ul className="space-y-3 text-sm text-left ml-3 mb-10">
              <li className="flex items-center gap-8">
                <span className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-black font-semibold">
                  30 credits for verification
                </span>
              </li>
            </ul>

            <Link
              href="https://app.visibuy.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-3 rounded-full bg-[#EFF6FF] text-black font-medium text-sm">
                Choose Growth Pack
              </button>
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-14">
          1 credit = ₦500 • Each verification link costs 3 credits (₦1,500)
        </p>
      </div>
    </section>
  );
}
