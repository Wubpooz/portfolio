import { Monitor, Moon, Sun } from "lucide-react"
import type { Theme } from "@/hooks/useTheme"
import { getUiContent, useLocale } from "@/i18n"

const OPTIONS: Readonly<{ value: Theme; Icon: typeof Sun }>[] = [
  { value: "light", Icon: Sun },
  { value: "dark", Icon: Moon },
  { value: "system", Icon: Monitor },
]

export default function ThemeSwitcher({
  theme,
  setTheme,
  variant = "default",
}: Readonly<{
  theme: Theme
  setTheme: (theme: Theme) => void
  variant?: "default" | "mobile"
}>) {
  const { locale } = useLocale()
  const content = getUiContent(locale)
  const isMobile = variant === "mobile"
  const activeIndex = OPTIONS.findIndex((opt) => opt.value === theme)

  return (
    <div
      className="relative inline-flex items-center gap-1 rounded-md border border-border bg-background p-1 shadow-sm"
      aria-label={content.theme.system}
    >
      {/* Sliding active theme highlight background */}
      <span
        className="absolute top-1 bottom-1 rounded-sm bg-muted border border-border transition-all duration-200 ease-out"
        style={{
          width: isMobile ? "40px" : "32px",
          left: `calc(4px + ${activeIndex.toString()} * ${isMobile ? "44px" : "36px"})`,
        }}
      />

      {OPTIONS.map(({ value, Icon }) => {
        const isActive = theme === value
        const label =
          value === "light"
            ? content.theme.useLight
            : value === "dark"
              ? content.theme.useDark
              : content.theme.useSystem

        return (
          <button
            key={value}
            type="button"
            onClick={() => { setTheme(value); }}
            className={`relative z-10 inline-flex items-center justify-center rounded-sm transition-colors ${
              isMobile ? "w-10 h-10" : "w-8 h-8"
            } ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={label}
            aria-pressed={isActive}
          >
            <Icon size={isMobile ? 18 : 16} className="relative z-10" aria-hidden="true" />
          </button>
        )
      })}
    </div>
  )
}
