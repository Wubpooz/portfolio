import { motion } from "framer-motion"
import { Monitor, Moon, Sun } from "lucide-react"
import type { Theme } from "@/hooks/useTheme"
import { getUiContent, useLocale } from "@/i18n"

const OPTIONS: Array<{ value: Theme; Icon: typeof Sun }> = [
  { value: "light", Icon: Sun },
  { value: "dark", Icon: Moon },
  { value: "system", Icon: Monitor },
]

export default function ThemeSwitcher({
  theme,
  setTheme,
  variant = "default",
}: {
  theme: Theme
  setTheme: (theme: Theme) => void
  variant?: "default" | "mobile"
  compact?: boolean
}) {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const isMobile = variant === "mobile"

  return (
    <div
      className={`relative inline-flex items-center rounded-md border border-border bg-background p-1 shadow-sm ${
        isMobile ? "gap-1" : ""
      }`}
      aria-label={content.theme.system}
    >
      {OPTIONS.map(({ value, Icon }) => {
        const isActive = theme === value
        const label =
          value === "light"
            ? content.theme.useLight
            : value === "dark"
              ? content.theme.useDark
              : content.theme.useSystem

        return (
          <motion.button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            className={`relative z-10 inline-flex items-center justify-center rounded-sm transition-colors ${
              isMobile ? "p-2 min-w-10 min-h-10" : "p-1.5"
            } ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={label}
            aria-pressed={isActive}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -1 }}
          >
            {isActive ? (
              <motion.span
                layoutId="theme-toggle-active"
                className="absolute inset-0 rounded-sm bg-muted border border-border"
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              />
            ) : null}
            <Icon size={isMobile ? 18 : 16} className="relative z-10" aria-hidden="true" />
          </motion.button>
        )
      })}
    </div>
  )
}
