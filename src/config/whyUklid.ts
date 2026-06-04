import type { WhyUklidItem } from '../types';

/**
 * Why UKLID section - 4 key points about the company
 * Note: All visible text (title, description) is loaded from i18n
 * using keys like: whyUklid.items.{id}.title, whyUklid.items.{id}.description
 */
export const whyUklidItems: WhyUklidItem[] = [
  { id: 'professional', icon: 'award' },
  { id: 'reliable', icon: 'shield' },
  { id: 'flexible', icon: 'calendar-clock' },
  { id: 'satisfaction', icon: 'heart' },
];

/**
 * Get a why Uklid item by ID
 */
export function getWhyUklidById(id: string): WhyUklidItem | undefined {
  return whyUklidItems.find((item) => item.id === id);
}

/**
 * Stats about the company
 */
export const whyUklidStats = {
  yearsInBusiness: 9,
  happyClients: 2500,
  cleaningsCompleted: 15000,
  averageRating: 4.9,
  responseTime: '2 hours',
};

/**
 * Company achievements and certifications
 */
export const whyUklidAchievements = [
  'Insured and bonded',
  'Background-checked staff',
  'Eco-friendly options',
  'Corporate clients served',
];