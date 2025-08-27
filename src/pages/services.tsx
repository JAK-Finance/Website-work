import React from 'react';
import Service from './pages/Service';
import { MenuItem } from '@/components/types';

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const ServicesPage: React.FC = () => {
  return <Service menuItems={menuItems} />;
};

export default ServicesPage;
