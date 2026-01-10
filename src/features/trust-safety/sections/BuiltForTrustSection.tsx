import Image from "next/image";

export default function BuiltForTrustSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl">
          Built For Trust From Day One
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-center text-sm text-neutral-600 md:text-base">
          Everything on Visibuy is designed to protect both sides.
        </p>

        {/* Cards - Three column layout on tablet/desktop */}
        <div className="mt-10 space-y-6 md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:space-y-0 lg:gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl bg-emerald-50 px-6 py-9 text-center md:px-5 lg:px-8 lg:py-10">
            <Image
              src="/images/trust/verify.png"
              alt="AI-powered visual verification"
              width={44}
              height={44}
              className="mx-auto mb-3"
            />

            <h3 className="text-lg font-bold text-neutral-900 lg:text-xl">
              AI-Powered Visual<br />Verification
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
              Ensure that the product is real, recent, and truly in the seller's
              possession.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-sky-50 px-6 py-9 text-center md:px-5 lg:px-8 lg:py-10">
            <Image
              src="/images/trust/shield.png"
              alt="Protected payments"
              width={44}
              height={44}
              className="mx-auto mb-3"
            />

            <h3 className="text-lg font-bold text-neutral-900 lg:text-xl">
              Protected Payments
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
              Buyers' money is only released when the item matches the proof and
              delivery is confirmed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-amber-50 px-6 py-9 text-center md:px-5 lg:px-8 lg:py-10">
            <Image
              src="/images/trust/star.png"
              alt="Seller trust score"
              width={44}
              height={44}
              className="mx-auto mb-3"
            />

            <h3 className="text-lg font-bold text-neutral-900 lg:text-xl">
              Seller's Trust Score
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
              A real-time score that grows with accuracy, successful transactions,
              and buyer feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}