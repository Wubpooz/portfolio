import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.tsx';
import { LocaleProvider } from './i18n';
import posthog from 'posthog-js';
import { PostHogErrorBoundary, PostHogProvider } from '@posthog/react';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN as string, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string,
  defaults: '2026-01-30',
});

createRoot(document.getElementById('root') ?? document.createElement('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <PostHogErrorBoundary>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </PostHogErrorBoundary>
    </PostHogProvider>
  </StrictMode>
);
