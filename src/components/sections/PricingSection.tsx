import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs } from '../ui/Tabs';
import { Button } from '../ui/Button';
import { pricingCategories, addonServices, recurringPlans } from '../../config/pricing';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { useTranslation } from 'react-i18next';

/**
 * PricingSection - Tabbed pricing with standard, deep cleaning, and add-ons
 * Features transparent pricing tables and special offer cards
 * Dark secondary background with scroll animations
 */
export function PricingSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('standard');

  const tabs = [
    { id: 'standard', label: t('pricing.tabs.standard') },
    { id: 'deep', label: t('pricing.tabs.deep') },
    { id: 'addons', label: t('pricing.tabs.addons') },
  ];

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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
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
      id="pricing"
      className="py-20 md:py-28 bg-dark-primary"
      aria-labelledby="pricing-heading"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          <h2
            id="pricing-heading"
            className="heading-2 text-text-primary mb-4"
          >
            {t('pricing.heading')}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t('pricing.subheading')}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
        >
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'standard' && (
              <motion.div
                key="standard"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <PricingTable category={pricingCategories[0]} t={t} />
              </motion.div>
            )}
            {activeTab === 'deep' && (
              <motion.div
                key="deep"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <PricingTable category={pricingCategories[1]} t={t} />
              </motion.div>
            )}
            {activeTab === 'addons' && (
              <motion.div
                key="addons"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AddonsList addons={addonServices} t={t} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Special Offers */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <h3 className="heading-3 text-text-primary text-center mb-8">
            {t('pricing.offers.heading')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recurringPlans.slice(0, 2).map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`relative p-6 rounded-2xl border ${
                  plan.highlight
                    ? 'bg-accent-primary/10 border-accent-primary'
                    : 'bg-dark-secondary/50 border-border-subtle'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-primary text-dark-primary text-xs font-semibold rounded-full">
                    {t('pricing.offers.popular')}
                  </div>
                )}
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  {t(`pricing.offers.plans.${plan.id}.name`)}
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  {t(`pricing.offers.plans.${plan.id}.description`)}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.slice(0, 4).map((_, index) => (
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
                      <span>{t(`pricing.offers.plans.${plan.id}.features.${index}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.cta.href}
                  variant={plan.highlight ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full justify-center"
                >
                  {t(`pricing.offers.plans.${plan.id}.cta`)}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
        >
          <p className="text-text-secondary mb-4">
            {t('pricing.cta.text')}
          </p>
          <Button href={getWhatsAppLink(t('pricing.cta.message'))} variant="whatsapp" size="md">
            <WhatsAppIcon />
            {t('pricing.cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * PricingTable - Renders a pricing table for a category
 */
function PricingTable({ category, t }: { category: typeof pricingCategories[0]; t: ReturnType<typeof useTranslation>['t'] }) {
  return (
    <div className="bg-dark-secondary/50 rounded-2xl border border-border-subtle overflow-hidden">
      {category.description && (
        <div className="px-6 py-4 border-b border-border-subtle">
          <p className="text-text-secondary text-sm">{category.description}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-subtle">
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                {t('pricing.table.apartment')}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                {t('pricing.table.size')}
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">
                {t('pricing.table.price')}
              </th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-border-subtle last:border-b-0 hover:bg-dark-primary/30 transition-colors"
              >
                <td className="px-6 py-4 text-text-primary font-medium">
                  {t(`pricing.categories.${category.id}.items.${index}.apartment`)}
                </td>
                <td className="px-6 py-4 text-text-secondary">
                  {item.size}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="text-accent-primary font-semibold">
                    {item.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * AddonsList - Renders a list of add-on services
 */
function AddonsList({ addons, t }: { addons: typeof addonServices; t: ReturnType<typeof useTranslation>['t'] }) {
  return (
    <div className="bg-dark-secondary/50 rounded-2xl border border-border-subtle p-6">
      <h4 className="text-lg font-semibold text-text-primary mb-4">
        {t('pricing.addons.heading')}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addons.map((addon) => (
          <div
            key={addon.id}
            className="flex items-center justify-between p-4 rounded-xl bg-dark-primary/30 border border-border-subtle hover:border-accent-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                <AddonIcon />
              </div>
              <span className="text-text-primary font-medium">{t(`pricing.addons.items.${addon.id}`)}</span>
            </div>
            <span className="text-accent-primary font-semibold text-sm">
              {addon.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * WhatsAppIcon - WhatsApp icon component
 */
function WhatsAppIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/**
 * AddonIcon - Plus icon for add-on services
 */
function AddonIcon() {
  return (
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
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

export default PricingSection;