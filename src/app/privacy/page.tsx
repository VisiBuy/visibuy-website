export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-neutral-900">
        <h1 className="text-3xl font-bold mb-2">Visibuy Privacy Policy</h1>
        <p className="text-sm text-neutral-500 mb-8">
          Last Updated: 10th January, 2026
        </p>

        <p className="mb-6">
          This Privacy Policy explains how Visibuy (“Visibuy”, “we”, “us”, or
          “our”) collects, uses, stores, shares, and protects personal data when
          you access or use the Visibuy platform, including all websites,
          dashboards, verification pages, APIs, and related services
          (collectively, the “Platform”).
        </p>

        <p className="mb-10">
          By using Visibuy, you acknowledge that you have read and understood
          this Privacy Policy.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          1. Scope & Applicability
        </h2>
        <p className="mb-3">This Privacy Policy applies to:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Sellers who create accounts on Visibuy</li>
          <li>Buyers who view public verification pages</li>
          <li>Visitors to Visibuy websites and services</li>
        </ul>
        <p>
          It applies only to data processed in connection with the Visibuy
          Platform and does not cover third-party websites or services linked
          from Visibuy.
        </p>

        {/* 2 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. Information We Collect
        </h2>

        <h3 className="font-semibold mt-4 mb-2">2.1 Information You Provide</h3>
        <p className="mb-3">We may collect the following information:</p>

        <p className="font-medium mt-3">Seller Information</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Full name and business name</li>
          <li>Email address and phone number</li>
          <li>Account credentials</li>
          <li>Payment-related identifiers (via payment providers)</li>
        </ul>

        <p className="font-medium mt-3">Verification Content</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>Product images and videos uploaded by sellers</li>
          <li>Product descriptions and pricing information</li>
          <li>
            Metadata associated with uploads (timestamps, watermarks, device
            data)
          </li>
        </ul>

        <p className="font-medium mt-3">Communications</p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>Messages sent to Visibuy support</li>
          <li>Feedback, inquiries, and dispute-related submissions</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">
          2.2 Information Collected Automatically
        </h3>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>IP address</li>
          <li>Device type, browser type, and operating system</li>
          <li>Access times and referring URLs</li>
          <li>Usage data related to interactions with verification pages</li>
        </ul>

        {/* 3 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. How We Use Information
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Operate and maintain the Platform</li>
          <li>Display visual verification pages to buyers</li>
          <li>
            Apply timestamps, watermarks, and integrity protections
          </li>
          <li>
            Perform automated and AI-assisted analysis for verification signals
          </li>
          <li>
            Facilitate payment and escrow workflows via third-party providers
          </li>
          <li>
            Communicate with users about their accounts or transactions
          </li>
          <li>
            Improve platform performance, security, and user experience
          </li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        {/* 4 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. AI & Automated Processing
        </h2>
        <p className="mb-2">
          Visibuy may apply automated or AI-assisted systems to analyze uploaded
          images and videos for indicators of manipulation, duplication, or
          inconsistency.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Automated analysis is probabilistic and not definitive</li>
          <li>
            It does not guarantee authenticity or detect all forms of
            manipulation
          </li>
          <li>
            Outputs are used as informational signals within the Platform
          </li>
        </ul>
        <p className="mt-3">
          Visibuy does not use uploaded media to train third-party AI models.
        </p>

        {/* 5 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Public Verification Pages
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Verification pages are publicly accessible via unique URLs</li>
          <li>Anyone with the link may view the content</li>
          <li>Links are informational and non-exclusive</li>
          <li>Sellers control how links are shared</li>
          <li>
            Viewing a verification page does not guarantee product availability
          </li>
        </ul>

        {/* 6–14 */}
        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Data Sharing & Third Parties
        </h2>
        <p>
          Visibuy may share data with trusted service providers for platform
          operations. We do not sell personal data.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          7. Payments & Financial Data
        </h2>
        <p>
          Visibuy does not store full payment card details. Payments are handled
          by regulated third-party providers.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. Data Retention
        </h2>
        <p>
          Data is retained only as long as necessary for service delivery,
          compliance, and trust records.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Data Security
        </h2>
        <p>
          Visibuy uses encryption, secure storage, and access controls. No system
          is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          10. User Rights
        </h2>
        <p>
          Users may request access, correction, deletion, or restriction of
          their data, subject to legal limits.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          11. Children’s Privacy
        </h2>
        <p>Visibuy is not intended for individuals under 18.</p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          12. International Data Transfers
        </h2>
        <p>
          Data may be processed outside Nigeria with appropriate safeguards.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          13. Changes to This Policy
        </h2>
        <p>
          Updates will be reflected by the “Last Updated” date. Continued use
          means acceptance.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          14. Contact Information
        </h2>
        <p>
          For privacy-related inquiries: <br />
          <strong>Visibuy Team</strong> <br />
          <a
            href="mailto:support@visibuy.com.ng"
            className="text-blue-600 underline"
          >
            support@visibuy.com.ng
          </a>
        </p>
      </div>
    </section>
  );
}
