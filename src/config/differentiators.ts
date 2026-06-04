import type { Differentiator } from '../types';

/**
 * Key differentiators - Why choose UKLID PLUS PRAHA
 * Note: All visible text (title, description) is loaded from i18n
 * using keys like: differentiators.items.{id}.title, differentiators.items.{id}.description
 */
export const differentiators: Differentiator[] = [
  { id: 'expat-trusted', icon: 'users' },
  { id: 'multilingual', icon: 'languages' },
  { id: 'whatsapp-booking', icon: 'message-circle' },
  { id: 'recurring-plans', icon: 'calendar' },
  { id: 'airbnb-support', icon: 'bed' },
  { id: 'transparent-pricing', icon: 'credit-card' },
  { id: 'fast-response', icon: 'clock' },
  { id: 'quality-guarantee', icon: 'shield-check' },
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