import { cx } from "@/utils/all";
import { ReactNode } from "react";

interface ContainerProps {
  large?: boolean;
  alt?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Container({
  large,
  alt,
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        large ? "max-w-screen-xl" : "max-w-screen-lg",
        !alt && "py-5 lg:py-8",
        className
      )}
    >
      {children}
    </div>
  );
}
