import Image from "next/image";

export default function RiskWarningSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl">
          Online Buying Shouldn't Feel Like a Gamble.
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-center text-sm text-neutral-600 md:text-base">
          Scams, fake products, and COD fraud hurt both buyers and sellers.
        </p>

        {/* Images - Two column layout on tablet/desktop */}
        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          <Image
            src="/images/trust/risk-1.png"
            alt="Seller facing online selling risks"
            width={800}
            height={640}
            quality={100}
            className="w-full rounded-xl object-cover"
            priority
          />

          <Image
            src="/images/trust/risk-2.png"
            alt="Buyer receiving returned or fake product"
            width={800}
            height={640}
            quality={100}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Warning box */}
        <div className="mt-8 rounded-2xl bg-red-100 px-6 py-8 text-center md:mx-auto md:mt-12 md:max-w-md md:px-10 md:py-12">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/trust/red-icon.png"
              alt="Warning"
              width={32}
              height={32}
            />
          </div>

          {/* Text */}
          <p className="text-sm font-bold leading-snug text-red-700 md:text-base md:leading-relaxed">
            Online shopping is filled with uncertainty. Sellers get fake buyers
            who waste their time. Buyers fear receiving low-quality or fake
            items. Delivery costs are lost. Trust is broken.
          </p>
        </div>
      </div>
    </section>
  );
}