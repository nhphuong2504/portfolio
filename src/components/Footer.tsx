import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-editorial-border bg-editorial-background">
      <Container className="py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-editorial-muted">
            © {new Date().getFullYear()} Portfolio. Built with Next.js.
          </p>
          <div className="flex gap-6">
            <Link
              href="/projects"
              className="min-h-[44px] flex items-center text-sm text-editorial-muted transition duration-ui hover:text-editorial-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="min-h-[44px] flex items-center text-sm text-editorial-muted transition duration-ui hover:text-editorial-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
