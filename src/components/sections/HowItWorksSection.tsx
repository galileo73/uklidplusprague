import { motion } from 'framer-motion';
import { howItWorksSteps, contactInfo } from '../../config';

/**
 * HowItWorksSection - 5-step process timeline
 * Features heading, subheading, and horizontal/vertical timeline
 * Dark secondary background with scroll animations
 */
export function HowItWorksSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stepVariants = {
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-dark-secondary"
      aria-labelledby="how-it-works-heading"
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
            id="how-it-works-heading"
            className="heading-2 text-text-primary mb-4"
          >
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Simple steps to a cleaner home
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Desktop: Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-border-subtle origin-left">
            <motion.div
              className="h-full bg-accent-primary"
              variants={lineVariants}
            />
          </div>

          {/* Mobile: Vertical Timeline Line */}
          <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-0.5 bg-border-subtle origin-top">
            <motion.div
              className="w-full h-full bg-accent-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { scaleY: 0 },
                visible: {
                  scaleY: 1,
                  transition: {
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                    delay: 0.3,
                  },
                },
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Numbered Circle */}
                <motion.div
                  variants={circleVariants}
                  className="relative z-10 w-14 h-14 rounded-full bg-dark-primary border-2 border-accent-primary flex items-center justify-center mb-6"
                >
                  <span className="text-2xl font-bold text-accent-primary">
                    {step.number}
                  </span>
                </motion.div>

                {/* Step Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* CTA for last step */}
                {index === howItWorksSteps.length - 1 && (
                  <motion.a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/10 hover:bg-accent-primary/20 border border-accent-primary/30 rounded-full text-accent-primary text-sm font-medium transition-colors"
                  >
                    <WhatsAppIcon />
                    Get Started
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * WhatsApp icon component
 */
function WhatsAppIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default HowItWorksSection;