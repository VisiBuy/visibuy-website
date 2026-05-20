"use client";

import Image from "next/image";

export default function EarnTrustAsYouSell() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,123,255,0.06)_0%,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-success">
              Clearer Online Selling
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-6
              text-3xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-neutral-900
              md:text-5xl
            "
          >
            Clear proof builds
            <br />
            buyer confidence.
          </h2>

          {/* SUBTEXT */}
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
            When buyers can inspect products clearly before payment,
            conversations feel more confident and straightforward.
          </p>
        </div>

        {/* ================= MAIN VISUAL ================= */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-neutral-100
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src="/images/how-it-works/clear-proof-confidence.png"
              alt="Seller and buyer interacting confidently through visual proof"
              width={1800}
              height={1200}
              className="w-full max-w-7xl object-cover"
            />
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-10 text-center">
          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-relaxed
              text-neutral-500
              md:text-base
            "
          >
            Buyers feel more comfortable moving forward when products are shown
            clearly before payment.
          </p>
        </div>
      </div>
    </section>
  );
}