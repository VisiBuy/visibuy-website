import Image from "next/image";

export default function TrustMakesSellingSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#007BFF] to-[#28A745]">
      <div className="mx-auto max-w-xl px-5 py-16 text-white">
        {/* Heading */}
        <h2 className="text-center text-2xl font-extrabold leading-tight">
          Trust Makes Selling
          <br /> Easier
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-center text-sm font-medium text-white/90">
          Grow your sales with the safety buyers trust
        </p>

        {/* Image */}
        <div className="mt-8 flex justify-center">
          <div className="overflow-hidden rounded-[10px] bg-white shadow-lg">
            <Image
              src="/images/trust/seller-holding-phone.png"
              alt=""
              width={257}
              height={126}
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#007BFF] shadow-md transition hover:opacity-90">
            Get Started On Visibuy
          </button>
        </div>
      </div>
    </section>
  );
}
