import { PageSEO } from '../components/seo/PageSEO';
import { Button } from '../components/ui/Button';
import { getWhatsAppLink } from '../utils/whatsapp';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * Work With Us Page
 * Recruitment page for cleaners looking to join UKLID PLUS PRAHA
 */
export function WorkWithUs() {
  const { t } = useTranslation();
  const whatsappApplyLink = getWhatsAppLink(t('workWithUs.applyMessage'));

  return (
    <>
      <PageSEO pageKey="workWithUs" />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {t('workWithUs.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8">
              {t('workWithUs.hero.subtitle')}
            </p>
            <Button
              href={whatsappApplyLink}
              variant="whatsapp"
              size="lg"
            >
              {t('workWithUs.hero.cta')}
            </Button>
          </motion.div>

          {/* Why Work With Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              {t('workWithUs.whyWork.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t('workWithUs.whyWork.items', { returnObjects: true }) as string[]).map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-dark-secondary/50 border border-white/5"
                >
                  <svg
                    className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5"
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
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Who We Are Looking For Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              {t('workWithUs.whoWeLook.title')}
            </h2>
            <ul className="space-y-3">
              {(t('workWithUs.whoWeLook.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <svg
                    className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Cooperation Models Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              {t('workWithUs.cooperation.title')}
            </h2>
            <div className="space-y-6">
              {/* DPC */}
              <div className="p-6 rounded-lg bg-dark-secondary/50 border border-white/5">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t('workWithUs.cooperation.dpc.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('workWithUs.cooperation.dpc.description')}
                </p>
              </div>

              {/* DPP */}
              <div className="p-6 rounded-lg bg-dark-secondary/50 border border-white/5">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t('workWithUs.cooperation.dpp.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('workWithUs.cooperation.dpp.description')}
                </p>
              </div>

              {/* ICO */}
              <div className="p-6 rounded-lg bg-dark-secondary/50 border border-white/5">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t('workWithUs.cooperation.ico.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('workWithUs.cooperation.ico.description')}
                </p>
              </div>
            </div>

            <p className="text-text-muted text-sm mt-4 italic">
              {t('workWithUs.cooperation.disclaimer')}
            </p>
          </motion.section>

          {/* How to Apply Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              {t('workWithUs.howToApply.title')}
            </h2>
            <ol className="space-y-4">
              {(t('workWithUs.howToApply.steps', { returnObjects: true }) as string[]).map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-text-secondary pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </motion.section>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-8 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20"
          >
            <h3 className="text-xl font-bold text-text-primary mb-4">
              {t('workWithUs.contact.title')}
            </h3>
            <p className="text-text-secondary mb-6">
              {t('workWithUs.contact.description')}
            </p>
            <Button
              href={whatsappApplyLink}
              variant="whatsapp"
              size="lg"
            >
              {t('workWithUs.contact.cta')}
            </Button>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default WorkWithUs;