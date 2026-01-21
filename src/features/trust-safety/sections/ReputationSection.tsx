import Image from "next/image";

export default function ReputationSection() {
  return (
    <section className="w-full bg-sky-100">
      <div className="mx-auto max-w-6xl px-5 py-14">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-neutral-900">
          Your Reputation Made Visible
        </h2>

        <p className="mt-2 text-center text-sm text-neutral-700">
          Your Trust Score shows buyers how reliable you are.
        </p>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Explanation card */}
            <div className="rounded-2xl bg-white px-5 py-6 text-sm text-neutral-700 shadow-sm">
              <p className="font-semibold text-neutral-900">
                The Trust Score is a dynamic 0–100 rating generated from:
              </p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/trust/verification-acc.png"
                    alt="Verification accuracy"
                    width={18}
                    height={18}
                  />
                  <span>Verification Accuracy</span>
                </li>

                <li className="flex items-center gap-3">
                  <Image
                    src="/images/trust/completion.png"
                    alt="Completion rate"
                    width={18}
                    height={18}
                  />
                  <span>Completion Rate</span>
                </li>

                <li className="flex items-center gap-3">
                  <Image
                    src="/images/trust/feedback.png"
                    alt="Buyer feedback"
                    width={18}
                    height={18}
                  />
                  <span>Buyer Feedback</span>
                </li>

                <li className="flex items-center gap-3">
                  <Image
                    src="/images/trust/dispute.png"
                    alt="Dispute history"
                    width={18}
                    height={18}
                  />
                  <span>Dispute History</span>
                </li>
              </ul>

              {/* <p className="mt-4 text-xs text-neutral-600">
                All sellers start at{" "}
                <span className="font-medium text-yellow-600">
                  40 (Bronze – New)
                </span>{" "}
                and grow through consistent, trustworthy activity.
              </p> */}
            </div>

            {/* Badge Levels */}
            <div>
              <p className="mb-4 text-sm font-semibold text-neutral-900">
                Badge Levels
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/images/trust/badge-bronze.png"
                  alt="Bronze badge"
                  width={72}
                  height={72}
                  quality={100}
                />
                <Image
                  src="/images/trust/badge-silver.png"
                  alt="Silver badge"
                  width={72}
                  height={72}
                  quality={100}
                />
                <Image
                  src="/images/trust/badge-gold.png"
                  alt="Gold badge"
                  width={72}
                  height={72}
                  quality={100}
                />
                <Image
                  src="/images/trust/badge-platinum.png"
                  alt="Platinum badge"
                  width={72}
                  height={72}
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Trust Score Card */}
          <div className="rounded-2xl bg-white px-5 py-6 shadow-sm">
            {/* Avatar + name */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/trust/avatar.png"
                alt="Seller avatar"
                width={56}
                height={56}
                className="rounded-full"
              />

              <p className="mt-2 text-sm font-semibold text-neutral-900">
                Aishat Abodunrin
              </p>
              <p className="text-xs text-neutral-500">
                @aishat.abodunrin
              </p>
            </div>

            {/* Trust score */}
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-neutral-700">Trust Score</span>
              <span className="font-semibold text-neutral-900">
                80/100
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
              <div className="h-2 w-[80%] rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-green-500" />
            </div>

            {/* Metrics */}
            <div className="mt-4 space-y-2 text-sm text-neutral-700">
              <div className="flex justify-between">
                <span>• Verification Accuracy</span>
                <span className="font-medium">98%</span>
              </div>
              <div className="flex justify-between">
                <span>• Completion Rate</span>
                <span className="font-medium">94%</span>
              </div>
              <div className="flex justify-between">
                <span>• Buyer Feedback</span>
                <span className="font-medium">4.5/5</span>
              </div>
              <div className="flex justify-between">
                <span>• Dispute History</span>
                <span className="font-medium text-emerald-600">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
