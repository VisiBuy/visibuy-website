import { IoIosPlay } from "react-icons/io";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-100" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 pb-28 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          How{" "}
          <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
            Visibuy{" "}
          </span>
          Works?
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          From product proof to protected payment — here’s how Visibuy helps you
          turn interest into real sales.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
  href="https://app.visibuy.com.ng/signup"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-success px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/40">
    Get Started →
  </button>
</Link>

          {/* <button className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-black">
              <IoIosPlay className="text-2xl text-black ml-[2px]" />
            </span>

            <span className="text-sm text-black font-medium">Watch Demo</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}
