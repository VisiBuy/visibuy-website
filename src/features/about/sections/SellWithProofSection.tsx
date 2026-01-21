import React from "react";
import Image from "next/image";
import Link from "next/link";

const SellWithProofSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* ================= DESKTOP LAYOUT ================= */}
      <div
        className="hidden w-full lg:block"
        style={{
          background: "linear-gradient(90deg, #007BFF 0%, #28A745 100%)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-12 py-20 text-white">
          {/* Text */}
          <div className="max-w-xl">
            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Sell With Proof. Buy With Confidence
            </h2>

            <p className="mb-3 text-sm opacity-90">
              Honest sellers deserve better tools
            </p>

            <p className="mb-8 text-base leading-relaxed opacity-95">
              Visibuy helps you show proof, earn trust, and close more sales — one
              verification at a time.
            </p>

            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-neutral-100">
                Get Started For Free
              </button>
            </Link>
          </div>

          {/* Image — MADE BIGGER (DESKTOP ONLY) */}
          <div className="max-w-[520px]">
            <Image
              src="/images/about/seller-phone.png"
              alt="Seller with verification phone"
              width={480}
              height={560}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* ================= TABLET & IPAD LAYOUT ================= */}
      <div
        className="block w-full lg:hidden"
        style={{
          background: "linear-gradient(180deg, #007BFF 0%, #28A745 100%)",
        }}
      >
        <div className="mx-auto max-w-[420px] px-6 py-16 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold leading-tight">
            Sell With Proof. Buy With Confidence
          </h2>

          <p className="mb-3 text-sm opacity-90">
            Honest sellers deserve better tools
          </p>

          <p className="mb-8 text-sm leading-relaxed opacity-95">
            Visibuy helps you show proof, earn trust, and close more sales — one
            verification at a time.
          </p>

          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src="/images/about/seller-phone.png"
              alt="Seller with verification phone"
              width={375}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <Link
            href="https://app.visibuy.com.ng/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-neutral-100">
              Get Started For Free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellWithProofSection;
