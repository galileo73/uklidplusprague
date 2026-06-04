import type { Service } from '../types';

/**
 * Main services offered by UKLID PLUS PRAHA
 * Note: All visible text (title, description, features, cta.label) is loaded from i18n
 * using keys like: services.items.{id}.title, services.items.{id}.features.{index}
 */
export const services: Service[] = [
  {
    id: 'standard-cleaning',
    icon: 'home',
    featureCount: 6,
    cta: { href: '/pricing#standard' },
  },
  {
    id: 'deep-cleaning',
    icon: 'sparkles',
    featureCount: 6,
    cta: { href: '/pricing#deep' },
  },
  {
    id: 'airbnb-turnover',
    icon: 'bed',
    featureCount: 6,
    cta: { href: '/airbnb-hosts' },
  },
  {
    id: 'recurring-plans',
    icon: 'calendar-check',
    featureCount: 6,
    cta: { href: '/pricing#plans' },
  },
  {
    id: 'ironing-service',
    icon: 'shirt',
    featureCount: 6,
    cta: { href: '/pricing#addons' },
  },
  {
    id: 'office-cleaning',
    icon: 'building',
    featureCount: 6,
    cta: { href: '#contact' },
  },
];

/**
 * Get a service by its ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

/**
 * Get featured services for homepage
 */
export function getFeaturedServices(): Service[] {
  return services.slice(0, 4);
}

/**
 * Service categories for filtering
 */
export const serviceCategories = [
  { id: 'home', label: 'Home Cleaning', services: ['standard-cleaning', 'deep-cleaning'] },
  { id: 'recurring', label: 'Recurring Plans', services: ['recurring-plans'] },
  { id: 'specialty', label: 'Specialty Services', services: ['airbnb-turnover', 'ironing-service', 'office-cleaning'] },
];