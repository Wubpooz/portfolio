import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Locale } from "./types"

const STORAGE_KEY = "portfolio-locale"
const STORAGE_META_KEY = "portfolio-locale-manual"

function isFrenchLocale(value: string) {
  return /^fr\b/i.test(value) || /[-_]FR\b/i.test(value)
}

function isArabicLocale(value: string) {
  return /^ar\b/i.test(value) || /[-_]AR\b/i.test(value) || /[-_]SA\b/i.test(value)
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") {
    return "en"
  }

  const candidates = [
    ...navigator.languages,
    navigator.language,
    Intl.DateTimeFormat().resolvedOptions().locale,
  ].filter(Boolean)

  if (candidates.some((value) => isArabicLocale(value))) {
    return "ar"
  }

  return candidates.some((value) => isFrenchLocale(value)) ? "fr" : "en"
}

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null
  }

  const manual = window.localStorage.getItem(STORAGE_META_KEY)
  const saved = window.localStorage.getItem(STORAGE_KEY)

  if (manual === "true" && (saved === "fr" || saved === "en" || saved === "ar")) {
    return saved
  }

  return null
}

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const queryLang = params.get("lang")
      if (queryLang === "en" || queryLang === "fr" || queryLang === "ar") {
        return queryLang
      }
    }
    return readStoredLocale() ?? detectLocale()
  })
  const [isManualOverride, setIsManualOverride] = useState(() => readStoredLocale() !== null)

  const setLocale = useCallback((nextLocale: Locale) => {
    setIsManualOverride(true)
    setLocaleState(nextLocale)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("lang", nextLocale)
      window.history.pushState({}, "", url.toString())
    }
  }, [])

  useEffect(() => {
    if (isManualOverride) {
      window.localStorage.setItem(STORAGE_KEY, locale)
      window.localStorage.setItem(STORAGE_META_KEY, "true")
    } else {
      window.localStorage.removeItem(STORAGE_KEY)
      window.localStorage.removeItem(STORAGE_META_KEY)
    }

    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [isManualOverride, locale])

  // Sync locale if user navigates back/forward in browser history
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const queryLang = params.get("lang")
      if (queryLang === "en" || queryLang === "fr" || queryLang === "ar") {
        setLocaleState(queryLang)
      }
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }

  return context
}
