import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { Home } from './pages/Home';
import { defaultSEO, localBusinessSchema } from './config';

/**
 * Main App Component
 * Renders the full page structure with SEO
 */
function App() {
  // Set document title and meta tags for SEO
  useEffect(() => {
    document.title = defaultSEO.title;

    // Update or create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', defaultSEO.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = defaultSEO.description;
      document.head.appendChild(meta);
    }

    // Update or create meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', defaultSEO.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = defaultSEO.keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: defaultSEO.title },
      { property: 'og:description', content: defaultSEO.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: defaultSEO.siteUrl },
      { property: 'og:image', content: `${defaultSEO.siteUrl}${defaultSEO.ogImage}` },
      { property: 'og:locale', content: defaultSEO.locale },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: defaultSEO.title },
      { name: 'twitter:description', content: defaultSEO.description },
      { name: 'twitter:image', content: `${defaultSEO.siteUrl}${defaultSEO.ogImage}` },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="twitter:${name}"]`) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Add JSON-LD schema for LocalBusiness
    const existingSchema = document.getElementById('jsonld-localbusiness');
    if (!existingSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'jsonld-localbusiness';
      script.textContent = JSON.stringify(localBusinessSchema);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <Home />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;