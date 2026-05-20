import Image from "next/image";

export default function TrustBadgesSection() {
  return (
    <section className="w-full bg-neutral-100 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              Visible Trust Signals
            </span>
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-neutral-900
              md:text-4xl
            "
          >
            Buyers can see
            <br />
            what matters.
          </h2>

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
            Instead of blindly trusting listings, buyers can inspect proof of
            the exact product before payment through clear verification details.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ================= CARD 1 ================= */}
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-black/5
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <Image
                src="/images/about/visible-proof.png"
                alt="Exact product proof shown before payment"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-success">
                  Exact Product Proof
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-heading
                  font-bold
                  leading-tight
                  tracking-tight
                  text-neutral-900
                "
              >
                See the exact item
                <br />
                before payment.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Buyers can inspect photos and videos of the real product that
                was recorded before payment.
              </p>

              {/* POINTS */}
              <div className="mt-8 space-y-4">
                <Point text="Real product shown clearly" />
                <Point text="Proof recorded before payment" />
                <Point text="Inspect photos and videos directly" />
              </div>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-black/5
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <Image
                src="/images/about/verification-details.png"
                alt="Clear verification details shown to buyers"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-primary">
                  Clear Verification Details
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-heading
                  font-bold
                  leading-tight
                  tracking-tight
                  text-neutral-900
                "
              >
                Transparent proof
                <br />
                builds confidence.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Every verification includes important details buyers can review
                before making a decision.
              </p>

              {/* POINTS */}
              <div className="mt-8 space-y-4">
                <Point text="Seller identity shown clearly" />
                <Point text="Timestamped proof recording" />
                <Point text="Unique verification link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= POINT ================= */
function Point({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />

      <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
        {text}
      </p>
    </div>
  );
}