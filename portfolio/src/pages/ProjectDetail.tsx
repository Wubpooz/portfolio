import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  ArrowUpRight,
  Globe,
  Database,
  Play,
  Search,
  Code2,
  FileText,
} from "lucide-react";
import BackLink from "@/components/shared/BackLink";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug } from "@/data/projects";
import { getUiContent, useLocale } from "@/i18n";
import { usePostHog } from "@posthog/react";
import { TechPillIcon } from "@/components/projects/ProjectCard";
import { findSkillIcon, shouldInvertIcon, getIconUrl } from "@/lib/utils";

function statusToLabel(
  content: ReturnType<typeof getUiContent>,
  status: "completed" | "in-progress" | "won",
) {
  if (status === "won") return content.projectsPage.statusWon;
  if (status === "in-progress") return content.projectsPage.statusInProgress;
  return content.projectsPage.statusCompleted;
}

function ProjectLinksSection({
  project,
  content,
  posthog,
}: Readonly<{
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
  content: ReturnType<typeof getUiContent>;
  posthog: ReturnType<typeof usePostHog>;
}>) {
  const { locale } = useLocale();

  // Priority map for sorting (smaller value = higher priority/first)
  const priorityOrder: Record<string, number> = {
    live: 1,
    demo: 2,
    paper: 3,
    search: 4,
    dataset: 5,
    source: 6,
  };

  // Filter out details links since we are already on the details page
  // Sort the links based on the priority order
  const displayLinks = project.links
    .filter((link) => link.labelKey !== "details")
    .sort((a, b) => {
      const priorityA = priorityOrder[a.labelKey] ?? 100;
      const priorityB = priorityOrder[b.labelKey] ?? 100;
      return priorityA - priorityB;
    });

  if (displayLinks.length === 0) return null;

  // The first link in our sorted array is our primary link
  const primaryLink = displayLinks[0];

  return (
    <section className="rounded-none border border-border bg-card p-6">
      <h2 className="mb-4 text-xl font-semibold text-foreground">
        {content.projectsPage.links}
      </h2>
      <div className="space-y-3">
        {displayLinks.map((link) => {
          const labelMap: Partial<Record<string, string>> = {
            source: content.projectsPage.openSource,
            demo: content.projectsPage.openDemo,
            dataset: content.projectsPage.openDataset,
            live: content.projectsPage.openLive,
            search: content.projectsPage.openSearch,
          };
          const label =
            link.label?.[locale] ??
            labelMap[link.labelKey] ??
            content.projectsPage.openProject;

          const isExternal = /^https?:\/\//.test(link.href);
          const isSafe =
            link.href.startsWith("/") ||
            link.href.startsWith("http://") ||
            link.href.startsWith("https://");
          const safeHref = isSafe ? link.href : "#";

          // Choose appropriate icon for each type of link
          let LinkIcon = Globe;
          if (link.labelKey === "source") LinkIcon = Code2;
          else if (link.labelKey === "dataset") LinkIcon = Database;
          else if (link.labelKey === "demo") LinkIcon = Play;
          else if (link.labelKey === "search") LinkIcon = Search;
          else if (link.labelKey === "paper") LinkIcon = FileText;

          const isPrimary = link === primaryLink;
          const buttonVariant = isPrimary ? "default" : "outline";

          return (
            <Button
              key={`${link.labelKey}-${link.href}`}
              asChild
              variant={buttonVariant}
              className="w-full justify-start rounded-md"
            >
              <a
                href={safeHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={() => {
                  if (isExternal) {
                    posthog.capture("project_external_link_clicked", {
                      project_title: project.title,
                      project_slug: project.slug,
                      link_type: link.labelKey,
                    });
                  }
                }}
                className="inline-flex items-center gap-2"
              >
                <LinkIcon
                  className={`size-4 shrink-0 ${isPrimary ? "" : "text-muted-foreground"}`}
                />
                <span>{label}</span>
                {isExternal ? (
                  <ArrowUpRight
                    className={`ml-auto size-4 ${isPrimary ? "" : "text-muted-foreground/60"}`}
                  />
                ) : null}
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
}

export default function ProjectDetailPage() {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const { slug } = useParams();
  const navigate = useNavigate();
  const posthog = usePostHog();
  const safeSlug = slug && /^[a-z0-9-]+$/.test(slug) ? slug : undefined;
  const project = safeSlug ? getProjectBySlug(locale, safeSlug) : undefined;

  useEffect(() => {
    document.title = project
      ? `${project.title} | ${content.projectsPage.title} | Mathieu Waharte`
      : `${content.projectsPage.title} | Mathieu Waharte`;
  }, [content.projectsPage.title, project]);

  if (!project) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-12 md:px-6">
        <h1 className="text-3xl font-semibold text-foreground">
          {content.projectsPage.title}
        </h1>
        <p className="text-sm text-muted-foreground">Project not found.</p>
        <div className="flex gap-3">
          <Button
            onClick={() => {
              void navigate("/projects");
            }}
            className="rounded-md"
          >
            {content.projectsPage.backHome}
          </Button>
          <Button asChild variant="outline" className="rounded-md">
            <Link to="/projects">{content.project.viewAll}</Link>
          </Button>
        </div>
      </main>
    );
  }

  const statusLabel = statusToLabel(content, project.status);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6">
        <BackLink to="/projects">{content.projectsPage.backProjects}</BackLink>
      </div>

      <div className="mb-8 border-b border-border pb-6">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
          {project.subtitle}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Mobile Links */}
        <div className="block lg:hidden">
          <ProjectLinksSection
            project={project}
            content={content}
            posthog={posthog}
          />
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden border border-border bg-card aspect-video relative">
            <img
              src={project.image}
              srcSet={`${project.image.replace(/\.webp$/, "-sm.webp")} 600w, ${project.image} 1200w`}
              sizes="(max-width: 768px) 100vw, 1200px"
              alt={project.imageAlt}
              className="h-full w-full object-cover"
              width={1200}
              height={675}
            />
          </div>

          <section className="space-y-4 rounded-none border border-border bg-card p-6">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-none px-2.5 py-1 font-normal text-muted-foreground"
              >
                {statusLabel}
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-none px-2.5 py-1 font-normal"
              >
                {project.period}
              </Badge>
            </div>

            <p className="text-base leading-8 text-muted-foreground">
              {project.summary}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                {project.logos && project.logos.length > 0 && (
                  <div className="flex gap-1.5 mt-1 shrink-0 select-none">
                    {project.logos.map((logo) => {
                      const invertClass = shouldInvertIcon(logo) ? "dark:invert" : "";
                      return (
                        <div key={logo} className="flex size-9 items-center justify-center rounded-md border border-border bg-background p-1.5 overflow-hidden">
                          <img
                            src={getIconUrl(logo)}
                            alt={logo}
                            className={`max-h-full max-w-full object-contain ${invertClass}`}
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {content.projectsPage.organization}
                  </p>
                  <p className="mt-1 text-sm text-foreground">
                    {project.organization}
                  </p>
                </div>
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

        <aside className="flex flex-col gap-6">
          {/* Desktop Links */}
          <div className="hidden lg:block">
            <ProjectLinksSection
              project={project}
              content={content}
              posthog={posthog}
            />
          </div>

          <section className="rounded-none border border-border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              {content.projectsPage.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => {
                const meta = findSkillIcon(tech);
                return (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-none px-2.5 py-1 font-normal"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <TechPillIcon
                        name={tech}
                        icon={meta}
                      />
                      <span>{tech}</span>
                    </span>
                  </Badge>
                );
              })}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
