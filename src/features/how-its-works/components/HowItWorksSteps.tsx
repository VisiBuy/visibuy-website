"use client";

import Image from "next/image";

export default function HowItWorksSteps() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] py-16 md:py-20 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,123,255,0.08)_0%,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <span className="text-sm font-medium text-brand-primary">
              5-Step Verification Flow
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
            From product proof
            <br />
            to buyer confidence.
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
            A simple visual flow that helps buyers inspect products more
            confidently before payment.
          </p>
        </div>

        {/* ================= VISUAL WALKTHROUGH ================= */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-white
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src="/images/how-it-works/how-it-works-flow.png"
              alt="Visibuy verification walkthrough"
              width={1800}
              height={1300}
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
            Clear proof helps conversations feel smoother before payment.
          </p>
        </div>
      </div>
    </section>
  );
}