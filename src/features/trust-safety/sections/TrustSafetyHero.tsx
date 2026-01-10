import Image from "next/image";

export default function TrustSafetyHero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0ea5e9] to-[#10b981] text-white overflow-hidden">
      {/* - md:grid-cols-2 ensures the "Image on Right" layout starts at Tablet (768px).
          - lg:px-24 provides that wide desktop margin seen in your Figma.
      */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20 lg:px-24 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start z-10">
          {/* Trust pill - RESTORED TO ORIGINAL WHITE STYLE */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] sm:text-xs font-medium text-black shadow-md">
            <Image
              src="/images/trust/badge.png"
              alt="Trust verified"
              width={18}
              height={18}
              priority
            />
            <span className="whitespace-nowrap">Trust start before the sale</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            Visibuy Protects
            <br />
            Honest Sellers
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-white/90">
            From AI-powered verification to transparent trust scores and protected payments, 
            Visibuy keeps every transaction safe and fair for everyone.
          </p>

          {/* CTA */}
          <button className="mt-8 w-full sm:w-auto rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-[#0ea5e9] shadow-lg transition-all hover:bg-slate-50 active:scale-95">
            Get Started On Visibuy
          </button>
        </div>

        {/* RIGHT CONTENT (Illustration) */}
        <div className="relative w-full flex flex-col items-center md:items-end mt-10 md:mt-0">
          {/* Image container scales up for desktop */}
          <div className="relative w-full max-w-[420px] md:max-w-none transform md:scale-105 lg:scale-110">
            <Image
              src="/images/trust/trust.png"
              alt="Trust and security illustration"
              width={600}
              height={450}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          
          {/* Secondary Badge - Matches Tablet/Desktop placement */}
          <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-white/80">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="white" fillOpacity="0.3"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Protected payments & verified sellers</span>
          </div>
        </div>

      </div>
    </section>
  );
}