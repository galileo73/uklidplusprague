import type { FAQItem } from '../types';

/**
 * FAQ items organized by category
 * Note: All visible text (question, answer) is loaded from i18n
 * using keys like: faq.questions.{id}.question, faq.questions.{id}.answer
 */
export const faqItems: FAQItem[] = [
  // Booking & Pricing
  { id: 'faq-booking-1' },
  { id: 'faq-booking-2' },
  { id: 'faq-booking-3' },
  { id: 'faq-booking-4' },
  { id: 'faq-booking-5' },
  // Services
  { id: 'faq-services-1' },
  { id: 'faq-services-2' },
  { id: 'faq-services-3' },
  { id: 'faq-services-4' },
  { id: 'faq-services-5' },
  // Recurring Plans
  { id: 'faq-recurring-1' },
  { id: 'faq-recurring-2' },
  { id: 'faq-recurring-3' },
  // Airbnb Hosts
  { id: 'faq-airbnb-1' },
  { id: 'faq-airbnb-2' },
  { id: 'faq-airbnb-3' },
  // Trust & Quality
  { id: 'faq-trust-1' },
  { id: 'faq-trust-2' },
  { id: 'faq-trust-3' },
  // Practical
  { id: 'faq-practical-1' },
  { id: 'faq-practical-2' },
  { id: 'faq-practical-3' },
  { id: 'faq-practical-4' },
];

/**
 * FAQ categories for organization
 * Note: Category labels are loaded from i18n using keys like faq.categories.{id}
 */
export const faqCategories = [
  { id: 'booking', faqIds: ['faq-booking-1', 'faq-booking-2', 'faq-booking-3', 'faq-booking-4', 'faq-booking-5'] },
  { id: 'services', faqIds: ['faq-services-1', 'faq-services-2', 'faq-services-3', 'faq-services-4', 'faq-services-5'] },
  { id: 'recurring', faqIds: ['faq-recurring-1', 'faq-recurring-2', 'faq-recurring-3'] },
  { id: 'airbnb', faqIds: ['faq-airbnb-1', 'faq-airbnb-2', 'faq-airbnb-3'] },
  { id: 'trust', faqIds: ['faq-trust-1', 'faq-trust-2', 'faq-trust-3'] },
  { id: 'practical', faqIds: ['faq-practical-1', 'faq-practical-2', 'faq-practical-3', 'faq-practical-4'] },
];

/**
 * Get FAQ items by category
 */
export function getFAQsByCategory(categoryId: string): FAQItem[] {
  const category = faqCategories.find((c) => c.id === categoryId);
  if (!category) return [];
  return faqItems.filter((item) => category.faqIds.includes(item.id));
}

/**
 * Get a single FAQ by ID
 */
export function getFAQById(id: string): FAQItem | undefined {
  return faqItems.find((item) => item.id === id);
}

/**
 * Get featured FAQs for homepage
 */
export function getFeaturedFAQs(count: number = 5): FAQItem[] {
  return faqItems.slice(0, count);
}