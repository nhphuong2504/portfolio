import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { MarkdownContent } from "@/components/MarkdownContent";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;
  const links = frontmatter.links ?? {};

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/projects"
        className="mb-6 inline-flex min-h-[44px] items-center text-sm font-medium text-editorial-muted transition duration-ui hover:text-editorial-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
      >
        ← Back to Projects
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-editorial-muted">{frontmatter.summary}</p>
        {frontmatter.role && (
          <p className="mt-2 text-sm text-editorial-subtle">
            Role: {frontmatter.role}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-editorial-border bg-editorial-background px-2.5 py-1 text-xs font-medium text-editorial-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {frontmatter.metrics && frontmatter.metrics.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm font-medium text-editorial-muted">
            {frontmatter.metrics.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        )}
      </header>

      <MarkdownContent content={content} />

      {(links.github || links.demo || links.paper || links.notebook) && (
        <div className="mt-10 border-t border-editorial-border pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-editorial-subtle">
            Artifacts
          </h3>
          <div className="mt-3 flex flex-wrap gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition duration-ui hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
              >
                GitHub
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition duration-ui hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
              >
                Live Demo
              </a>
            )}
            {links.paper && (
              <a
                href={links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition duration-ui hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
              >
                Paper
              </a>
            )}
            {links.notebook && (
              <a
                href={links.notebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent transition duration-ui hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-editorial"
              >
                Notebook
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
