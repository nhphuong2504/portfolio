import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
  role?: string;
  tools: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    notebook?: string;
  };
  metrics?: string[];
  featured?: boolean;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

const contentDir = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getProjectBySlug(slug: string): Project | null {
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const filePath = path.join(contentDir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
      };
    }
  }
  return null;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter((p) => p.frontmatter.featured)
    .slice(0, limit);
}
