import React from 'react';
import Contact from './pages/Contact';
import { MenuItem } from './components/types';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const ContactPage: React.FC = () => {
  return <Contact menuItems={menuItems} />;
};

export default ContactPage;