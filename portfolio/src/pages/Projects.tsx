import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, LayoutGrid, List, ChevronDown, X } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "@/data/projects";
import { getUiContent, useLocale } from "@/i18n";
import { sanitizeInput } from "@/lib/security";
import { usePostHog } from "@posthog/react";
import BackLink from "@/components/shared/BackLink";
import { parseProjectPeriod } from "@/lib/utils";

const statusFilters = ["all", "completed", "in-progress", "won"] as const;

const featuredTechIds = [
  "typescript",
  "python",
  "java",
  "angular",
  "pytorch",
  "mcp",
  "langchain",
  "llm",
  "docker",
  "rest-api",
  "vue",
  "bun",
  "hono",
  "prisma",
  "postgresql",
  "hugging-face",
  "streamlit",
  "ai-agents",
] as const;

const techFilterTexts = {
  fr: {
    technologies: "Technologies",
    all: "Toutes",
    allTechnologies: "Toutes les technologies",
    filterByTech: "Filtrer par technologie",
    reset: "Réinitialiser",
  },
  en: {
    technologies: "Technologies",
    all: "All",
    allTechnologies: "All technologies",
    filterByTech: "Filter by technology",
    reset: "Reset",
  },
  ar: {
    technologies: "التقنيات",
    all: "الكل",
    allTechnologies: "جميع التقنيات",
    filterByTech: "تصفية حسب التقنية",
    reset: "إعادة تعيين",
  },
} as const;

export default function ProjectsPage() {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const texts = techFilterTexts[locale];
  const projects = useMemo(() => getProjects(locale), [locale]);
  const posthog = usePostHog();

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTech = searchParams.get("tech") ?? "all";

  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<(typeof statusFilters)[number]>("all");
  const [viewMode, setViewMode] = useState<"card" | "list">(() => {
    const saved = localStorage.getItem("projects-view-mode");
    return saved === "list" ? "list" : "card";
  });
  const [sortBy, setSortBy] = useState<"recency" | "relevance">("relevance");

  const applyTechFilter = (techId: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (techId === "all") {
      nextParams.delete("tech");
    } else {
      nextParams.set("tech", techId);
    }

    setSearchParams(nextParams, { replace: true });

    posthog.capture("projects_technology_filter_applied", {
      technology: techId,
    });
  };

  const handleViewModeChange = (mode: "card" | "list") => {
    setViewMode(mode);
    localStorage.setItem("projects-view-mode", mode);
    posthog.capture("projects_view_mode_changed", { view_mode: mode });
  };

  const handleSortChange = (sort: "recency" | "relevance") => {
    setSortBy(sort);
    posthog.capture("projects_sort_applied", { sort_by: sort });
  };

  const technologyOptions = useMemo(() => {
    const allTechIds = new Set(
      projects.flatMap((project) => project.skillIds),
    );

    return [...allTechIds]
      .map((id) => {
        const projectUsingIt = projects.find((project) =>
          project.skillIds.includes(id),
        );

        const displayName =
          projectUsingIt?.stack.find(
            (stackName) =>
              stackName.toLocaleLowerCase().replace(/[^a-z0-9]/g, "") ===
              id.toLocaleLowerCase().replace(/[^a-z0-9]/g, ""),
          ) ??
          id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ");

        return {
          id,
          label: displayName,
        };
      })
      .sort((a, b) => a.label.localeCompare(b.label, locale));
  }, [locale, projects]);

  const visibleTechPills = useMemo(() => {
    const optionsMap = new Map(technologyOptions.map((item) => [item.id, item]));
    return featuredTechIds
      .map((techId) => optionsMap.get(techId))
      .filter((item): item is { id: string; label: string } => item !== undefined);
  }, [technologyOptions]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = sanitizeInput(query).toLowerCase();

    return projects.filter((project) => {
      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;
      const matchesTechnology =
        selectedTech === "all" || project.skillIds.includes(selectedTech);
      const haystack = [
        project.title,
        project.subtitle,
        project.summary,
        project.organization,
        project.period,
        project.stack.join(" "),
        project.skillIds.join(" "),
        project.highlights.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || haystack.includes(normalizedQuery);

      return matchesStatus && matchesTechnology && matchesQuery;
    });
  }, [projects, query, selectedTech, statusFilter]);

  const sortedAndFilteredProjects = useMemo(() => {
    const sorted = [...filteredProjects];

    return sorted.sort((a, b) => {
      if (sortBy === "relevance") {
        const scoreA = a.relevance;
        const scoreB = b.relevance;
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
      } else {
        // Featured first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;

        // Sort by period recency
        const periodA = parseProjectPeriod(a.period);
        const periodB = parseProjectPeriod(b.period);
        if (periodB !== periodA) {
          return periodB - periodA;
        }

        // Secondary sort by relevance
        return b.relevance - a.relevance;
      }
      return 0;
    });
  }, [filteredProjects, sortBy]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6">
        <BackLink to="/">{content.projectsPage.backHome}</BackLink>
      </div>

      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <h1 className="flex items-center gap-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {content.projectsPage.title}
            <span className="text-xl font-normal text-muted-foreground md:text-2xl">
              ({sortedAndFilteredProjects.length})
            </span>
          </h1>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-4">
        {/* Search Bar */}
        <label className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            maxLength={100}
            placeholder={content.projectsPage.searchPlaceholder}
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </label>

        {/* Technology Filters (Pills + Dropdown) */}
        <div className="flex flex-col gap-3 rounded-md border border-border bg-card/40 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
              {texts.technologies}
            </span>

            <button
              type="button"
              onClick={() => {
                applyTechFilter("all");
              }}
              aria-pressed={selectedTech === "all"}
              className={`rounded-md border px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-colors ${
                selectedTech === "all"
                  ? "border-foreground bg-muted text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {texts.all}
            </button>

            {visibleTechPills.map((tech) => {
              const isActive = selectedTech === tech.id;

              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => {
                    applyTechFilter(tech.id);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-md border px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "border-foreground bg-muted text-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {tech.label}
                </button>
              );
            })}

            {selectedTech !== "all" ? (
              <button
                type="button"
                onClick={() => {
                  applyTechFilter("all");
                }}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="size-3" />
                {texts.reset}
              </button>
            ) : null}
          </div>

          <label className="relative block max-w-xs">
            <span className="sr-only">
              {texts.filterByTech}
            </span>

            <select
              value={selectedTech}
              onChange={(event) => {
                applyTechFilter(event.target.value);
              }}
              className="w-full appearance-none rounded-md border border-border bg-card px-3 py-2 pr-9 text-sm text-foreground outline-none transition-colors hover:border-foreground focus:border-foreground rtl:pl-9 rtl:pr-3"
            >
              <option value="all">
                {texts.allTechnologies}
              </option>

              {technologyOptions.map((tech) => (
                <option key={tech.id} value={tech.id}>
                  {tech.label}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground rtl:left-3 rtl:right-auto" />
          </label>
        </div>

        {/* Controls Row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((filter) => {
              const isActive = statusFilter === filter;
              const label =
                filter === "all"
                  ? content.projectsPage.filterAll
                  : filter === "completed"
                    ? content.projectsPage.filterCompleted
                    : filter === "in-progress"
                      ? content.projectsPage.filterInProgress
                      : content.projectsPage.filterWon;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setStatusFilter(filter);
                    posthog.capture("projects_filter_applied", { filter });
                  }}
                  className={`rounded-md border px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "border-foreground bg-muted text-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Sort & View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sort Toggle */}
            <div className="flex items-center rounded-md border border-border bg-card p-1">
              <button
                type="button"
                onClick={() => { handleSortChange("relevance"); }}
                className={`rounded-md px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                  sortBy === "relevance"
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {content.projectsPage.sortRelevance}
              </button>
              <button
                type="button"
                onClick={() => { handleSortChange("recency"); }}
                className={`rounded-md px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                  sortBy === "recency"
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {content.projectsPage.sortRecent}
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center rounded-md border border-border bg-card p-1">
              <button
                type="button"
                onClick={() => { handleViewModeChange("card"); }}
                className={`rounded-md p-1.5 transition-colors ${
                  viewMode === "card"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title={content.projectsPage.viewCard}
              >
                <LayoutGrid className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => { handleViewModeChange("list"); }}
                className={`rounded-md p-1.5 transition-colors ${
                  viewMode === "list"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title={content.projectsPage.viewList}
              >
                <List className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAndFilteredProjects.length ? (
            sortedAndFilteredProjects.map((project) => (
              <div
                id={project.slug}
                key={project.slug}
                className="scroll-mt-24 flex w-full"
              >
                <ProjectCard project={project} viewMode="card" />
              </div>
            ))
          ) : (
            <p className="col-span-full border border-border bg-card px-4 py-8 text-center text-sm text-muted-foreground">
              {content.projectsPage.noResults}
            </p>
          )}
        </div>
      ) : (
        <div className="overflow-hidden border border-border bg-card divide-y divide-border">
          {sortedAndFilteredProjects.length ? (
            sortedAndFilteredProjects.map((project) => (
              <div
                id={project.slug}
                key={project.slug}
                className="scroll-mt-24"
              >
                <ProjectCard project={project} viewMode="list" />
              </div>
            ))
          ) : (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              {content.projectsPage.noResults}
            </p>
          )}
        </div>
      )}
    </main>
  );
}


