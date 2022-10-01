import { CloseIcon } from '../Share/Icons';
import { ChipItemProps } from '../Share/types';
import React from 'react';

export const ChipItem = (props: ChipItemProps) => {
  const { text, id } = props;
  return (
    <span className="inline-flex px-2 py-1 rounded bg-gray-200 text-sm gap-3 items-center">
      <span>{text}</span>
      <button type="button" onClick={() => {}} data-person-id={id}>
        {CloseIcon}
      </button>
    </span>
  );
};
