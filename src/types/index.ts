// Business types
export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  founded?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  messenger: string;
  instagram: string;
  email: string;
}

export interface Language {
  code: string;
  label: string; // Short label for display (EN, CZ, RU, UA)
  name: string;  // Full name for accessibility
}

// Service types
// Note: All visible text is loaded from i18n using keys like services.items.{id}.title
export interface Service {
  id: string;
  icon: string;
  featureCount: number;
  cta?: { href: string };
}

// Pricing types
export interface PricingItem {
  apartmentType: string;
  size: string;
  price: string;
}

export interface PricingCategory {
  id: string;
  name: string;
  description?: string;
  items: PricingItem[];
}

export interface AddonService {
  id: string;
  name: string;
  price: string;
}

// Recurring plan types
export interface RecurringPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: { label: string; href: string };
}

// Testimonial types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  location?: string;
  rating: number;
}

// Review types
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
}

// FAQ types
// Note: All visible text (question, answer) is loaded from i18n
// using keys like: faq.questions.{id}.question, faq.questions.{id}.answer
export interface FAQItem {
  id: string;
}

// Service area types
export interface ServiceArea {
  id: string;
  name: string;
  neighborhoods: string[];
}

// Differentiator types
// Note: All visible text is loaded from i18n using keys like differentiators.items.{id}.title
export interface Differentiator {
  id: string;
  icon: string;
}

// How it works step types
// Note: All visible text is loaded from i18n using keys like howItWorks.steps.{id}.title
export interface HowItWorksStep {
  id: string;
  number: number;
}

// Gallery item types
// Note: All visible text (title) is loaded from i18n using keys like gallery.items.{id}.title
export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  category?: string;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// SEO types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  siteUrl: string;
  locale: string;
}

// JSON-LD Schema types
export interface JSONLDSchema {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export interface OrganizationSchema extends JSONLDSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
}

export interface LocalBusinessSchema extends JSONLDSchema {
  "@type": "LocalBusiness";
  name: string;
  url: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  areaServed: string[];
  priceRange: string;
}

// Why Uklid section type
// Note: All visible text is loaded from i18n using keys like whyUklid.items.{id}.title
export interface WhyUklidItem {
  id: string;
  icon: string;
}