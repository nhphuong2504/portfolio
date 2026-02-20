import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <Section
      className="border-t border-editorial-border bg-editorial-foreground"
      aria-labelledby="contact-heading"
    >
      <Container className="text-center">
        <h2 id="contact-heading" className="font-display text-2xl font-normal tracking-tight text-white sm:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="mt-2 text-slate-300">
          Open to full-time roles and interesting data science opportunities.
        </p>
        <div className="mt-10">
          <Button
            as="link"
            href="/contact"
            variant="secondary"
            className="border-white/30 bg-white text-editorial-foreground hover:bg-slate-100 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in touch
          </Button>
        </div>
      </Container>
    </Section>
  );
}
