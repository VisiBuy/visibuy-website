export default function WhatAIDetects() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            What the <span className="text-blue-500">AI Detects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-10">
          {/* Refused images */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/reused.png"
              alt="reused-image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Edited Photos */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/edited.png"
              alt="edited-image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Stolen Images */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/stolen.png"
              alt="stolen-image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Ai-Generated Images */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/ai-gen.png"
              alt="A.i-image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
