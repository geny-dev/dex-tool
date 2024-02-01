"use client";
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="flex items-center">
      <div className="relative group">
        <button
          id="dropdown-button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm"
          style={{background: '#23323c'}}
          onClick={toggleDropdown}
        >
          <span className="mr-2">Open Dropdown</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="dropdown-menu"
          className={`absolute right-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${isOpen ? '' : 'hidden'}`}
          style={{background: '#23323c'}}
        >
          <input
            id="search-input"
            className="block w-full px-4 py-2 bg-gray-900 text-white border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search items"
            autoComplete="off"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-blue-100 cursor-pointer rounded-md">
            Uppercase
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-blue-100 cursor-pointer rounded-md">
            Lowercase
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-blue-100 cursor-pointer rounded-md">
            Camel Case
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-900 active:bg-blue-100 cursor-pointer rounded-md">
            Kebab Case
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
