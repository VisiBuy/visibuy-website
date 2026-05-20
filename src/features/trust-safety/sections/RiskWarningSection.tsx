import Image from "next/image";

export default function RiskWarningSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2">
            <span className="text-sm font-medium text-orange-600">
              Why Buyers Hesitate
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
            Buyers want to feel
            <br />
            more certain before payment.
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
            Many online buyers hesitate because listings and product photos
            don’t always feel clear enough before payment.
          </p>
        </div>

        {/* ================= VISUALS ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ================= VISUAL 1 ================= */}
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
                src="/images/trust/buyer-hesitation.png"
                alt="Buyer asking for more product clarity"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-2">
                <span className="text-sm font-medium text-neutral-700">
                  Buyer Hesitation
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
                Buyers ask more
                <br />
                questions when
                <br />
                they can’t see clearly.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Many buyers hesitate because they want more certainty about the
                exact product before payment.
              </p>

              {/* POINTS */}
              <div className="mt-8 space-y-4">
                <Point text="They request more pictures and videos" />
                <Point text="They want to inspect the exact item" />
                <Point text="Some conversations slow down or stop" />
              </div>
            </div>
          </div>

          {/* ================= VISUAL 2 ================= */}
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
                src="/images/trust/more-photos-needed.png"
                alt="Seller repeatedly sending more product pictures"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <span className="text-sm font-medium text-brand-primary">
                  Social Commerce Friction
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
                Sellers repeatedly
                <br />
                explain products
                <br />
                manually.
              </h3>

              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Sellers often spend time sending multiple product angles,
                videos, and explanations before buyers feel comfortable.
              </p>

              {/* POINTS */}
              <div className="mt-8 space-y-4">
                <Point text="More photos and videos get requested" />
                <Point text="Conversations become longer and repetitive" />
                <Point text="Buyers still may remain uncertain" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-[28px]
            border
            border-green-100
            bg-green-50
            px-6
            py-6
            text-center
            md:px-10
            md:py-8
          "
        >
          <p
            className="
              text-base
              font-medium
              leading-relaxed
              text-neutral-700
              md:text-lg
            "
          >
            Most buyers simply want clearer proof before payment.
          </p>
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