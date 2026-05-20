import Image from "next/image";

export default function VisualProofSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-success">
              Why Visual Proof Matters
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
            Proof changes
            <br />
            conversations online.
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
            When buyers can clearly inspect the exact product before payment,
            conversations become smoother and decisions happen faster.
          </p>
        </div>

        {/* ================= VISUALS ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ================= BEFORE PROOF ================= */}
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
                src="/images/about/before-proof.png"
                alt="Buyer uncertain before visual proof"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <div className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-2">
                <span className="text-sm font-medium text-red-600">
                  Before Proof
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
                Too much
                <br />
                uncertainty.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Buyers keep asking questions because they’re not fully sure what
                they’re paying for.
              </p>

              {/* POINTS */}
              <div className="mt-8 space-y-4">
                <Point
                  color="bg-red-500"
                  text="Too many back-and-forth conversations"
                />

                <Point
                  color="bg-orange-400"
                  text="Buyers hesitate before payment"
                />

                <Point
                  color="bg-neutral-400"
                  text="Sellers repeatedly explain the same product"
                />
              </div>
            </div>
          </div>

          {/* ================= AFTER PROOF ================= */}
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
                src="/images/about/after-proof.png"
                alt="Buyer confident after viewing proof"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-success">
                  After Proof
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
                More clarity.
                <br />
                More confidence.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Buyers can clearly inspect the exact product before payment,
                making conversations feel smoother and more confident.
              </p>

              {/* POINTS */}
              <div className="mt-8 space-y-4">
                <Point
                  color="bg-brand-success"
                  text="Buyers see the exact item clearly"
                />

                <Point
                  color="bg-brand-primary"
                  text="Conversations become smoother"
                />

                <Point
                  color="bg-orange-400"
                  text="Decisions happen faster with confidence"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= POINT ================= */
function Point({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`
          mt-1
          h-2.5
          w-2.5
          rounded-full
          ${color}
        `}
      />

      <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
        {text}
      </p>
    </div>
  );
}