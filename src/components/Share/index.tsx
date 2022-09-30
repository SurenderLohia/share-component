import React from 'react';
import { ShareIcon } from './ShareIcon';
import './styles/build.css';

const buttonClass =
  'bg-gray-1000 text-white font-main py-2 px-4 text-sm rounded flex gap-2 items-center hover:bg-gray-700';

export default function () {
  return (
    <div>
      <button className={buttonClass} type="button">
        Share
        {ShareIcon}
      </button>
    </div>
  );
}
