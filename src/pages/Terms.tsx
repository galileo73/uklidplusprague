import { PageSEO } from '../components/seo/PageSEO';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { defaultSEO } from '../config';

/**
 * Terms of Service Page
 * Displays the terms of service for UKLID PLUS PRAHA
 */
export function Terms() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <PageSEO pageKey="terms" />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-accent max-w-none">
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Services</h2>
              <p className="text-text-secondary mb-4">
                {defaultSEO.siteUrl.replace('https://', '').replace('http://', '')} provides professional cleaning services in Prague and surrounding areas. Our services include:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Standard cleaning</li>
                <li>Deep cleaning</li>
                <li>Move-in/move-out cleaning</li>
                <li>Airbnb turnover cleaning</li>
                <li>Recurring cleaning plans</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Booking and Cancellation</h2>
              <p className="text-text-secondary mb-4">
                Bookings can be made via WhatsApp, phone, or our contact form. Cancellation policy:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Cancellations made 24+ hours before appointment: no charge</li>
                <li>Cancellations made less than 24 hours before: 50% of service fee may apply</li>
                <li>No-shows: full service fee may be charged</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Pricing and Payment</h2>
              <p className="text-text-secondary mb-4">
                Prices are quoted before service and may vary based on property size, condition, and specific requirements. Payment methods:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Cash upon completion</li>
                <li>Bank transfer</li>
                <li>Credit/debit card (where available)</li>
              </ul>
              <p className="text-text-secondary mt-4">
                Final pricing is confirmed before service begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Quality Guarantee</h2>
              <p className="text-text-secondary">
                We stand behind our work. If you are not satisfied with our cleaning service, please contact us within 24 hours and we will re-clean the affected areas at no additional cost.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Liability</h2>
              <p className="text-text-secondary mb-4">
                We are fully insured for your protection. Our liability is limited to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Direct damage caused by our cleaning staff</li>
                <li>Items damaged during the cleaning process</li>
                <li>Maximum liability is limited to the cost of the service rendered</li>
              </ul>
              <p className="text-text-secondary mt-4">
                We are not responsible for pre-existing conditions or damage not caused by our staff.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Access to Property</h2>
              <p className="text-text-secondary">
                You are responsible for providing access to your property at the scheduled time. If access cannot be provided, the full service fee may be charged.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Privacy</h2>
              <p className="text-text-secondary">
                Your personal information is handled in accordance with our Privacy Policy. We respect your privacy and do not share your data with third parties without consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Governing Law</h2>
              <p className="text-text-secondary">
                These terms are governed by Czech law. Any disputes will be resolved in the courts of the Czech Republic.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Changes to Terms</h2>
              <p className="text-text-secondary">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Contact</h2>
              <p className="text-text-secondary">
                For questions about these terms, please contact us via WhatsApp or through our contact form.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Terms;