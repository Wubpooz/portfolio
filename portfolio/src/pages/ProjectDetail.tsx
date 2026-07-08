import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, FolderOpen, Globe, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug } from "@/data/projects"
import { getUiContent, useLocale } from "@/i18n"
import { usePostHog } from "@posthog/react"

function statusToLabel(content: ReturnType<typeof getUiContent>, status: "completed" | "in-progress" | "won") {
  if (status === "won") return content.projectsPage.statusWon
  if (status === "in-progress") return content.projectsPage.statusInProgress
  return content.projectsPage.statusCompleted
}

export default function ProjectDetailPage() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const { slug } = useParams()
  const navigate = useNavigate()
  const posthog = usePostHog()
  const safeSlug = slug && /^[a-z0-9-]+$/.test(slug) ? slug : undefined
  const project = safeSlug ? getProjectBySlug(locale, safeSlug) : undefined

  useEffect(() => {
    document.title = project
      ? `${project.title} | ${content.projectsPage.title} | Mathieu Waharte`
      : `${content.projectsPage.title} | Mathieu Waharte`
  }, [content.projectsPage.title, project])

  if (!project) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-12 md:px-6">
        <h1 className="text-3xl font-semibold text-foreground">{content.projectsPage.title}</h1>
        <p className="text-sm text-muted-foreground">Project not found.</p>
        <div className="flex gap-3">
          <Button onClick={() => { void navigate("/projects"); }} className="rounded-md">
            {content.projectsPage.backHome}
          </Button>
          <Button asChild variant="outline" className="rounded-md">
            <a href="/projects">{content.project.viewAll}</a>
          </Button>
        </div>
      </main>
    )
  }

  const statusLabel = statusToLabel(content, project.status)

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {content.projectsPage.detailTitle}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-md">
            <a href="/projects" className="inline-flex items-center gap-2">
              <ArrowLeft className="size-4" />
              {content.projectsPage.backHome}
            </a>
          </Button>

          <Button asChild className="rounded-md">
            <a href={`/projects#${project.slug}`} className="inline-flex items-center gap-2">
              <FolderOpen className="size-4" />
              {content.projectsPage.openProject}
            </a>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="overflow-hidden border border-border bg-card">
            <img
              src={project.image.startsWith("/") || project.image.startsWith("http://") || project.image.startsWith("https://") ? project.image : ""}
              alt={project.imageAlt}
              className="h-auto w-full object-cover"
            />
          </div>

          <section className="space-y-4 rounded-none border border-border bg-card p-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-none px-2.5 py-1 font-normal text-muted-foreground">
                {statusLabel}
              </Badge>
              <Badge variant="secondary" className="rounded-none px-2.5 py-1 font-normal">
                {project.period}
              </Badge>
            </div>

            <p className="text-base leading-8 text-muted-foreground">{project.summary}</p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {content.projectsPage.organization}
                </p>
                <p className="mt-1 text-sm text-foreground">{project.organization}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {content.projectsPage.period}
                </p>
                <p className="mt-1 text-sm text-foreground">{project.period}</p>
              </div>
            </div>
          </section>

          <section className="rounded-none border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              {content.projectsPage.highlights}
            </h2>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-none border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              {content.projectsPage.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="rounded-none px-2.5 py-1 font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section className="rounded-none border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              {content.projectsPage.links}
            </h2>
            <div className="space-y-3">
              {project.links.map((link) => {
                const labelMap: Partial<Record<string, string>> = {
                  source: content.projectsPage.openSource,
                  demo: content.projectsPage.openDemo,
                  dataset: content.projectsPage.openDataset,
                  caseStudy: content.project.caseStudy,
                  live: content.projectsPage.openLive,
                }
                const label = labelMap[link.labelKey] ?? content.projectsPage.openProject

                const isExternal = /^https?:\/\//.test(link.href)
                const isSafe = link.href.startsWith("/") || link.href.startsWith("http://") || link.href.startsWith("https://")
                const safeHref = isSafe ? link.href : "#"

                return (
                  <Button key={`${link.labelKey}-${link.href}`} asChild variant="outline" className="w-full justify-start rounded-md">
                    <a
                      href={safeHref}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => { if (isExternal) { posthog.capture('project_external_link_clicked', { project_title: project.title, project_slug: project.slug, link_type: link.labelKey }); } }}
                      className="inline-flex items-center gap-2"
                    >
                      {link.labelKey === "source" ? <Link2 className="size-4" /> : <Globe className="size-4" />}
                      {label}
                      {isExternal ? <ArrowUpRight className="ml-auto size-4" /> : null}
                    </a>
                  </Button>
                )
              })}
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}
