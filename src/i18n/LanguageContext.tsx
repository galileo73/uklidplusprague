/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_OPTIONS, changeLanguage } from './index';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (langCode: string) => void;
  languageOptions: typeof LANGUAGE_OPTIONS;
  t: ReturnType<typeof useTranslation>['t'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Helper to get initial language
function getInitialLanguage(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'cz', 'ru', 'ua'].includes(saved)) {
      return saved;
    }
  }
  return 'en';
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(getInitialLanguage);

  // Set language and persist
  const setLanguage = useCallback((langCode: string) => {
    changeLanguage(langCode);
    setCurrentLanguage(langCode);
  }, []);

  // Sync with i18n on mount - only change i18n, don't setState
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['en', 'cz', 'ru', 'ua'].includes(savedLang)) {
      if (i18n.language !== savedLang) {
        i18n.changeLanguage(savedLang);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Update HTML lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLanguage === 'cz' ? 'cs' : currentLanguage;
    }
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languageOptions: LANGUAGE_OPTIONS,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;