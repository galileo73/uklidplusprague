import type { WhyUklidItem } from '../types';

/**
 * Why UKLID section - 4 key points about the company
 */
export const whyUklidItems: WhyUklidItem[] = [
  {
    id: 'professional',
    icon: 'award',
    title: 'Professional Team',
    description:
      'All our cleaners are professionally trained, vetted, and insured. We use quality equipment and eco-friendly products.',
  },
  {
    id: 'reliable',
    icon: 'shield',
    title: 'Reliable Service',
    description:
      'Punctual, trustworthy, and consistent. Your cleaner arrives on time, every time. Same cleaner for recurring clients.',
  },
  {
    id: 'flexible',
    icon: 'calendar-clock',
    title: 'Flexible Scheduling',
    description:
      'Book when it suits you. Weekday, weekend, or evening slots available. Reschedule or cancel without hassle.',
  },
  {
    id: 'satisfaction',
    icon: 'heart',
    title: 'Satisfaction Guaranteed',
    description:
      'Your happiness matters. Not 100% satisfied? We\'ll re-clean for free within 24 hours. No questions asked.',
  },
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