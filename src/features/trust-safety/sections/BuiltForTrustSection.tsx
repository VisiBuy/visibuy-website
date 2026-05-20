import {
  Camera,
  Clock3,
  Eye,
} from "lucide-react";

export default function BuiltForTrustSection() {
  return (
    <section className="w-full bg-neutral-100 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-primary">
              Built Around Clear Proof
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
            Buyers can inspect
            <br />
            products more clearly.
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
            Visibuy helps reduce uncertainty before payment by making product
            proof more visible and easier to inspect.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {/* ================= CARD 1 ================= */}
          <Card
            icon={
              <Camera className="h-7 w-7 text-brand-primary" />
            }
            badge="Record Proof"
            title="Record the exact item."
            description="Sellers can record photos or videos of the actual product before payment."
            points={[
              "Capture the real product clearly",
              "Record directly from mobile device",
              "Show proof before payment",
            ]}
            bg="bg-blue-50"
          />

          {/* ================= CARD 2 ================= */}
          <Card
            icon={
              <Clock3 className="h-7 w-7 text-brand-success" />
            }
            badge="Verification Details"
            title="Important details stay visible."
            description="Verification pages include helpful product proof details buyers can review."
            points={[
              "Timestamp information",
              "Seller context and proof details",
              "Shareable verification links",
            ]}
            bg="bg-green-50"
          />

          {/* ================= CARD 3 ================= */}
          <Card
            icon={
              <Eye className="h-7 w-7 text-orange-500" />
            }
            badge="Inspect Before Payment"
            title="Buyers inspect proof directly."
            description="Instead of relying only on listings, buyers can review proof themselves."
            points={[
              "Inspect the exact item clearly",
              "Ask fewer repetitive questions",
              "Make more confident decisions",
            ]}
            bg="bg-orange-50"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({
  icon,
  badge,
  title,
  description,
  points,
  bg,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  points: string[];
  bg: string;
}) {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-black/5
        bg-white
        p-7
        shadow-[0_16px_50px_rgba(0,0,0,0.05)]
        md:p-8
      "
    >
      {/* ICON */}
      <div
        className={`
          inline-flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          ${bg}
        `}
      >
        {icon}
      </div>

      {/* BADGE */}
      <div className="mt-6">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-2">
          <span className="text-sm font-medium text-neutral-700">
            {badge}
          </span>
        </div>
      </div>

      {/* TITLE */}
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
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-5 text-base leading-relaxed text-neutral-600">
        {description}
      </p>

      {/* POINTS */}
      <div className="mt-8 space-y-4">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3"
          >
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />

            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}