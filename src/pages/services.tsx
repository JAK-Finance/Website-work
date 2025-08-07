import React from 'react';
import Service from './pages/Service';
import { MenuItem } from './components/types';

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const ServicesPage: React.FC = () => {
  return <Service menuItems={menuItems} />;
};

export default ServicesPage;
