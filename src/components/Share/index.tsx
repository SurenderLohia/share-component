import React, { useState } from 'react';
import './styles/build.css';

import {
  ShareIcon,
  GlobeIcon,
  ThumbLogo,
  HelpIcon,
  LinkIcon,
  CloseIcon,
} from './Icons';
import {
  AccessType,
  AvatarProps,
  ChipItemProps,
  Person,
  PersonItemProps,
  ShareCurrentView,
} from './types';
import avatar1 from '../../images/avatar-1.svg';
import { groups, persons } from './data';

const buttonClass =
  'bg-gray-1000 text-white font-main font-normal py-2 px-4 text-sm rounded flex gap-2 items-center hover:bg-gray-700 mb-1';

const SectionTitle = (text: string) => {
  return <h3 className="text-base font-main text-gray-700 mb-3"> {text} </h3>;
};

const Avatar = (props: AvatarProps) => {
  const { name = '-', avatarUrl = '', size = 6 } = props;
  const firstLetter = name.slice(0, 1);

  if (avatarUrl) {
    return (
      <img
        className={`w-${size}`}
        src={avatarUrl}
        alt={name || 'avatar-image'}
      />
    );
  }

  // Todo: Need to use size prop for width & height
  return (
    <div
      className={`flex w-6 h-6 bg-gray-500 text-white rounded text-sm items-center`}
    >
      <span className="flex-1">{firstLetter}</span>
    </div>
  );
};

const PersonItem = (props: PersonItemProps) => {
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

const ChipItem = (props: ChipItemProps) => {
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
  const [currentView, setCurrentView] =
    useState<ShareCurrentView>('person-selection');
  const [selectedPersons, setSelectedPersons] = useState<Person[]>([]);

  const handleShareButtonClick = () => {
    setCurrentView('list');
  };

  const handleSearchClick = () => {
    setCurrentView('person-selection');
  };

  const handleInviteClick = () => {
    setCurrentView('share-button');
  };

  const addPerson = (person: Person) => {
    const newPersons = [...selectedPersons, person];
    setSelectedPersons(newPersons);
  };

  const handleSelectPerson = (person: Person) => {
    addPerson(person);
  };

  const removePerson = (id: number) => {
    const newPersons = [...selectedPersons].filter(
      (person) => person.id !== id
    );
    setSelectedPersons(newPersons);
  };

  const handleRemovePerson = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const personId = e.target.getAttribute('data-person-id');
    if (personId) {
      const id = Number(personId);
      removePerson(id);
    }
  };

  return (
    <div className="share-container">
      {currentView === 'share-button' && (
        <>
          <button
            className={buttonClass}
            type="button"
            onClick={handleShareButtonClick}
          >
            Share
            {ShareIcon}
          </button>
        </>
      )}
      {/* Invite-view */}
      {currentView === 'list' && (
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
                onClick={handleSearchClick}
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
      )}
      {/* Person selection view */}
      {currentView === 'person-selection' && (
        <div className="border border-gray-200 rounded-lg">
          <div className="flex px-3 py-3 bg-gray-50 rounded-t-lg items-center">
            <div onClick={handleRemovePerson}>
              {selectedPersons.map((person) => (
                <ChipItem text={person.name} id={person.id} />
              ))}
            </div>

            <input
              type="text"
              className="flex-1 text-sm text-gray-500 font-main focus:bottom-0 p-1 bg-transparent focus:outline-0"
              placeholder="Search emails, names or groups"
              value=""
            />

            <div className="flex ml-auto">
              <select className="p-2 text-xs text-gray-500 bg-transparent mr-3">
                <option value="no-access">No access</option>
                <option value="full-access">Full access</option>
              </select>
              <button
                type="button"
                className="border border-gray-200 rounded-lg text-sm text-gray-700 px-3 py-2"
                onClick={handleInviteClick}
              >
                Invite
              </button>
            </div>
          </div>
          <div className="pl-6 pr-4 py-4">
            {SectionTitle('Select a person')}
            {persons.map((person) => (
              <PersonItem
                id={person.id}
                name={person.name}
                avatarUrl={avatar1}
                accessType={person.accessType as AccessType}
                handleSelectPerson={handleSelectPerson}
              />
            ))}
          </div>
          <div className="pl-6 pr-4 py-4">
            {SectionTitle('Select a group')}
            {groups.map((person) => (
              <PersonItem
                id={person.id}
                name={person.name}
                accessType={person.accessType as AccessType}
                handleSelectPerson={handleSelectPerson}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
