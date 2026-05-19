import Image from "next/image";
import {
  CalendarDays,
  Link2,
  UserRound,
  Images,
} from "lucide-react";

export default function ReputationSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              Verification Transparency
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
            Buyers can review
            <br />
            important proof details.
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
            Verification pages help buyers inspect proof more clearly before
            making a payment decision.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">
            <FeatureCard
              icon={
                <CalendarDays className="h-6 w-6 text-brand-primary" />
              }
              title="Recording date and time"
              description="Buyers can see when proof was recorded before payment."
              bg="bg-blue-50"
            />

            <FeatureCard
              icon={
                <UserRound className="h-6 w-6 text-brand-success" />
              }
              title="Seller visibility"
              description="Verification pages include seller-related proof context buyers can review."
              bg="bg-green-50"
            />

            <FeatureCard
              icon={
                <Images className="h-6 w-6 text-orange-500" />
              }
              title="Product photos and videos"
              description="Buyers can inspect the exact item through recorded proof media."
              bg="bg-orange-50"
            />

            <FeatureCard
              icon={
                <Link2 className="h-6 w-6 text-purple-500" />
              }
              title="Shareable verification links"
              description="Proof can be viewed directly through dedicated verification pages."
              bg="bg-purple-50"
            />
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-black/5
                bg-white
                shadow-[0_25px_90px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/images/trust/verification-details-preview.png"
                alt="Verification page showing visible proof details"
                width={1600}
                height={1400}
                className="w-full max-w-[640px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURE CARD ================= */
function FeatureCard({
  icon,
  title,
  description,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-[28px]
        border
        border-black/5
        bg-white
        p-5
        shadow-[0_12px_40px_rgba(0,0,0,0.04)]
      "
    >
      {/* ICON */}
      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          ${bg}
        `}
      >
        {icon}
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}