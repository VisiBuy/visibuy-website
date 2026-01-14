import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* ================ Hero ================== */}
      <section className="pt-28 pb-8 text-center px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Pricing That Helps You Sell More <br />
          With Confidence.
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto mb-10 font-medium">
          Buy credits, create verifications, build trust, and <br /> close more
          sales - no hidden fees
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-12 py-1 rounded-xl text-sm font-medium">
            Buy Credits
          </button>

          <button className="border border-black text-black px-6 py-3 rounded-xl text-sm font-semibold">
            Create your first verification
          </button>
        </div>
      </section>

      {/* Image Card */}
      <section className="px-6 mt-10 mb-10">
        <div className="max-w-4xl mx-auto rounded-2xl p-2 flex justify-center">
          <Image
            src="/pricing-diagram.png"
            alt="pricing diagram"
            width={500}
            height={360}
          />
        </div>
      </section>

      {/* ================= HOW PRICING WORKS ================= */}
      <section className="flex justify-center items-center px-6 pb-16">
        <Image
          src="/howpricingworks.png"
          alt="how-pricing-works"
          width={650}
          height={400}
        />
      </section>

      {/* What You Get */}
      <section className="flex justify-center items-center px-6 pb-16">
        <Image
          src="/what-you-get.png"
          alt="what-you-get"
          width={650}
          height={400}
        />
      </section>

      {/* Why Use Credits */}
      <section className="flex justify-center items-center px-6 pb-16">
        <Image src="/credits.png" alt="credits" width={650} height={400} />
      </section>

      {/* VVE */}
      <section className="flex justify-center items-center px-6 pb-16">
        <Image src="/vve.png" alt="vve" width={650} height={400} />
      </section>

      {/* FAQs */}
      <section className="flex justify-center px-6 pb-32">
        <Image src="/faqs.png" alt="faqs" width={650} height={400} />
      </section>

      {/* CTA */}
      <section className="bg-[linear-gradient(96.29deg,rgba(0,122,255,0.1)_22.62%,rgba(0,201,80,0.1)_97.29%)] px-6 py-20">
        <div className="max-w-3xl mx-auto -mt-10 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10 tracking-tight">
            Start building trust with verified proves today.
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-black leading-relaxed mb-12 max-w-xl mx-auto">
            Begin earning real trust with verified proof that validates your
            <br />
            value. Show your audience you’re the real deal.
            <br />
            Start your verification now.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              className="bg-black text-white px-20 py-2 rounded-lg text-sm font-medium "
            >
              Buy Credits
            </button>

            <button className="text-black text-sm font-medium">
              Create your first verification
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
