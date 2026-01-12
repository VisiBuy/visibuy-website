"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { howItWorksSteps } from "@/features/data/steps";
import { GoArrowUpRight } from "react-icons/go";

export default function HowItWorksSteps() {
  return (
    <section className="relative pt-10 pb-32">
      {/* Base blue background */}
      <div className="absolute inset-0 bg-blue-600" />

      {/* Translucent layer */}
      <div className="absolute inset-x-6 -top-20 bottom-0 rounded-[32px] bg-white/20 backdrop-blur-md" />

      <div className="relative max-w-6xl mx-auto px-6 -mt-16">
        {/* White container */}
        <div className="bg-white rounded-[28px] px-10 pt-12 pb-32 shadow-xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl text-black font-semibold">How It Works</h2>
            <span className="text-xl text-black">5 Step Flow</span>
          </div>

          {/* Swiper */}
          <Swiper spaceBetween={24} slidesPerView={3.5}>
            {howItWorksSteps.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[272px]">
                  {/* Floating arrow */}
                  <div className="absolute -top-0 -right-1 z-20 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <GoArrowUpRight className="text-white text-lg" />
                  </div>

                  {/* Card */}
                  <div className="group bg-white border border-gray-200 rounded-2xl shadow-xl p-5 pt-6 pr-10">
                    <p className="text-xl text-black mb-1">{item.step}</p>

                    <p className="text-xs text-black">{item.title}</p>

                    <p className="text-xs text-black mb-4">{item.subtitle}</p>

                    <div className="h-[140px] rounded-xl bg-blue-600 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
