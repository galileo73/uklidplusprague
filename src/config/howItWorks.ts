import type { HowItWorksStep } from '../types';

/**
 * How it works - 5 simple steps to a cleaner home
 */
export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'contact',
    number: 1,
    title: 'Contact Us',
    description:
      'Reach out via WhatsApp, phone, or our contact form. Tell us about your cleaning needs and preferred schedule.',
  },
  {
    id: 'quote',
    number: 2,
    title: 'Get Your Quote',
    description:
      'Receive a clear, transparent quote within 2 hours. No hidden fees, no surprises. Confirm your booking when ready.',
  },
  {
    id: 'schedule',
    number: 3,
    title: 'Schedule Your Clean',
    description:
      'Pick a time that works for you. We offer flexible scheduling including weekends. Same-day service available.',
  },
  {
    id: 'clean',
    number: 4,
    title: 'We Clean',
    description:
      'Our professional cleaner arrives on time with all necessary equipment. Sit back and enjoy your free time.',
  },
  {
    id: 'relax',
    number: 5,
    title: 'Enjoy Your Clean Home',
    description:
      'Return to a spotless home. Not satisfied? Contact us within 24 hours for a free re-clean. Guaranteed.',
  },
];

/**
 * Get a step by its ID
 */
export function getStepById(id: string): HowItWorksStep | undefined {
  return howItWorksSteps.find((step) => step.id === id);
}

/**
 * Time estimates for each step
 */
export const stepTimeEstimates: Record<string, string> = {
  contact: '2 minutes',
  quote: 'Within 2 hours',
  schedule: 'Flexible',
  clean: '2-4 hours typical',
  relax: 'Immediate',
};