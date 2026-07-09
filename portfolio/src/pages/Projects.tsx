import { useMemo, useState } from "react"
import { ArrowLeft, Search } from "lucide-react"
import ProjectCard from "@/components/projects/ProjectCard"
import { getProjects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { getUiContent, useLocale } from "@/i18n"
import { sanitizeInput } from "@/lib/security"
import { usePostHog } from "@posthog/react"

const statusFilters = ["all", "completed", "in-progress", "won"] as const

export default function ProjectsPage() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const projects = useMemo(() => getProjects(locale), [locale])
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<(typeof statusFilters)[number]>("all")
  const posthog = usePostHog()

  const filteredProjects = useMemo(() => {
    const normalizedQuery = sanitizeInput(query).toLowerCase()

    return projects.filter((project) => {
      const matchesStatus = statusFilter === "all" || project.status === statusFilter
      const haystack = [
        project.title,
        project.subtitle,
        project.summary,
        project.organization,
        project.period,
        project.stack.join(" "),
        project.highlights.join(" "),
      ]
        .join(" ")
        .toLowerCase()

      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery)

      return matchesStatus && matchesQuery
    })
  }, [projects, query, statusFilter])

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <h1 className="flex items-center gap-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {content.projectsPage.title}
            <span className="text-xl font-normal text-muted-foreground md:text-2xl">
              ({filteredProjects.length})
            </span>
          </h1>
        </div>

        <Button asChild variant="outline" className="w-fit rounded-md">
          <a href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="size-4" />
            {content.projectsPage.backHome}
          </a>
        </Button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <label className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); }}
            maxLength={100}
            placeholder={content.projectsPage.searchPlaceholder}
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {statusFilters.map((filter) => {
            const isActive = statusFilter === filter
            const label =
              filter === "all"
                ? content.projectsPage.filterAll
                : filter === "completed"
                  ? content.projectsPage.filterCompleted
                  : filter === "in-progress"
                    ? content.projectsPage.filterInProgress
                    : content.projectsPage.filterWon

            return (
              <button
                key={filter}
                type="button"
                onClick={() => { setStatusFilter(filter); posthog.capture('projects_filter_applied', { filter }); }}
                className={`rounded-md border px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-foreground bg-muted text-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="overflow-hidden border border-border bg-card divide-y divide-border">
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <div id={project.slug} key={project.slug} className="scroll-mt-24">
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <p className="px-4 py-8 text-center text-sm text-muted-foreground">
            {content.projectsPage.noResults}
          </p>
        )}
      </div>
    </main>
  )
}
