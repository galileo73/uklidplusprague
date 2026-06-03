import { useEffect } from 'react';
import { pageSEO, defaultSEO } from '../../config/seo';

interface PageSEOProps {
  pageKey: keyof typeof pageSEO;
}

/**
 * Page-level SEO component
 * Updates document title and meta tags based on page key
 */
export function PageSEO({ pageKey }: PageSEOProps) {
  useEffect(() => {
    const seoConfig = pageSEO[pageKey];
    const title = seoConfig.title || defaultSEO.title;
    const description = seoConfig.description || defaultSEO.description;

    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${defaultSEO.siteUrl}${window.location.pathname}`;

  }, [pageKey]);

  return null;
}