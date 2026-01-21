import { ReactNode } from "react";

type TrustStepCardProps = {
  step: string;
  title: string;
  description: string;
  icon: ReactNode;
  badgeColor: "primary" | "warning" | "success";
  bgColor?: "blue" | "orange" | "green";
};

export function TrustStepCard({
  step,
  title,
  description,
  icon,
  badgeColor,
  bgColor = "blue",
}: TrustStepCardProps) {
  const badgeStyles = {
    primary: "bg-brand-primary/10 text-brand-primary",
    warning: "bg-orange-100 text-orange-600",
    success: "bg-brand-success/10 text-brand-success",
  };
  const backgroundStyles = {
    blue: "bg-blue-200",
    orange: "bg-orange-50",
    green: "bg-green-100",
  };
  return (
    <div
      className={`rounded-card bg-neutral-50 p-6 shadow-level1 ${backgroundStyles[bgColor]}`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[badgeColor]}`}
      >
        {step}
      </span>

      <div className="mt-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 ">
        {icon}
      </div>

      <h3 className="mt-4 mx-auto flex font-heading justify-center  items-center text-base font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}
