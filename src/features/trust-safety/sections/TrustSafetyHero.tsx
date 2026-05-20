import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export default function TrustSafetyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0B6DFF] to-[#28A745] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14)_0%,transparent_35%)]" />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-5
          py-14
          md:px-8
          md:py-20
          lg:grid-cols-2
          lg:items-center
          lg:px-12
          lg:py-24
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-xl">
          {/* LABEL */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Built Around Visible Proof
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              mt-6
              text-4xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Trust starts when
            <br />
            buyers can clearly
            <br />
            see the product.
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              mt-6
              max-w-lg
              text-base
              leading-relaxed
              text-white/90
              md:text-lg
            "
          >
            Visibuy helps sellers share clear visual proof before payment so
            buyers can make more confident decisions online.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 space-y-5">
            <Benefit
              title="Record the exact item"
              description="Show the real product before payment"
              color="bg-brand-success"
            />

            <Benefit
              title="Share verification links"
              description="Buyers can inspect proof directly"
              color="bg-brand-primary"
            />

            <Benefit
              title="More clarity, more confidence"
              description="Better conversations and smoother decisions"
              color="bg-green-500"
            />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="https://app.visibuy.com.ng/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="
                  rounded-full
                  bg-white
                  px-8
                  text-sm
                  font-semibold
                  text-brand-primary
                  shadow-xl
                  hover:bg-neutral-100
                  md:text-base
                "
              >
                Create Your First Verification →
              </Button>
            </Link>
          </div>

          {/* FOOTER NOTE */}
          <div className="mt-8 flex items-center gap-3">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white/10
                backdrop-blur-sm
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                  fill="white"
                  fillOpacity="0.18"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-sm text-white/85">
              Proof builds confidence online.
            </p>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/10
              shadow-[0_30px_100px_rgba(0,0,0,0.18)]
              backdrop-blur-sm
            "
          >
            <Image
              src="/images/trust/trust-visible-proof.png"
              alt="Seller sharing visual proof before payment"
              width={1600}
              height={1400}
              className="w-full max-w-[720px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BENEFIT ================= */
function Benefit({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`
          mt-1
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          ${color}
          shadow-sm
        `}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12L10 17L19 8"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-base font-semibold text-white md:text-lg">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-white/80 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}