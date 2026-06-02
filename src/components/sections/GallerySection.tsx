import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { galleryItems, galleryCategories } from '../../config/gallery';
import type { GalleryItem } from '../../types';

/**
 * GallerySection - Before/After cleaning results gallery
 * Features category filters and interactive before/after cards
 * Dark primary background with scroll animations
 */
export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Filter items based on active category
  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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

  const filterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-dark-primary"
      aria-labelledby="gallery-heading"
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
            id="gallery-heading"
            className="heading-2 text-text-primary mb-4"
          >
            Before <span className="text-gradient">&</span> After
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            See the transformation our cleaning services deliver
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={filterVariants}
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent-primary text-dark-primary shadow-glow-sm'
                  : 'bg-dark-secondary text-text-secondary border border-border-subtle hover:border-accent-primary/30 hover:text-text-primary'
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                isHovered={hoveredCard === item.id}
                onHover={() => setHoveredCard(item.id)}
                onLeave={() => setHoveredCard(null)}
                variants={cardVariants}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary">
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/**
 * GalleryCard - Individual before/after card component
 */
interface GalleryCardProps {
  item: GalleryItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  variants: Variants;
}

function GalleryCard({ item, isHovered, onHover, onLeave, variants }: GalleryCardProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative rounded-2xl overflow-hidden bg-dark-secondary border border-border-subtle hover:border-accent-primary/30 transition-all duration-300 hover:shadow-card-hover"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Before Image (Placeholder) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <PlaceholderImage type="before" />
        </div>

        {/* After Image (Placeholder) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <PlaceholderImage type="after" />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-dark-primary/80 backdrop-blur-sm text-text-primary text-sm font-medium rounded-full border border-white/10 hover:bg-dark-primary hover:border-accent-primary/50 transition-all duration-300 z-10"
          aria-label={showAfter ? 'Show before image' : 'Show after image'}
        >
          {showAfter ? 'View Before' : 'View After'}
        </button>

        {/* State Indicator */}
        <div className="absolute top-4 right-4 px-2 py-1 bg-dark-primary/80 backdrop-blur-sm text-xs font-medium rounded-full border border-white/10 z-10">
          {showAfter ? (
            <span className="text-accent-primary">After</span>
          ) : (
            <span className="text-text-secondary">Before</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-text-muted capitalize">
          {item.category?.replace(/-/g, ' ') || 'Cleaning'}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
}

/**
 * PlaceholderImage - Placeholder image component with gradient
 */
interface PlaceholderImageProps {
  type: 'before' | 'after';
}

function PlaceholderImage({ type }: PlaceholderImageProps) {
  const gradientClass =
    type === 'before'
      ? 'from-gray-700 via-gray-600 to-gray-500'
      : 'from-accent-primary/40 via-accent-primary/60 to-accent-secondary/40';

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
      <div className="text-center px-4">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-dark-primary/30 flex items-center justify-center backdrop-blur-sm">
          {type === 'before' ? (
            <svg
              className="w-8 h-8 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          )}
        </div>
        {/* Label */}
        <span className="text-sm font-medium text-white/80 backdrop-blur-sm">
          {type === 'before' ? 'Before' : 'After'}
        </span>
      </div>
    </div>
  );
}

export default GallerySection;