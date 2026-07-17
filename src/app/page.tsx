import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { OffKeyboardSection } from "@/components/sections/OffKeyboardSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-24 py-10 sm:gap-28 sm:py-14">
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <OffKeyboardSection />
      </main>
      <SiteFooter />
    </>
  );
}
