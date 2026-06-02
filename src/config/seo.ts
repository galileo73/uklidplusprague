import type { SEOConfig, OrganizationSchema, LocalBusinessSchema } from '../types';
import { businessInfo, contactInfo, languages } from './business';

/**
 * Default SEO configuration for the site
 */
export const defaultSEO: SEOConfig = {
  title: 'UKLID PLUS PRAHA | Premium Cleaning Services for Expats in Prague',
  description:
    'Professional cleaning services in Prague for expats and international clients. Standard cleaning, deep cleaning, Airbnb turnover, and recurring plans. Multilingual support in EN/CZ/RU/UA. Trusted since 2015.',
  keywords: [
    'cleaning services Prague',
    'expat cleaning Prague',
    'Prague apartment cleaning',
    'deep cleaning Prague',
    'Airbnb cleaning Prague',
    'recurring cleaning Prague',
    'professional cleaners Prague',
    'English speaking cleaners Prague',
    'uklid praha',
    'cleaning agency Prague',
  ],
  ogImage: '/images/og-image.jpg',
  siteUrl: 'https://uklidpluspraha.cz',
  locale: 'en_US',
};

/**
 * Page-specific SEO configurations
 */
export const pageSEO: Record<string, Partial<SEOConfig>> = {
  home: {
    title: 'UKLID PLUS PRAHA | Premium Cleaning Services for Expats',
    description:
      'Prague\'s trusted cleaning service for expats. Professional cleaners, transparent pricing, multilingual support. Book via WhatsApp today.',
  },
  pricing: {
    title: 'Pricing | UKLID PLUS PRAHA',
    description:
      'Transparent cleaning prices in Prague. Standard cleaning from 1,200 CZK, deep cleaning from 2,390 CZK. No hidden fees. Free quotes.',
  },
  airbnb: {
    title: 'Airbnb Host Cleaning Service | UKLID PLUS PRAHA',
    description:
      'Reliable turnover cleaning for Prague Airbnb hosts. Guest-ready properties, quick response, quality guaranteed. Manage your rentals stress-free.',
  },
  contact: {
    title: 'Contact Us | UKLID PLUS PRAHA',
    description:
      'Contact UKLID PLUS PRAHA for cleaning services in Prague. WhatsApp, phone, or email. We respond within 2 hours.',
  },
  privacy: {
    title: 'Privacy Policy | UKLID PLUS PRAHA',
    description: 'Privacy policy for UKLID PLUS PRAHA cleaning services.',
  },
  terms: {
    title: 'Terms of Service | UKLID PLUS PRAHA',
    description: 'Terms of service for UKLID PLUS PRAHA cleaning services.',
  },
};

/**
 * Organization schema for JSON-LD
 */
export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: businessInfo.name,
  url: defaultSEO.siteUrl,
  logo: `${defaultSEO.siteUrl}${businessInfo.logo}`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone,
    contactType: 'customer service',
    availableLanguage: languages.map((l) => l.name),
  },
  sameAs: [
    'https://instagram.com/uklidpluspraha',
    'https://facebook.com/uklidpluspraha',
  ],
};

/**
 * Local business schema for JSON-LD
 */
export const localBusinessSchema: LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: businessInfo.name,
  url: defaultSEO.siteUrl,
  telephone: contactInfo.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Prague',
    addressRegion: 'Prague',
    addressCountry: 'CZ',
  },
  areaServed: [
    'Prague 1',
    'Prague 2',
    'Prague 5',
    'Prague 6',
    'Prague 7',
    'Prague',
  ],
  priceRange: '$$',
};

/**
 * Service schema generator for JSON-LD
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Prague',
    },
    url: service.url,
  };
}

/**
 * FAQ schema generator for JSON-LD
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb schema generator for JSON-LD
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate page title with site name
 */
export function generatePageTitle(title: string): string {
  if (!title) return defaultSEO.title;
  return `${title} | UKLID PLUS PRAHA`;
}

/**
 * Meta tags for social sharing
 */
export const socialMeta = {
  facebook: {
    appId: '', // Add if using Facebook integration
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@uklidpluspraha',
    site: '@uklidpluspraha',
  },
};