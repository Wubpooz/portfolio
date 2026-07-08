import { useMemo, useState } from "react"
import { ArrowUpRight, ChevronDown, BadgeCheck } from "lucide-react"
import type { CertificationItem } from "../../data/certifications"
import { certifications } from "../../data/certifications"
import { Button } from "@/components/ui/button"
import { getUiContent, useLocale } from "@/i18n"
import { shouldInvertIcon } from "@/lib/utils"

function CertificationIcon({
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
        width={28}
        height={28}
        loading="lazy"
        className={`size-7 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    )
  }

  if (icon) {
    const src = icon === "linkedin" ? "/icons/linkedin.svg" : `https://cdn.simpleicons.org/${icon}`
    return (
      <img
        src={src}
        alt={name}
        width={28}
        height={28}
        loading="lazy"
        className={`size-7 object-contain ${invertClass}`}
        aria-hidden="true"
      />
    )
  }

  return <BadgeCheck className="size-6 text-muted-foreground" aria-hidden="true" />
}

function CertificationRow({ item }: Readonly<{ item: CertificationItem }>) {
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

        <p className="mt-1 text-sm text-muted-foreground md:text-base">
          <span>@ {item.issuer}</span>
          <span className="mx-2 text-border">|</span>
          <span>{item.date}</span>
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

  const visibleCertifications = useMemo(() => {
    return expanded ? certifications : certifications.slice(0, 6)
  }, [expanded])

  return (
    <section id="certifications" className="w-full py-8 md:py-10">
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-4 py-4 md:px-6">
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {content.sections.certifications}
            <span className="text-lg font-normal text-muted-foreground">
              ({certifications.length})
            </span>
          </h2>
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