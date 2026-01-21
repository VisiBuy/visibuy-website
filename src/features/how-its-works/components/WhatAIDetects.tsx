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
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/reused.png"
              alt="reused-image"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/edited.png"
              alt="edited-image"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/stolen.png"
              alt="stolen-image"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/ai-gen.png"
              alt="A.i-image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

       {/* AI Disclaimer */}
<div className="mt-12 max-w-3xl mx-auto rounded-xl border border-blue-100 bg-blue-50/60 px-6 py-5 text-center">
  <p className="text-sm font-semibold text-blue-700">
    AI signals are informational, not guarantees.
  </p>

  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
    Visibuy’s AI highlights potential risk indicators based on image patterns
    and metadata. Results may not be definitive and should be used alongside
    human judgment.
  </p>

  <p className="mt-2 text-xs font-medium text-green-700">
    AI analysis does not certify authenticity, ownership, or product condition.
  </p>
</div>

      </div>
    </section>
  );
}
