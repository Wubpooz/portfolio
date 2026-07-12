import { Link } from "react-router-dom";
import { Globe, ArrowRight, BookOpen } from "lucide-react";
import type { ProjectItem } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getUiContent, useLocale } from "@/i18n";
import { shouldInvertIcon, getIconUrl, findSkillIcon } from "@/lib/utils";
import { usePostHog } from "@posthog/react";
import { fallbackIcons } from "../skills/SkillIcon";

const MAX_VISIBLE_STACK = 6;

export function TechPillIcon({
  name,
  icon,
}: Readonly<{
  name: string;
  icon?: string;
}>) {
  const invertClass = shouldInvertIcon(icon ?? name) ? "dark:invert" : "";

  if (icon && fallbackIcons[icon]) {
    const Icon = fallbackIcons[icon];
    return <Icon className="size-3.5 shrink-0 opacity-80" aria-hidden="true" />;
  }

  if (icon) {
    return (
      <img
        src={getIconUrl(icon)}
        alt={name}
        width={14}
        height={14}
        loading="lazy"
        className={`size-3.5 shrink-0 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    );
  }

  return null;
}

export default function ProjectCard({
  project,
  viewMode = "card",
}: Readonly<{
  project: ProjectItem;
  viewMode?: "card" | "list";
}>) {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const posthog = usePostHog();
  const visibleStack = project.stack.slice(0, MAX_VISIBLE_STACK);
  const remaining = project.stack.length - visibleStack.length;

  const statusLabel =
    project.status === "won"
      ? content.projectsPage.statusWon
      : project.status === "in-progress"
        ? content.projectsPage.statusInProgress
        : content.projectsPage.statusCompleted;

  const liveLink = project.links.find((l) => l.labelKey === "live");
  const sourceLink = project.links.find((l) => l.labelKey === "source");
  const readMoreLink = project.links.find((l) => l.labelKey === "details");

  if (viewMode === "list") {
    return (
      <div className="group flex flex-col md:flex-row w-full h-full overflow-hidden bg-card transition-colors hover:bg-muted/50 dark:hover:bg-muted">
        <Link
          to={`/projects/${project.slug}`}
          onClick={() =>
            posthog.capture("project_card_clicked", {
              project_title: project.title,
              project_slug: project.slug,
            })
          }
          className="relative aspect-video md:aspect-auto md:w-72 lg:w-96 shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-border"
        >
          <img
            src={project.image.replace(/\.webp$/, "-sm.webp")}
            srcSet={`${project.image.replace(/\.webp$/, "-sm.webp")} 600w, ${project.image} 1200w`}
            sizes="(max-width: 768px) 100vw, 384px"
            alt={project.imageAlt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            width={600}
            height={338}
          />
        </Link>

        <div className="flex flex-1 flex-col justify-between min-w-0">
          <Link
            to={`/projects/${project.slug}`}
            onClick={() =>
              posthog.capture("project_card_clicked", {
                project_title: project.title,
                project_slug: project.slug,
              })
            }
            className="flex flex-1 flex-col text-foreground hover:no-underline p-6 pb-0"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="rounded-none px-2.5 py-1 font-normal text-muted-foreground shrink-0"
                  >
                    {statusLabel}
                  </Badge>
                </div>
                <p className="text-base leading-7 text-muted-foreground">
                  {project.subtitle}
                </p>
                <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {project.organization} · {project.period}
                </p>
              </div>

              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground max-md:hidden">
                {project.highlights.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {visibleStack.map((tech) => {
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

                {remaining > 0 ? (
                  <Badge
                    variant="outline"
                    className="rounded-none px-2.5 py-1 font-normal text-muted-foreground"
                  >
                    +{remaining} {content.project.moreSuffix}
                  </Badge>
                ) : null}
              </div>
            </div>
          </Link>

          <div className="flex flex-col p-6 pt-4">
            <Separator className="mb-4" />

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {liveLink ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-md"
                  >
                    <a
                      href={liveLink.href}
                      onClick={() =>
                        posthog.capture("project_live_link_clicked", {
                          project_title: project.title,
                          project_slug: project.slug,
                        })
                      }
                      className="inline-flex items-center gap-2"
                    >
                      <Globe className="size-4 shrink-0" />
                      <span>{content.project.live}</span>
                    </a>
                  </Button>
                ) : null}

                {sourceLink ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-md"
                  >
                    <a
                      href={sourceLink.href}
                      onClick={() =>
                        posthog.capture("project_source_link_clicked", {
                          project_title: project.title,
                          project_slug: project.slug,
                        })
                      }
                      className="inline-flex items-center gap-2"
                    >
                      <img
                        src="https://cdn.simpleicons.org/github"
                        alt="GitHub"
                        width={16}
                        height={16}
                        loading="lazy"
                        className={`size-4 shrink-0 object-contain ${shouldInvertIcon("github") ? "dark:invert" : ""}`}
                        aria-hidden="true"
                      />
                      <span>{content.project.source}</span>
                    </a>
                  </Button>
                ) : null}
              </div>

              {readMoreLink ? (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-9 shrink-0 rounded-md px-0 hover:bg-transparent hover:text-foreground/70"
                >
                  <a
                    href={readMoreLink.href}
                    onClick={() =>
                      posthog.capture("project_case_study_clicked", {
                        project_title: project.title,
                        project_slug: project.slug,
                      })
                    }
                    className="inline-flex items-center gap-2 text-foreground"
                  >
                    <BookOpen className="size-4 shrink-0" />
                    <span>{content.project.details}</span>
                    <ArrowRight className="size-4 shrink-0" />
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/50 dark:hover:bg-muted">
      <Link
        to={`/projects/${project.slug}`}
        onClick={() =>
          posthog.capture("project_card_clicked", {
            project_title: project.title,
            project_slug: project.slug,
          })
        }
        className="flex flex-1 flex-col text-foreground hover:no-underline"
      >
        <div className="relative aspect-video overflow-hidden border-b border-border">
          <img
            src={project.image.replace(/\.webp$/, "-sm.webp")}
            srcSet={`${project.image.replace(/\.webp$/, "-sm.webp")} 600w, ${project.image} 1200w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={project.imageAlt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            width={600}
            height={338}
          />
        </div>

        <div className="flex flex-1 flex-col p-6 pb-0">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-base leading-7 text-muted-foreground">
                {project.subtitle}
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                {project.organization} · {project.period}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-none px-2.5 py-1 font-normal text-muted-foreground"
              >
                {statusLabel}
              </Badge>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              {project.highlights.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {visibleStack.map((tech) => {
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

              {remaining > 0 ? (
                <Badge
                  variant="outline"
                  className="rounded-none px-2.5 py-1 font-normal text-muted-foreground"
                >
                  +{remaining} {content.project.moreSuffix}
                </Badge>
              ) : null}
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col p-6 pt-0">
        <div className="mt-auto pt-5">
          <Separator className="mb-5" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {liveLink ? (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-9 rounded-md"
                >
                  <a
                    href={liveLink.href}
                    onClick={() =>
                      posthog.capture("project_live_link_clicked", {
                        project_title: project.title,
                        project_slug: project.slug,
                      })
                    }
                    className="inline-flex items-center gap-2"
                  >
                    <Globe className="size-4 shrink-0" />
                    <span>{content.project.live}</span>
                  </a>
                </Button>
              ) : null}

              {sourceLink ? (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-9 rounded-md"
                >
                  <a
                    href={sourceLink.href}
                    onClick={() =>
                      posthog.capture("project_source_link_clicked", {
                        project_title: project.title,
                        project_slug: project.slug,
                      })
                    }
                    className="inline-flex items-center gap-2"
                  >
                    <img
                      src="https://cdn.simpleicons.org/github"
                      alt="GitHub"
                      width={16}
                      height={16}
                      loading="lazy"
                      className={`size-4 shrink-0 object-contain ${shouldInvertIcon("github") ? "dark:invert" : ""}`}
                      aria-hidden="true"
                    />
                    <span>{content.project.source}</span>
                  </a>
                </Button>
              ) : null}
            </div>

            {readMoreLink ? (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="h-9 shrink-0 rounded-md px-0 hover:bg-transparent hover:text-foreground/70"
              >
                <a
                  href={readMoreLink.href}
                  onClick={() =>
                    posthog.capture("project_case_study_clicked", {
                      project_title: project.title,
                      project_slug: project.slug,
                    })
                  }
                  className="inline-flex items-center gap-2 text-foreground"
                >
                  <BookOpen className="size-4 shrink-0" />
                  <span>{content.project.details}</span>
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
