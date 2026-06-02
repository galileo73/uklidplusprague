import { motion } from 'framer-motion';
import { businessInfo, whatsappLink } from '../../config';
import { Button } from '../ui/Button';

/**
 * HeroSection - Full viewport hero with animated entrance
 * Features logo, headline, subheadline, taglines, and CTAs
 */
export function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const taglines = [
    'Reliable cleaners',
    'Fast communication',
    'Recurring home-care',
  ];

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-dark-primary">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-primary/50 to-dark-primary" />
        {/* Accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-primary rounded-xl flex items-center justify-center shadow-glow-md">
            <span className="text-dark-primary font-bold text-2xl md:text-3xl">U+</span>
          </div>
          <span className="text-2xl md:text-3xl font-bold text-text-primary">
            {businessInfo.name}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          variants={slideUpVariants}
          className="heading-1 text-text-primary mb-6"
        >
          <span className="block">Premium Cleaning Services</span>
          <span className="block text-gradient">in Prague</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={slideUpVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Trusted by Expats, Professionals &amp; Airbnb Hosts
        </motion.p>

        {/* Taglines */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
          variants={slideUpVariants}
        >
          {taglines.map((tagline, index) => (
            <motion.div
              key={tagline}
              custom={index}
              variants={taglineVariants}
              className="flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 text-accent-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-text-primary font-medium">{tagline}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={ctaVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={whatsappLink} variant="whatsapp" size="lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </Button>
          <Button href="#pricing" variant="outline" size="lg" onClick={scrollToPricing}>
            View Prices
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial="initial"
        animate="animate"
        variants={scrollIndicatorVariants}
      >
        <a
          href="#pricing"
          onClick={scrollToPricing}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-primary transition-colors"
          aria-label="Scroll to pricing section"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

export default HeroSection;