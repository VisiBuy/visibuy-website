import { ReactNode } from "react";

type PaymentTrustCardProps = {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
  bgColor: string;
};

export function PaymentTrustCard({
  title,
  description,
  points,
  icon,
  bgColor,
}: PaymentTrustCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-card  p-6 text-neutral-50 shadow-level2 ${bgColor}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-card bg-white mx-auto">
        <div
          className={`flex items-center justify-center  text-${bgColor.replace(
            "bg-",
            ""
          )}`}
        >
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-center font-heading text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-neutral-50/90">{description}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
              <span
                className={`text-lg font-bold text-${bgColor.replace(
                  "bg-",
                  ""
                )}`}
              >
                ✓
              </span>
            </div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
