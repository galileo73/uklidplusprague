/**
 * Central export for all configuration files
 */

// Business configuration
export {
  businessInfo,
  contactInfo,
  whatsappLink,
  languages,
  businessHours,
  socialLinks,
} from './business';

// WhatsApp helper
export { getWhatsAppLink } from '../utils/whatsapp';

// Services configuration
export {
  services,
  getServiceById,
  getFeaturedServices,
  serviceCategories,
} from './services';

// Pricing configuration
export {
  standardCleaningPricing,
  deepCleaningPricing,
  pricingCategories,
  addonServices,
  getAddonById,
  recurringPlans,
  getPlanById,
  pricingNotes,
} from './pricing';

// Differentiators configuration
export {
  differentiators,
  getDifferentiatorById,
  getFeaturedDifferentiators,
  differentiatorCategories,
} from './differentiators';

// How it works configuration
export {
  howItWorksSteps,
  getStepById,
  stepTimeEstimates,
} from './howItWorks';

// Why Uklid configuration
export {
  whyUklidItems,
  getWhyUklidById,
  whyUklidStats,
  whyUklidAchievements,
} from './whyUklid';

// Gallery configuration
export {
  galleryItems,
  galleryCategories,
  getGalleryByCategory,
  getGalleryItemById,
  placeholderImages,
} from './gallery';

// Navigation configuration
export {
  mainNavItems,
  footerNavItems,
  navCTA,
  getNavItemById,
  mobileBreakpoint,
} from './navigation';

// Theme configuration
export {
  colors,
  typography,
  spacing,
  breakpoints,
  animation,
  shadows,
  borderRadius,
  zIndex,
  brand,
} from './theme';

// SEO configuration
export {
  defaultSEO,
  pageSEO,
  organizationSchema,
  localBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generatePageTitle,
  socialMeta,
} from './seo';

// Testimonials configuration
export {
  testimonials,
  getTestimonialsByLocation,
  getFeaturedTestimonials,
  getTestimonialById,
  testimonialDisplayOptions,
} from './testimonials';

// Service areas configuration
export {
  primaryServiceAreas,
  additionalServiceAreas,
  allServiceAreas,
  getServiceAreaById,
  isPrimaryArea,
  serviceAreaNotes,
  pragueDistricts,
  getAllNeighborhoods,
} from './areas';

// Reviews configuration
export {
  googleReviewsConfig,
  reviews,
  getFeaturedReviews,
  getReviewById,
  calculateAverageRating,
  getRatingDistribution,
  reviewStats,
  googleReviewWidget,
  featuredReviews,
  reviewGrowthNote,
  googleReviewsUrl,
} from './reviews';

// Data exports
export {
  faqItems,
  faqCategories,
  getFAQsByCategory,
  getFAQById,
  getFeaturedFAQs,
} from '../data/faq';