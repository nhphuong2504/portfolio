import type { Project } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { frontmatter } = project;
  const metrics = frontmatter.metrics?.[0] ?? frontmatter.summary;

  return (
    <Card as="link" href={`/projects/${frontmatter.slug}`}>
      <h3 className="text-lg font-semibold text-editorial-foreground transition duration-ui group-hover:text-accent">
        {frontmatter.title}
      </h3>
      <p className="mt-2 text-sm text-editorial-muted line-clamp-2">
        {frontmatter.summary}
      </p>
      <p className="mt-2 text-xs font-medium text-accent">{metrics}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {frontmatter.tags.slice(0, 4).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}
