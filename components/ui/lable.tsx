import { cx } from "@/utils/all";
import { ReactNode } from "react";

interface LabelProps {
  color?: "green" | "indigo" | "orange" | "purple" | "pink";
  nomargin?: boolean;
  pill?: boolean;
  children: ReactNode;
}

export default function Label({
  color = "indigo",
  nomargin = false,
  pill = false,
  children,
}: LabelProps) {
  const colorClasses = {
    green: "text-emerald-700",
    indigo: "text-indigo-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };

  const margin = nomargin;

  if (pill) {
    return (
      <div
        className={
          "inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-indigo-50 text-indigo-500 rounded-full shrink-0 "
        }
      >
        {children}
      </div>
    );
  }

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium tracking-wider uppercase",
        !margin && "mt-5",
        colorClasses[color]
      )}
    >
      {children}
    </span>
  );
}
