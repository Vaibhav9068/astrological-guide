import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import hiTranslations from '../locales/hi.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('site_lang') || 'en';
  });

  const translations = language === 'hi' ? hiTranslations : enTranslations;

  // Simple nested translation lookup helper, e.g. t('hero.title')
  const t = (path) => {
    return path.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : path;
    }, translations);
  };

  useEffect(() => {
    localStorage.setItem('site_lang', language);
    
    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Update dynamic SEO titles and meta descriptions
    const seoData = translations.seo || {};
    if (seoData.title) {
      document.title = seoData.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seoData.description) {
      metaDesc.setAttribute('content', seoData.description);
    }
  }, [language, translations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
