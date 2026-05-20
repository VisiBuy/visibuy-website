import Image from "next/image";
import {
  Camera,
  Clock3,
  Link2,
  Smartphone,
} from "lucide-react";

export default function AiPoweredVerificationSection() {
  return (
    <section className="w-full bg-neutral-900 py-16 text-white md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/85">
              Camera-Based Verification
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
              text-white
              md:text-4xl
            "
          >
            Proof recorded directly
            <br />
            from sellers.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-white/70
              md:text-lg
            "
          >
            Visibuy helps sellers record and share clearer proof before payment
            so buyers can inspect products more confidently.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-5">
            <FeatureCard
              icon={<Camera className="h-6 w-6 text-brand-primary" />}
              title="Record directly from device"
              description="Sellers can capture product proof directly from their mobile device."
              bg="bg-blue-500/10"
            />

            <FeatureCard
              icon={<Clock3 className="h-6 w-6 text-brand-success" />}
              title="Recording details stay visible"
              description="Verification pages can display timestamps and related proof details."
              bg="bg-green-500/10"
            />

            <FeatureCard
              icon={<Link2 className="h-6 w-6 text-orange-400" />}
              title="Share proof through verification links"
              description="Buyers can inspect proof directly from dedicated verification pages."
              bg="bg-orange-500/10"
            />

            <FeatureCard
              icon={<Smartphone className="h-6 w-6 text-purple-400" />}
              title="Designed for social commerce"
              description="Verification links can be shared easily across WhatsApp, Instagram, Jiji, and more."
              bg="bg-purple-500/10"
            />
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                shadow-[0_25px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-sm
              "
            >
              <Image
                src="/images/trust/camera-proof-recording.png"
                alt="Seller recording proof directly from mobile device"
                width={1600}
                height={1400}
                className="w-full max-w-[680px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div
          className="
            mx-auto
            mt-16
            max-w-4xl
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            px-6
            py-6
            text-center
            backdrop-blur-sm
            md:px-10
            md:py-8
          "
        >
          <p
            className="
              text-base
              leading-relaxed
              text-white/80
              md:text-lg
            "
          >
            Buyers inspect the proof themselves before deciding to move forward.
          </p>
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
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-sm
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
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}