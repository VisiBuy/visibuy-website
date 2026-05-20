import {
  ShieldCheck,
  Camera,
  Eye,
  AlertTriangle,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function ResolutionAndRulesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-4 py-2">
            <span className="text-sm font-medium text-brand-success">
              Clear Expectations
            </span>
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-heading
              font-bold
              leading-tight
              tracking-tight
              text-neutral-900
              md:text-4xl
            "
          >
            Clear expectations help
            <br />
            everyone sell better.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-600
              md:text-lg
            "
          >
            Visibuy encourages sellers and buyers to use proof responsibly and
            review products carefully before payment.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ================= SELLER CARD ================= */}
          <div
            className="
              rounded-[32px]
              border
              border-blue-100
              bg-blue-50
              p-7
              md:p-8
            "
          >
            {/* TOP */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-sm
                "
              >
                <ShieldCheck className="h-7 w-7 text-brand-primary" />
              </div>

              <div>
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2">
                  <span className="text-sm font-medium text-brand-primary">
                    Seller Expectations
                  </span>
                </div>
              </div>
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-6
                text-2xl
                font-heading
                font-bold
                leading-tight
                tracking-tight
                text-neutral-900
              "
            >
              Record and share
              <br />
              products clearly.
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Sellers should upload clear and recent proof of the actual item
              before sharing verification links with buyers.
            </p>

            {/* POINTS */}
            <div className="mt-8 space-y-5">
              <Rule
                icon={<Camera className="h-5 w-5 text-brand-primary" />}
                text="Record the actual item being sold"
              />

              <Rule
                icon={<CheckCircle2 className="h-5 w-5 text-brand-success" />}
                text="Upload recent and clear proof"
              />

              <Rule
                icon={<AlertTriangle className="h-5 w-5 text-orange-500" />}
                text="Avoid misleading or unrelated media"
              />

              <Rule
                icon={<MessageCircle className="h-5 w-5 text-purple-500" />}
                text="Communicate clearly with buyers"
              />
            </div>
          </div>

          {/* ================= BUYER CARD ================= */}
          <div
            className="
              rounded-[32px]
              border
              border-green-100
              bg-green-50
              p-7
              md:p-8
            "
          >
            {/* TOP */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-sm
                "
              >
                <Eye className="h-7 w-7 text-brand-success" />
              </div>

              <div>
                <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-4 py-2">
                  <span className="text-sm font-medium text-brand-success">
                    Buyer Expectations
                  </span>
                </div>
              </div>
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-6
                text-2xl
                font-heading
                font-bold
                leading-tight
                tracking-tight
                text-neutral-900
              "
            >
              Inspect proof
              <br />
              carefully before payment.
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Buyers should carefully review product proof and ask questions if
              anything feels unclear before moving forward.
            </p>

            {/* POINTS */}
            <div className="mt-8 space-y-5">
              <Rule
                icon={<Eye className="h-5 w-5 text-brand-success" />}
                text="Review proof details carefully"
              />

              <Rule
                icon={<MessageCircle className="h-5 w-5 text-brand-primary" />}
                text="Ask questions if unsure about the product"
              />

              <Rule
                icon={<CheckCircle2 className="h-5 w-5 text-green-600" />}
                text="Confirm the product matches expectations"
              />

              <Rule
                icon={<AlertTriangle className="h-5 w-5 text-orange-500" />}
                text="Report misleading proof when necessary"
              />
            </div>
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-[28px]
            border
            border-neutral-200
            bg-neutral-100
            px-6
            py-6
            text-center
            md:px-10
            md:py-8
          "
        >
          <p
            className="
              text-base
              leading-relaxed
              text-neutral-700
              md:text-lg
            "
          >
            Clear proof and honest communication help online transactions feel
            smoother for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= RULE ================= */
function Rule({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white
          shadow-sm
        "
      >
        {icon}
      </div>

      <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
        {text}
      </p>
    </div>
  );
}