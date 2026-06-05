import type { NavItem } from '../types';

/**
 * Main navigation items
 */
export const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/#pricing' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
  { id: 'workWithUs', label: 'Work with us', href: '/work-with-us' },
];

/**
 * Footer navigation items
 */
export const footerNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/#pricing' },
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'terms', label: 'Terms of Service', href: '/terms' },
  { id: 'workWithUs', label: 'Work with us', href: '/work-with-us' },
];

/**
 * Service navigation (for dropdown or sub-menu)
 * NOTE: Disabled until dedicated pages are created
 * - Standard and Deep cleaning are on homepage #services section
 * - Airbnb service page is a future placeholder
 */
// export const serviceNavItems: NavItem[] = [
//   { id: 'standard', label: 'Standard Cleaning', href: '/#services' },
//   { id: 'deep', label: 'Deep Cleaning', href: '/#services' },
//   { id: 'airbnb', label: 'Airbnb Turnover', href: '/airbnb-hosts' },
//   { id: 'recurring', label: 'Recurring Plans', href: '/#pricing' },
// ];

/**
 * CTA buttons in navigation
 */
export const navCTA = {
  label: 'Book Now',
  href: 'whatsapp',
  icon: 'whatsapp',
};

/**
 * Get a nav item by ID
 */
export function getNavItemById(id: string): NavItem | undefined {
  return mainNavItems.find((item) => item.id === id);
}

/**
 * Mobile navigation breakpoint
 */
export const mobileBreakpoint = 768;