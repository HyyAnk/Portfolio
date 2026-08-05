import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './i18n.jsx';
import './styles.css';
import '@fontsource-variable/manrope';
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
