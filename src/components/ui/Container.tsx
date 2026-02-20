import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type MaxWidth = "5xl" | "3xl" | "2xl";

interface ContainerProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "nav";
  maxWidth?: MaxWidth;
}

const maxWidthClasses: Record<MaxWidth, string> = {
  "5xl": "max-w-5xl",
  "3xl": "max-w-3xl",
  "2xl": "max-w-2xl",
};

export function Container({
  children,
  className = "",
  as: Component = "div",
  maxWidth = "5xl",
  ...rest
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto ${maxWidthClasses[maxWidth]} px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
