import { ArrowRight } from "lucide-react"
import { useMemo } from "react"
import { getProjects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { getUiContent, useLocale } from "@/i18n"

export default function ProjectsSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const projects = useMemo(() => getProjects(locale).filter((project) => project.featured), [locale])

  return (
    <section id="projects" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-4 py-5 md:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.projects}
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-y-0 md:divide-x border-b border-border last:border-b-0">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="px-4 py-4 md:px-6 flex justify-start bg-muted/5">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <span className="underline underline-offset-4">{content.project.viewAll}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}