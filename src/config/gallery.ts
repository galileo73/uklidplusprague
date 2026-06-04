import type { GalleryItem } from '../types';

/**
 * Before/After gallery items
 * Note: All visible text (title) is loaded from i18n using keys like gallery.items.{id}.title
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'kitchen-deep-clean',
    before: '/images/gallery/kitchen-before.jpg',
    after: '/images/gallery/kitchen-after.jpg',
    category: 'deep-cleaning',
  },
  {
    id: 'bathroom-renovation',
    before: '/images/gallery/bathroom-before.jpg',
    after: '/images/gallery/bathroom-after.jpg',
    category: 'deep-cleaning',
  },
  {
    id: 'living-room-standard',
    before: '/images/gallery/living-before.jpg',
    after: '/images/gallery/living-after.jpg',
    category: 'standard-cleaning',
  },
  {
    id: 'bedroom-makeover',
    before: '/images/gallery/bedroom-before.jpg',
    after: '/images/gallery/bedroom-after.jpg',
    category: 'standard-cleaning',
  },
  {
    id: 'airbnb-turnover',
    before: '/images/gallery/airbnb-before.jpg',
    after: '/images/gallery/airbnb-after.jpg',
    category: 'airbnb-turnover',
  },
  {
    id: 'office-cleaning',
    before: '/images/gallery/office-before.jpg',
    after: '/images/gallery/office-after.jpg',
    category: 'office-cleaning',
  },
  {
    id: 'oven-deep-clean',
    before: '/images/gallery/oven-before.jpg',
    after: '/images/gallery/oven-after.jpg',
    category: 'addons',
  },
  {
    id: 'window-cleaning',
    before: '/images/gallery/windows-before.jpg',
    after: '/images/gallery/windows-after.jpg',
    category: 'addons',
  },
];

/**
 * Gallery categories
 * Note: Category labels are loaded from i18n using keys like gallery.categories.{id}
 */
export const galleryCategories = [
  { id: 'all' },
  { id: 'standard-cleaning' },
  { id: 'deep-cleaning' },
  { id: 'airbnb-turnover' },
  { id: 'office-cleaning' },
  { id: 'addons' },
];

/**
 * Get gallery items by category
 */
export function getGalleryByCategory(category: string): GalleryItem[] {
  if (category === 'all') {
    return galleryItems;
  }
  return galleryItems.filter((item) => item.category === category);
}

/**
 * Get a gallery item by ID
 */
export function getGalleryItemById(id: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}

/**
 * Placeholder images for development
 * Replace with actual images before production
 */
export const placeholderImages = {
  before: '/images/placeholder-before.jpg',
  after: '/images/placeholder-after.jpg',
};