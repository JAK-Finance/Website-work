import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { MenuItem } from '../components/types';
import Navbar from '../components/Navbar';  // Added import for Navbar


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
  return (
    <>
      <Head>
        <title>Team - Didi Finance</title>
        <meta name="description" content="Meet the dedicated team behind Didi Finance's success" />
      </Head>

      <Header menuItems={menuItems} />
      <Navbar menuItems={menuItems} logo={'img/headImh.svg'} />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated team behind Didi Finance's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                John brings over 15 years of experience in agricultural finance and has been instrumental in shaping Didi Finance's vision and strategy.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-gray-600">
                Jane leads our technology initiatives and has been pivotal in developing our innovative financial solutions.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Operations</p>
              <p className="text-gray-600">
                Mike oversees our day-to-day operations and ensures smooth delivery of our services to farmers across Africa.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Team;
