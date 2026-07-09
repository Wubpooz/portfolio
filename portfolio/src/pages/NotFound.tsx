import { motion } from "framer-motion"
import { ArrowLeft, Home, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getUiContent, useLocale } from "@/i18n"
import { useEffect } from "react"
import { InteractiveEyes } from "@/components/shared/InteractiveEyes"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  const { locale } = useLocale()
  const content = getUiContent(locale)

  useEffect(() => {
    document.title = content.notFound.title
    const robots = document.head.querySelector('meta[name="robots"]') ?? document.createElement("meta")
    robots.setAttribute("name", "robots")
    robots.setAttribute("content", "noindex")
    if (!robots.parentElement) document.head.appendChild(robots)
  }, [content.notFound.title])

  return (
    <main className="relative isolate mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-5xl items-center justify-center px-4 py-12 md:px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 rounded-full bg-primary opacity-10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 size-[24rem] rounded-full bg-muted opacity-20 blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="grid w-full gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
            {content.notFound.title}
          </p>

          <motion.h1
            className="max-w-2xl text-5xl font-semibold tracking-tight text-foreground md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="block text-[clamp(5rem,18vw,11rem)] leading-none text-primary">404</span>
            <span>{content.notFound.title}</span>
          </motion.h1>

          <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            {content.notFound.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-md">
              <Link to="/" className="inline-flex items-center gap-2">
                <Home className="size-4" />
                {content.notFound.backHome}
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-md">
              <Link to="/projects" className="inline-flex items-center gap-2">
                <ArrowLeft className="size-4" />
                {content.notFound.goProjects}
              </Link>
            </Button>

            <Button asChild variant="secondary" className="rounded-md">
              <Link to="/resume" className="inline-flex items-center gap-2">
                <Sparkles className="size-4" />
                {content.notFound.goResume}
              </Link>
            </Button>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <InteractiveEyes />
        </motion.div>
      </div>
    </main>
  )
}

