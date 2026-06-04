import type { HowItWorksStep } from '../types';

/**
 * How it works - 5 simple steps to a cleaner home
 * Note: All visible text (title, description) is loaded from i18n
 * using keys like: howItWorks.steps.{id}.title, howItWorks.steps.{id}.description
 */
export const howItWorksSteps: HowItWorksStep[] = [
  { id: 'contact', number: 1 },
  { id: 'quote', number: 2 },
  { id: 'schedule', number: 3 },
  { id: 'clean', number: 4 },
  { id: 'relax', number: 5 },
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