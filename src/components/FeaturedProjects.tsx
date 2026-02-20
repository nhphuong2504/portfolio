import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const projects = getFeaturedProjects(3);

  if (projects.length === 0) return null;

  return (
    <Section className="border-t border-editorial-border" aria-labelledby="featured-heading">
      <Container>
        <h2 id="featured-heading" className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mt-2 text-editorial-muted">
          Selected work with problem framing, approach, and measurable impact.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Button
            as="link"
            href="/projects"
            variant="ghost"
            size="sm"
            className="-ml-2 text-accent hover:text-accent-hover hover:bg-accent-muted/50"
          >
            View all projects →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
