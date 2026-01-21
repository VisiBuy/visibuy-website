export default function FAQPage() {
  return (
    <section className="bg-neutral-50 min-h-screen">
      {/* Top banner / hero */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745]">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-14 lg:py-16 text-white">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/80">
            Help Center
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90">
            Quick answers to how Visibuy works for buyers and sellers — from
            verification links to trust, payments, and support.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12 lg:py-16">
        {/* General + Buyers */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* General Questions */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-neutral-500">
              General
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  What is Visibuy?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Visibuy is a trust-enablement platform that helps online
                  sellers show visual proof of their products before buyers pay.
                  Sellers upload real photos or videos of an item, which buyers
                  can view through a secure verification link.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Is Visibuy a marketplace?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  No. Visibuy does not sell products and is not a marketplace.
                  Transactions happen directly between buyers and sellers.
                  Visibuy only provides verification and optional payment
                  protection tools.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Do I need an account to use Visibuy?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Sellers need an account to create verifications. Buyers do not
                  need an account to view verification pages — anyone with the
                  link can view the proof.
                </p>
              </div>
            </div>
          </div>

          {/* Buyers */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-neutral-500">
              For Buyers
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  How does Visibuy help me as a buyer?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Visibuy lets you see real photos or videos of the exact
                  product you’re buying — recorded by the seller — before you
                  make a payment. This reduces guesswork and increases
                  confidence.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Does verification guarantee the product is original?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  No. Verification is informational, not a guarantee. It shows
                  what the seller submitted at the time of verification. Buyers
                  should still review all details carefully before paying.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Can I pay through Visibuy?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  In some cases, sellers may enable escrow-based payments
                  through regulated third-party payment providers. Payment
                  availability depends on the seller and the transaction.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  What happens if there is a problem with my order?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Buyers and sellers should first attempt to resolve issues
                  directly. If escrow was used, disputes are handled according
                  to the payment provider’s rules, with Visibuy assisting by
                  reviewing evidence where possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sellers + Payments */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Sellers */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-neutral-500">
              For Sellers
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  How do I create a verification?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  After creating an account, you can upload photos or videos of
                  your product. Visibuy generates a unique verification link
                  that you can share with buyers.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Where can I share my verification link?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Anywhere — WhatsApp, Instagram, Jiji, Facebook Marketplace, or
                  direct messages. The link is public and accessible to anyone
                  you share it with.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Can I share one verification link with multiple buyers?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Yes, but verification links are non-exclusive. Sharing a link
                  does not reserve a product. Sellers are responsible for
                  ensuring availability and avoiding overselling.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Does Visibuy inspect or handle my product?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  No. Visibuy does not physically inspect, store, or ship
                  products. All content is provided by the seller.
                </p>
              </div>
            </div>
          </div>

          {/* Payments & Trust */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-neutral-500">
              Payments &amp; Trust
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Does Visibuy hold buyer money?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  No. Visibuy does not hold funds. Payments and escrow are
                  handled by regulated third-party payment providers.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  What are Trust Scores or badges?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  Trust indicators are informational signals based on activity
                  and verification history. They are not guarantees or
                  certifications and should not be the sole basis for purchasing
                  decisions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">
                  How can I contact Visibuy?
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  For support or questions, contact the Visibuy team at{" "}
                  <a
                    href="mailto:support@visibuy.com.ng"
                    className="text-[#007BFF] underline"
                  >
                    support@visibuy.com.ng
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small footer note */}
        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-500">
            These FAQs are for general guidance only. For full details, please
            refer to the{" "}
            <a href="/terms" className="text-[#007BFF] underline">
              Terms &amp; Conditions
            </a>
            ,{" "}
            <a href="/privacy" className="text-[#007BFF] underline">
              Privacy Policy
            </a>
            , and{" "}
            <a href="/payment-escrow" className="text-[#007BFF] underline">
              Payment &amp; Escrow Terms
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
