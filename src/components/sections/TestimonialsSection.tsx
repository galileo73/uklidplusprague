import { motion } from 'framer-motion';
import { getFeaturedTestimonials } from '../../config';

/**
 * TestimonialsSection - Client testimonials section
 * Features 3 testimonial cards with quotes, ratings, and author info
 * Dark primary background with scroll animations
 */
export function TestimonialsSection() {
  const testimonials = getFeaturedTestimonials(3);

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
      id="testimonials"
      className="py-20 md:py-28 bg-dark-primary"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="heading-2 text-text-primary mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-dark-secondary/80 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 shadow-lg hover:shadow-accent-primary/5"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <QuoteIcon className="w-10 h-10 text-accent-primary" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote Text */}
              <blockquote className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-primary font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                {/* Author Details */}
                <div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  {(testimonial.role || testimonial.location) && (
                    <p className="text-sm text-text-muted">
                      {testimonial.role}
                      {testimonial.role && testimonial.location && ', '}
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/0 to-transparent opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Render star rating
 */
function renderStars(rating: number): React.ReactNode {
  const stars = [];
  const fullStars = Math.min(5, Math.floor(rating));

  // Full stars (always 5 for testimonials)
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon
        key={`star-${i}`}
        className="w-5 h-5 text-google-yellow fill-google-yellow"
      />
    );
  }

  // If rating is less than 5, fill remaining with empty stars
  const emptyStars = 5 - fullStars;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarIcon
        key={`empty-${i}`}
        className="w-5 h-5 text-text-muted"
      />
    );
  }

  return stars;
}

/**
 * Quote Icon Component
 */
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

/**
 * Star Icon Component
 */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default TestimonialsSection;