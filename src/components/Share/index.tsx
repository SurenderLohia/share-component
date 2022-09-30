import React from 'react';
import { ShareIcon, GlobeIcon, ThumbLogo, HelpIcon, LinkIcon } from './Icons';

import './styles/build.css';

const buttonClass =
  'bg-gray-1000 text-white font-main font-normal py-2 px-4 text-sm rounded flex gap-2 items-center hover:bg-gray-700 mb-1';

const Footer = (
  <div className="flex px-3 py-3 bg-gray-50 rounded-b-lg">
    <button type="button" className="flex gap-2 text-gray-500 items-center">
      {HelpIcon}
      <span className="text-sm">learn about sharing</span>
    </button>
    <button
      type="button"
      className="flex ml-auto gap-2 text-gray-900 items-center"
    >
      {LinkIcon}
      <span className="text-sm">Copy link</span>
    </button>
  </div>
);

export default function () {
  return (
    <div className="share-container">
      <button className={buttonClass} type="button">
        Share
        {ShareIcon}
      </button>
      <div className="border border-gray-200 rounded-lg">
        <div className="flex border-b border-gray-200">
          <div className="flex pl-5 pr-3 py-4 items-center">
            {GlobeIcon}
            <div className="ml-4">
              <span className="font-main text-base text-gray-900 font-normal">
                Share to web
              </span>{' '}
              <br />
              <span className="font-main text-sm text-gray-500 font-normal">
                Publish and share link with anyone
              </span>
            </div>
          </div>
          {/* "https://medium.com/front-end-weekly/build-a-css-only-toggle-switch-using-tailwindcss-d2739882934" */}
          <label className="relative flex justify-between items-center p-2 text-xl ml-auto">
            <input
              type="checkbox"
              className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
            />
            <span className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5"></span>
          </label>
        </div>
        <div className="px-3 py-4 border-b border-gray-200">
          <div className="flex mb-4">
            <input
              type="text"
              className="border border-gray-300 rounded-l px-2 py-1 font-main flex-1"
              placeholder="People, emails, groups"
            />
            <span className="border border-gray-300 border-l-0 rounded-r px-4 py-2 font-main bg-gray-50 text-gray-700">
              Invite
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex">{ThumbLogo}</div>
            <div className="ml-2">
              <span className="font-main text-base text-gray-900 font-normal">
                Everyone at OSlash
              </span>{' '}
              <br />
              <span className="font-main text-sm text-gray-500 font-normal">
                25 workspace members
              </span>
            </div>
            <div className="group relative ml-auto">
              <select className="p-2 text-xs text-gray-500">
                <option value="no-access">No access</option>
                <option value="full-access">Full access</option>
              </select>
            </div>
          </div>
        </div>
        {Footer}
      </div>
    </div>
  );
}
