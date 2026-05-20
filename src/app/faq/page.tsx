export default function FAQPage() {
  return (
    <section className="min-h-screen bg-neutral-50">
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745]">
        <div className="mx-auto max-w-5xl px-6 py-14 text-white sm:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Help Center
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Quick answers about how Visibuy helps sellers share visual proof
            before payment.
          </p>
        </div>
      </div>

      {/* ================= FAQ CONTENT ================= */}
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12 lg:py-16">
        {/* ================= GENERAL + BUYERS ================= */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ================= GENERAL ================= */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              General
            </h2>

            <div className="space-y-4">
              <FaqCard
                question="What is Visibuy?"
                answer="Visibuy helps online sellers share visual proof of products before buyers pay. Sellers upload photos or videos of the exact item, which buyers can review through a verification link."
              />

              <FaqCard
                question="Is Visibuy a marketplace?"
                answer="No. Visibuy does not sell products or operate as a marketplace. Transactions happen directly between buyers and sellers."
              />

              <FaqCard
                question="Do I need an account to use Visibuy?"
                answer="Sellers need an account to create verifications. Buyers do not need an account to view verification pages."
              />

              <FaqCard
                question="Where can verification links be shared?"
                answer="Verification links can be shared across WhatsApp, Instagram, Jiji, Facebook Marketplace, and direct messages."
              />
            </div>
          </div>

          {/* ================= BUYERS ================= */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              For Buyers
            </h2>

            <div className="space-y-4">
              <FaqCard
                question="How does Visibuy help buyers?"
                answer="Visibuy lets buyers inspect photos or videos of the exact product before payment. This helps reduce uncertainty and makes online shopping feel clearer."
              />

              <FaqCard
                question="Does verification guarantee authenticity?"
                answer="No. Verification is informational, not a guarantee. Buyers should still inspect all proof carefully and make independent decisions before payment."
              />

              <FaqCard
                question="Can buyers inspect proof without signing up?"
                answer="Yes. Anyone with the verification link can review the proof page directly."
              />

              <FaqCard
                question="What should buyers review before payment?"
                answer="Buyers should carefully inspect the uploaded proof, product condition, timestamps, and any visible verification details before moving forward."
              />
            </div>
          </div>
        </div>

        {/* ================= SELLERS + SUPPORT ================= */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ================= SELLERS ================= */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              For Sellers
            </h2>

            <div className="space-y-4">
              <FaqCard
                question="How do I create a verification?"
                answer="After creating an account, sellers can upload product photos or videos. Visibuy then generates a verification link that can be shared with buyers."
              />

              <FaqCard
                question="Can one verification link be shared with multiple buyers?"
                answer="Yes. Verification links can be shared with multiple buyers, but sellers remain responsible for product availability."
              />

              <FaqCard
                question="Does Visibuy inspect or ship products?"
                answer="No. Visibuy does not physically inspect, store, or deliver products. All uploaded proof is provided directly by the seller."
              />

              <FaqCard
                question="What kind of proof should sellers upload?"
                answer="Sellers should upload recent and clear proof of the actual item being sold."
              />
            </div>
          </div>

          {/* ================= SUPPORT ================= */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Support &amp; Guidelines
            </h2>

            <div className="space-y-4">
              <FaqCard
                question="What happens if proof feels misleading?"
                answer="Buyers should avoid payment if something feels unclear and can report misleading proof when necessary."
              />

              <FaqCard
                question="Does Visibuy handle disputes?"
                answer="Buyers and sellers should first communicate directly to resolve issues. Visibuy may review reported verification content where appropriate."
              />

              <FaqCard
                question="Does Visibuy hold buyer money?"
                answer="No. Payments happen directly between buyers and sellers or through third-party payment providers when used."
              />

              <FaqCard
                question="How can I contact Visibuy?"
                answer={
                  <>
                    For support or questions, contact the Visibuy team at{" "}
                    <a
                      href="mailto:support@visibuy.com.ng"
                      className="text-brand-primary underline"
                    >
                      support@visibuy.com.ng
                    </a>
                    .
                  </>
                }
              />
            </div>
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-14 border-t border-neutral-200 pt-6">
          <p className="text-xs leading-relaxed text-neutral-500">
            These FAQs are provided for general guidance only. For additional
            information, please review the Terms &amp; Conditions and Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ CARD ================= */
function FaqCard({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-neutral-100
        bg-white
        p-5
        shadow-sm
      "
    >
      <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
        {question}
      </h3>

      <div className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
        {answer}
      </div>
    </div>
  );
}