import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { MobileMenu } from './components/layout/MobileMenu';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { WorkWithUs } from './pages/WorkWithUs';
import { defaultSEO, localBusinessSchema } from './config';
import { LanguageProvider } from './i18n/LanguageContext';
import './i18n'; // Initialize i18n

/**
 * Main App Component
 * Renders the full page structure with SEO and routing
 */
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu and manage body scroll
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      // Prevent body scroll when menu is open
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  };

  // Close mobile menu and restore body scroll
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Set document title and meta tags for SEO (home page default)
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

  // Cleanup body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-dark-primary">
          {/* Fixed Header */}
          <Header onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} />

          {/* Mobile Menu */}
          <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

          {/* Main Content with Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
          </Routes>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;