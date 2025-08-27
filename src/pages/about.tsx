import React from 'react';
import About from './pages/About';
import { MenuItem } from '@/components/types';

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const AboutPage: React.FC = () => {
  return <About menuItems={menuItems} />;
};

export default AboutPage;
