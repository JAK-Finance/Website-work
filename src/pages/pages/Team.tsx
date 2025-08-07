import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { MenuItem } from '../components/types';
import Navbar from '../components/Navbar';

interface TeamProps {
  menuItems: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const Team: React.FC<TeamProps> = ({ menuItems }) => {
  const [showMore, setShowMore] = useState(false);

  const teamMembers = [
    {
      name: 'Sir Epie Mabrice NJUME',
      role: 'CEO & Founder',
      image: 'img/cocoahead.jpg',
    },
    {
      name: 'Sir Pascal',
      role: 'CFO & Founder',
      image: 'img/cocoahead.jpg',
    },
    {
      name: 'Sir Epie Mabrice NJUME',
      role: 'CTO & Founder',
      image: 'img/cocoahead.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Marketing',
      image: 'img/cocoahead.jpg',
    },
    {
      name: 'David Wilson',
      role: 'Lead Developer',
      image: 'img/cocoahead.jpg',
    },
    {
      name: 'Emily Davis',
      role: 'Operations Manager',
      image: 'img/cocoahead.jpg',
    },
  ];

  const visibleMembers = showMore ? teamMembers : teamMembers.slice(0, 3);

  return (
    <>
      <Head>
        <title>Team - Didi Finance</title>
        <meta name="description" content="Meet the dedicated team behind Didi Finance's success" />
      </Head>

      <Header menuItems={menuItems} />
      <Navbar menuItems={menuItems} />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated team behind Didi Finance's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>

          {teamMembers.length > 3 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                {showMore ? 'Show Less' : 'See More'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-1 transform transition-transform ${showMore ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
export default Team;
