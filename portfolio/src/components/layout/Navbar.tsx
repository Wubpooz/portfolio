import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
    // { label: content.nav.blog, href: '#blog' },
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
        <Link to="/" className="font-mono font-bold text-sm tracking-tight text-foreground">
          MW
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8" aria-label="Primary navigation">
          {navLinks.map(link => {
            const isHash = link.href.startsWith("#");
            return isHash ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-foreground text-muted-foreground font-mono"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-foreground font-mono ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
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
        <div className="border-t border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur md:hidden">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isHash = link.href.startsWith("#");
              return isHash ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-border bg-card/40 px-3 py-3 text-sm font-mono text-foreground transition-colors hover:bg-muted/30"
                  onClick={() => { setMobileMenuOpen(false); }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="rounded-md border border-border bg-card/40 px-3 py-3 text-sm font-mono text-foreground transition-colors hover:bg-muted/30"
                  onClick={() => { setMobileMenuOpen(false); }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-3">
            <Link
              to="/resume"
              className="inline-flex w-full items-center justify-center rounded-md border border-border bg-card px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/30"
              onClick={() => { setMobileMenuOpen(false); }}
            >
              {content.nav.resume}
            </Link>

            <div className="grid grid-cols-3 gap-2">
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => { posthog.capture('language_switched', { from: locale, to: lang.code }); setLocale(lang.code as 'en' | 'fr' | 'ar'); }}
                  className={`rounded-md border px-3 py-2 text-xs font-mono transition-colors ${locale === lang.code ? 'border-foreground text-foreground font-semibold' : 'border-border text-muted-foreground hover:text-foreground'}`}
                  aria-label={lang.aria}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-3 py-2.5">
              <ThemeSwitcher theme={theme} setTheme={setTheme} compact />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}