import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { services } from '../../config';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

/**
 * ServicesSection - 6-card grid showcasing main services
 * Features heading, subheading, and responsive grid layout
 * Dark secondary background with scroll animations
 */
export function ServicesSection() {
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

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-dark-secondary"
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="heading-2 text-text-primary mb-4"
          >
            {t('services.heading')}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t('services.subheading')}
          </p>
        </motion.div>

        {/* Services Grid - 3x2 on desktop, 2 columns on tablet, 1 on mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative flex flex-col p-6 lg:p-8 rounded-2xl bg-dark-primary/50 border border-border-subtle hover:border-accent-primary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-5 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                <ServiceIcon name={service.icon} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {t(`services.items.${service.id}.title`)}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {t(`services.items.${service.id}.description`)}
              </p>

              {/* Features (show first 3) */}
              {service.features && service.features.length > 0 && (
                <ul className="flex-1 mb-6 space-y-2">
                  {service.features.slice(0, 3).map((_, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <svg
                        className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5"
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
                      <span>{t(`services.items.${service.id}.features.${index}`)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              {service.cta && (
                <Button
                  href={service.cta.href}
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full justify-center group-hover:border-accent-primary group-hover:text-accent-primary"
                >
                  {t(`services.items.${service.id}.cta`)}
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * ServiceIcon component - renders icons by name for services
 */
function ServiceIcon({ name }: { name: string }) {
  const iconMap: Record<string, ReactNode> = {
    home: (
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    sparkles: (
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
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
          d="M3 12h18M3 6h18M3 18h18M7 6v12"
        />
      </svg>
    ),
    'calendar-check': (
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 14l2 2 4-4"
        />
      </svg>
    ),
    shirt: (
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
          d="M4 6h4l2-4h4l2 4h4M4 6v14a1 1 0 001 1h14a1 1 0 001-1V6M8 6v4m8-4v4M8 10h8"
        />
      </svg>
    ),
    building: (
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1M9 15h1m4 0h1m-5 6h4"
        />
      </svg>
    ),
    key: (
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
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
    plus: (
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
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
  };

  return iconMap[name] || iconMap.home;
}

export default ServicesSection;