// components/DropdownMenu.tsx

import React, { useState, useEffect } from 'react';
import { DropdownMenuProps, MenuItem } from '../types'; // Adjust path if types are in a separate file

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
  initialActiveItem,
}) => {
  // State to manage the currently active item's name
  const [activeItem, setActiveItem] = useState<string | undefined>(initialActiveItem);

  // Effect to update activeItem if initialActiveItem prop changes from parent
  useEffect(() => {
    setActiveItem(initialActiveItem);
  }, [initialActiveItem]);

  // If the menu is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    // Outer overlay for the menu, fixed to cover the screen
    // Allows closing when clicking outside the menu panel itself
    <div
      className="fixed inset-0 z-50 flex justify-end p-4 sm:p-6 bg-black bg-opacity-50" // Added a slight dark overlay
      onClick={onClose}
    >
      {/* The actual dropdown menu panel */}
      <div
        // Conditional class for the border radius based on your previous request (only bottom right)
        // If all corners are rounded as in the new image, use rounded-lg
        className="bg-blue-900 text-white rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                   flex flex-col overflow-hidden transform translate-x-0 transition-transform duration-300 ease-out"
        // Prevent clicks inside the menu from closing the overlay
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button at the top right */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Close menu"
          >
            {/* SVG for the 'X' icon */}
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

        {/* Navigation links */}
        <nav className="flex-grow py-4"> {/* Added vertical padding */}
          <ul className="space-y-1"> {/* Space between menu items */}
            {menuItems.map((item: MenuItem) => (
              <li key={item.name}>
                <a
                  href={item.path || '#'} // Fallback to '#' if path is not provided
                  onClick={() => setActiveItem(item.name)} // Update active item on click
                  className={`block px-6 py-3 text-right text-lg font-medium transition-colors duration-200
                              ${activeItem === item.name
                                ? 'bg-blue-800 text-white border-b-2 border-blue-400' // Active state: darker background, white text, blue underline
                                : 'hover:bg-blue-800 hover:text-white' // Hover state: darker background on hover
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