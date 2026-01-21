import Image from "next/image";

export function BuyerDisappears() {
  return (
    <section className="bg-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl lg:text-3xl">
            They Say They’ll Buy… Then Disappear
          </h2>
          <br />

          <p className=" text-neutral-600">
            Every online seller knows this feeling. You post your product. A
            buyer shows interest — then silence. They’re not sure if it’s real
            or safe to pay.
          </p>
        </div>

        {/* Hidden cost */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative ">
            <h3 className="flex items-center gap-3 font-heading text-lg font-semibold text-neutral-900">
              <span className=" absolute -left-16 h-2 w-16 rounded-full bg-brand-danger" />
              The Hidden Cost
            </h3>
          </div>
          <div className=" space-y-4">
            <p className=" text-neutral-600">
              Even when they choose Pay-On-Delivery, you still lose.
            </p>

            <p className="mt-4 text-neutral-600">
              Many sellers lose money due to COD fraud. Buyers sometimes refuse
              to pay, claim the product wasn’t as expected, or vanish after
              wasting your delivery cost.{" "}
            </p>
            <p className=" text-neutral-600 mt-0">
              {" "}
              It eats into your profits, wastes your time, and forces you to
              limit COD in some regions — cutting off potential sales.
            </p>
          </div>

          {/* Warning pill */}
          <div className=" mt-5 max-w-3xl ">
            <div className="rounded-card border border-brand-danger/30  px-4 py-3  text-sm text-neutral-800 bg-orange-50">
              🛑 Stop losing money to fake buyers — let them see the proof
              before they ever touch the product.
            </div>
          </div>

          {/* Visual comparison */}
          <div className="mt-10 grid gap-3 lg:grid-cols-2 max-w-4xl mx-auto">
            {/* COD Fraud */}
            <div className="">
              <Image
                src="/images/home/cod-fraud.png"
                alt="COD fraud occurs when buyer refuses delivery"
                width={521}
                height={277}
                className=" rounded-card object-contain"
              />
            </div>

            {/* Visibuy Flow */}
            <div className=" ">
              <Image
                src="/images/home/visibuy-flow.png"
                alt="Visibuy verification builds buyer trust"
                width={521}
                height={277}
                className=" rounded-card object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
