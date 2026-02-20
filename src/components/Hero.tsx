import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/Avatar";

export function Hero() {
  return (
    <Section aria-labelledby="hero-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="min-w-0 animate-hero">
            <h1
              id="hero-heading"
              className="font-display text-4xl font-normal tracking-tight text-editorial-foreground sm:text-5xl lg:text-6xl"
            >
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl text-editorial-muted sm:text-2xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 flex items-baseline gap-2 text-lg text-editorial-subtle">
              <span
                className="inline-block h-0.5 w-8 shrink-0 self-center bg-accent"
                aria-hidden
              />
              {siteConfig.differentiator}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as="link" href="/projects" variant="primary">
                View Work
              </Button>
              <Button as="link" href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-hero-delay lg:justify-end">
            <Avatar
              src={siteConfig.avatarUrl || undefined}
              name={siteConfig.name}
              size="lg"
              className="shrink-0"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
