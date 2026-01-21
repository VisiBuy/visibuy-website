import Image from "next/image";
import Link from "next/link";

export default function TrustMakesSellingSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#007BFF] to-[#28A745]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-16 text-white text-center md:py-20 lg:py-24">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          Trust Makes Selling
          <br /> Easier
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm font-medium text-white/90 sm:text-base">
          Grow your sales with the safety buyers trust
        </p>

        {/* Image */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/images/trust/seller-holding-phone.png"
              alt=""
              width={600}
              height={350}
              className="h-auto w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <Link
            href="https://app.visibuy.com.ng/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-white px-8 py-3 text-sm font-bold text-[#007BFF] shadow-lg transition hover:shadow-xl hover:opacity-95 sm:text-base">
              Get Started On Visibuy
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
