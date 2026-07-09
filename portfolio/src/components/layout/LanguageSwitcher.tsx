import { motion } from "framer-motion"
import { useLocale } from "@/i18n"
import { usePostHog } from "@posthog/react"
import type { Locale } from "@/i18n"

const OPTIONS = [
  { code: "fr", label: "FR", aria: "Français" },
  { code: "en", label: "EN", aria: "English" },
  { code: "ar", label: "AR", aria: "العربية" },
] as const

export default function LanguageSwitcher({
  variant = "default",
}: {
  variant?: "default" | "mobile"
}) {
  const { locale, setLocale } = useLocale()
  const posthog = usePostHog()
  const isMobile = variant === "mobile"

  const handleLanguageChange = (newLocale: Locale) => {
    posthog.capture("language_switched", { from: locale, to: newLocale })
    setLocale(newLocale)
  }

  if (isMobile) {
    return (
      <div
        className="relative inline-flex items-center rounded-md border border-border bg-background p-1 shadow-sm gap-1"
        aria-label="Language Selector"
      >
        {OPTIONS.map((opt) => {
          const isActive = locale === opt.code
          return (
            <motion.button
              key={opt.code}
              type="button"
              onClick={() => handleLanguageChange(opt.code)}
              className={`relative z-10 inline-flex items-center justify-center rounded-sm transition-colors text-xs font-mono p-2 min-w-10 min-h-10 ${
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={opt.aria}
              aria-pressed={isActive}
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -1 }}
            >
              {isActive ? (
                <motion.span
                  layoutId="language-toggle-active"
                  className="absolute inset-0 rounded-sm bg-muted border border-border"
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                />
              ) : null}
              <span className="relative z-10">{opt.label}</span>
            </motion.button>
          )
        })}
      </div>
    )
  }

  // Default layout (text/pipe separator)
  return (
    <div className="hidden gap-1 text-xs font-mono text-muted-foreground md:flex items-center">
      {OPTIONS.map((opt, i) => (
        <span key={opt.code} className="inline-flex items-center">
          <button
            type="button"
            onClick={() => handleLanguageChange(opt.code)}
            className={`transition-colors ${
              locale === opt.code ? "text-foreground font-semibold" : "hover:text-foreground"
            } ${i < OPTIONS.length - 1 ? "mr-1" : ""}`}
            aria-pressed={locale === opt.code}
            aria-label={opt.aria}
          >
            {opt.label}
          </button>
          {i < OPTIONS.length - 1 && <span className="mx-1 opacity-30 select-none">|</span>}
        </span>
      ))}
    </div>
  )
}
