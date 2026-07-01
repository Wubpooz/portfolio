import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof globalThis !== 'undefined') {
      return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Fallback for SSR
  }); // useState ensures lazy init

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return { theme, toggle };
}