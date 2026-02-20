import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function SkillsSnapshot() {
  return (
    <Section
      className="border-t border-editorial-border bg-editorial-background"
      aria-labelledby="skills-heading"
    >
      <Container>
        <h2 id="skills-heading" className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
          Skills & Tools
        </h2>
        <p className="mt-2 text-editorial-muted">
          A snapshot of technologies I work with.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {siteConfig.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Container>
    </Section>
  );
}
