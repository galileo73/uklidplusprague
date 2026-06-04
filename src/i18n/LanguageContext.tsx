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

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { t } = useTranslation();
  // Always start with English - no localStorage persistence
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  // Set language (session-only, not persisted)
  const setLanguage = useCallback((langCode: string) => {
    changeLanguage(langCode);
    setCurrentLanguage(langCode);
  }, []);

  // Update HTML lang attribute when language changes
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