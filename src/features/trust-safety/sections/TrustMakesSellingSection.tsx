import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import {
  ShieldCheck,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

export default function TrustMakesSellingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#0B6DFF] to-[#28A745] py-16 text-white md:py-20 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14)_0%,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">
            {/* LABEL */}
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90">
                Clearer Online Selling
              </span>
            </div>

            {/* HEADING */}
            <h2
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
              Clear proof makes
              <br />
              online selling
              <br />
              easier.
            </h2>

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
              Prove the exact item before payment so buyers can inspect
              products more confidently online.
            </p>

            {/* BENEFITS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-4">
              <Benefit
                icon={
                  <ShieldCheck className="h-6 w-6 text-white" />
                }
                title="Build buyer confidence"
              />

              <Benefit
                icon={
                  <MessageCircle className="h-6 w-6 text-white" />
                }
                title="Smoother conversations"
              />

              <Benefit
                icon={
                  <TrendingUp className="h-6 w-6 text-white" />
                }
                title="More sales, less stress"
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
                src="/images/trust/clear-proof-selling-easier.png"
                alt="Seller sharing clear product proof before payment"
                width={1600}
                height={1400}
                className="w-full max-w-[720px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= BENEFIT ================= */
function Benefit({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/10
        p-5
        text-center
        backdrop-blur-sm
      "
    >
      <div className="flex justify-center">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white/10
          "
        >
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm font-medium leading-relaxed text-white/90">
        {title}
      </p>
    </div>
  );
}