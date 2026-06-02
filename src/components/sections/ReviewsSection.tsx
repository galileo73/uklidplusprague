import { motion } from 'framer-motion';
import {
  featuredReviews,
  reviewStats,
  reviewGrowthNote,
  googleReviewsUrl,
  socialLinks,
} from '../../config';

/**
 * ReviewsSection - Google Reviews & Reputation section
 * Features Google rating display, featured review cards, and growth program note
 * Dark secondary background with scroll animations
 */
export function ReviewsSection() {
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

  const ratingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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

  const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-dark-secondary"
      aria-labelledby="reviews-heading"
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
            id="reviews-heading"
            className="heading-2 text-text-primary mb-4"
          >
            Google Reviews & Reputation
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            What our clients say about us
          </p>
        </motion.div>

        {/* Google Rating Display */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={ratingVariants}
        >
          <div className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-dark-primary/80 border border-white/10">
            {/* Google Logo/Icon */}
            <GoogleIcon />

            {/* Rating Display */}
            <div className="flex flex-col items-center">
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {renderStars(reviewStats.averageRating)}
                </div>
                <span className="text-2xl md:text-3xl font-bold text-text-primary">
                  {reviewStats.averageRating.toFixed(1)}
                </span>
              </div>

              {/* Review Count */}
              <p className="text-text-secondary text-sm md:text-base">
                Based on {reviewStats.totalReviews} reviews
              </p>

              {/* Google Brand Link */}
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-google-blue hover:text-google-blue/80 transition-colors flex items-center gap-1"
              >
                <span>See all reviews on Google</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Review Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {featuredReviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-dark-primary/80 border border-white/5 hover:border-accent-primary/30 transition-all duration-300"
            >
              {/* Author & Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center">
                    <span className="text-accent-primary font-semibold text-sm">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  {/* Author Name */}
                  <span className="font-medium text-text-primary">
                    {review.author}
                  </span>
                </div>
                {/* Star Rating */}
                <div className="flex">
                  {renderStars(review.rating, 'sm')}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                "{review.text}"
              </p>

              {/* Date */}
              {review.date && (
                <p className="text-text-muted text-xs">
                  {formatDate(review.date)}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Review Growth Program Note */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={noteVariants}
        >
          <div className="p-5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <StarIcon className="w-5 h-5 text-accent-primary" />
              <span className="font-medium text-text-primary">
                Growing Our Reputation
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              {reviewGrowthNote}
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={noteVariants}
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <span>See all reviews</span>
            <ExternalLinkIcon />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <span>Leave a review</span>
            <EditIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Render star rating
 */
function renderStars(rating: number, size: 'md' | 'sm' = 'md'): React.ReactNode {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const starSize = size === 'md' ? 'w-5 h-5' : 'w-4 h-4';

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon
        key={`full-${i}`}
        className={`${starSize} text-google-yellow fill-google-yellow`}
      />
    );
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <HalfStarIcon
        key="half"
        className={`${starSize} text-google-yellow`}
      />
    );
  }

  // Empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarIcon
        key={`empty-${i}`}
        className={`${starSize} text-text-muted`}
      />
    );
  }

  return stars;
}

/**
 * Format date to readable string
 */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Google Icon Component
 */
function GoogleIcon() {
  return (
    <svg
      className="w-12 h-12 md:w-16 md:h-16"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
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

/**
 * Half Star Icon Component
 */
function HalfStarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="halfStarGradient">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfStarGradient)"
        stroke="currentColor"
        strokeWidth="1"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}

/**
 * External Link Icon
 */
function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

/**
 * Edit/Pencil Icon
 */
function EditIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}

export default ReviewsSection;