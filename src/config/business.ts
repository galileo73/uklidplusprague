import type { BusinessInfo, ContactInfo, Language } from '../types';

/**
 * Business information for UKLID PLUS PRAHA
 */
export const businessInfo: BusinessInfo = {
  name: 'UKLID PLUS PRAHA',
  tagline: 'Premium Cleaning Services for Expats in Prague',
  description:
    'Professional cleaning agency serving Prague\'s international community. Multilingual support in English, Czech, Russian, and Ukrainian.',
  logo: '/logo.jpg', // Note: logo.jpg is the actual logo file in public/
};

/**
 * Contact information
 */
export const contactInfo: ContactInfo = {
  phone: '+420 721 960 963',
  whatsapp: '+420 721 960 963',
  messenger: 'https://m.me/uklidpluspraha',
  instagram: 'https://www.instagram.com/uklidplus.praha/',
  email: 'info@uklidpluspraha.cz',
};

/**
 * WhatsApp link for direct messaging
 * Format: https://wa.me/420721960963 (no spaces, no +, digits only)
 */
export const whatsappLink = contactInfo.whatsapp
  ? `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`
  : '#contact'; // Fallback to contact section

/**
 * Supported languages for the website
 * Premium language selector without country flags
 */
export const languages: Language[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'cs', label: 'CZ', name: 'Čeština' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'uk', label: 'UA', name: 'Українська' },
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
 * Note: Facebook page is not available yet, using '#' as placeholder
 */
export const socialLinks = {
  instagram: 'https://www.instagram.com/uklidplus.praha/',
  facebook: '#', // Placeholder - Facebook page not yet available
  messenger: 'https://m.me/uklidpluspraha',
};