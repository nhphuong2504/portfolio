import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<
  ButtonVariant,
  { base: string; hover: string; focus: string; disabled: string }
> = {
  primary: {
    base: "bg-editorial-foreground text-white",
    hover: "hover:bg-neutral-800",
    focus: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editorial-foreground",
    disabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  },
  secondary: {
    base: "border border-editorial-border bg-white text-editorial-foreground",
    hover: "hover:bg-editorial-background hover:border-editorial-muted",
    focus: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    disabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  },
  ghost: {
    base: "bg-transparent text-editorial-foreground",
    hover: "hover:bg-editorial-background",
    focus: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    disabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  },
};

const sizeStyles = {
  md: "min-h-[44px] px-6 py-3 text-base",
  sm: "min-h-[44px] px-4 py-2 text-sm",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: keyof typeof sizeStyles;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: "button";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: "link";
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    children,
  } = props;

  const v = variantStyles[variant];
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-editorial font-medium transition duration-ui " +
    v.base +
    " " +
    v.hover +
    " " +
    v.focus +
    " " +
    v.disabled +
    " " +
    sizeStyles[size];

  if (props.as === "link") {
    return (
      <Link
        href={props.href}
        className={`${base} ${className}`.trim()}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={disabled}
      className={`${base} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
