import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const posthog = usePostHog();

  const navLinks = [
    { label: content.nav.home, href: '/' },
    { label: content.nav.projects, href: '/projects' },
    { label: content.nav.resume, href: '/resume' },
    { label: content.nav.blog, href: '#blog' },
  ];

  const languageOptions = [
    { code: 'fr', label: 'FR', aria: 'Français' },
    { code: 'en', label: 'EN', aria: 'English' },
    { code: 'ar', label: 'AR', aria: 'العربية' },
  ] as const;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-6">

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
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors hover:bg-muted/20 md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => { setMobileMenuOpen((value) => !value); }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Language toggle */}
          <div className="hidden gap-1 text-xs font-mono text-muted-foreground md:flex">
            {languageOptions.map((lang, i) => (
              <span key={lang.code}>
                <button
                  type="button"
                  onClick={() => { posthog.capture('language_switched', { from: locale, to: lang.code }); setLocale(lang.code as 'en' | 'fr' | 'ar'); }}
                  className={`transition-colors ${locale === lang.code ? 'text-foreground font-semibold' : 'hover:text-foreground'} ${i < 2 ? 'mr-1' : ''}`}
                  aria-pressed={locale === lang.code}
                  aria-label={lang.aria}
                >
                  {lang.label}
                </button>
                {i < 2 && <span className="mx-1 opacity-30">|</span>}
              </span>
            ))}
          </div>

          {/* Dark mode toggle */}
          <div className="hidden md:block">
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