import { useMemo, useState } from "react"
import { ArrowUpRight, BadgeCheck, CalendarDays, ChevronDown, ShieldCheck, Languages, Accessibility, Heart } from "lucide-react"
import type { CertificationItem } from "../../data/certifications"
import { certifications } from "../../data/certifications"
import { Button } from "@/components/ui/button"
import { getUiContent, useLocale } from "@/i18n"
import { shouldInvertIcon, parseCertDate, getIconUrl } from "@/lib/utils"
import { usePostHog } from "@posthog/react"

function formatCertificationDate(locale: string, value: string) {
  const match = new RegExp(/^(\d{2})\.(\d{4})$/).exec(value)

  if (match) {
    const month = Number(match[1])
    const year = Number(match[2])

    return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : locale === "ar" ? "ar-EG" : "en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(year, month - 1, 1))
  }

  if (/^\d{4}$/.test(value)) {
    return value
  }

  return value
}

function CertificationIcon({
  name,
  icon,
  iconUrl,
}: Readonly<{
  name: string
  icon?: string
  iconUrl?: string
}>) {
  const [error, setError] = useState(false)
  const invertClass = shouldInvertIcon(icon ?? name) ? "dark:invert" : ""

  if (error) {
    return <BadgeCheck className="size-7 text-muted-foreground" aria-hidden="true" />
  }

  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={name}
        width={28}
        height={28}
        loading="lazy"
        className={`size-7 object-contain ${invertClass}`}
        aria-hidden="true"
        onError={() => { setError(true); }}
      />
    )
  }

  if (icon) {
    if (icon.startsWith("/") || icon.includes(".") || icon.includes("/")) {
      const localSrc = icon.startsWith("/") ? icon : `/${icon}`
      return (
        <img
          src={localSrc}
          alt={name}
          width={28}
          height={28}
          loading="lazy"
          className={`size-7 object-contain ${invertClass}`}
          aria-hidden="true"
          onError={() => { setError(true); }}
        />
      )
    }

    if (icon === "anssi") {
      return <ShieldCheck className="size-7 text-primary" aria-hidden="true" />
    }
    if (icon === "languages") {
      return <Languages className="size-7 text-primary" aria-hidden="true" />
    }
    if (icon === "accessibility") {
      return <Accessibility className="size-7 text-primary" aria-hidden="true" />
    }
    if (icon === "heart") {
      return <Heart className="size-7 text-rose-500" aria-hidden="true" />
    }

    const src = getIconUrl(icon)
    return (
      <img
        src={src}
        alt={name}
        width={28}
        height={28}
        loading="lazy"
        className={`size-7 object-contain ${invertClass}`}
        aria-hidden="true"
        onError={() => { setError(true); }}
      />
    )
  }

  return <BadgeCheck className="size-7 text-muted-foreground" aria-hidden="true" />
}

function CertificationRow({ item }: Readonly<{ item: CertificationItem }>) {
  const { locale } = useLocale()
  const formattedDate = formatCertificationDate(locale, item.date)

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid min-h-24 grid-cols-[56px_1fr_20px] items-center gap-4 border-t border-border px-4 py-4 transition-colors hover:bg-muted/30 md:grid-cols-[72px_1fr_20px] md:px-6"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background md:h-11 md:w-11">
        <CertificationIcon name={item.title} icon={item.icon} iconUrl={item.iconUrl} />
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-lg font-medium tracking-tight text-foreground md:text-[1.05rem]">
          {item.title}
        </h3>

        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground md:text-base">
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span>{item.issuer}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span>{formattedDate}</span>
          </span>
          {item.expiresAt ? (
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span>{item.expiresAt}</span>
            </span>
          ) : null}
        </p>
      </div>

      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

export default function CertificationsSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const [expanded, setExpanded] = useState(false)
  const [sortBy, setSortBy] = useState<"recency" | "relevance">("recency")
  const posthog = usePostHog()

  const sortedCertifications = useMemo(() => {
    return [...certifications].sort((a, b) => {
      if (sortBy === "relevance") {
        const scoreA = a.relevance ?? 0;
        const scoreB = b.relevance ?? 0;
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
      }
      return parseCertDate(b.date) - parseCertDate(a.date)
    })
  }, [sortBy])

  const visibleCertifications = useMemo(() => {
    return expanded ? sortedCertifications : sortedCertifications.slice(0, 6)
  }, [sortedCertifications, expanded])

  const handleSortChange = (mode: "recency" | "relevance") => {
    setSortBy(mode)
    posthog.capture("certifications_sort_applied", { sort_by: mode })
  }

  return (
    <section id="certifications" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="flex flex-col gap-4 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.certifications}
            <span className="text-lg font-normal text-muted-foreground">
              ({certifications.length})
            </span>
          </h2>

          <div className="flex items-center rounded-md border border-border bg-card p-1 self-start sm:self-auto">
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
          </div>
        </div>

        <div>
          {visibleCertifications.map((item) => (
            <CertificationRow key={`${item.title}-${item.date}`} item={item} />
          ))}
        </div>

        {certifications.length > 6 ? (
          <div className="border-t border-border px-4 py-4 md:px-6">
            <Button
              type="button"
              variant="secondary"
              onClick={() => { setExpanded((v) => !v); }}
              className="mx-auto flex rounded-md"
            >
              {expanded ? content.certifications.showLess : content.certifications.showMore}
              <ChevronDown
                className={`ml-2 size-4 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}