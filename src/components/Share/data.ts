import { Person } from "./types";

export const persons: Person[] = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatarUrl: 'http://localhost:8080/static/media/src/images/avatar-1.svg',
    accessType: 'no-access'
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatarUrl: 'http://localhost:8080/static/media/src/images/avatar-2.svg',
    accessType: 'no-access'
  }
];

export const groups: Person[] = [
  {
    id: 3,
    name: 'Product',
    avatarUrl: '',
    accessType: 'no-access'
  },
  {
    id: 4,
    name: 'Engineering',
    avatarUrl: '',
    accessType: 'no-access'
  },
];

export type AccessTypeId = 'full-access' | 'can-edit' | 'can-view' | 'no-access';

export const accessTypes = [
  {
    id: 'full-access',
    label: 'Full access'
  },
  {
    id: 'can-edit',
    label: 'Can edit'
  },
  {
    id: 'can-view',
    label: 'Can view'
  },
  {
    id: 'no-access',
    label: 'No access'
  },
];