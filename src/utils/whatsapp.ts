import { contactInfo } from '../config/business';

/**
 * Generate a WhatsApp link with optional pre-filled message
 * @param message - Optional message to pre-fill
 * @returns Full WhatsApp URL
 */
export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

/**
 * Get raw WhatsApp number without formatting
 * @returns WhatsApp number as digits only
 */
export function getWhatsAppNumber(): string {
  return contactInfo.whatsapp.replace(/\+/g, '');
}

/**
 * Generate booking message for WhatsApp
 * @param serviceName - Optional service name to include
 * @returns Pre-filled message for booking
 */
export function getBookingMessage(serviceName?: string): string {
  if (serviceName) {
    return `Hi! I would like to book ${serviceName} cleaning service.`;
  }
  return 'Hi! I would like to book a cleaning service.';
}