import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Build Trust and Close More Sales?
        </h2>

        <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8">
          Join thousand of Nigerian sellers who are already using Visibuy to
          verify products, build trust, and get paid faster.
        </p>

        {/* CTA Button */}
        <Link
          href="#"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-md hover:scale-[1.02] transition"
        >
          Start Free — Create Your First Verification
        </Link>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
          <div className="flex items-center gap-2">
            <span className=" w-4 h-4 rounded-full bg-green-400" />
            <span className="text-base">No credit card required</span>
          </div>

          <div className="flex items-center gap-2">
            <span className=" w-4 h-4 rounded-full bg-green-400" />
            <span className="text-base">Setup in 2 minutes</span>
          </div>

          <div className="flex items-center gap-2">
            <span className=" w-4 h-4 rounded-full bg-green-400" />
            <span className="text-base">AI-powered verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}
