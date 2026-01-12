import Image from "next/image";

export default function AiPoweredVerificationSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B1A2A] to-[#020B18]">
      <div className="mx-auto max-w-6xl px-5 py-16 text-white">
        {/* Pill */}
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#1A3A3A]/60 px-4 py-1.5 text-xs font-medium text-[#6FD6C6]">
          <Image
            src="/images/trust/catches.png"
            alt=""
            width={18}
            height={18}
          />
          Visibuy Verification Engine
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold">
          AI-Powered Verification
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-center text-sm text-white/80">
          Your proof goes through real AI safety checks
        </p>

        {/* Feature list */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              icon: "/images/trust/detect.png",
              text: "Detects reused or stolen images",
            },
            {
              icon: "/images/trust/catches.png",
              text: "Catches AI-generated fakes",
            },
            {
              icon: "/images/trust/light.png",
              text: "Confirms light, shadows and product pattern",
            },
            {
              icon: "/images/trust/camera.png",
              text: "Flags edited or manipulated photos",
            },
            {
              icon: "/images/trust/verify-time.png",
              text: "Verifies time stamp + seller identity binding",
            },
            {
              icon: "/images/trust/verify-shield.png",
              text: "Generates secure, tamper-proof verification",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-white/5 px-4 py-4"
            >
              <Image
                src={item.icon}
                alt=""
                width={28}
                height={28}
                className="shrink-0"
              />

              <p className="text-sm font-medium text-white/90">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
            How VVE Works
          </p>

          <div className="mt-12 space-y-12 md:flex md:justify-center md:gap-20 md:space-y-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/trust/camera.png"
                alt=""
                width={32}
                height={32}
                className="mb-3"
              />
              <span className="mb-2 text-xs font-medium text-white/70">
                1
              </span>
              <p className="text-sm font-semibold">Upload Photo</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/trust/catches.png"
                alt=""
                width={32}
                height={32}
                className="mb-3"
              />
              <span className="mb-2 text-xs font-medium text-white/70">
                2
              </span>
              <p className="text-sm font-semibold">AI Scanning</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/trust/check-mark.png"
                alt=""
                width={32}
                height={32}
                className="mb-3"
              />
              <span className="mb-2 text-xs font-medium text-white/70">
                3
              </span>
              <p className="text-sm font-semibold">
                Verified & Authenticated
              </p>
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-br from-[#0E3A3F] via-[#0B2234] to-[#020B18] px-5 py-6 ring-1 ring-white/5">
          <Image
            src="/images/trust/verify-shield.png"
            alt=""
            width={32}
            height={32}
            className="mb-3"
          />

          <p className="text-sm leading-relaxed text-white/80">
            Every verification is analyzed in real-time by the visual
            verification engine. This ensures buyers see only authentic
            products, and sellers build their reputation on real,
            verifiable proof.
          </p>
        </div>
      </div>
    </section>
  );
}
