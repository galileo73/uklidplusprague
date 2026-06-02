import { HeroSection } from '../components/sections/HeroSection';
import { WhyUklidSection } from '../components/sections/WhyUklidSection';
import { DifferentiatorsSection } from '../components/sections/DifferentiatorsSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { ExpatsSection } from '../components/sections/ExpatsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { RecurringSection } from '../components/sections/RecurringSection';
import { PricingSection } from '../components/sections/PricingSection';
import { AirbnbSection } from '../components/sections/AirbnbSection';
import { GallerySection } from '../components/sections/GallerySection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { AreasSection } from '../components/sections/AreasSection';
import { ContactSection } from '../components/sections/ContactSection';

/**
 * Home Page - Main landing page
 * Renders all 15 sections in the correct order
 */
export function Home() {
  return (
    <main>
      {/* Hero - Full viewport hero with CTAs */}
      <HeroSection />

      {/* Why UKLID - Trust indicators and stats */}
      <WhyUklidSection />

      {/* Differentiators - What makes us unique */}
      <DifferentiatorsSection />

      {/* How It Works - Process steps */}
      <HowItWorksSection />

      {/* Expats - Targeted messaging for expats */}
      <ExpatsSection />

      {/* Services - Our cleaning services */}
      <ServicesSection />

      {/* Recurring Plans - Subscription options */}
      <RecurringSection />

      {/* Pricing - Transparent pricing tables */}
      <PricingSection />

      {/* Airbnb - Special section for Airbnb hosts */}
      <AirbnbSection />

      {/* Gallery - Before/after photos */}
      <GallerySection />

      {/* Reviews - Google reviews showcase */}
      <ReviewsSection />

      {/* Testimonials - Customer quotes */}
      <TestimonialsSection />

      {/* FAQ - Frequently asked questions */}
      <FAQSection />

      {/* Areas - Service areas covered */}
      <AreasSection />

      {/* Contact - Contact form and info */}
      <ContactSection />
    </main>
  );
}

export default Home;