import type { Differentiator } from '../types';

/**
 * Key differentiators - Why choose UKLID PLUS PRAHA
 */
export const differentiators: Differentiator[] = [
  {
    id: 'expat-trusted',
    icon: 'users',
    title: 'Trusted by Expats',
    description:
      'Serving Prague\'s international community since 2015. Recommended by embassies, corporate clients, and thousands of satisfied expats.',
  },
  {
    id: 'multilingual',
    icon: 'languages',
    title: 'Multilingual Communication',
    description:
      'Communicate in your language. Our team speaks English, Czech, Russian, and Ukrainian fluently. No language barriers.',
  },
  {
    id: 'whatsapp-booking',
    icon: 'message-circle',
    title: 'WhatsApp Booking',
    description:
      'Book your cleaning in minutes via WhatsApp. Quick, convenient, and confirmed within 2 hours. No phone calls needed.',
  },
  {
    id: 'recurring-plans',
    icon: 'calendar',
    title: 'Recurring Cleaning Plans',
    description:
      'Set it and forget it. Weekly, bi-weekly, or monthly cleanings with the same cleaner. Enjoy discounts and priority scheduling.',
  },
  {
    id: 'airbnb-support',
    icon: 'bed',
    title: 'Airbnb Host Support',
    description:
      'Specialized turnover service for Airbnb hosts. Fast response times, quality guaranteed, guest-ready properties.',
  },
  {
    id: 'transparent-pricing',
    icon: 'credit-card',
    title: 'Transparent Pricing',
    description:
      'Clear, upfront pricing with no hidden fees. Free quotes provided before booking. Pay by card, cash, or invoice.',
  },
  {
    id: 'fast-response',
    icon: 'clock',
    title: 'Fast Response Time',
    description:
      'We respond within 2 hours during business hours. Same-day service available for emergencies. Always here when you need us.',
  },
  {
    id: 'quality-guarantee',
    icon: 'shield-check',
    title: 'Quality Guarantee',
    description:
      'Not satisfied? We\'ll re-clean for free within 24 hours. Your satisfaction is our priority. Fully insured and bonded.',
  },
];

/**
 * Get a differentiator by ID
 */
export function getDifferentiatorById(id: string): Differentiator | undefined {
  return differentiators.find((d) => d.id === id);
}

/**
 * Get featured differentiators for homepage (top 4)
 */
export function getFeaturedDifferentiators(): Differentiator[] {
  return differentiators.slice(0, 4);
}

/**
 * Differentiator categories for organized display
 */
export const differentiatorCategories = [
  {
    id: 'trust',
    label: 'Trust & Quality',
    differentiators: ['expat-trusted', 'quality-guarantee'],
  },
  {
    id: 'convenience',
    label: 'Convenience',
    differentiators: ['whatsapp-booking', 'fast-response', 'recurring-plans'],
  },
  {
    id: 'specialty',
    label: 'Specialized Services',
    differentiators: ['airbnb-support', 'multilingual'],
  },
];