"use client";

import { PiStarFill } from "react-icons/pi";

const badges = [
  {
    title: "Bronze",
    subtitle: "5+ Verifications",
    outer: "bg-[#DD8231]",
    inner: "bg-[#C25D18]",
    star: "text-[#FAAB49]",
    text: "text-[#C25D18]",
  },
  {
    title: "Silver",
    subtitle: "25+ Verifications",
    outer: "bg-[#A3B3C0]",
    inner: "bg-[#788B9C]",
    star: "text-[#E2E8ED]",
    text: "text-[#788B9C]",
  },
  {
    title: "Gold",
    subtitle: "100+ Verifications",
    outer: "bg-[#F9AE26]",
    inner: "bg-[#E58B0E]",
    star: "text-[#FFEB99]",
    text: "text-[#E58B0E]",
  },
];

export default function EarnTrustAsYouSell() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-black mb-3">
          Earn <span className="text-blue-500">Trust</span> as You Sell.
        </h2>

        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-16">
          Every successful verification and delivery increases your Trust Score
          and badge level.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl py-8 px-6 flex flex-col items-center shadow-sm"
            >
              {/* Coin Badge */}
              <div
                className={`
                  group
                  w-24 h-24 rounded-full flex items-center justify-center
                  ${badge.outer}
                  shadow-[0_6px_14px_rgba(0,0,0,0.18)]
                `}
              >
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    ${badge.inner}
                    shadow-inner
                  `}
                >
                  <PiStarFill
                    className={`text-5xl ${badge.star} transition-transform duration-300 ease-out group-hover:scale-110`}
                  />
                </div>
              </div>

              {/* Text */}
              <h3 className={`mt-6 text-lg font-semibold ${badge.text}`}>
                {badge.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-14">
          Your badge appears on every verification you share
        </p>
      </div>
    </section>
  );
}
