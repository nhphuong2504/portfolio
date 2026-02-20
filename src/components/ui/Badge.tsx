import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-editorial-border bg-editorial-background px-2.5 py-0.5 text-xs font-medium text-editorial-muted ${className}`.trim()}
    >
      {children}
    </span>
  );
}
