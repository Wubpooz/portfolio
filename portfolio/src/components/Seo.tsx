import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getProjectBySlug } from "@/data/projects"
import { getUiContent, useLocale } from "@/i18n"

const SITE_NAME = "Mathieu Waharte"
const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://wubpooz.github.io/portfolio"

function upsertMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement("meta")
    if (property) {
      element.setAttribute("property", name)
    } else {
      element.setAttribute("name", name)
    }
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement("link")
    element.setAttribute("rel", rel)
    document.head.appendChild(element)
  }

  element.setAttribute("href", href)
}

export default function Seo() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const location = useLocation()

  useEffect(() => {
    const isResume = location.pathname.startsWith("/resume")
    const isProjectsIndex = location.pathname === "/projects"
    const projectSlugMatch = location.pathname.match(/^\/projects\/([^/]+)$/)
    const project = projectSlugMatch ? getProjectBySlug(locale, projectSlugMatch[1]) : undefined

    const title = isResume
      ? `${content.resume.title} | ${SITE_NAME}`
      : project
        ? `${project.title} | ${content.projectsPage.title} | ${SITE_NAME}`
        : isProjectsIndex
          ? `${content.projectsPage.title} | ${SITE_NAME}`
          : `${SITE_NAME} | ${content.hero.role}`

    const description = isResume
      ? content.resume.description
      : project
        ? project.summary
        : isProjectsIndex
          ? content.projectsPage.subtitle
          : content.hero.summary
    const canonical = `${window.location.origin}${location.pathname}${location.search}${location.hash}`
    const ogImage = `${SITE_URL}/og-image.svg`

    document.title = title
    document.documentElement.lang = locale

    upsertMeta("description", description)
    upsertMeta("robots", "index,follow")
    upsertMeta("theme-color", "#111111")
    upsertMeta("color-scheme", "light dark")
    upsertMeta("og:site_name", SITE_NAME, true)
    upsertMeta("og:type", "website", true)
    upsertMeta("og:title", title, true)
    upsertMeta("og:description", description, true)
    upsertMeta("og:url", canonical, true)
    upsertMeta("og:image", ogImage, true)
    upsertMeta("og:locale", locale === "fr" ? "fr_FR" : "en_US", true)
    upsertMeta("twitter:card", "summary_large_image")
    upsertMeta("twitter:title", title)
    upsertMeta("twitter:description", description)
    upsertMeta("twitter:image", ogImage)
    upsertLink("canonical", canonical)

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: SITE_NAME,
          url: SITE_URL,
          jobTitle: locale === "fr" ? "Ingénieur fullstack & IA" : "Fullstack Engineer & AI",
          sameAs: [
            "https://www.linkedin.com/in/mathieu-w-a9ba36211/",
            "https://github.com/Wubpooz",
          ],
        },
        {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: locale,
          description,
        },
        {
          "@type": "WebPage",
          name: title,
          url: canonical,
          description,
          inLanguage: locale,
        },
        ...(project
          ? [
              {
                "@type": "CreativeWork",
                name: project.title,
                url: canonical,
                description: project.summary,
                inLanguage: locale,
              },
            ]
          : []),
      ],
    }

    const scriptId = "json-ld-schema"
    let script = document.getElementById(scriptId) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement("script")
      script.id = scriptId
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(jsonLd)
  }, [content.hero.role, content.hero.summary, content.projectsPage.subtitle, content.projectsPage.title, content.resume.description, content.resume.title, locale, location.hash, location.pathname, location.search])

  return null
}
