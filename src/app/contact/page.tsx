import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — open to data science opportunities.`,
};

const linkClass =
  "mt-2 block text-lg font-medium text-accent transition duration-ui hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial";

export default function ContactPage() {
  return (
    <Container maxWidth="2xl" className="py-12 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-lg text-editorial-muted">
        Open to full-time roles and interesting data science opportunities.
        Reach out via email or LinkedIn.
      </p>

      <div className="mt-12 space-y-6">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-editorial-subtle">
            Email
          </h2>
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            {siteConfig.email}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-editorial-subtle">
            LinkedIn
          </h2>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {siteConfig.linkedin.replace(/^https?:\/\//, "")}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-editorial-subtle">
            GitHub
          </h2>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {siteConfig.github.replace(/^https?:\/\//, "")}
          </a>
        </div>
        {siteConfig.resumeUrl && (
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-editorial-subtle">
              Resume
            </h2>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </Container>
  );
}
