import type { GalleryItem } from '../types';

/**
 * Before/After gallery items
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'kitchen-deep-clean',
    before: '/images/gallery/kitchen-before.jpg',
    after: '/images/gallery/kitchen-after.jpg',
    title: 'Kitchen Deep Clean',
    category: 'deep-cleaning',
  },
  {
    id: 'bathroom-renovation',
    before: '/images/gallery/bathroom-before.jpg',
    after: '/images/gallery/bathroom-after.jpg',
    title: 'Bathroom Sanitization',
    category: 'deep-cleaning',
  },
  {
    id: 'living-room-standard',
    before: '/images/gallery/living-before.jpg',
    after: '/images/gallery/living-after.jpg',
    title: 'Living Room Standard Clean',
    category: 'standard-cleaning',
  },
  {
    id: 'bedroom-makeover',
    before: '/images/gallery/bedroom-before.jpg',
    after: '/images/gallery/bedroom-after.jpg',
    title: 'Bedroom Refresh',
    category: 'standard-cleaning',
  },
  {
    id: 'airbnb-turnover',
    before: '/images/gallery/airbnb-before.jpg',
    after: '/images/gallery/airbnb-after.jpg',
    title: 'Airbnb Turnover Service',
    category: 'airbnb-turnover',
  },
  {
    id: 'office-cleaning',
    before: '/images/gallery/office-before.jpg',
    after: '/images/gallery/office-after.jpg',
    title: 'Office Cleaning',
    category: 'office-cleaning',
  },
  {
    id: 'oven-deep-clean',
    before: '/images/gallery/oven-before.jpg',
    after: '/images/gallery/oven-after.jpg',
    title: 'Oven Deep Clean',
    category: 'addons',
  },
  {
    id: 'window-cleaning',
    before: '/images/gallery/windows-before.jpg',
    after: '/images/gallery/windows-after.jpg',
    title: 'Window Cleaning',
    category: 'addons',
  },
];

/**
 * Gallery categories
 */
export const galleryCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'standard-cleaning', label: 'Standard Cleaning' },
  { id: 'deep-cleaning', label: 'Deep Cleaning' },
  { id: 'airbnb-turnover', label: 'Airbnb Turnover' },
  { id: 'office-cleaning', label: 'Office Cleaning' },
  { id: 'addons', label: 'Add-on Services' },
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