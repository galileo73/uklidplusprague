import { PageSEO } from '../components/seo/PageSEO';
import { useTranslation } from 'react-i18next';

/**
 * Terms of Service Page
 * Displays the terms of service for UKLID PLUS PRAHA
 */
export function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO pageKey="terms" />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            {t('terms.title')}
          </h1>

          <div className="prose prose-invert prose-accent max-w-none">
            <p className="text-text-secondary mb-6">
              {t('terms.lastUpdated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-text-secondary mb-8">
              {t('terms.intro')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.services.title')}
              </h2>
              <p className="text-text-secondary">
                {t('terms.sections.services.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.booking.title')}
              </h2>
              <p className="text-text-secondary mb-4">
                {t('terms.sections.booking.content')}
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                {(t('terms.sections.booking.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.payment.title')}
              </h2>
              <p className="text-text-secondary">
                {t('terms.sections.payment.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.liability.title')}
              </h2>
              <p className="text-text-secondary">
                {t('terms.sections.liability.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.satisfaction.title')}
              </h2>
              <p className="text-text-secondary">
                {t('terms.sections.satisfaction.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.changes.title')}
              </h2>
              <p className="text-text-secondary">
                {t('terms.sections.changes.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('terms.sections.contact.title')}
              </h2>
              <p className="text-text-secondary">
                {t('terms.sections.contact.content')}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Terms;