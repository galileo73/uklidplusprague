import type { Service } from '../types';

/**
 * Main services offered by UKLID PLUS PRAHA
 */
export const services: Service[] = [
  {
    id: 'standard-cleaning',
    icon: 'home',
    title: 'Standard Cleaning',
    description:
      'Regular cleaning service for your home or apartment. Includes dusting, vacuuming, mopping, and bathroom sanitization.',
    features: [
      'Kitchen cleaning',
      'Bathroom sanitization',
      'Dusting and vacuuming',
      'Floor mopping',
      'Trash removal',
      'Bed making (on request)',
    ],
    cta: { label: 'Get Quote', href: '/pricing#standard' },
  },
  {
    id: 'deep-cleaning',
    icon: 'sparkles',
    title: 'Deep Cleaning',
    description:
      'Thorough cleaning for move-in/move-out or seasonal refresh. Everything cleaned from top to bottom.',
    features: [
      'All standard cleaning items',
      'Inside cabinets and drawers',
      'Appliance deep clean',
      'Window cleaning (interior)',
      'Grout and tile deep clean',
      'Baseboards and vents',
    ],
    cta: { label: 'Get Quote', href: '/pricing#deep' },
  },
  {
    id: 'airbnb-turnover',
    icon: 'bed',
    title: 'Airbnb Turnover',
    description:
      'Fast, reliable turnover service for Airbnb hosts. Guest-ready properties guaranteed.',
    features: [
      'Quick turnaround time',
      'Fresh linens setup',
      'Restock essentials',
      'Quality check',
      'Photo documentation',
      'Key handling support',
    ],
    cta: { label: 'Learn More', href: '/airbnb-hosts' },
  },
  {
    id: 'recurring-plans',
    icon: 'calendar-check',
    title: 'Recurring Plans',
    description:
      'Scheduled cleaning at your convenience. Weekly, bi-weekly, or monthly options with exclusive benefits.',
    features: [
      'Priority scheduling',
      'Consistent cleaner',
      'Discounted rates',
      'Flexible rescheduling',
      'Free cancellation',
      'Special perks',
    ],
    cta: { label: 'View Plans', href: '/pricing#plans' },
  },
  {
    id: 'ironing-service',
    icon: 'shirt',
    title: 'Ironing Service',
    description:
      'Professional ironing service to keep your wardrobe crisp and ready. Available as add-on or standalone.',
    features: [
      'Expert ironing',
      'Steam treatment',
      'Hanging or folding',
      'Quick turnaround',
      'Garment care',
      'Pickup available',
    ],
    cta: { label: 'Get Quote', href: '/pricing#addons' },
  },
  {
    id: 'office-cleaning',
    icon: 'building',
    title: 'Office Cleaning',
    description:
      'Professional office and commercial space cleaning. Flexible scheduling to minimize disruption.',
    features: [
      'Desk and surface cleaning',
      'Common area maintenance',
      'Kitchenette sanitization',
      'Restroom cleaning',
      'Floor care',
      'Flexible hours',
    ],
    cta: { label: 'Get Quote', href: '#contact' },
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