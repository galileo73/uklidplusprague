import { motion } from 'framer-motion';
import { whatsappLink } from '../../config';
import { Button } from '../ui/Button';

/**
 * AirbnbSection - Section targeting Airbnb hosts and property managers
 * Features heading, subheading, checklist of benefits, visual placeholder, and WhatsApp CTA
 * Two-column layout on desktop (60/40), single column on mobile
 * Dark secondary background with accent color checkmarks
 */
export function AirbnbSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const benefits = [
    {
      text: 'Airbnb Turnover Cleaning',
      description: 'Complete apartment reset between guests',
    },
    {
      text: 'Express Guest Preparation',
      description: 'Same-day service available',
    },
    {
      text: 'Same-day reset',
      description: 'Quick turnaround for back-to-back bookings',
    },
    {
      text: 'Key handling available',
      description: 'We can manage keys for you',
    },
    {
      text: 'Guest-ready guarantee',
      description: 'Your apartment will be spotless',
    },
    {
      text: 'Host Priority Service',
      description: 'Priority scheduling for recurring hosts',
    },
  ];

  return (
    <section
      id="airbnb"
      className="py-20 md:py-28 bg-dark-secondary"
      aria-labelledby="airbnb-heading"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content Column - Left Side (3/5 = 60%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-3"
          >
            {/* Header */}
            <motion.div variants={headerVariants} className="mb-10">
              <h2
                id="airbnb-heading"
                className="heading-2 text-text-primary mb-4"
              >
                Airbnb Host Priority Service
              </h2>
              <p className="text-lg md:text-xl text-text-secondary">
                Professional turnover cleaning for short-term rental hosts
              </p>
            </motion.div>

            {/* Checklist */}
            <motion.ul
              variants={containerVariants}
              className="space-y-4 mb-10"
              role="list"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={checkItemVariants}
                  className="flex items-start gap-4"
                >
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {/* Benefit Text */}
                  <div>
                    <span className="text-text-primary font-semibold">
                      {benefit.text}
                    </span>
                    <span className="text-text-secondary"> - {benefit.description}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={ctaVariants}>
              <Button href={whatsappLink} variant="whatsapp" size="lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Host Priority Service
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Column - Right Side (2/5 = 40%) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2 relative"
          >
            {/* Abstract gradient visual placeholder */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary">
              {/* Gradient overlay with accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-secondary/5" />

              {/* Decorative circles */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent-secondary/15 rounded-full blur-3xl" />

              {/* Airbnb/Prague apartment illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  {/* Home/Key icon */}
                  <svg
                    className="w-24 h-24 mx-auto text-accent-primary/30 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  {/* Text placeholder */}
                  <p className="text-text-muted text-sm">
                    Prague Airbnb Hosting
                  </p>
                </div>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 rounded-2xl border border-border-subtle" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AirbnbSection;