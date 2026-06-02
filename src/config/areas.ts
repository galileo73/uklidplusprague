import type { ServiceArea } from '../types';

/**
 * Primary service areas in Prague
 */
export const primaryServiceAreas: ServiceArea[] = [
  {
    id: 'prague-1',
    name: 'Prague 1',
    neighborhoods: [
      'Old Town (Staré Město)',
      'New Town (Nové Město)',
      'Lesser Town (Malá Strana)',
      'Hradčany',
      'Josefov',
    ],
  },
  {
    id: 'prague-2',
    name: 'Prague 2',
    neighborhoods: [
      'Vinohrady',
      'Vyšehrad',
      'Parts of New Town',
    ],
  },
  {
    id: 'prague-5',
    name: 'Prague 5',
    neighborhoods: [
      'Smíchov',
      'Anděl',
      'Klárov',
      'Malvazinky',
    ],
  },
  {
    id: 'prague-6',
    name: 'Prague 6',
    neighborhoods: [
      'Dejvice',
      'Bubeneč',
      'Střešovice',
      'Hradčany',
      'Veleslavín',
    ],
  },
  {
    id: 'prague-7',
    name: 'Prague 7',
    neighborhoods: [
      'Letná',
      'Holešovice',
      'Bubny',
    ],
  },
];

/**
 * Additional service areas (available on request)
 */
export const additionalServiceAreas: ServiceArea[] = [
  {
    id: 'prague-3',
    name: 'Prague 3',
    neighborhoods: ['Žižkov', 'Jarov'],
  },
  {
    id: 'prague-4',
    name: 'Prague 4',
    neighborhoods: ['Nusle', 'Podolí', 'Braník', 'Krč', 'Michle'],
  },
  {
    id: 'prague-8',
    name: 'Prague 8',
    neighborhoods: ['Karlín', 'Libeň', 'Kobylisy', 'Bohnice'],
  },
  {
    id: 'prague-9',
    name: 'Prague 9',
    neighborhoods: ['Prosek', 'Vysočany', 'Letňany'],
  },
  {
    id: 'prague-10',
    name: 'Prague 10',
    neighborhoods: ['Vršovice', 'Strašnice', 'Malešice', 'Vinohrady'],
  },
];

/**
 * All service areas combined
 */
export const allServiceAreas: ServiceArea[] = [
  ...primaryServiceAreas,
  ...additionalServiceAreas,
];

/**
 * Get a service area by ID
 */
export function getServiceAreaById(id: string): ServiceArea | undefined {
  return allServiceAreas.find((area) => area.id === id);
}

/**
 * Check if an area is a primary service area
 */
export function isPrimaryArea(id: string): boolean {
  return primaryServiceAreas.some((area) => area.id === id);
}

/**
 * Service area notes
 */
export const serviceAreaNotes = {
  primary: 'Standard pricing and quick availability',
  additional: 'Available on request, may have additional travel fee',
  outside: 'Areas outside Prague - contact us for availability',
};

/**
 * Prague districts for display
 */
export const pragueDistricts = {
  center: ['Prague 1', 'Prague 2'],
  inner: ['Prague 3', 'Prague 5', 'Prague 6', 'Prague 7', 'Prague 8'],
  outer: ['Prague 4', 'Prague 9', 'Prague 10'],
};

/**
 * Get all neighborhoods as a flat list
 */
export function getAllNeighborhoods(): string[] {
  return allServiceAreas.flatMap((area) => area.neighborhoods);
}