import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Projects",
  description:
    "Data science projects — problem framing, methods, and measurable impact.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-12 sm:py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-lg text-editorial-muted">
          Selected work with problem framing, approach, and results.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-editorial-muted">No projects yet. Add content to get started.</p>
      )}
    </Container>
  );
}
