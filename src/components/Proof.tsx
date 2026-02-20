import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Proof() {
  if (!siteConfig.proof?.length) return null;

  return (
    <Section className="border-t border-editorial-border" aria-labelledby="proof-heading">
      <Container>
        <h2 id="proof-heading" className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
          Highlights
        </h2>
        <p className="mt-2 text-editorial-muted">
          Awards, certifications, publications, and notable metrics.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.proof.map((item, i) => (
            <Card key={i} as="div" className="p-5">
              <p className="text-sm font-medium uppercase tracking-wider text-editorial-subtle">
                {item.type}
              </p>
              <p className="mt-1 font-semibold text-editorial-foreground">{item.label}</p>
              <p className="mt-1 text-editorial-muted">{item.value}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
