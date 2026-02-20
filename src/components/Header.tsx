import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-editorial-border bg-white/95 shadow-header backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <Container as="nav" className="flex items-center justify-between gap-4 py-3 sm:py-4" aria-label="Main navigation">
        <Link
          href="/"
          className="min-h-[44px] min-w-[44px] flex items-center text-lg font-semibold text-editorial-foreground transition duration-ui hover:text-editorial-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
        >
          Portfolio
        </Link>
        <ul className="flex flex-wrap justify-end gap-1 sm:gap-2">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="min-h-[44px] min-w-[44px] flex items-center px-4 text-sm font-medium text-editorial-muted transition duration-ui hover:text-editorial-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
