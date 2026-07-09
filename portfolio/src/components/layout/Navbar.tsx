import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { getUiContent, useLocale } from '@/i18n';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { locale } = useLocale();
  const content = getUiContent(locale);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: content.nav.home, href: '/' },
    { label: content.nav.projects, href: '/projects' },
    { label: content.nav.resume, href: '/resume' },
  ];

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
          <LanguageSwitcher />

          {/* Dark mode toggle */}
          <div className="hidden md:block">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </div>
        </div>

      </div>


      {/* Mobile menu */}
      {mobileMenuOpen ? (
        <div className="animate-slide-down border-t border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur md:hidden">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, index) => {
              const isHash = link.href.startsWith("#");
              const className = "animate-fade-in rounded-md border border-border bg-card/40 px-3 py-3 text-sm font-mono text-foreground transition-colors hover:bg-muted/30";
              const style = { animationDelay: `${index * 40}ms` };
              const onClick = () => { setMobileMenuOpen(false); };

              return isHash ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={className}
                  style={style}
                  onClick={onClick}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={className}
                  style={style}
                  onClick={onClick}
                >
                  {link.label}
                </Link>
              );
            })}
          
            <div className="col-span-2 mt-4 flex items-center justify-between gap-2">
              <ThemeSwitcher theme={theme} setTheme={setTheme} compact variant="mobile" />
              <LanguageSwitcher variant="mobile" />
            </div>
          </nav>

        </div>
      ) : null}
    </header>
  );
}