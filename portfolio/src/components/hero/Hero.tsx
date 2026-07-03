import { ArrowDown, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getUiContent, useLocale } from "@/i18n"

const quickLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mathieu-w-a9ba36211",
    href: "https://www.linkedin.com/in/mathieu-w-a9ba36211/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Wubpooz",
    href: "https://github.com/Wubpooz",
    icon: "github",
  },
  {
    label: "Email",
    value: "mathieu.waharte@gmail.com",
    href: "mailto:mathieu.waharte@gmail.com",
    icon: "mail",
  },
]

function QuickLinkIcon({
  label,
  icon,
}: {
  label: string
  icon: string
}) {
  if (icon === "mail") {
    return <Mail className="size-4 text-muted-foreground" aria-hidden="true" />
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}`}
      alt={label}
      width={16}
      height={16}
      loading="lazy"
      className="size-4 object-contain"
      aria-hidden="true"
    />
  )
}

export default function HeroSection() {
  const { locale } = useLocale()
  const content = getUiContent(locale)

  return (
    <section id="home" className="w-full py-10 md:py-16">
      <Card className="overflow-hidden rounded-none border-border bg-card shadow-none">
        <div className="relative h-44 border-b border-border sm:h-56 md:h-72">
          <img
            src="https://picsum.photos/seed/mathieu-hero-banner/1600/700"
            alt={content.hero.backgroundAlt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <CardContent className="relative px-5 pb-6 pt-0 md:px-8 md:pb-8">
          <div className="-mt-14 mb-6 md:-mt-16">
            <div className="h-24 w-24 overflow-hidden border-4 border-card bg-muted shadow-sm md:h-32 md:w-32">
              <img
                src="https://picsum.photos/seed/mathieu-profile/400/400"
                alt={content.hero.portraitAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] md:items-start">
            <div>
              <h1
                className="text-4xl font-bold tracking-tight md:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Mathieu Waharte
              </h1>

              <p className="mt-3 text-lg leading-8 text-muted-foreground">
                {content.hero.role}
              </p>

              <p className="mt-1 text-sm font-mono text-muted-foreground">
                {content.hero.location}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-[1.05rem]">
                {content.hero.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-md">
                  <a href="mailto:mathieu.waharte@gmail.com">
                    <Mail className="size-4" />
                    {content.hero.contactCta}
                  </a>
                </Button>

                <Button asChild variant="outline" className="rounded-md">
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    {content.contact.openResumeCta}
                  </a>
                </Button>
              </div>
            </div>

            <div className="border border-border bg-background">
              <div className="grid grid-cols-1 divide-y divide-border">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-muted/30"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card">
                      <QuickLinkIcon label={item.label} icon={item.icon} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="truncate text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowDown className="size-4" />
              {content.hero.scrollCta}
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}