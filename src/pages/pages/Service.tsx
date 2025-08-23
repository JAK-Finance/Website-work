import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { MenuItem } from '../components/types';
import Header from '../components/Header';

interface ServiceProps {
  menuItems: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];


const Service: React.FC<ServiceProps> = ({ menuItems }) => {
  return (
    <>
      <Head>
        <title>Our Services - Didi Finance</title>
        <meta name="description" content="Explore our comprehensive agricultural services for Cameroon farmers" />
      </Head>

      <Header menuItems={menuItems} />
      <Navbar menuItems={menuItems} />
      
      <main className="min-h-screen bg-white py-12 pt-20">
        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we're empowering Cameroon farmers with innovative agricultural solutions
            </p>
          </div>

          {/* Services Flex Container */}
          <div className="flex flex-wrap justify-center gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] max-w-lg">
                <ServiceCard 
                  service={service} 
                  lang="en" 
                />
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-6">
                Join thousands of farmers who are already benefiting from our services
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default Service;
