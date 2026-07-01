import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b"
            style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="font-mono font-bold text-sm tracking-tight"
           style={{ color: 'var(--text)' }}>
          MW
        </a>

        {/* Nav links — hidden on mobile for now */}
        <nav className="hidden md:flex gap-8">
          {['Work', 'Projects', 'Labs', 'Blog'].map(link => (
            <a key={link}
               href={`#${link.toLowerCase()}`}
               className="text-sm transition-colors hover:opacity-100 opacity-60"
               style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
              {link}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex gap-1 text-xs font-mono" style={{ color: 'var(--muted)' }}>
            {['FR', 'EN', 'AR'].map((lang, i) => (
              <span key={lang}>
                <button className="hover:text-(--text) transition-colors">{lang}</button>
                {i < 2 && <span className="mx-1 opacity-30">|</span>}
              </span>
            ))}
          </div>

          {/* Divider */}
          <span className="w-px h-4" style={{ background: 'var(--border)' }} />

          {/* Dark mode toggle */}
          <button onClick={toggle}
                  className="p-1.5 rounded-md transition-colors hover:bg-(--surface)"
                  aria-label="Toggle theme">
            {theme === 'dark'
              ? <Sun size={16} style={{ color: 'var(--muted)' }} />
              : <Moon size={16} style={{ color: 'var(--muted)' }} />
            }
          </button>
        </div>

      </div>
    </header>
  );
}