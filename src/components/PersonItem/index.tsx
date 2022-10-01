import React from 'react';
import { Avatar } from '../Avatar';
import { PersonItemProps } from 'components/Share/types';

export const PersonItem = (props: PersonItemProps) => {
  const { id, name, avatarUrl, accessType, handleSelectPerson } = props;
  const person = { id, name, accessType, avatarUrl };
  return (
    <button
      type="button"
      className="flex gap-3 py-2 text-gray-900"
      onClick={() => handleSelectPerson(person)}
    >
      <Avatar name={name} avatarUrl={avatarUrl} />
      {name}
    </button>
  );
};
