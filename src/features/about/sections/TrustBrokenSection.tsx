import Image from "next/image";

export default function TrustIsBrokenSection() {
  return (
    <section className="w-full bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-5 py-16 text-neutral-900">
        {/* ================= TRUST IS BROKEN ================= */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start">
          {/* TEXT */}
          <div>
            <h2 className="text-[26px] font-extrabold leading-tight md:text-3xl">
              Trust is{" "}
              <span className="text-blue-600">Broken</span> in
              <br />
              Online Commerce
            </h2>

            <p className="mt-2 text-sm font-medium text-neutral-700">
              Too many online transactions fail because of doubt
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Across Nigeria and emerging markets, online sellers lose sales
              every day — not because their products are bad, but because buyers
              don’t trust what they see online.
              <br />
              <br />
              Fake listings, reused photos, edited images, and COD fraud have
              trained buyers to doubt sellers by default. Honest sellers pay the
              price.
            </p>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-5">
            <Image
              src="/images/about/buyer-confused.png"
              alt=""
              width={420}
              height={320}
              className="w-full rounded-xl bg-white object-cover shadow-sm"
            />

            <Image
              src="/images/about/seller-overwhelmed.png"
              alt=""
              width={420}
              height={320}
              className="w-full rounded-xl bg-white object-cover shadow-sm"
            />
          </div>
        </div>

        {/* ================= PROOF CHANGES EVERYTHING ================= */}
        <div className="mt-20 grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start">
          {/* TEXT (TOP on tablet, RIGHT on desktop) */}
          <div className="order-1 lg:order-2">
            <h3 className="text-[26px] font-semibold leading-tight md:text-3xl">
              <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                Proof Changes
                <br />
                Everything
              </span>
            </h3>

            <p className="mt-2 text-sm font-medium text-neutral-700">
              When buyers see real proof, they decide faster
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Visibuy exists to replace endless explanations with visual proof.
              Instead of arguing, convincing, or sending countless photos,
              sellers can show verified, tamper-proof proof of the exact product
              they are selling — before payment happens.
              <br />
              <br />
              This shifts online selling from <em>trust me</em> to{" "}
              <em>see it yourself</em>.
            </p>
          </div>

          {/* PHONE IMAGES (BOTTOM on tablet, LEFT on desktop) */}
          <div className="order-2 lg:order-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
  <Image
    src="/images/about/chat-proof.png"
    alt=""
    width={360}
    height={640}
    className="w-full rounded-2xl bg-white object-cover shadow-sm"
  />

  <Image
    src="/images/about/chat-proof-2.png"
    alt=""
    width={360}
    height={640}
    className="w-full rounded-2xl bg-white object-cover shadow-sm"
  />
</div>

        </div>
      </div>
    </section>
  );
}
