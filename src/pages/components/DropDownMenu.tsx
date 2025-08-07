// components/DropdownMenu.tsx

import React, { useState, useEffect } from 'react';
import { DropdownMenuProps, MenuItem } from './types';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
  initialActiveItem,
}) => {
  const [activeItem, setActiveItem] = useState<string | undefined>(initialActiveItem);

  useEffect(() => {
    setActiveItem(initialActiveItem);
  }, [initialActiveItem]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end p-4 sm:p-6 bg-transparent bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-blue-900/80 backdrop-blur-sm text-white rounded-lg shadow-2xl w-full h-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                   flex flex-col transform translate-x-0 transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Container for menu items with scrolling and padding */}
        <nav className="flex-grow py-4 h-full overflow-y-auto pb-[7px]">
          <ul className="space-y-1">
            {menuItems.map((item: MenuItem) => (
              <li key={item.name}>
                <a
                  href={item.path || '#'}
                  onClick={() => setActiveItem(item.name)}
                  className={`block px-6 py-3 text-right text-lg font-medium transition-colors duration-200 ${
                    activeItem === item.name
                      ? 'bg-gradient-to-r from-gray-300 to-white text-black'
                      : 'hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenu;