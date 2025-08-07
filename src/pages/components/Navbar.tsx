import React, { useState } from 'react';
import { MenuItem } from './types';
import { useRouter } from 'next/router';
import DropdownMenu from './DropDownMenu';

interface NavbarProps {
  menuItems: MenuItem[];
  activeItem?: string;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, activeItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Determine active item either from prop or from current route path
  const currentActiveItem = activeItem || router.pathname;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-syne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12"> {/* Reduced height */}
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img src="img/logo.svg" alt="Logo" className="h-6 w-auto" /> {/* Smaller logo */}
              </a>
            </div>

            {/* Desktop menu - hidden on mobile */}
            <div className="hidden md:flex space-x-6 ml-auto"> {/* Reduced spacing */}
              {menuItems.map((item) => {
                // Determine if this item is active by comparing paths or names
                const isActive = currentActiveItem === item.path || currentActiveItem === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.path || '#'}
                    className={`text-gray-800 hover:text-sky-500 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      isActive ? 'text-blue-600 underline' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button - hidden on desktop */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-sky-500 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu - uses DropdownMenu component */}
          <DropdownMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            menuItems={menuItems}
            initialActiveItem={currentActiveItem}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
