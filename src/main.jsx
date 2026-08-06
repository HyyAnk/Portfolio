import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './i18n.jsx';
import { languageBasePath, localizePath, resolveBrowserLanguage } from './languageRouting.js';
import './styles.css';
import '@fontsource-variable/manrope';
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';

const initialLanguage = resolveBrowserLanguage(window);
const localizedPathname = localizePath(window.location.pathname, initialLanguage);
if (localizedPathname !== window.location.pathname) {
  window.history.replaceState(window.history.state, '', `${localizedPathname}${window.location.search}${window.location.hash}`);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={languageBasePath(initialLanguage)}>
      <LanguageProvider initialLanguage={initialLanguage}>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
