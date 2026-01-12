import Image from "next/image";

export default function VisualVerificationWithHowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 text-neutral-900">
        {/* ================= VISUAL VERIFICATION ================= */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
              Visual Verification,{" "}
              <span className="text-blue-600">Powered by AI</span>
            </h2>

            <p className="mt-2 text-sm font-medium text-neutral-700">
              Not just photos. Verified proof.
            </p>

            <p className="mt-4  max-w-xl text-lg leading-relaxed text-neutral-600">
              At the core of Visibuy is the Visual Verification Engine (VVE) — an
              AI-powered system that analyzes uploaded photos or videos, secures
              them with timestamps and seller identity, and checks for reuse,
              manipulation, or fake content.
              <br />
              <br />
              This ensures buyers are seeing authentic, original proof tied to
              the seller — not recycled internet images.
            </p>
          </div>

          {/* CUBE IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/about/vve-cube.png"
              alt=""
              width={420}
              height={340}
              className="w-full max-w-[420px]"
            />
          </div>
        </div>

        {/* ================= HOW VVE WORKS ================= */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-bold text-blue-600">
            How VVE Works
          </h3>

          {/* STEPS */}
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
            {/* STEP 1 */}
            <div className="flex h-[220px] flex-col items-center justify-center rounded-xl bg-white text-center shadow-[0_8px_30px_rgba(0,123,255,0.12)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                <Image
                  src="/images/about/icon-upload.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>

              <h4 className="text-base font-bold text-neutral-900">Upload</h4>
              <p className="mt-1.5 max-w-[240px] text-sm text-neutral-600">
                Seller uploads photo or video
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex h-[220px] flex-col items-center justify-center rounded-xl bg-white text-center shadow-[0_8px_30px_rgba(40,167,69,0.14)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
                <Image
                  src="/images/about/icon-ai.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>

              <h4 className="text-base font-bold text-neutral-900">
                AI Verification
              </h4>
              <p className="mt-1.5 max-w-[240px] text-sm text-neutral-600">
                AI analyzes originality and authenticity
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex h-[220px] flex-col items-center justify-center rounded-xl bg-white text-center shadow-[0_8px_30px_rgba(0,123,255,0.12)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                <Image
                  src="/images/about/icon-verified.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>

              <h4 className="text-base font-bold text-neutral-900">
                Verified Proof
              </h4>
              <p className="mt-1.5 max-w-[240px] text-sm text-neutral-600">
                Tamper-proof verification issued
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
