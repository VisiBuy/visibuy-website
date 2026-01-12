import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#CBE2FF] via-white to-[#E2FCE2]">
      {/* ================= BACKGROUND ICONS ================= */}

      {/* Top icons */}
      <Image
        src="/images/about/icon-lock.png"
        alt=""
        width={30}
        height={30}
        className="pointer-events-none absolute left-6 top-6 opacity-60 md:left-16 md:top-12 lg:left-24"
      />

      <Image
        src="/images/about/icon-check.png"
        alt=""
        width={30}
        height={30}
        className="pointer-events-none absolute right-6 top-6 opacity-55 md:right-16 md:top-12 lg:right-24"
      />

      {/* Middle icons */}
      <Image
        src="/images/about/icon-finger.png"
        alt=""
        width={32}
        height={32}
        className="pointer-events-none absolute left-6 top-[260px] opacity-55 md:left-20 md:top-[340px] lg:left-32"
      />

      <Image
        src="/images/about/icon-document.png"
        alt=""
        width={32}
        height={32}
        className="pointer-events-none absolute right-6 top-[300px] opacity-55 md:right-20 md:top-[360px] lg:right-32"
      />

      {/* Bottom icons */}
      <Image
        src="/images/about/icon-shield.png"
        alt=""
        width={30}
        height={30}
        className="pointer-events-none absolute left-6 bottom-[140px] opacity-10 md:left-24 lg:left-40"
      />

      <Image
        src="/images/about/icon-verify.png"
        alt=""
        width={30}
        height={30}
        className="pointer-events-none absolute right-6 bottom-[120px] opacity-10 md:right-24 lg:right-40"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto max-w-xl px-5 py-14 text-neutral-900 md:max-w-3xl md:py-20 lg:max-w-6xl lg:py-28">
        {/* Badge */}
        <div className="mb-4 flex justify-center md:mb-6">
          <span className="rounded-full bg-blue-200 px-4 py-1 text-xs font-semibold text-blue-600 md:px-5 md:py-1.5 md:text-sm">
            Built to Restore Trust in Online Selling
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-2xl font-extrabold leading-tight md:text-4xl md:leading-tight lg:text-5xl">
          Online selling works
          <br />
          better when trust
          <br />
          comes first
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-sm text-center text-sm font-medium text-neutral-600 md:mt-6 md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
          Visibuy was built to help honest sellers prove what they sell, help
          buyers trust what they see and make online commerce safer for everyone.
        </p>

        {/* Hero image */}
        <div className="relative mt-12 flex justify-center md:mt-16 lg:mt-20">
          <div className="relative h-[190px] w-[190px] md:h-[260px] md:w-[260px] lg:h-[320px] lg:w-[320px]">
            <Image
              src="/images/about/hero-person.png"
              alt=""
              fill
              className="rounded-full object-cover object-top"
            />

            {/* Left badge */}
            <div className="absolute -left-16 top-6 rounded-lg bg-white px-3 py-2 shadow-md md:-left-24 md:top-10 md:px-4 md:py-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/about/ai-badge.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <p className="text-[10px] font-semibold leading-tight text-neutral-700 md:text-xs">
                  AI Powered Visual
                  <br />
                  Verification
                </p>
              </div>
            </div>

            {/* Right badge */}
            <div className="absolute -right-16 bottom-6 rounded-lg bg-white px-3 py-2 shadow-md md:-right-24 md:bottom-10 md:px-4 md:py-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/about/protected-payment.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <p className="text-[10px] font-semibold text-green-600 md:text-xs">
                  Protected Payment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 md:mt-16 md:flex-row md:justify-center">
          <button className="w-full max-w-[220px] rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 md:max-w-[240px] md:text-base">
            Get Started For Free
          </button>

          <button className="w-full max-w-[220px] rounded-xl border border-blue-200 bg-white py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 md:max-w-[240px] md:text-base">
            See how visibuy works
          </button>
        </div>
      </div>
    </section>
  );
}
