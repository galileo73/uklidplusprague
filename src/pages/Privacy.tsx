import { PageSEO } from '../components/seo/PageSEO';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { defaultSEO } from '../config';

/**
 * Privacy Policy Page
 * Displays the privacy policy for UKLID PLUS PRAHA
 */
export function Privacy() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <PageSEO pageKey="privacy" />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-accent max-w-none">
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Information We Collect</h2>
              <p className="text-text-secondary mb-4">
                At {defaultSEO.siteUrl.replace('https://', '').replace('http://', '')}, we collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Service address and property details</li>
                <li>Booking preferences and special requests</li>
                <li>Payment information for services rendered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Provide and improve our cleaning services</li>
                <li>Process bookings and payments</li>
                <li>Communicate about your appointments</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Respond to your inquiries and requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Information Sharing</h2>
              <p className="text-text-secondary mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Data Security</h2>
              <p className="text-text-secondary">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Cookies</h2>
              <p className="text-text-secondary">
                Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Your Rights</h2>
              <p className="text-text-secondary mb-4">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Contact Us</h2>
              <p className="text-text-secondary">
                If you have any questions about this Privacy Policy, please contact us via WhatsApp or through our contact form.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Privacy;