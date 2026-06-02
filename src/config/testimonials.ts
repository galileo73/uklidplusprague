import type { Testimonial } from '../types';

/**
 * Client testimonials
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'I\'ve been using UKLID PLUS for my apartment in Prague 2 for over a year. Their service is impeccable, and I love that I can communicate in English. The recurring plan has made my life so much easier.',
    author: 'Sarah M.',
    role: 'Marketing Manager',
    location: 'Prague 2',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote:
      'As an Airbnb host, I need reliable turnover cleaning. UKLID PLUS always delivers - quick response, thorough cleaning, and my guests always comment on how clean the apartment is. Highly recommend!',
    author: 'Michael T.',
    role: 'Airbnb Superhost',
    location: 'Prague 1',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote:
      'Moving to Prague from the UK, I was worried about finding services in English. UKLID PLUS made everything easy. Their deep cleaning service prepared my new apartment perfectly. Professional and friendly.',
    author: 'James H.',
    role: 'Software Developer',
    location: 'Prague 5',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    quote:
      'The quality of cleaning is outstanding. They pay attention to details I would never think of. My apartment has never been cleaner. The WhatsApp booking is super convenient.',
    author: 'Anna K.',
    role: 'Teacher',
    location: 'Prague 6',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    quote:
      'Я очень довольна их услугами! Команда говорит по-русски, что для меня важно. Качество уборки отличное, всегда вовремя. Рекомендую всем знакомым.',
    author: 'Elena V.',
    role: 'Consultant',
    location: 'Prague 7',
    rating: 5,
  },
  {
    id: 'testimonial-6',
    quote:
      'Our company has been using UKLID PLUS for office cleaning for 2 years. Consistent quality, reliable scheduling, and great communication. They\'ve become an essential partner for our business.',
    author: 'David L.',
    role: 'Office Manager',
    location: 'Prague 1',
    rating: 5,
  },
  {
    id: 'testimonial-7',
    quote:
      'The ironing service is a lifesaver! I hate ironing, and now I don\'t have to worry about it. Quick turnaround and my shirts look perfect every time.',
    author: 'Robert P.',
    role: 'Financial Analyst',
    location: 'Prague 2',
    rating: 5,
  },
  {
    id: 'testimonial-8',
    quote:
      'Мені дуже подобається сервіс! Співробітники дуже уважні та професійні. Прибрання завжди якісне, а ціни розумні. Дякую!',
    author: 'Olena S.',
    role: 'Designer',
    location: 'Prague 5',
    rating: 5,
  },
];

/**
 * Get testimonials by location
 */
export function getTestimonialsByLocation(location: string): Testimonial[] {
  return testimonials.filter((t) => t.location === location);
}

/**
 * Get featured testimonials for homepage
 */
export function getFeaturedTestimonials(count: number = 4): Testimonial[] {
  return testimonials.slice(0, count);
}

/**
 * Get a testimonial by ID
 */
export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}

/**
 * Testimonial display options
 */
export const testimonialDisplayOptions = {
  showRating: true,
  showRole: true,
  showLocation: true,
  maxQuoteLength: 200,
};