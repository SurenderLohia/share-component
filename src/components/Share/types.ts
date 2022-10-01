export type AccessType = 'no-access' | 'full-access';

export type Person = {
  id: number,
  name: string,
  avatarUrl?: string;
  accessType: AccessType;
}

export type PersonItemProps = {
  id: number,
  name: string,
  avatarSize?: number
  avatarUrl?: string;
  accessType: AccessType;
  handleSelectPerson: (person: Person) => void;
}

export type AvatarProps = {
  name: string,
  size?: number;
  avatarUrl?: string;
}

export type ShareCurrentView = 'share-button' | 'list' | 'person-selection';

export type ChipItemProps = {
  text: string,
  id: number,
}



