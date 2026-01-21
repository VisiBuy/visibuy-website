export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-neutral-900">
        <h1 className="text-3xl font-bold mb-2">Visibuy Terms &amp; Conditions</h1>
        <p className="text-sm text-neutral-500 mb-8">
          Last Updated: 10th January, 2026
        </p>

        <p className="mb-6">
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and
          use of the Visibuy platform, including all websites, applications,
          dashboards, verification pages, APIs, and related services
          (collectively, the &quot;Platform&quot;). By accessing or using
          Visibuy, you agree to be bound by these Terms.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">1. About Visibuy</h2>
        <p className="mb-3">
          Visibuy is a trust-enablement platform that provides tools designed to
          help online sellers present visual information about products and
          offer payment protection options through regulated third-party
          providers.
        </p>
        <p>
          Visibuy is not a marketplace and does not sell products. Visibuy does
          not take ownership of, inspect, or physically handle any products
          listed or verified on the Platform.
        </p>

        {/* 2 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">2. Eligibility</h2>
        <p className="mb-3">
          You must be at least 18 years old to create a seller account on
          Visibuy. Buyers may access public verification pages without creating
          an account.
        </p>
        <p>
          By using the Platform, you represent that you have the legal capacity
          to enter into a binding agreement under applicable Nigerian law.
        </p>

        {/* 3 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">3. Role of Visibuy</h2>

        <h3 className="font-semibold mt-4 mb-2">3.1 Platform-Only Role</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Visibuy acts solely as a technology service provider.</li>
          <li>Visibuy is not a party to transactions between buyers and sellers.</li>
          <li>All sales contracts are formed directly between buyers and sellers.</li>
          <li>Visibuy does not guarantee the completion of any transaction.</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">3.2 No Product Guarantees</h3>
        <p className="mb-2">Visibuy does not guarantee:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Product authenticity</li>
          <li>Product condition or quality</li>
          <li>Product legality</li>
          <li>Seller performance or buyer payment behavior</li>
        </ul>
        <p>All purchasing decisions are made at the buyer’s discretion.</p>

        {/* 4 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Visual Verification Services
        </h2>

        <h3 className="font-semibold mt-4 mb-2">4.1 Nature of Verification</h3>
        <p className="mb-3">
          Visibuy enables sellers to upload images and videos (&quot;Visual
          Proof&quot;) related to a product. This Visual Proof is displayed to
          buyers via a unique, public URL.
        </p>
        <p className="mb-2">Visual verification:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Is informational in nature</li>
          <li>Represents content submitted by the seller</li>
          <li>Is not a certification or guarantee of authenticity</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">
          4.2 Automated &amp; AI-Assisted Checks
        </h3>
        <p className="mb-2">
          Visibuy may apply automated or AI-assisted analysis to uploaded media
          to detect indicators of manipulation or duplication.
        </p>
        <p className="mb-2">These checks:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Are probabilistic</li>
          <li>May not detect all forms of manipulation or fraud</li>
          <li>Do not constitute a final determination of authenticity</li>
        </ul>

        {/* 5 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Trust Scores &amp; Badges
        </h2>
        <p className="mb-2">
          Trust Scores and badges are generated based on platform activity and
          verification history.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Trust Scores are informational signals only</li>
          <li>They are not endorsements, guarantees, or certifications</li>
          <li>
            They should not be relied upon as the sole basis for a purchasing
            decision
          </li>
        </ul>

        {/* 6 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Payments, Escrow &amp; Third-Party Providers
        </h2>

        <h3 className="font-semibold mt-4 mb-2">6.1 Payment Processing</h3>
        <p className="mb-2">
          Payment services, including escrow functionality, are provided by
          regulated third-party payment providers, such as Flutterwave.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Visibuy does not hold customer funds</li>
          <li>Visibuy does not operate as a bank or financial institution</li>
          <li>
            Funds are processed and held in accordance with the payment
            provider’s terms
          </li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">6.2 Escrow Release Conditions</h3>
        <p className="mb-2">Where escrow is enabled, funds may be released:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Upon buyer confirmation of receipt</li>
          <li>Upon expiration of a defined confirmation period</li>
          <li>
            In accordance with payment provider rules during disputes
          </li>
        </ul>

        {/* 7 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">7. Disputes</h2>
        <p className="mb-2">
          Visibuy may provide tools and processes to assist with dispute review.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Dispute resolution is evidence-based</li>
          <li>Visibuy does not unilaterally adjudicate ownership or fault</li>
          <li>
            Final fund movements are subject to payment provider policies
          </li>
        </ul>

        {/* 8 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. Seller Responsibilities
        </h2>
        <p className="mb-2">Sellers agree to:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Upload accurate and truthful media</li>
          <li>Own or have rights to the content submitted</li>
          <li>Comply with applicable laws and platform rules</li>
          <li>Fulfill orders as represented to buyers</li>
        </ul>

        {/* 9 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Buyer Responsibilities
        </h2>
        <p className="mb-2">Buyers acknowledge that:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            Visual verification assists decision-making but does not eliminate
            risk
          </li>
          <li>
            They are responsible for reviewing provided information carefully
          </li>
          <li>Transactions are conducted directly with sellers</li>
        </ul>

        {/* 10 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          10. Intellectual Property
        </h2>
        <p className="mb-2">
          All Visibuy platform software, branding, and proprietary systems
          remain the exclusive property of Visibuy.
        </p>
        <p>
          Users grant Visibuy a limited license to display uploaded content
          solely for verification and platform operation purposes.
        </p>

        {/* 11 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          11. Limitation of Liability
        </h2>
        <p className="mb-2">To the maximum extent permitted by law:</p>
        <p>
          Visibuy shall not be liable for transaction losses, product defects or
          misrepresentation, missed deliveries, or indirect or consequential
          damages.
        </p>

        {/* 12 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">12. Termination</h2>
        <p>
          Visibuy reserves the right to suspend or terminate access for
          violations of these Terms or applicable laws.
        </p>

        {/* 13 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>

        {/* 14 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">14. Contact</h2>
        <p className="mb-1">For legal inquiries:</p>
        <p className="mb-1 font-medium">Visibuy Legal Team</p>
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
