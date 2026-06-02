import type { PricingCategory, AddonService, RecurringPlan } from '../types';

/**
 * Standard cleaning pricing
 */
export const standardCleaningPricing: PricingCategory = {
  id: 'standard',
  name: 'Standard Cleaning',
  description: 'Regular cleaning for your home. Includes all essentials.',
  items: [
    { apartmentType: '1+kk (studio)', size: '~35 m²', price: '1,200 CZK' },
    { apartmentType: '1+1 (1 bedroom)', size: '~45 m²', price: '1,350 CZK' },
    { apartmentType: '2+kk', size: '~55 m²', price: '1,550 CZK' },
    { apartmentType: '2+1', size: '~65 m²', price: '1,750 CZK' },
    { apartmentType: '3+kk', size: '~75 m²', price: '1,950 CZK' },
    { apartmentType: '3+1', size: '~85 m²', price: '2,050 CZK' },
    { apartmentType: '3+2', size: '~95 m²', price: '2,100 CZK' },
    { apartmentType: '4+kk / larger', size: '100+ m²', price: 'from 2,190 CZK' },
  ],
};

/**
 * Deep cleaning pricing
 */
export const deepCleaningPricing: PricingCategory = {
  id: 'deep',
  name: 'Deep Cleaning',
  description: 'Thorough cleaning for move-in/move-out or seasonal refresh.',
  items: [
    { apartmentType: '1+kk (studio)', size: '~35 m²', price: '2,390 CZK' },
    { apartmentType: '1+1 (1 bedroom)', size: '~45 m²', price: '2,590 CZK' },
    { apartmentType: '2+kk', size: '~55 m²', price: '2,890 CZK' },
    { apartmentType: '2+1', size: '~65 m²', price: '3,090 CZK' },
    { apartmentType: '3+kk', size: '~75 m²', price: '3,290 CZK' },
    { apartmentType: '3+1', size: '~85 m²', price: '3,490 CZK' },
    { apartmentType: '3+2', size: '~95 m²', price: '3,590 CZK' },
    { apartmentType: '4+kk / larger', size: '100+ m²', price: 'from 3,690 CZK' },
  ],
};

/**
 * All pricing categories
 */
export const pricingCategories: PricingCategory[] = [
  standardCleaningPricing,
  deepCleaningPricing,
];

/**
 * Add-on services
 */
export const addonServices: AddonService[] = [
  { id: 'ironing', name: 'Ironing Service', price: '350 CZK/hour' },
  { id: 'fridge', name: 'Fridge Deep Clean', price: '350 CZK' },
  { id: 'oven', name: 'Oven Deep Clean', price: '350 CZK' },
  { id: 'windows', name: 'Window Cleaning', price: 'from 150 CZK/window' },
  { id: 'balcony', name: 'Balcony/Terrace', price: 'from 400 CZK' },
  { id: 'extra-bathroom', name: 'Additional Bathroom', price: '200 CZK' },
  { id: 'pet-fee', name: 'Pet Fee (hair removal)', price: '200 CZK' },
  { id: 'eco-products', name: 'Eco-friendly Products', price: '+10% surcharge' },
  { id: 'weekend', name: 'Weekend Service', price: '+15% surcharge' },
  { id: 'express', name: 'Express Service (<24h)', price: '+25% surcharge' },
];

/**
 * Get an add-on by ID
 */
export function getAddonById(id: string): AddonService | undefined {
  return addonServices.find((addon) => addon.id === id);
}

/**
 * Recurring cleaning plans
 */
export const recurringPlans: RecurringPlan[] = [
  {
    id: 'essential',
    name: 'Essential Care',
    description: 'Perfect for maintaining a clean home with regular visits.',
    features: [
      'Weekly or bi-weekly cleaning',
      '5th visit at 50% off',
      '6th visit FREE',
      'Priority booking',
      'Same cleaner each visit',
      'Flexible rescheduling',
    ],
    cta: { label: 'Choose Plan', href: '#contact' },
  },
  {
    id: 'premium',
    name: 'Premium Home',
    description: 'Our most popular plan with deep cleaning benefits.',
    features: [
      'Weekly cleaning included',
      '4 standard cleanings/month',
      '1 FREE deep cleaning/month',
      '15% off all add-ons',
      'Dedicated cleaner',
      'Emergency cleaning support',
      'Key holding service',
    ],
    highlight: true,
    cta: { label: 'Choose Plan', href: '#contact' },
  },
  {
    id: 'vip',
    name: 'VIP Service',
    description: 'White-glove service for discerning clients.',
    features: [
      'Everything in Premium',
      'Personal account manager',
      'Priority 24h response',
      'Custom scheduling',
      'Premium eco products',
      'Special requests welcome',
      'Satisfaction guarantee',
    ],
    cta: { label: 'Choose Plan', href: '#contact' },
  },
];

/**
 * Get a plan by ID
 */
export function getPlanById(id: string): RecurringPlan | undefined {
  return recurringPlans.find((plan) => plan.id === id);
}

/**
 * Price note/disclaimer
 */
export const pricingNotes = [
  'All prices include VAT',
  'Prices may vary based on condition and specific requirements',
  'Free quote available for all services',
  'Minimum booking: 2 hours',
];