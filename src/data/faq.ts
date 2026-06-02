import type { FAQItem } from '../types';

/**
 * FAQ items organized by category
 */
export const faqItems: FAQItem[] = [
  // Booking & Pricing
  {
    id: 'faq-booking-1',
    question: 'How do I book a cleaning service?',
    answer:
      'You can book easily via WhatsApp, phone, or our contact form. Send us a message with your cleaning needs, and we\'ll respond within 2 hours with a quote and available time slots.',
  },
  {
    id: 'faq-booking-2',
    question: 'How much does cleaning cost?',
    answer:
      'Standard cleaning starts from 1,200 CZK for a studio apartment. Deep cleaning starts from 2,390 CZK. We provide free quotes before booking, with no hidden fees. Check our pricing page for detailed rates.',
  },
  {
    id: 'faq-booking-3',
    question: 'Is there a minimum booking time?',
    answer: 'Yes, our minimum booking is 2 hours. This ensures we can provide thorough cleaning for any space.',
  },
  {
    id: 'faq-booking-4',
    question: 'Do you offer same-day service?',
    answer:
      'Yes, same-day service is available for an additional 25% surcharge. Contact us early in the day for best availability.',
  },
  {
    id: 'faq-booking-5',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, bank transfer, and card payment. For recurring clients, we can arrange monthly invoicing.',
  },

  // Services
  {
    id: 'faq-services-1',
    question: 'What\'s included in standard cleaning?',
    answer:
      'Standard cleaning includes dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and trash removal. Bed making is available on request. We focus on all visible surfaces.',
  },
  {
    id: 'faq-services-2',
    question: 'What\'s the difference between standard and deep cleaning?',
    answer:
      'Deep cleaning includes everything in standard cleaning, plus: inside cabinets and drawers, appliance deep clean, window interior cleaning, grout and tile deep clean, baseboards, and vents. It\'s recommended for move-in/move-out or seasonal refresh.',
  },
  {
    id: 'faq-services-3',
    question: 'Do you provide cleaning supplies?',
    answer:
      'Yes, our cleaners bring all necessary cleaning supplies and equipment. If you prefer specific products (eco-friendly, specific brands), let us know and we can accommodate.',
  },
  {
    id: 'faq-services-4',
    question: 'Can I request eco-friendly cleaning products?',
    answer: 'Yes, we offer eco-friendly cleaning products for a 10% surcharge. These products are effective and better for the environment and your health.',
  },
  {
    id: 'faq-services-5',
    question: 'Do you offer ironing service?',
    answer:
      'Yes, ironing service is available at 350 CZK/hour. You can add it to any cleaning booking or book it as a standalone service.',
  },

  // Recurring Plans
  {
    id: 'faq-recurring-1',
    question: 'What are the benefits of recurring cleaning plans?',
    answer:
      'Recurring plans offer priority scheduling, consistent cleaner assignment, discounted rates, and special perks like free cleanings. Our Essential Care plan gives you the 5th visit at 50% off and 6th visit FREE.',
  },
  {
    id: 'faq-recurring-2',
    question: 'Can I change my recurring schedule?',
    answer:
      'Yes, you can reschedule or adjust your recurring plan with 24 hours notice. We offer flexible scheduling to accommodate your needs.',
  },
  {
    id: 'faq-recurring-3',
    question: 'Is there a commitment for recurring plans?',
    answer:
      'No long-term commitment is required. You can cancel your recurring plan at any time. We believe in earning your business with every visit.',
  },

  // Airbnb Hosts
  {
    id: 'faq-airbnb-1',
    question: 'Do you offer Airbnb turnover cleaning?',
    answer:
      'Yes, we specialize in Airbnb turnover service. We understand the importance of quick turnaround times and guest-ready properties. Our service includes quality checks and photo documentation.',
  },
  {
    id: 'faq-airbnb-2',
    question: 'How quickly can you clean between guests?',
    answer:
      'Depending on property size, our standard turnover takes 2-4 hours. We offer priority scheduling for Airbnb hosts and can accommodate tight schedules.',
  },
  {
    id: 'faq-airbnb-3',
    question: 'Can you handle key exchange for Airbnb guests?',
    answer:
      'Yes, we offer key handling support for Airbnb hosts. Our cleaners can collect keys from your designated location or use a key safe.',
  },

  // Trust & Quality
  {
    id: 'faq-trust-1',
    question: 'Are your cleaners vetted and insured?',
    answer:
      'Yes, all our cleaners are professionally trained, background-checked, and fully insured. We take trust and security seriously.',
  },
  {
    id: 'faq-trust-2',
    question: 'What if I\'m not satisfied with the cleaning?',
    answer:
      'Your satisfaction is guaranteed. If you\'re not happy with any aspect of our service, contact us within 24 hours and we\'ll re-clean for free.',
  },
  {
    id: 'faq-trust-3',
    question: 'Will I have the same cleaner each time?',
    answer:
      'For recurring clients, yes! We assign a dedicated cleaner to your account. For one-time cleanings, we strive for consistency, but cleaner availability may vary.',
  },

  // Practical
  {
    id: 'faq-practical-1',
    question: 'Do I need to be home during cleaning?',
    answer:
      'No, you don\'t need to be present. Many clients provide key access or arrange entry. Our cleaners are trustworthy and can work independently.',
  },
  {
    id: 'faq-practical-2',
    question: 'What areas of Prague do you serve?',
    answer:
      'We primarily serve Prague 1, 2, 5, 6, and 7. Other areas are available on request. Contact us to confirm coverage for your location.',
  },
  {
    id: 'faq-practical-3',
    question: 'Do you speak English?',
    answer:
      'Yes! Our team speaks English, Czech, Russian, and Ukrainian. Communication is easy in your preferred language.',
  },
  {
    id: 'faq-practical-4',
    question: 'What are your operating hours?',
    answer:
      'We operate Monday-Friday 8:00-18:00, Saturday 9:00-14:00. For existing clients, we offer 24/7 emergency contact. Weekend service has a 15% surcharge.',
  },
];

/**
 * FAQ categories for organization
 */
export const faqCategories = [
  {
    id: 'booking',
    label: 'Booking & Pricing',
    faqIds: ['faq-booking-1', 'faq-booking-2', 'faq-booking-3', 'faq-booking-4', 'faq-booking-5'],
  },
  {
    id: 'services',
    label: 'Services',
    faqIds: ['faq-services-1', 'faq-services-2', 'faq-services-3', 'faq-services-4', 'faq-services-5'],
  },
  {
    id: 'recurring',
    label: 'Recurring Plans',
    faqIds: ['faq-recurring-1', 'faq-recurring-2', 'faq-recurring-3'],
  },
  {
    id: 'airbnb',
    label: 'Airbnb Hosts',
    faqIds: ['faq-airbnb-1', 'faq-airbnb-2', 'faq-airbnb-3'],
  },
  {
    id: 'trust',
    label: 'Trust & Quality',
    faqIds: ['faq-trust-1', 'faq-trust-2', 'faq-trust-3'],
  },
  {
    id: 'practical',
    label: 'Practical Information',
    faqIds: ['faq-practical-1', 'faq-practical-2', 'faq-practical-3', 'faq-practical-4'],
  },
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
 * Search FAQs by keyword
 */
export function searchFAQs(keyword: string): FAQItem[] {
  const lowerKeyword = keyword.toLowerCase();
  return faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(lowerKeyword) ||
      item.answer.toLowerCase().includes(lowerKeyword)
  );
}

/**
 * Get featured FAQs for homepage
 */
export function getFeaturedFAQs(count: number = 5): FAQItem[] {
  return faqItems.slice(0, count);
}