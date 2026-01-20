
import { Button } from "@/shared/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0EA5E9] via-[#3B82F6] to-[#10B981] py-12 sm:py-16 md:py-20 lg:py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl px-4">
            Honest Sellers Deserve More Sales.
          </h2>
          <p className="mt-2 text-sm font-medium sm:text-base md:text-lg lg:text-xl px-4">
            VisiBuy helps you prove it, protect it, and grow it.
          </p>

          {/* Image + Overlay Badge */}
          <div className="relative mx-auto mt-8 sm:mt-10 md:mt-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-4">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <Image
                src="/images/home/finalcta.png"
                alt="Happy seller checking verification on phone"
                width={600}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="mt-8 h-10 rounded-full bg-brand-primary px-6 text-xs font-semibold text-white shadow-xl hover:bg-white hover:text-brand-primary hover:shadow-2xl transition-all sm:mt-10 sm:h-11 sm:px-8 sm:text-sm md:mt-12 md:h-12 md:px-10 md:text-base lg:px-12"
          >
            Get Started For Free →
          </Button>
        </div>
      </div>
    </section>
  );
}
