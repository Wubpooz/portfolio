import { useCallback, useEffect, useMemo, useState } from "react"
import { flushSync } from "react-dom"

export type Theme = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

const STORAGE_KEY = "theme"

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null

  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === "light" || value === "dark" || value === "system" ? value : null
  } catch {
    return null
  }
}

export function useTheme() {
  const [theme, rawSetTheme] = useState<Theme>(() => getStoredTheme() ?? "system")
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme())

  const setTheme = useCallback((newTheme: Theme | ((current: Theme) => Theme)) => {
    const startViewTransition = (document as any).startViewTransition;
    
    // Check for prefers-reduced-motion (accessibility/performance setting)
    const prefersReducedMotion = typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!startViewTransition || prefersReducedMotion) {
      rawSetTheme(newTheme);
      return;
    }

    startViewTransition.call(document, () => {
      flushSync(() => {
        rawSetTheme(newTheme);
      });
    });
  }, []);

  const resolvedTheme = useMemo<ResolvedTheme>(() => {
    return theme === "system" ? systemTheme : theme
  }, [theme, systemTheme])

  useEffect(() => {
    if (typeof window === "undefined") return

    const media = window.matchMedia("(prefers-color-scheme: dark)")

    const updateSystemTheme = () => {
      setSystemTheme(media.matches ? "dark" : "light")
    }

    updateSystemTheme()
    media.addEventListener("change", updateSystemTheme)

    return () => {
      media.removeEventListener("change", updateSystemTheme)
    }
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return

    document.documentElement.dataset.theme = resolvedTheme
    document.documentElement.dataset.themePreference = theme
    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme, resolvedTheme])

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore storage failures
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const active = current === "system" ? getSystemTheme() : current
      return active === "dark" ? "light" : "dark"
    })
  }, [])

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
  }
}