import Image from "next/image";

export default function TrustBadgesSection() {
  return (
    <section className="w-full bg-sky-100">
      <div className="mx-auto max-w-6xl px-5 py-16 text-neutral-900">
        {/* Top Icon */}
        <div className="mx-auto mb-4 w-fit">
          <Image
            src="/images/trust/protected-payment.png"
            alt="Protected payment"
            width={40}
            height={40}
          />
        </div>

        {/* Pill */}
        <div className="mx-auto mb-3 w-fit rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white">
          Protected Payment
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold">
          Fairness For Both Sides
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-center text-sm font-medium text-neutral-700">
          Your buyer pays with confidence. You get paid with certainty.
        </p>

        {/* How it works */}
        <h3 className="mt-12 text-center text-sm font-bold">
          How It Works
        </h3>

        {/* Steps */}
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-6">
          <StepCard
            icon="/images/trust/lock.png"
            title="Buyer Pays"
            desc="Buyer pays into a protected Visibuy account"
          />

          <Arrow />

          <StepCard
            icon="/images/trust/box.png"
            title="Seller Delivers"
            desc="Seller delivers item"
          />

          <Arrow />

          <StepCard
            icon="/images/trust/check-blue.png"
            title="Buyer Confirms"
            desc="Buyer confirms item matches verification"
          />

          <Arrow />

          <StepCard
            icon="/images/trust/wallet.png"
            title="Seller Gets Paid"
            desc="Seller gets paid instantly"
          />
        </div>

        {/* Why it is fine */}
        <h3 className="mt-14 mb-4 text-center text-sm font-bold">
          Why it is fine
        </h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            "No surprise returns",
            "No scam payment",
            "No COD fraud losses",
            "No fake disputes",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-medium text-neutral-800"
            >
              <Image
                src="/images/trust/check-green.png"
                alt=""
                width={18}
                height={18}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Reusable components */
/* ---------------------------------- */

function StepCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex min-h-[200px] w-[260px] flex-col items-center justify-center rounded-xl bg-white px-5 py-4 text-center shadow-sm">
      <Image src={icon} alt="" width={28} height={28} />
      <p className="mt-3 text-sm font-bold">{title}</p>
      <p className="mt-1 max-w-[200px] text-xs font-medium text-neutral-700">
        {desc}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <Image
      src="/images/trust/arrow-down.png"
      alt=""
      width={16}
      height={24}
      className="
        my-1
        md:my-0
        md:rotate-[-90deg]
        md:scale-110
      "
    />
  );
}
