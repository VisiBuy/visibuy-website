import React from "react";
import Image from "next/image";

export default function TrustBadgesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-xl text-center md:max-w-2xl">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            Reputation You Can See
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Trust shouldn&apos;t be hidden
          </p>

          <p className="mt-4 text-sm leading-relaxed text-neutral-700 md:text-base">
            Visibuy introduces visible trust signals through Trust Scores and
            Badges. Sellers earn Bronze, Silver, and Gold badges based on
            verification accuracy, completion rate, dispute history, and buyer
            feedback — making trust transparent and easy to assess at a glance.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {/* ================= TRUST SCORE CARD ================= */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-neutral-900 text-center">
              Trust Score Meter
            </h3>
            <p className="mt-1 text-xs text-neutral-500 text-center">
              Based on verification accuracy, completion rate and dispute history
            </p>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-700">
                  Trust Score
                </span>
                <span className="text-xs font-bold text-neutral-900">
                  80/100
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-neutral-200">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: "80%",
                    background:
                      "linear-gradient(to right, #3771C8, #28A745)",
                  }}
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-600">
                  Verification Accuracy
                </span>
                <span className="font-semibold text-neutral-900">98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Completion rate</span>
                <span className="font-semibold text-neutral-900">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Dispute History</span>
                <span className="font-semibold text-green-600">
                  0 Active
                </span>
              </div>
            </div>
          </div>

          {/* ================= BADGE PROGRESSION ================= */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-base font-semibold text-neutral-900 text-center">
              Badge Progression
            </h3>

            <div className="space-y-3">
              {/* Bronze */}
              <BadgeRow
                bg="bg-orange-50"
                border="border-orange-200"
                img="/images/about/bronze-badge.png"
                title="Bronze Badge"
                desc="5+ verification, 41–60% accuracy"
              />

              {/* Silver */}
              <BadgeRow
                bg="bg-neutral-50"
                border="border-neutral-200"
                img="/images/about/silver-badge.png"
                title="Silver Badge"
                desc="20+ verification, 61–80% accuracy"
              />

              {/* Gold */}
              <BadgeRow
                bg="bg-yellow-50"
                border="border-yellow-200"
                img="/images/about/gold-badge.png"
                title="Gold Badge"
                desc="100+ verification, 81–100% accuracy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BADGE ROW ================= */
function BadgeRow({
  bg,
  border,
  img,
  title,
  desc,
}: {
  bg: string;
  border: string;
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border ${border} ${bg} p-3`}
    >
      <Image src={img} alt="" width={32} height={32} />
      <div>
        <p className="text-xs font-semibold text-neutral-900 leading-tight">
          {title}
        </p>
        <p className="text-[10px] text-neutral-600 leading-tight">
          {desc}
        </p>
      </div>
    </div>
  );
}
