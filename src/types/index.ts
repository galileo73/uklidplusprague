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
  name: string;
  flag: string;
}

// Service types
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features?: string[];
  cta?: { label: string; href: string };
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
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Service area types
export interface ServiceArea {
  id: string;
  name: string;
  neighborhoods: string[];
}

// Differentiator types
export interface Differentiator {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// How it works step types
export interface HowItWorksStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

// Gallery item types
export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  title: string;
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
export interface WhyUklidItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}