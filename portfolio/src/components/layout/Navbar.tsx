import { useState } from 'react';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { getUiContent, useLocale } from '@/i18n';

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const content = getUiContent(locale);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: content.nav.projects, href: '#projects' },
    { label: content.nav.blog, href: '#blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="font-mono font-bold text-sm tracking-tight"
           style={{ color: 'var(--text)' }}>
          MW
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8" aria-label="Primary navigation">
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
               className="text-sm transition-colors hover:opacity-100 opacity-60" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-(--border) p-2 md:hidden"
            style={{ color: 'var(--text)' }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Language toggle */}
          <div className="hidden gap-1 text-xs font-mono md:flex" style={{ color: 'var(--muted)' }}>
            {[
              { code: 'fr', label: 'FR' },
              { code: 'en', label: 'EN' },
            ].map((lang, i) => (
              <span key={lang.code}>
                <button
                  type="button"
                  onClick={() => setLocale(lang.code as 'en' | 'fr')}
                  className={`transition-colors ${locale === lang.code ? 'text-(--text)' : 'hover:text-(--text)'}`}
                  aria-pressed={locale === lang.code}
                  aria-label={lang.code === 'fr' ? 'Français' : 'English'}
                >
                  {lang.label}
                </button>
                {i < 1 && <span className="mx-1 opacity-30">|</span>}
              </span>
            ))}
          </div>

          {/* Dark mode toggle */}
          <div className="ml-4 hidden md:flex items-center rounded-md border border-(--border) bg-(--bg) p-1">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-sm p-1.5 transition-colors ${
                theme === "light" ? "bg-(--surface)" : "hover:bg-(--surface)"
              }`}
              aria-label={content.theme.useLight}
              aria-pressed={theme === "light"}
              title={content.theme.light}
            >
              <Sun size={16} style={{ color: "var(--muted)" }} />
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-sm p-1.5 transition-colors ${
                theme === "dark" ? "bg-(--surface)" : "hover:bg-(--surface)"
              }`}
              aria-label={content.theme.useDark}
              aria-pressed={theme === "dark"}
              title={content.theme.dark}
            >
              <Moon size={16} style={{ color: "var(--muted)" }} />
            </button>

            <button
              type="button"
              onClick={() => setTheme("system")}
              className={`rounded-sm p-1.5 transition-colors ${
                theme === "system" ? "bg-(--surface)" : "hover:bg-(--surface)"
              }`}
              aria-label={content.theme.useSystem}
              aria-pressed={theme === "system"}
              title={content.theme.system}
            >
              <Monitor size={16} style={{ color: "var(--muted)" }} />
            </button>
          </div>
        </div>

      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-(--border) bg-[--bg] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-mono text-[--text] opacity-80 transition-opacity hover:opacity-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex items-center gap-3">
            {[
              { code: 'fr', label: 'FR' },
              { code: 'en', label: 'EN' },
            ].map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLocale(lang.code as 'en' | 'fr')}
                className={`rounded-md border px-3 py-1 text-xs font-mono transition-colors ${locale === lang.code ? 'border-(--text) text-(--text)' : 'border-(--border) text-(--muted)'}`}
              >
                {lang.label}
              </button>
            ))}

            <div className="ml-4 flex items-center rounded-md border border-(--border) bg-(--bg) p-1">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`rounded-sm p-1.5 transition-colors ${
                  theme === "light" ? "bg-(--surface)" : "hover:bg-(--surface)"
                }`}
                aria-label={content.theme.useLight}
                aria-pressed={theme === "light"}
                title={content.theme.light}
              >
                <Sun size={16} style={{ color: "var(--muted)" }} />
              </button>

              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`rounded-sm p-1.5 transition-colors ${
                  theme === "dark" ? "bg-(--surface)" : "hover:bg-(--surface)"
                }`}
                aria-label={content.theme.useDark}
                aria-pressed={theme === "dark"}
                title={content.theme.dark}
              >
                <Moon size={16} style={{ color: "var(--muted)" }} />
              </button>

              <button
                type="button"
                onClick={() => setTheme("system")}
                className={`rounded-sm p-1.5 transition-colors ${
                  theme === "system" ? "bg-(--surface)" : "hover:bg-(--surface)"
                }`}
                aria-label={content.theme.useSystem}
                aria-pressed={theme === "system"}
                title={content.theme.system}
              >
                <Monitor size={16} style={{ color: "var(--muted)" }} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}