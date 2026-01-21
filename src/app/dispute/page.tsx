export default function DisputeResolutionPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-neutral-900">
        <h1 className="text-3xl font-bold mb-2">
          Visibuy Dispute Resolution Policy
        </h1>
        <p className="text-sm text-neutral-500 mb-8">
          Last Updated: 10th January, 2026
        </p>

        <p className="mb-6">
          This Dispute Resolution Policy (“Policy”) outlines how disputes between
          buyers and sellers are handled on the Visibuy platform, including any
          verification facilitated with optional escrow through regulated
          third-party payment providers.
        </p>

        <p className="mb-10">
          By using Visibuy, you agree to this Policy in addition to the Terms &
          Conditions, Privacy Policy, and Payment & Escrow Terms.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">1. Scope</h2>
        <p className="mb-3">
          This Policy applies to all transactions and interactions conducted via
          the Visibuy platform, including:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            Buyer-seller disputes related to product delivery, condition, or
            representation
          </li>
          <li>Escrow-enabled verification disputes</li>
          <li>
            Issues arising from verification link misuse or misrepresentation
          </li>
        </ul>
        <p>
          Visibuy is not a party to buyer-seller contracts and does not assume
          ownership of any dispute outcomes.
        </p>

        {/* 2 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. Seller and Buyer Responsibilities
        </h2>

        <h3 className="font-semibold mt-4 mb-2">2.1 Sellers</h3>
        <p className="mb-2">Sellers are responsible for:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Delivering products as represented in verification links</li>
          <li>Responding promptly to buyer inquiries and complaints</li>
          <li>Ensuring that verification links are accurate and non-misleading</li>
          <li>Enabling escrow only for genuine, available products</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">2.2 Buyers</h3>
        <p className="mb-2">Buyers are responsible for:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Reviewing verification content carefully before purchase</li>
          <li>Communicating issues to sellers in good faith</li>
          <li>
            Using dispute channels provided by the platform and payment
            providers
          </li>
        </ul>

        {/* 3 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Initial Resolution
        </h2>
        <p className="mb-2">
          Buyers and sellers should first attempt to resolve disputes directly
          and amicably.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            Users may communicate via messages, emails, or platform tools
            provided by Visibuy
          </li>
          <li>
            Documentation, images, and transaction records should be preserved
            to support any further review
          </li>
        </ul>

        {/* 4 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Visibuy’s Assistance
        </h2>
        <p className="mb-2">Visibuy may assist by:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            Collecting and reviewing evidence submitted by buyers and sellers
          </li>
          <li>
            Providing guidance on platform rules and escrow procedures
          </li>
          <li>
            Facilitating communication with payment providers when necessary
          </li>
        </ul>
        <p className="font-medium">
          Important: Visibuy does not unilaterally adjudicate disputes or
          guarantee outcomes.
        </p>

        {/* 5 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Escrow & Payment Disputes
        </h2>
        <p className="mb-2">
          Escrow disputes are governed by the payment provider’s rules:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Funds are held by the third-party provider, not Visibuy</li>
          <li>
            Release, reversal, or refund decisions are determined by the payment
            provider
          </li>
          <li>
            Visibuy provides evidence or context but does not decide fund
            movements
          </li>
        </ul>

        {/* 6 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Evidence & Documentation
        </h2>
        <p className="mb-2">
          Both buyers and sellers are encouraged to provide:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Screenshots or photos/videos relevant to the dispute</li>
          <li>Transaction identifiers and verification link URLs</li>
          <li>Communications and delivery confirmations</li>
        </ul>
        <p>
          This helps the payment provider or any authorized reviewer reach an
          informed resolution.
        </p>

        {/* 7 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          7. Limitation of Liability
        </h2>
        <p className="mb-2">Visibuy is not liable for:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Any loss or damages arising from disputes</li>
          <li>
            Decisions made by payment providers or third-party entities
          </li>
          <li>Inaccurate representations by sellers</li>
        </ul>
        <p>
          Users acknowledge that the platform is a facilitative tool, not a
          guarantee of transaction success.
        </p>

        {/* 8 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">8. Governing Law</h2>
        <p>
          All disputes are subject to the laws of the Federal Republic of
          Nigeria.
        </p>

        {/* 9 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Updates to Policy
        </h2>
        <p>
          Visibuy may update this Policy periodically. Continued use of the
          platform constitutes acceptance of any updates.
        </p>

        {/* 10 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">10. Contact</h2>
        <p className="mb-1">For dispute-related inquiries:</p>
        <p className="mb-1 font-medium">Visibuy Dispute Support Team</p>
        <a
          href="mailto:support@visibuy.com.ng"
          className="text-blue-600 underline"
        >
          support@visibuy.com.ng
        </a>
      </div>
    </section>
  );
}
