import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Monitor } from 'lucide-react';
import { getUiContent, useLocale } from '@/i18n';

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const content = getUiContent(locale);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="font-mono font-bold text-sm tracking-tight"
           style={{ color: 'var(--text)' }}>
          MW
        </a>

        {/* Nav links — hidden on mobile for now */}
        <nav className="hidden md:flex gap-8">
          {[
            { label: content.nav.projects, href: '#projects' },
            { label: content.nav.blog, href: '#blog' },
          ].map(link => (
            <a key={link.label} href={link.href}
               className="text-sm transition-colors hover:opacity-100 opacity-60" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
              {link.label}
            </a>
          ))}
        </nav>


        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex gap-1 text-xs font-mono" style={{ color: 'var(--muted)' }}>
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
    </header>
  );
}