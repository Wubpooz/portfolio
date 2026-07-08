import { Globe, ArrowRight, BookOpen } from "lucide-react"
import type { ProjectItem } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getUiContent, useLocale } from "@/i18n"
import { shouldInvertIcon } from "@/lib/utils"

const MAX_VISIBLE_STACK = 6

interface TechIconMeta {
  icon?: string
  iconUrl?: string
}

const techIconMap: Record<string, TechIconMeta> = {
  "Next.js": { icon: "nextdotjs" },
  TypeScript: { icon: "typescript" },
  "Tailwind CSS": { icon: "tailwindcss" },
  Vercel: { icon: "vercel" },
  React: { icon: "react" },
  "React Native": { icon: "react" },
  Expo: { icon: "expo" },
  "Node.js": { icon: "nodedotjs" },
  Express: { icon: "express" },
  "Express.js": { icon: "express" },
  PostgreSQL: { icon: "postgresql" },
  Prisma: { icon: "prisma" },
  Drizzle: { icon: "drizzle" },
  Docker: { icon: "docker" },
  GraphQL: { icon: "graphql" },
  MongoDB: { icon: "mongodb" },
  Python: { icon: "python" },
  HTML: { icon: "html5" },
  CSS: { icon: "css3" },
  JavaScript: { icon: "javascript" },
  "C++": { icon: "cplusplus" },
  CUDA: { icon: "nvidia" },
  Java: {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openjdk.svg",
  },
  GLSL: {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/opengl.svg",
  },
}

function TechPillIcon({
  name,
  icon,
  iconUrl,
}: Readonly<{
  name: string
  icon?: string
  iconUrl?: string
}>) {
  const invertClass = shouldInvertIcon(icon ?? name) ? "dark:invert" : ""

  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={name}
        width={14}
        height={14}
        loading="lazy"
        className={`size-3.5 shrink-0 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    )
  }

  if (icon) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${icon}`}
        alt={name}
        width={14}
        height={14}
        loading="lazy"
        className={`size-3.5 shrink-0 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    )
  }

  return null
}

export default function ProjectCard({ project }: Readonly<{ project: ProjectItem }>) {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const visibleStack = project.stack.slice(0, MAX_VISIBLE_STACK)
  const remaining = project.stack.length - visibleStack.length

  const statusLabel =
    project.status === "won"
      ? content.projectsPage.statusWon
      : project.status === "in-progress"
        ? content.projectsPage.statusInProgress
        : content.projectsPage.statusCompleted

  const liveLink = project.links.find((l) => l.labelKey === "live")
  const sourceLink = project.links.find((l) => l.labelKey === "source")
  const readMoreLink = project.links.find((l) => l.labelKey === "caseStudy")

  return (
    <div className="group flex h-full flex-col overflow-hidden bg-card transition-colors hover:bg-muted/10">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="flex h-full flex-1 flex-col p-6">
        <div className="space-y-5">
          <div className="space-y-1.5">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
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
            <Badge variant="outline" className="rounded-none px-2.5 py-1 font-normal text-muted-foreground">
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
              const meta = techIconMap[tech]

              return (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-none px-2.5 py-1 font-normal"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <TechPillIcon
                      name={tech}
                      icon={meta?.icon}
                      iconUrl={meta?.iconUrl}
                    />
                    <span>{tech}</span>
                  </span>
                </Badge>
              )
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

        <div className="mt-auto pt-5">
          <Separator className="mb-5" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {liveLink ? (
                <Button asChild variant="outline" size="sm" className="h-9 rounded-md">
                  <a href={liveLink.href} className="inline-flex items-center gap-2">
                    <Globe className="size-4 shrink-0" />
                    <span>{content.project.live}</span>
                  </a>
                </Button>
              ) : null}

              {sourceLink ? (
                <Button asChild variant="outline" size="sm" className="h-9 rounded-md">
                  <a href={sourceLink.href} className="inline-flex items-center gap-2">
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
                  className="inline-flex items-center gap-2 text-foreground"
                >
                  <BookOpen className="size-4 shrink-0" />
                  <span>{content.project.caseStudy}</span>
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}