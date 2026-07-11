import HeroSection from "@/components/hero/Hero";
import ExperienceSection from "@/components/experience/Experience";
import EducationSection from "@/components/education/Education";
import SkillsSection from "@/components/skills/Skills";
import ProjectsSection from "@/components/projects/Projects";
import CertificationSection from "@/components/certification/Certification";
import LanguagesAndInterestsSection from "@/components/languages-interests/LanguagesAndInterests";
import AwardsSection from "@/components/awards/Awards";
import ContactSection from "@/components/contact/Contact";
import { TOCMinimap } from "@/components/shared/TOCMinimap";
import { getUiContent, useLocale } from "@/i18n";

export default function Home() {
  const { locale } = useLocale()
  const content = getUiContent(locale)

  const homeTocItems = [
    { title: content.nav.home, url: "#home", depth: 2 },
    { title: content.sections.experience, url: "#experience", depth: 2 },
    { title: content.sections.education, url: "#education", depth: 2 },
    { title: content.sections.skillsTitle, url: "#skills", depth: 2 },
    { title: content.sections.projects, url: "#projects", depth: 2 },
    { title: content.sections.certifications, url: "#certifications", depth: 2 },
    { title: content.sections.languagesAndInterests, url: "#languages-interests", depth: 2 },
    { title: content.sections.contactTitle, url: "#contact", depth: 2 },
  ];

  const tocSideClass = locale === "ar" ? "left-4 xl:left-10" : "right-4 xl:right-10"

  return (
    <main className="w-full min-w-0 relative">
      {/* Floating Table of Contents Minimap */}
      <div className={`fixed top-1/2 z-40 -translate-y-1/2 max-lg:hidden ${tocSideClass}`}>
        <TOCMinimap items={homeTocItems} />
      </div>

      <div className="mx-auto w-full min-w-0 max-w-4xl px-6 pt-4 pb-16 space-y-12">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationSection />
        <LanguagesAndInterestsSection />
        <AwardsSection />
        <ContactSection />
      </div>
    </main>
  );
}
