import HeroSection from "@/components/hero/Hero";
import ExperienceSection from "@/components/experience/Experience";
import EducationSection from "@/components/education/Education";
import SkillsSection from "@/components/skills/Skills";
import ProjectsSection from "@/components/projects/Projects";
import CertificationSection from "@/components/certification/Certification";
import AwardsSection from "@/components/awards/Awards";
import ContactSection from "@/components/contact/Contact";
import { TOCMinimap } from "@/components/shared/TOCMinimap";

const HOME_TOC_ITEMS = [
  { title: "Home", url: "#home", depth: 2 },
  { title: "Experience", url: "#experience", depth: 2 },
  { title: "Education", url: "#education", depth: 2 },
  { title: "Skills", url: "#skills", depth: 2 },
  { title: "Projects", url: "#projects", depth: 2 },
  { title: "Certifications", url: "#certifications", depth: 2 },
  { title: "Contact", url: "#contact", depth: 2 },
];

export default function Home() {
  return (
    <main className="w-full min-w-0 relative">
      {/* Floating Table of Contents Minimap */}
      <div className="fixed right-4 xl:right-10 top-1/2 -translate-y-1/2 z-40 max-lg:hidden">
        <TOCMinimap items={HOME_TOC_ITEMS} />
      </div>

      <div className="mx-auto w-full min-w-0 max-w-4xl px-6 pt-4 pb-16 space-y-12">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationSection />
        <AwardsSection />
        <ContactSection />
      </div>
    </main>
  );
}
