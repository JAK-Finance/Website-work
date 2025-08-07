import React from 'react';
import Contact from './pages/Contact';
import { MenuItem } from './components/types';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const ContactPage: React.FC = () => {
  return <Contact menuItems={menuItems} />;
};

export default ContactPage;