import React from "react";
import Image from "next/image";

export default function VisualProofSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* IMAGE */}
          <div className="order-2 flex justify-center lg:order-1">
            <div className="w-full max-w-[360px] lg:max-w-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/images/about/visual-proof-map.png"
                alt="Global Visual Proof Network"
                width={420}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 text-left md:text-center lg:order-2 lg:text-left">
            <h2 className="text-2xl font-bold leading-tight text-neutral-900 md:text-3xl">
              Making{" "}
              <span className="text-blue-600">Visual Proof</span>{" "}
              the Standard
            </h2>

            <p className="mt-2 text-sm text-neutral-600">
              We believe visual proof should be the standard in online shopping
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-700 md:mx-auto md:max-w-[520px] lg:mx-0 lg:max-w-none md:text-base">
              Our vision is to make verified visuals a normal part of online
              commerce — starting in Nigeria and expanding globally.
              <br />
              <br />
              When buyers trust what they see and sellers are rewarded for
              honesty, everyone wins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
