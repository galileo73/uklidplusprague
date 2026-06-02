import type { Review } from '../types';

/**
 * Google Reviews configuration
 */
export const googleReviewsConfig = {
  placeId: '', // Add actual Google Place ID
  minRating: 4,
  maxReviews: 10,
  refreshInterval: 86400000, // 24 hours in ms
};

/**
 * Static review data (placeholder for dynamic Google Reviews)
 * Replace with actual API integration for production
 */
export const reviews: Review[] = [
  {
    id: 'review-1',
    author: 'John D.',
    rating: 5,
    text: 'Exceptional service! The team was professional, punctual, and thorough. My apartment has never been cleaner. Highly recommend UKLID PLUS for anyone in Prague.',
    date: '2024-01-15',
  },
  {
    id: 'review-2',
    author: 'Maria S.',
    rating: 5,
    text: 'Best cleaning service I\'ve used in Prague. They speak English, show up on time, and do a fantastic job. The WhatsApp booking is so convenient!',
    date: '2024-01-10',
  },
  {
    id: 'review-3',
    author: 'Petr K.',
    rating: 5,
    text: 'Skvělá služba! Vždy včas, důkladné úklid a příjemný personál. Rozhodně doporučuji. (Great service! Always on time, thorough cleaning, and pleasant staff. Definitely recommend.)',
    date: '2024-01-08',
  },
  {
    id: 'review-4',
    author: 'Emma L.',
    rating: 5,
    text: 'As an Airbnb host, I need reliable turnover cleaning. UKLID PLUS has never let me down. My guests always comment on how clean the apartment is!',
    date: '2024-01-05',
  },
  {
    id: 'review-5',
    author: 'Tomáš N.',
    rating: 5,
    text: 'Profesionální přístup a výborné výsledky. Používám jejich pravidelný úklid už rok a jsem maximálně spokojen. (Professional approach and excellent results. I\'ve been using their regular cleaning for a year and I\'m completely satisfied.)',
    date: '2024-01-03',
  },
  {
    id: 'review-6',
    author: 'Jennifer M.',
    rating: 5,
    text: 'I moved to Prague recently and was struggling to find reliable services in English. UKLID PLUS solved that problem perfectly. Great communication and quality work.',
    date: '2023-12-28',
  },
  {
    id: 'review-7',
    author: 'Alexei V.',
    rating: 5,
    text: 'Отличный сервис! Команда говорит по-русски, качество уборки на высоте. Рекомендую всем! (Excellent service! The team speaks Russian, cleaning quality is top-notch. Recommend to everyone!)',
    date: '2023-12-20',
  },
  {
    id: 'review-8',
    author: 'Sophie R.',
    rating: 4,
    text: 'Very happy with the deep cleaning service. The only small issue was a slight delay in arrival, but they communicated well and did an excellent job.',
    date: '2023-12-15',
  },
  {
    id: 'review-9',
    author: 'Martin B.',
    rating: 5,
    text: 'Spolehlivá firma s férovými cenami. Uklidí vše na čas a pořádně. (Reliable company with fair prices. They clean everything on time and properly.)',
    date: '2023-12-10',
  },
  {
    id: 'review-10',
    author: 'Olga P.',
    rating: 5,
    text: 'Чудовий сервіс! Завжди вчасно, якісне прибирання. Дякую! (Wonderful service! Always on time, quality cleaning. Thank you!)',
    date: '2023-12-05',
  },
];

/**
 * Get featured reviews for display
 */
export function getFeaturedReviews(count: number = 6): Review[] {
  return reviews
    .filter((r) => r.rating >= 4)
    .slice(0, count);
}

/**
 * Get a review by ID
 */
export function getReviewById(id: string): Review | undefined {
  return reviews.find((r) => r.id === id);
}

/**
 * Average rating calculation
 */
export function calculateAverageRating(): number {
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/**
 * Rating distribution
 */
export function getRatingDistribution(): Record<number, number> {
  return reviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );
}

/**
 * Review summary stats
 */
export const reviewStats = {
  averageRating: calculateAverageRating(),
  totalReviews: reviews.length,
  fiveStarCount: reviews.filter((r) => r.rating === 5).length,
  recommendationRate: 98, // Percentage
};

/**
 * Google review widget configuration
 */
export const googleReviewWidget = {
  showRating: true,
  showCount: true,
  showRecentReviews: true,
  theme: 'light',
};

/**
 * Featured reviews for homepage display (top 3)
 */
export const featuredReviews = getFeaturedReviews(3);

/**
 * Review growth program note
 */
export const reviewGrowthNote =
  "We're building our reputation! Help us grow by leaving a review after your cleaning.";

/**
 * Google Reviews URL (placeholder - replace with actual Google Place review link)
 */
export const googleReviewsUrl = 'https://g.page/r/CXXXXX/review'; // Replace with actual Google Place ID