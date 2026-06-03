import { motion } from 'framer-motion';
import { recurringPlans, whatsappLink } from '../../config';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

/**
 * RecurringSection - 3-card pricing plans for recurring cleaning
 * Features highlighted middle card (Premium plan) with special styling
 * Dark primary background with scroll animations
 */
export function RecurringSection() {
  const { t } = useTranslation();

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="recurring"
      className="py-20 md:py-28 bg-dark-primary"
      aria-labelledby="recurring-heading"
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
            id="recurring-heading"
            className="heading-2 text-text-primary mb-4"
          >
            {t('recurring.heading')}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t('recurring.subheading')}
          </p>
        </motion.div>

        {/* Plans Grid - 3 columns on desktop, 1 on mobile */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {recurringPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`
                relative flex flex-col p-6 lg:p-8 rounded-2xl transition-all duration-300
                ${plan.highlight
                  ? 'bg-dark-secondary border-2 border-accent-primary shadow-glow-lg lg:scale-105 lg:-my-4 z-10'
                  : 'bg-dark-secondary/50 border border-border-subtle hover:border-accent-primary/30'
                }
              `}
            >
              {/* Best Value Badge for highlighted plan */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-primary text-dark-primary text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    {t('recurring.bestValue')}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-xl font-semibold mb-2 ${plan.highlight ? 'text-accent-primary' : 'text-text-primary'}`}>
                {t(`recurring.plans.${plan.id}.name`)}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {t(`recurring.plans.${plan.id}.description`)}
              </p>

              {/* Features List */}
              <ul className="flex-1 mb-6 space-y-3">
                {plan.features.map((_, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-accent-primary' : 'text-text-muted'}`}
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
                    <span className={plan.highlight ? 'text-text-primary' : 'text-text-secondary'}>
                      {t(`recurring.plans.${plan.id}.features.${featureIndex}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                href={`${whatsappLink}?text=${encodeURIComponent(t('recurring.cta.message', { plan: t(`recurring.plans.${plan.id}.name`) }))}`}
                variant={plan.highlight ? 'whatsapp' : 'outline'}
                size="md"
                className={`w-full justify-center ${!plan.highlight ? 'hover:border-accent-primary hover:text-accent-primary' : ''}`}
              >
                <WhatsAppIcon />
                {t('recurring.cta.button')}
              </Button>
            </motion.div>
          ))}
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
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.876 9.876 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.863 9.863 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-19.297A11.965 11.965 0 0012.001 0C5.383 0 .003 5.382.003 12c0 2.11.549 4.17 1.595 6.001L0 24l6.145-1.613a11.955 11.955 0 005.856 1.49h.005c6.617 0 11.99-5.373 12-11.994a11.908 11.908 0 00-3.5-8.495" />
    </svg>
  );
}

export default RecurringSection;