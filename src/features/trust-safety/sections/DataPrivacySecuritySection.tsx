import Image from "next/image";

export default function DataPrivacySecuritySection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B1A2A] to-[#020B18]">
      <div className="mx-auto max-w-6xl px-5 py-16 text-white md:px-8 lg:px-12 lg:py-24">
        {/* Top Icon */}
        <div className="mb-4 flex justify-center md:mb-6">
          <Image
            src="/images/trust/shield-lock.png"
            alt=""
            width={32}
            height={32}
            className="md:h-10 md:w-10"
          />
        </div>

        {/* Pill */}
        <div className="mx-auto mb-4 w-fit rounded-full bg-emerald-500/15 px-4 py-1.5 text-xs font-semibold text-emerald-400 md:mb-5 md:text-sm">
          Data Privacy & Security
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Your Information is
          <br /> Always Protected
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-center text-sm font-medium text-neutral-300 md:max-w-md md:text-base">
          Encrypted storage for all verification files
        </p>

        {/* Security Cards */}
        <div className="mt-10 space-y-4 md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:gap-8">
          {[
            {
              icon: "/images/trust/encryption.png",
              title: "Encryption Storage",
              desc: "All verification files are encrypted and securely stored",
            },
            {
              icon: "/images/trust/metadata.png",
              title: "Secure Metadata",
              desc: "Metadata is locked to prevent tampering",
            },
            {
              icon: "/images/trust/privacy.png",
              title: "Privacy Control",
              desc: "No public exposure without seller consent",
            },
            {
              icon: "/images/trust/fraud.png",
              title: "Fraud Monitoring",
              desc: "Patterns monitored continuously for safety",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-3 rounded-xl bg-[#101F33] px-4 py-4 md:gap-4 md:px-5 md:py-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 md:h-11 md:w-11">
                <Image
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="md:h-5 md:w-5"
                />
              </div>

              <div>
                <p className="text-sm font-bold md:text-base">
                  {item.title}
                </p>
                <p className="mt-1 text-xs font-medium text-neutral-400 md:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
