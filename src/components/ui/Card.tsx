import Link from "next/link";
import { type ReactNode } from "react";

interface CardBaseProps {
  children: ReactNode;
  className?: string;
}

interface CardAsDivProps extends CardBaseProps {
  as?: "div";
}

interface CardAsLinkProps extends CardBaseProps {
  as: "link";
  href: string;
}

type CardProps = CardAsDivProps | CardAsLinkProps;

const baseStyles =
  "block rounded-card border border-editorial-border bg-white p-6 shadow-card transition duration-ui hover:border-editorial-muted hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Card(props: CardProps) {
  const { children, className = "" } = props;

  if (props.as === "link") {
    return (
      <Link
        href={props.href}
        className={`group ${baseStyles} cursor-pointer ${className}`.trim()}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${baseStyles} ${className}`.trim()}>{children}</div>;
}
