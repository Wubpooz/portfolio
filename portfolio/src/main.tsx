import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.tsx';
import { LocaleProvider } from './i18n';
import { PostHogErrorBoundary, PostHogProvider } from '@posthog/react';
import posthog from 'posthog-js';

const root = createRoot(document.getElementById('root') ?? document.createElement('div'));

root.render(
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

// Defer PostHog init until the browser is idle / page has loaded.
const initAnalytics = () => {
  posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN as string, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string,
    defaults: '2026-01-30',
    // Disable features that load additional scripts eagerly
    disable_session_recording: false,
    autocapture: false,
  });
};

if (document.readyState === 'complete') {
  (window.requestIdleCallback ?? setTimeout)(initAnalytics);
} else {
  window.addEventListener('load', () => {
    (window.requestIdleCallback ?? setTimeout)(initAnalytics);
  });
}
