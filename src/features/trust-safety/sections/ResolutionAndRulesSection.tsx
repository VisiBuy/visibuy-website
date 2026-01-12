import Image from "next/image";

export default function ResolutionAndRulesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 text-neutral-900 md:px-8 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/trust/scales.png"
            alt=""
            width={32}
            height={32}
            className="md:h-10 md:w-10"
          />
        </div>

        <h2 className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
          If Something Goes Wrong,
          <br />{" "}
          <span className="text-blue-500">We Step In</span>
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-center text-sm font-medium text-neutral-600 md:max-w-md md:text-base">
          Fair and transparent dispute handling
        </p>

        {/* Situations Covered — LIST (not grid) */}
        <div className="mx-auto mt-10 max-w-xl rounded-xl border bg-white p-4 md:max-w-3xl lg:p-6">
          <p className="mb-4 text-sm font-bold md:text-base">
            Situations Covered
          </p>

          <div className="space-y-2">
            {[
              "Buyers claims item doesn't match proof",
              "Seller claims buyer is acting fraudulently",
              "Payment confirmation issues",
              "Delivery mismatch claims",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md border px-3 py-2 text-xs font-semibold text-neutral-700 md:text-sm"
              >
                <Image
                  src="/images/trust/warning-orange.png"
                  alt=""
                  width={14}
                  height={14}
                  className="mt-0.5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resolution Process — HORIZONTAL */}
        <h3 className="mt-14 text-center text-sm font-bold md:text-base lg:text-lg">
          Resolution Process
        </h3>

        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-6 lg:gap-8">
          <ResolutionCard
            icon="/images/trust/report.png"
            title="Report Issue"
            desc="Use dispute button on verification page"
          />

          <FlowArrow />

          <ResolutionCard
            icon="/images/trust/search.png"
            title="Investigation"
            desc="AI + human support review all evidence"
          />

          <FlowArrow />

          <ResolutionCard
            icon="/images/trust/scales-blue.png"
            title="Fair decision"
            desc="Funds released accordingly"
          />
        </div>

        {/* Play Fair */}
        <div className="mt-20 text-center">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
            Play fair, Grow Fast
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm font-medium text-neutral-600 md:max-w-md md:text-base">
            Simple guidelines to keep the marketplace safe for everyone
          </p>
        </div>

        {/* Rules */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4 md:max-w-5xl md:grid-cols-2 md:gap-6">
          {/* Seller Safety Rules */}
          <div className="rounded-xl bg-sky-50 p-4 lg:p-6">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/images/trust/user-blue.png"
                alt=""
                width={16}
                height={16}
              />
              <p className="text-sm font-extrabold text-neutral-900 md:text-base">
                Seller safety rules
              </p>
            </div>

            <div className="space-y-2">
              {[
                "Upload authentic, recent proofs",
                "Deliver what you verified",
                "Respond quickly to buyers",
                "Avoid fake or reused media",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold md:text-sm"
                >
                  <Image
                    src="/images/trust/blue-check.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buyer Safety Rules */}
          <div className="rounded-xl bg-emerald-50 p-4 lg:p-6">
            <p className="mb-3 text-sm font-extrabold text-neutral-900 md:text-base">
              Buyer safety rules
            </p>

            <div className="space-y-2">
              {[
                "Review verification carefully",
                "Only confirm payment after item matches",
                "Don't raise fake disputes",
                "Report suspicious behaviour immediately",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold md:text-sm"
                >
                  <Image
                    src="/images/trust/green-check.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Reusable Components */
/* ---------------------------------- */

function ResolutionCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="w-[260px] rounded-xl bg-sky-100 px-4 py-4 text-center shadow-sm md:w-[280px] lg:w-[300px]">
      <Image src={icon} alt="" width={26} height={26} className="mx-auto" />
      <p className="mt-3 text-sm font-bold md:text-base">{title}</p>
      <p className="mt-1 text-xs font-medium text-neutral-700 md:text-sm">
        {desc}
      </p>
    </div>
  );
}

function FlowArrow() {
  return (
    <Image
      src="/images/trust/arrow-down.png"
      alt=""
      width={16}
      height={22}
      className="my-2 md:my-0 md:rotate-[-90deg] md:scale-110"
    />
  );
}
