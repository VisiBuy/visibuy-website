import Image from "next/image";

export function BuyerDisappears() {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            They Say They’ll Buy… Then Disappear
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
            Buyers hesitate when they can’t verify the exact product before
            payment. Even interested buyers slow down when they’re unsure what
            they’ll actually receive.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* BEFORE */}
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-black/5
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            "
          >
            <div className="p-5">
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-red-50
                  px-3
                  py-1
                  text-sm
                  font-medium
                  text-red-600
                "
              >
                Before Verification
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-neutral-900">
                Uncertainty creates hesitation.
              </h3>

              <p className="mt-3 text-neutral-600 leading-relaxed">
                Buyers aren’t always sure if the product photos match the exact
                item they’ll receive.
              </p>
            </div>

            <div className="px-5 pb-5">
              <Image
                src="/images/home/before-verification.png"
                alt="Buyer feeling uncertain about an online product"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>

          {/* AFTER */}
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-black/5
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            "
          >
            <div className="p-5">
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-green-50
                  px-3
                  py-1
                  text-sm
                  font-medium
                  text-green-700
                "
              >
                After Verification
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-neutral-900">
                Confidence leads to payment.
              </h3>

              <p className="mt-3 text-neutral-600 leading-relaxed">
                Buyers can see live proof of the exact item before they pay —
                helping them feel more confident moving forward.
              </p>
            </div>

            <div className="px-5 pb-5">
              <Image
                src="/images/home/after-verification.png"
                alt="Buyer feeling confident after viewing live verification"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}