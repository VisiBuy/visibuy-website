import Image from "next/image";

export default function TrustIsBrokenSection() {
  return (
    <section className="w-full bg-neutral-100">
      <div className="mx-auto max-w-7xl px-5 py-16 text-neutral-900 md:py-20 lg:py-24">
        {/* ================= TRUST BREAKS DOWN ================= */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* TEXT */}
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="text-sm font-medium text-brand-primary">
                The Trust Problem
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-heading font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              Buyers hesitate when
              <br />
              they can’t verify the
              <br />
              exact item.
            </h2>

            <p className="mt-4 text-base font-medium text-neutral-700">
              Too many online sales break down because buyers feel uncertain.
            </p>

            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              Across Nigeria and emerging markets, sellers lose sales every day
              — not because their products are bad, but because buyers are no
              longer sure what’s real online.
              <br />
              <br />
              Reused photos, edited images, fake listings, and bad delivery
              experiences have trained buyers to question what they see before
              payment happens.
            </p>
          </div>

          {/* VISUALS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/about/buyer-confused.png"
                alt="Buyer unsure if product is the exact item"
                width={700}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/about/seller-overwhelmed.png"
                alt="Seller struggling to convince buyer"
                width={700}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= PROOF CHANGES EVERYTHING ================= */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* TEXT */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
              <span className="text-sm font-medium text-brand-success">
                The Shift
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-heading font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              Proof changes
              <br />
              everything.
            </h3>

            <p className="mt-4 text-base font-medium text-neutral-700">
              When buyers see proof of the exact item, conversations move
              differently.
            </p>

            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              Visibuy exists to replace endless explanations with visual proof.
              Instead of repeatedly trying to convince buyers, sellers can prove
              the exact product before payment through one simple verification
              link.
              <br />
              <br />
              This shifts online selling from <em>trust me</em> to{" "}
              <em>see it yourself</em>.
            </p>
          </div>

          {/* PHONE VISUALS */}
          <div className="order-2 lg:order-1 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/about/chat-proof.png"
                alt="Seller sharing product proof in chat"
                width={700}
                height={1400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/about/chat-proof-2.png"
                alt="Buyer viewing product proof before payment"
                width={700}
                height={1400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}