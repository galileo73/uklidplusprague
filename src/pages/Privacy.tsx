import { PageSEO } from '../components/seo/PageSEO';
import { defaultSEO } from '../config';
import { useTranslation } from 'react-i18next';

/**
 * Privacy Policy Page
 * Displays the privacy policy for UKLID PLUS PRAHA
 */
export function Privacy() {
  const { t } = useTranslation();
  const siteName = defaultSEO.siteUrl.replace('https://', '').replace('http://', '');

  return (
    <>
      <PageSEO pageKey="privacy" />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            {t('privacy.title')}
          </h1>

          <div className="prose prose-invert prose-accent max-w-none">
            <p className="text-text-secondary mb-6">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-text-secondary mb-8">
              {t('privacy.intro')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('privacy.sections.dataCollection.title')}
              </h2>
              <p className="text-text-secondary mb-4">
                {t('privacy.sections.dataCollection.content')}
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                {(t('privacy.sections.dataCollection.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('privacy.sections.dataUsage.title')}
              </h2>
              <p className="text-text-secondary mb-4">
                {t('privacy.sections.dataUsage.content')}
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                {(t('privacy.sections.dataUsage.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('privacy.sections.dataSharing.title')}
              </h2>
              <p className="text-text-secondary mb-4">
                {t('privacy.sections.dataSharing.content')}
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                {(t('privacy.sections.dataSharing.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('privacy.sections.dataSecurity.title')}
              </h2>
              <p className="text-text-secondary">
                {t('privacy.sections.dataSecurity.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('privacy.sections.yourRights.title')}
              </h2>
              <p className="text-text-secondary mb-4">
                {t('privacy.sections.yourRights.content')}
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                {(t('privacy.sections.yourRights.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                {t('privacy.sections.contact.title')}
              </h2>
              <p className="text-text-secondary">
                {t('privacy.sections.contact.content')}
              </p>
              <p className="text-text-secondary mt-2">
                <a href={`https://wa.me/${siteName}`} className="text-accent-primary hover:text-accent-secondary transition-colors">
                  WhatsApp
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Privacy;