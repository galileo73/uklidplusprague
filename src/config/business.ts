import type { BusinessInfo, ContactInfo, Language } from '../types';

/**
 * Business information for UKLID PLUS PRAHA
 */
export const businessInfo: BusinessInfo = {
  name: 'UKLID PLUS PRAHA',
  tagline: 'Premium Cleaning Services for Expats in Prague',
  description:
    'Professional cleaning agency serving Prague\'s international community. Trusted by expats, embassies, and businesses since 2015. Multilingual support in English, Czech, Russian, and Ukrainian.',
  logo: '/images/logo.svg',
  founded: '2015',
};

/**
 * Contact information
 * Note: Replace placeholder phone numbers with actual values before production
 */
export const contactInfo: ContactInfo = {
  phone: '+420 XXX XXX XXX', // Replace with actual phone
  whatsapp: '+420XXXXXXXXX', // Replace with actual WhatsApp number
  messenger: 'https://m.me/uklidpluspraha',
  instagram: 'https://instagram.com/uklidpluspraha',
  email: 'info@uklidpluspraha.cz',
};

/**
 * WhatsApp link for direct messaging
 */
export const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`;

/**
 * Supported languages for the website
 */
export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
];

/**
 * Business hours
 */
export const businessHours = {
  weekdays: '08:00 - 18:00',
  saturday: '09:00 - 14:00',
  sunday: 'Closed',
  emergency: '24/7 for existing clients',
};

/**
 * Social media links
 */
export const socialLinks = {
  instagram: 'https://instagram.com/uklidpluspraha',
  facebook: 'https://facebook.com/uklidpluspraha',
  messenger: 'https://m.me/uklidpluspraha',
};