import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import cz from './locales/cz';
import ru from './locales/ru';
import ua from './locales/ua';

// Get saved language from sessionStorage or default to 'en'
// sessionStorage persists across page refreshes but clears when tab/browser closes
const getSessionLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem('language');
    if (saved && ['en', 'cz', 'ru', 'ua'].includes(saved)) {
      return saved;
    }
  }
  return 'en';
};

// Initialize i18next with session language or English default
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      cz: { translation: cz },
      ru: { translation: ru },
      ua: { translation: ua },
    },
    lng: getSessionLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

export default i18n;

// Language codes and labels for the selector (no flags)
export const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'cz', label: 'CZ', name: 'Čeština' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'ua', label: 'UA', name: 'Українська' },
] as const;

// Helper to change language and save to sessionStorage
// Persists across page refreshes but clears when browser/tab closes
export const changeLanguage = (langCode: string): void => {
  // Save to sessionStorage (persists on refresh, clears on tab close)
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('language', langCode);
  }

  i18n.changeLanguage(langCode);

  // Update HTML lang attribute
  if (typeof document !== 'undefined') {
    document.documentElement.lang = langCode === 'cz' ? 'cs' : langCode;
  }
};

// Get current language
export const getCurrentLanguage = (): string => {
  return i18n.language || 'en';
};