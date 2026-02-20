import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { SkillsSnapshot } from "@/components/SkillsSnapshot";
import { Proof } from "@/components/Proof";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSnapshot />
      <Proof />
      <ContactCTA />
    </>
  );
}
