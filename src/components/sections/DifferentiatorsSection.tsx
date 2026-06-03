import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { differentiators } from '../../config';
import { useTranslation } from 'react-i18next';

/**
 * DifferentiatorsSection - 7 key differentiators in a grid layout
 * Features heading, subheading, and cards with icons
 * Dark primary background with scroll animations and hover effects
 */
export function DifferentiatorsSection() {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Use the first 7 differentiators from the config
  const displayDifferentiators = differentiators.slice(0, 7);

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-dark-primary"
      aria-labelledby="why-us-heading"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          <h2
            id="why-us-heading"
            className="heading-2 text-text-primary mb-4"
          >
            {t('differentiators.heading')}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t('differentiators.subheading')}
          </p>
        </motion.div>

        {/* Cards Grid - 4+3 layout on desktop */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* First 4 cards */}
          {displayDifferentiators.slice(0, 4).map((diff) => (
            <motion.div
              key={diff.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-dark-secondary/80 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 hover:shadow-glow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                <Icon name={diff.icon} />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                {t(`differentiators.items.${diff.id}.title`)}
              </h3>
              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {t(`differentiators.items.${diff.id}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - 3 cards centered */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Last 3 cards */}
          {displayDifferentiators.slice(4, 7).map((diff) => (
            <motion.div
              key={diff.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative w-full max-w-sm p-6 rounded-2xl bg-dark-secondary/80 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 hover:shadow-glow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                <Icon name={diff.icon} />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                {t(`differentiators.items.${diff.id}.title`)}
              </h3>
              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {t(`differentiators.items.${diff.id}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Icon component - renders differentiator icons by name
 */
function Icon({ name }: { name: string }) {
  const iconMap: Record<string, ReactNode> = {
    // Trusted by Expats - globe/users
    users: (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    // Multilingual Communication - languages
    languages: (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
    // WhatsApp Booking - message-circle
    'message-circle': (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    // Recurring Plans - calendar
    calendar: (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    // Airbnb Support - bed
    bed: (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12h18M3 6h18M3 18h18M7 6v12M17 6v12"
        />
      </svg>
    ),
    // Transparent Pricing - credit-card
    'credit-card': (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    // Fast Response - clock
    clock: (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    // Quality Guarantee - shield-check
    'shield-check': (
      <svg
        className="w-6 h-6 text-accent-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };

  return iconMap[name] || iconMap.users;
}

export default DifferentiatorsSection;