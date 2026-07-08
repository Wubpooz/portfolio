import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { getUiContent, useLocale } from '@/i18n';
import ThemeSwitcher from './ThemeSwitcher';
import { usePostHog } from '@posthog/react';

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const content = getUiContent(locale);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const posthog = usePostHog();

  const navLinks = [
    { label: content.nav.projects, href: '/projects' },
    { label: content.nav.blog, href: '#blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="font-mono font-bold text-sm tracking-tight text-foreground">
          MW
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8" aria-label="Primary navigation">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors hover:text-foreground text-muted-foreground font-mono"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground md:hidden hover:bg-muted/20"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => { setMobileMenuOpen((value) => !value); }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Language toggle */}
          <div className="hidden gap-1 text-xs font-mono md:flex text-muted-foreground">
            {[
              { code: 'fr', label: 'FR' },
              { code: 'en', label: 'EN' },
            ].map((lang, i) => (
              <span key={lang.code}>
                <button
                  type="button"
                  onClick={() => { posthog.capture('language_switched', { from: locale, to: lang.code }); setLocale(lang.code as 'en' | 'fr'); }}
                  className={`transition-colors ${locale === lang.code ? 'text-foreground font-semibold' : 'hover:text-foreground'}`}
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
          <div className="ml-4 hidden md:block">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </div>
        </div>

      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-mono text-foreground hover:text-foreground/80 transition-colors"
                onClick={() => { setMobileMenuOpen(false); }}
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
                onClick={() => { posthog.capture('language_switched', { from: locale, to: lang.code }); setLocale(lang.code as 'en' | 'fr'); }}
                className={`rounded-md border px-3 py-1 text-xs font-mono transition-colors ${locale === lang.code ? 'border-foreground text-foreground font-semibold' : 'border-border text-muted-foreground hover:text-foreground'}`}
              >
                {lang.label}
              </button>
            ))}

            <ThemeSwitcher theme={theme} setTheme={setTheme} compact />
          </div>
        </div>
      ) : null}
    </header>
  );
}