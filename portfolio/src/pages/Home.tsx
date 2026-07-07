import HeroSection from "@/components/hero/Hero";
import ExperienceSection from "@/components/experience/Experience";
import EducationSection from "@/components/education/Education";
import SkillsSection from "@/components/skills/Skills";
import ProjectsSection from "@/components/projects/Projects";
import CertificationSection from "@/components/certification/Certification";
import AwardsSection from "@/components/awards/Awards";
import ContactSection from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="w-full min-w-0">
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
  )
}
