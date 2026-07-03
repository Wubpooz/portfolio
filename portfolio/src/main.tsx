import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.tsx';
import { LocaleProvider } from './i18n';

createRoot(document.getElementById('root') ?? document.createElement('root')).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>
);
