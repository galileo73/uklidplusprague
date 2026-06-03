import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import cz from './locales/cz';
import ru from './locales/ru';
import ua from './locales/ua';

// Get saved language from localStorage or default to 'en'
const getSavedLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'cz', 'ru', 'ua'].includes(saved)) {
      return saved;
    }
  }
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      cz: { translation: cz },
      ru: { translation: ru },
      ua: { translation: ua },
    },
    lng: getSavedLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

export default i18n;

// Language codes and labels for the selector
export const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'cz', label: 'CZ', name: 'Čeština' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'ua', label: 'UA', name: 'Українська' },
] as const;

// Helper to change language and persist to localStorage
export const changeLanguage = (langCode: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', langCode);
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