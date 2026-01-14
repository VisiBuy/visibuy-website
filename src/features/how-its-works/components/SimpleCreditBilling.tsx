"use client";

export default function SimpleCreditBilling() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-black mb-2">
          Simple Credit Billing.
        </h2>
        <p className="text-base text-gray-500 font-semibold mb-16">
          1 Credit = ₦500. 1 Verification = 3 Credits (₦1,500).
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Starter Pack */}
          <div className="shadow-xl border border-gray-300 rounded-2xl px-8 py-10 text-center">
            <h3 className="text-3xl text-black font-semibold mb-1">
              Starter Pack
            </h3>
            <p className="text-2xl text-black font-semibold mb-1">₦2,500</p>
            <p className="text-sm text-gray-500 mb-8">5 Credits</p>

            <ul className="space-y-3 text-sm text-left ml-3 mb-10">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-center gap-8">
                  <span className="w-4 h-4 rounded-full bg-green-500" />
                  <span className="text-black font-semibold">15 Credits</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-full bg-[#EFF6FF] text-black font-medium text-sm">
              Get Pro Pack
            </button>
          </div>

          {/* Pro Pack (Highlighted) */}
          <div className="relative rounded-2xl px-8 py-12 text-center bg-gradient-to-b from-blue-600 to-green-500 text-white shadow-xl">
            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-semibold px-10 py-2 rounded-full">
              Get Pro Pack
            </span>

            <h3 className="text-2xl font-semibold mb-2 tracking-normal">
              Pro Pack
            </h3>
            <p className="text-2xl font-semibold mb-4">₦7,000</p>
            <p className="text-sm text-white/80 mb-8">15 Credits</p>

            <ul className="space-y-3 text-white text-sm text-left mb-10">
              {[
                "5 verifications",
                "AI verification",
                "Priority support",
                "Save ₦500",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-8">
                  <span className="w-4 h-4 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-full bg-[#FCFCFC] font-medium text-blue-600 text-sm">
              Get Pro Pack
            </button>
          </div>

          {/* Business Pack */}
          <div className="border border-gray-300 shadow-xl rounded-2xl px-8 py-10 text-center">
            <h3 className="text-3xl text-black font-semibold mb-2">
              Business Pack
            </h3>
            <p className="text-2xl text-black font-semibold mb-1">₦12,000</p>
            <p className="text-sm text-gray-500 mb-8">30 Credits</p>

            <ul className="space-y-3 text-sm text-left ml-3 mb-10">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-center gap-8">
                  <span className="w-4 h-4 rounded-full bg-green-500" />
                  <span className="text-black font-semibold">15 Credits</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-full bg-[#EFF6FF] text-black font-medium text-sm">
              Get Pro Pack
            </button>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-14">
          Credits never expire • Use them anytime
        </p>
      </div>
    </section>
  );
}
