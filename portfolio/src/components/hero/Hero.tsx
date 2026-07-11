import { ArrowDown, Contact, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getUiContent, useLocale } from "@/i18n";
import { shouldInvertIcon, getIconUrl } from "@/lib/utils";
import { usePostHog } from "@posthog/react";
import { Link } from "react-router-dom";

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
];

function QuickLinkIcon({
  label,
  icon,
}: Readonly<{
  label: string;
  icon: string;
}>) {
  if (icon === "mail") {
    return <Mail className="size-4 text-muted-foreground" aria-hidden="true" />;
  }

  const src = getIconUrl(icon);
  const invertClass = shouldInvertIcon(icon || label) ? "dark:invert" : "";

  return (
    <img
      src={src}
      alt={label}
      width={16}
      height={16}
      loading="lazy"
      className={`size-4 object-contain ${invertClass}`}
      aria-hidden="true"
    />
  );
}

export default function HeroSection() {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const posthog = usePostHog();

  return (
    <section id="home" className="w-full pt-0 pb-6">
      <Card className="overflow-hidden rounded-none border-border bg-card shadow-none pt-0">
        <div className="relative h-44 border-b border-border sm:h-56 md:h-72">
          <img
            src="/assets/hero-banner.webp"
            srcSet="/assets/hero-banner-sm.webp 500w, /assets/hero-banner.webp 1000w"
            sizes="(max-width: 640px) 500px, 1000px"
            alt={content.hero.backgroundAlt}
            className="h-full w-full object-cover object-center md:object-top"
            width={1000}
            height={437}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <CardContent className="relative px-5 pb-4 pt-0 md:px-8">
          <div className="-mt-14 mb-6 md:-mt-16">
            <div className="h-24 w-24 overflow-hidden border-4 border-card bg-muted shadow-sm md:h-32 md:w-32">
              <img
                src="/assets/profile.webp"
                alt={content.hero.portraitAlt}
                className="h-full w-full object-cover"
                width={256}
                height={256}
                loading="eager"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] md:items-start">
            <div>
              <h1
                className="text-4xl font-bold tracking-tight md:text-5xl text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
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
            </div>

            <div className="border border-border bg-background">
              <div className="grid grid-cols-1 divide-y divide-border">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    onClick={() =>
                      posthog.capture("hero_social_link_clicked", {
                        platform: item.icon,
                      })
                    }
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
            <Button asChild className="rounded-md">
              <a
                href="mailto:mathieu.waharte@gmail.com"
                onClick={() => posthog.capture("hero_email_cta_clicked")}
              >
                <Mail className="size-4" />
                {content.hero.contactCta}
              </a>
            </Button>

            <Button asChild variant="outline" className="rounded-md">
              <Link
                to="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture("hero_resume_opened")}
              >
                <ExternalLink className="size-4" />
                {content.contact.openResumeCta}
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-md">
              <a
                href="/assets/mathieu-waharte.vcf"
                download="mathieu-waharte.vcf"
                onClick={() => posthog.capture("vcard_downloaded")}
              >
                <Contact className="size-4" />
                {content.contact.vcardCta}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
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
  );
}
