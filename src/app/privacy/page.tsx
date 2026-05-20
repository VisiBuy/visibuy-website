export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-neutral-900">
        {/* ================= HEADER ================= */}
        <h1 className="mb-2 text-3xl font-bold">
          Visibuy Privacy Policy
        </h1>

        <p className="mb-8 text-sm text-neutral-500">
          Last Updated: 10th January, 2026
        </p>

        <p className="mb-6 leading-relaxed text-neutral-700">
          This Privacy Policy explains how Visibuy (“Visibuy”, “we”, “us”, or
          “our”) collects, uses, stores, shares, and protects personal data
          when you access or use the Visibuy platform, including websites,
          dashboards, verification pages, and related services
          (collectively, the “Platform”).
        </p>

        <p className="mb-10 leading-relaxed text-neutral-700">
          By using Visibuy, you acknowledge that you have read and understood
          this Privacy Policy.
        </p>

        {/* ================= 1 ================= */}
        <SectionTitle title="1. Scope & Applicability" />

        <p className="mb-4 leading-relaxed text-neutral-700">
          This Privacy Policy applies to:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Sellers who create accounts on Visibuy</li>

          <li>Buyers who view public verification pages</li>

          <li>Visitors to Visibuy websites and services</li>
        </ul>

        <p className="mt-4 leading-relaxed text-neutral-700">
          This Policy applies only to data processed in connection with the
          Visibuy Platform and does not cover third-party services linked from
          Visibuy.
        </p>

        {/* ================= 2 ================= */}
        <SectionTitle title="2. Information We Collect" />

        <h3 className="mb-2 mt-6 text-lg font-semibold">
          2.1 Information You Provide
        </h3>

        <p className="mb-4 leading-relaxed text-neutral-700">
          We may collect the following information:
        </p>

        {/* SELLER INFO */}
        <SubTitle title="Seller Information" />

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Full name and business name</li>

          <li>Email address and phone number</li>

          <li>Account credentials</li>

          <li>
            Payment-related identifiers provided through payment providers
          </li>
        </ul>

        {/* VERIFICATION CONTENT */}
        <SubTitle title="Verification Content" />

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Product photos and videos recorded by sellers</li>

          <li>Product descriptions and pricing information</li>

          <li>
            Metadata associated with recorded content, such as timestamps and
            device-related information
          </li>
        </ul>

        {/* COMMUNICATIONS */}
        <SubTitle title="Communications" />

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Messages sent to Visibuy support</li>

          <li>Feedback, inquiries, and reported issues</li>
        </ul>

        {/* AUTOMATIC DATA */}
        <h3 className="mb-2 mt-8 text-lg font-semibold">
          2.2 Information Collected Automatically
        </h3>

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>IP address</li>

          <li>Browser type and device information</li>

          <li>Access times and referring pages</li>

          <li>
            Usage data related to interactions with verification pages
          </li>
        </ul>

        {/* ================= 3 ================= */}
        <SectionTitle title="3. How We Use Information" />

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Operate and maintain the Platform</li>

          <li>Display verification pages to buyers</li>

          <li>
            Display verification-related details such as timestamps
          </li>

          <li>
            Apply automated platform checks to support verification experiences
          </li>

          <li>
            Support optional third-party payment services where applicable
          </li>

          <li>
            Communicate with users about accounts or platform activity
          </li>

          <li>
            Improve platform performance, reliability, and user experience
          </li>

          <li>Comply with legal obligations</li>
        </ul>

        {/* ================= 4 ================= */}
        <SectionTitle title="4. Automated Processing" />

        <p className="mb-4 leading-relaxed text-neutral-700">
          Visibuy may use automated systems to support platform operations and
          improve verification experiences.
        </p>

        <p className="leading-relaxed text-neutral-700">
          These systems may not detect all forms of misleading, inaccurate, or
          manipulated content.
        </p>

        {/* ================= 5 ================= */}
        <SectionTitle title="5. Public Verification Pages" />

        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>
            Verification pages are accessible through unique public links
          </li>

          <li>
            Anyone with the verification link may view the content
          </li>

          <li>
            Sellers control how verification links are shared
          </li>

          <li>
            Viewing a verification page does not guarantee product availability
          </li>
        </ul>

        {/* ================= 6 ================= */}
        <SectionTitle title="6. Data Sharing & Third Parties" />

        <p className="leading-relaxed text-neutral-700">
          Visibuy may share data with trusted service providers that support
          platform operations. Visibuy does not sell personal data.
        </p>

        {/* ================= 7 ================= */}
        <SectionTitle title="7. Payments & Financial Data" />

        <p className="leading-relaxed text-neutral-700">
          Visibuy does not store full payment card details. Payment services are
          handled by third-party payment providers where applicable.
        </p>

        {/* ================= 8 ================= */}
        <SectionTitle title="8. Data Retention" />

        <p className="leading-relaxed text-neutral-700">
          Data is retained only for as long as necessary for platform
          operations, legal obligations, and service-related purposes.
        </p>

        {/* ================= 9 ================= */}
        <SectionTitle title="9. Data Security" />

        <p className="leading-relaxed text-neutral-700">
          Visibuy uses reasonable security measures designed to protect stored
          information. However, no system can guarantee complete security.
        </p>

        {/* ================= 10 ================= */}
        <SectionTitle title="10. User Rights" />

        <p className="leading-relaxed text-neutral-700">
          Users may request access, correction, deletion, or restriction of
          their data, subject to applicable laws and operational requirements.
        </p>

        {/* ================= 11 ================= */}
        <SectionTitle title="11. Children’s Privacy" />

        <p className="leading-relaxed text-neutral-700">
          Visibuy is not intended for individuals under 18 years old.
        </p>

        {/* ================= 12 ================= */}
        <SectionTitle title="12. International Data Transfers" />

        <p className="leading-relaxed text-neutral-700">
          Data may be processed outside Nigeria using service providers with
          appropriate safeguards where required.
        </p>

        {/* ================= 13 ================= */}
        <SectionTitle title="13. Changes to This Policy" />

        <p className="leading-relaxed text-neutral-700">
          Updates to this Privacy Policy will be reflected through the
          “Last Updated” date shown above.
        </p>

        {/* ================= 14 ================= */}
        <SectionTitle title="14. Contact Information" />

        <p className="mb-2 leading-relaxed text-neutral-700">
          For privacy-related inquiries:
        </p>

        <a
          href="mailto:support@visibuy.com.ng"
          className="text-brand-primary underline"
        >
          support@visibuy.com.ng
        </a>
      </div>
    </section>
  );
}

/* ================= SECTION TITLE ================= */
function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-3 mt-10 text-xl font-semibold text-neutral-900">
      {title}
    </h2>
  );
}

/* ================= SUBTITLE ================= */
function SubTitle({ title }: { title: string }) {
  return (
    <h3 className="mb-2 mt-6 text-base font-semibold text-neutral-900">
      {title}
    </h3>
  );
}