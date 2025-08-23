import React from 'react';
import Team from './pages/Team';
import { MenuItem } from './components/types';

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];
const TeamPage: React.FC = () => {
  return <Team menuItems={menuItems} />;
};

export default TeamPage;
