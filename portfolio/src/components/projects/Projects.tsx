import { ArrowRight } from "lucide-react"
import { useMemo } from "react"
import { getProjects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { getUiContent, useLocale } from "@/i18n"

export default function ProjectsSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const projects = useMemo(() => getProjects(locale), [locale])

  return (
    <section id="projects" className="w-full py-20 md:py-28">
      <div className="mb-10 max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          {content.sections.selectedWork}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {content.sections.projects}
        </h2>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-5 flex justify-start">
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <span className="underline underline-offset-4">{content.project.viewAll}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}