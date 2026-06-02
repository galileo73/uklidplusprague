import type { NavItem } from '../types';

/**
 * Main navigation items
 */
export const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'airbnb', label: 'Airbnb Hosts', href: '/airbnb-hosts' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

/**
 * Footer navigation items
 */
export const footerNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'airbnb', label: 'Airbnb Hosts', href: '/airbnb-hosts' },
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'terms', label: 'Terms of Service', href: '/terms' },
];

/**
 * Service navigation (for dropdown or sub-menu)
 */
export const serviceNavItems: NavItem[] = [
  { id: 'standard', label: 'Standard Cleaning', href: '/pricing#standard' },
  { id: 'deep', label: 'Deep Cleaning', href: '/pricing#deep' },
  { id: 'airbnb', label: 'Airbnb Turnover', href: '/airbnb-hosts' },
  { id: 'recurring', label: 'Recurring Plans', href: '/pricing#plans' },
];

/**
 * CTA buttons in navigation
 */
export const navCTA = {
  label: 'Book Now',
  href: 'https://wa.me/420XXXXXXXXX', // Replace with actual WhatsApp link
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