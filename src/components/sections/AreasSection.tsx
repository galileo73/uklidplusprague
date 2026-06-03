import { motion } from 'framer-motion';
import { primaryServiceAreas } from '../../config';
import { Button } from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

/**
 * AreasSection - Service areas grid showcasing Prague districts
 * Features heading, subheading, area cards grid, and WhatsApp CTA
 * Dark primary background with scroll animations
 */
export function AreasSection() {
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

  const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="areas"
      className="py-20 md:py-28 bg-dark-primary"
      aria-labelledby="areas-heading"
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
            id="areas-heading"
            className="heading-2 text-text-primary mb-4"
          >
            Service Areas
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Professional cleaning services across Prague
          </p>
        </motion.div>

        {/* Areas Grid - 5 columns on desktop, 3 on tablet, 2 on mobile */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {primaryServiceAreas.map((area) => (
            <motion.div
              key={area.id}
              variants={cardVariants}
              className="group relative flex flex-col p-5 lg:p-6 rounded-2xl bg-dark-secondary/50 border border-border-subtle hover:border-accent-primary/30 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* District Name */}
              <h3 className="text-lg font-semibold text-accent-primary mb-3">
                {area.name}
              </h3>

              {/* Neighborhoods List */}
              <ul className="flex-1 space-y-1.5">
                {area.neighborhoods.map((neighborhood, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent-primary/60 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Areas Note */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={noteVariants}
        >
          <p className="text-text-secondary mb-6">
            Other Prague districts available on request. Contact us via WhatsApp to check availability.
          </p>

          {/* WhatsApp CTA */}
          <Button
            href={getWhatsAppLink('Hello, I would like to inquire about cleaning services in my area.')}
            variant="whatsapp"
            size="lg"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.42 4.413-9.833 9.834-9.833 2.624 0 5.094 1.023 6.953 2.88a9.789 9.789 0 012.882 6.956c-.003 5.42-4.415 9.833-9.837 9.833m8.367-18.07A11.707 11.707 0 0012.045 0C5.464 0 .091 5.373.089 11.956c0 2.106.55 4.162 1.594 5.985L0 24l6.191-1.624a11.711 11.711 0 005.85 1.57h.005c6.581 0 11.953-5.373 11.955-11.956a11.88 11.88 0 00-3.497-8.457z" />
            </svg>
            Contact Us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default AreasSection;