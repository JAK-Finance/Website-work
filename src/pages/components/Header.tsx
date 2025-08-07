import React, { useState, useEffect } from 'react';
import Card from './Card';
import DropdownMenu from './DropDownMenu';
import { MenuItem } from './types';

interface HeaderProps {
  menuItems: MenuItem[];
}

const slides = [
  {
    image: '/img/cocoaSlide.jpg',
    title: 'Empowering Sustainable Future',
    description: (
      <>
        We help small-scale farmers across Francophone Africa become profitable, sustainable, and confident.
        <a href="#" className="text-white hover:text-gray-300 underline ml-1">
          Register Farm here
        </a>
      </>
    ),
  },
  {
    image: '/img/cocoaSlide1.jpg',
    title: 'Sustainable Farming Solutions',
    description: 'Providing innovative tools and resources for sustainable agriculture.',
  },
  {
    image: '/img/cocoaSlide2.jpg',
    title: 'Community Empowerment',
    description: 'Building strong farming communities through education and support.',
  },
  {
    image: '/img/cocoaSlide3.jpg',
    title: 'Market Access',
    description: 'Connecting farmers to markets for better income opportunities.',
  },
  {
    image: '/img/cocoaslide4.jpg',
    title: 'Innovative Financing',
    description: 'Offering flexible financing options to support farm growth.',
  },
];

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string>('Home');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-fit flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-0 z-0"></div>

      <Card
        title={slides[currentSlide].title}
        description={slides[currentSlide].description}
        stats={[
          { label: 'Hectares', value: '5,600' },
          { label: 'Regions', value: '3' },
          { label: 'Farmers', value: '100' },
          { label: 'Waitlist Farmers', value: '500' },
        ]}
      />

      <DropdownMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={menuItems}
        initialActiveItem={activeMenuItem}
      />
    </section>
  );
};

export default Header;
