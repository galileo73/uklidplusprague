import { motion } from 'framer-motion';
import { contactInfo, whatsappLink, socialLinks } from '../../config';

/**
 * ContactSection - Primary contact section with WhatsApp, Messenger, and form
 * Features two-column layout with contact info on left and form on right
 * Dark secondary background with Framer Motion animations
 */
export function ContactSection() {
  // Pre-filled WhatsApp message for booking
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to book a cleaning service. Can you help me with availability and pricing?"
  );
  const whatsappUrlWithMessage = `${whatsappLink}?text=${whatsappMessage}`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-dark-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
        >
          <h2
            id="contact-heading"
            className="heading-2 text-text-primary mb-4"
          >
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to book your cleaning? Contact us via your preferred channel
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column - Contact Info (60% - 3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {/* WhatsApp Primary Contact */}
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <div className="p-6 rounded-2xl bg-dark-primary/80 border border-[#25D366]/30 hover:border-[#25D366]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                      <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-text-primary">
                        WhatsApp
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-medium bg-[#25D366]/20 text-[#25D366] rounded-full">
                        Fastest response
                      </span>
                    </div>
                    <p className="text-text-secondary mb-3">
                      Message us directly for quick booking and instant replies
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={whatsappUrlWithMessage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#128C7E] transition-all duration-300 hover:shadow-lg active:scale-95"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        <span>Send Message</span>
                      </a>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#25D366]/50 text-[#25D366] font-medium rounded-lg hover:bg-[#25D366]/10 transition-all duration-300"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        <span>{contactInfo.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Contacts */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              {/* Messenger */}
              <a
                href={socialLinks.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-dark-primary/60 border border-white/10 hover:border-[#0084FF]/50 transition-all duration-300 hover:bg-dark-primary/80"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0084FF]/20 flex items-center justify-center group-hover:bg-[#0084FF]/30 transition-colors">
                    <MessengerIcon className="w-5 h-5 text-[#0084FF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Messenger</h4>
                    <p className="text-sm text-text-muted">Chat with us on Facebook</p>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-dark-primary/60 border border-white/10 hover:border-[#E4405F]/50 transition-all duration-300 hover:bg-dark-primary/80"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4]/30 via-[#E4405F]/30 to-[#FCAF45]/30 flex items-center justify-center group-hover:from-[#833AB4]/40 group-hover:via-[#E4405F]/40 group-hover:to-[#FCAF45]/40 transition-colors">
                    <InstagramIcon className="w-5 h-5 text-[#E4405F]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">Instagram</h4>
                    <p className="text-sm text-text-muted">See our work & reviews</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {/* Service Area */}
              <div className="p-4 rounded-lg bg-dark-primary/40 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <LocationIcon className="w-5 h-5 text-accent-primary" />
                  <h4 className="font-medium text-text-primary">Service Area</h4>
                </div>
                <p className="text-sm text-text-secondary">
                  We serve Prague and surrounding areas
                </p>
              </div>

              {/* Language Support */}
              <div className="p-4 rounded-lg bg-dark-primary/40 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <LanguageIcon className="w-5 h-5 text-accent-primary" />
                  <h4 className="font-medium text-text-primary">Languages</h4>
                </div>
                <p className="text-sm text-text-secondary">
                  English, Czech, Russian, Ukrainian
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Contact Form (40% - 2/5) */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={formVariants}
          >
            <div className="p-6 rounded-2xl bg-dark-primary/80 border border-white/10">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Or send us a message
              </h3>
              <form
                name="contact"
                method="POST"
                action="/success"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-4"
              >
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                    placeholder="Tell us about your cleaning needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent-primary text-dark-primary font-semibold rounded-lg hover:bg-accent-secondary transition-all duration-300 hover:shadow-glow-md active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * WhatsApp Icon Component
 */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Phone Icon Component
 */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

/**
 * Messenger Icon Component
 */
function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654v4.235l4.103-2.238c1.082.3 2.226.46 3.428.46 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.175 14.967l-3.046-3.26-5.89 3.26 6.505-6.918 3.117 3.26 5.823-3.26-6.509 6.918z" />
    </svg>
  );
}

/**
 * Instagram Icon Component
 */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/**
 * Location Icon Component
 */
function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

/**
 * Language Icon Component
 */
function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  );
}

export default ContactSection;