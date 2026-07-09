import { useEffect } from "react"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getResumeAsset, getUiContent, useLocale } from "@/i18n"
import BackLink from "@/components/shared/BackLink"

export default function ResumePage() {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const resumeAsset = getResumeAsset(locale)

  useEffect(() => {
    document.title = `${content.resume.title} | Mathieu Waharte`
  }, [content.resume.title])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:px-6 md:py-10">
      <div>
        <BackLink to="/">
          {content.resume.backHome}
        </BackLink>
      </div>

      <header className="flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {content.resume.title}
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {content.resume.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-md">
            <a href={resumeAsset} download className="inline-flex items-center gap-2">
              <Download className="size-4" />
              {content.resume.download}
            </a>
          </Button>

          <Button asChild variant="secondary" className="rounded-md">
            <a href={resumeAsset} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink className="size-4" />
              {content.resume.openInNewTab}
            </a>
          </Button>
        </div>
      </header>

      <section className="overflow-hidden rounded-none border border-border bg-card shadow-none">
        <iframe
          src={resumeAsset}
          title={`${content.resume.title} - Mathieu Waharte`}
          className="h-[85vh] w-full"
        />
      </section>
    </div>
  )
}
