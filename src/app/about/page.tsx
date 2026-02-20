import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AboutImage } from "@/components/AboutImage";

export const metadata = {
  title: "About",
  description: `About ${siteConfig.name} — ${siteConfig.differentiator}`,
};

export default function AboutPage() {
  return (
    <Container maxWidth="3xl" className="py-12 sm:py-16">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
        <AboutImage
          src={siteConfig.aboutImageUrl || siteConfig.avatarUrl || undefined}
          alt={`${siteConfig.name} full-length`}
          className="shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-4xl font-normal tracking-tight">About</h1>
          <div className="mt-8 space-y-6 text-editorial-muted">
        <p className="leading-relaxed">
        I&apos;m a Master&apos;s student specializing in Data Science and AI and a top 2% Computer Science graduate, passionate about turning messy, complex data into clear insights that drive real-world decisions and impact. I enjoy building data-driven and software-based systems that help teams understand their users, improve growth and retention, and make smarter, evidence-based choices. My work ranges from developing scalable tools and intuitive applications to conducting research in agrivoltaics, exploring how solar energy and agriculture can share land to increase both productivity and sustainability.
        </p>
        <p className="leading-relaxed">
        Beyond academics and research, I&apos;m naturally curious and community-oriented. I enjoy playing badminton, am a lifelong Arsenal fan, and love sharing Vietnamese food and culture as a way to connect with people from different backgrounds.
        </p>
        <p className="leading-relaxed">
        I&apos;m currently looking for a role in data science and AI where I can apply my skills to real-world problems and make a meaningful impact.
        </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button as="link" href="/projects" variant="primary">
              View my work
            </Button>
            <Button as="link" href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
