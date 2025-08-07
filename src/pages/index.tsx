// pages/index.tsx (or app/page.tsx)

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Import your custom components
import Header from './components/Header';
import Navbar from './components/Navbar';  // Added import for Navbar

// Import types (adjust path as needed based on where types/index.d.ts is)
import { MenuItem } from './components/types';

const HomePage: React.FC = () => {
  // Define your menu items
  const menuItems: MenuItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const valuePropositions = [
    {
      title: 'Transparency',
      description: 'We ensure to build trust with all our stakeholders at every level.',
    },
    {
      title: 'Growth',
      description: 'We have carefully built our network to promote growth at every level.',
    },
    {
      title: 'Excellence',
      description: 'We believe in doing it the right and best way possible. We thrive in excellence.',
    },
    {
      title: 'Integrity',
      description: 'We make sure to keep to our word. We understand that most plans of our stakeholders lie with the promises we make.',
    },
    {
      title: 'Teamwork',
      description: 'We know that a single hand cannot tie a broom, that is why we believe in the strength our people to help our stakeholders experience their dreams.',
    },
    {
      title: 'Innovation',
      description: 'We are always looking for new ways, technology, regulations, and new markets to leverage on for amazing products for all our stakeholders.',
    },
  ];


  // Data for the "Input Financing (BNPL)" cards
  const bnplCardsData = [
    {
      title: 'Input Financing (BNPL)',
      description: 'We help farmers afford all they need for a farming season.',
      buttonText: 'Sign up',
      backgroundImage: '/cocoa_beans_bg.jpg', // Reusing the cocoa beans background
    },
    {
      title: 'Input Financing (BNPL)',
      description: 'We help farmers afford all they need for a farming season.',
      buttonText: 'Sign up',
      backgroundImage: '/cocoa_beans_bg.jpg', // Reusing the cocoa beans background
    },
    {
      title: 'Input Financing (BNPL)',
      description: 'We help farmers afford all they need for a farming season.',
      buttonText: 'Sign up',
      backgroundImage: '/cocoa_beans_bg.jpg', // Reusing the cocoa beans background
    },
    {
      title: 'Input Financing (BNPL)',
      description: 'We help farmers afford all they need for a farming season.',
      buttonText: 'Sign up',
      backgroundImage: '/cocoa_beans_bg.jpg', // Reusing the cocoa beans background
    },
    {
      title: 'Input Financing (BNPL)',
      description: 'We help farmers afford all they need for a farming season.',
      buttonText: 'Sign up',
      backgroundImage: '/cocoa_beans_bg.jpg', // Reusing the cocoa beans background
    },
    {
      title: 'Input Financing (BNPL)',
      description: 'We help farmers afford all they need for a farming season.',
      buttonText: 'Sign up',
      backgroundImage: '/cocoa_beans_bg.jpg', // Reusing the cocoa beans background
    },
  ];

  // Data for the "Quick Links" sidebar
  const quickLinksData = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Register a Farm', path: '/register-farm' },
    // Based on image_780dea.png, 'Home' and 'Services' were repeated.
    // I've de-duplicated them for a cleaner list. Add more if needed.
  ];


  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Syne', sans-serif" }}> {/* Overall page background */}
      <Head>
        <title>Empowering Sustainable Future - Structured Test</title>
        <meta name="description" content="Test page for Card and DropdownMenu components with new structure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar placed above the main header section */}
      <Navbar menuItems={menuItems}/>

      {/* --- Main Header Section (section -> background image -> card -> dropdown menu) --- */}
      <Header menuItems={menuItems} />
      {/* --- End Main Header Section --- */}

      {/* You can add more sections here if needed, below the main header */}
      {/* For example, a new section for other content if this is a landing page */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Half: Paragraph Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-600 leading-relaxed">
              At Didi Finance, we pride ourselves on the values that we hold dear. We believe in transparency,
               innovation, integrity, excellence, growth, and teamwork. These values are at the core of everything we do, and we believe that they set us apart from other companies.              
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
              At Didi Finance, we pride ourselves on the values that we hold dear. We believe in transparency, innovation, integrity, excellence, growth, and teamwork. These values
               are at the core of everything we do, and we believe that they set us apart from other companies.              
              </p>
            </div>

            {/* Right Half: Image with Underlay */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              {/* Wrapper for image and underlay */}
              <div className="relative inline-block"> {/* inline-block to wrap content tightly */}
                {/* The Underlay */}
                {/* <div
                  className="absolute w-full h-full rounded-lg shadow-lg bg-blue-400"
                  style={{ top: '-15px', right: '-30px', zIndex: 1 }}
                ></div> */}

                {/* The Image */}
                <Image
                  src="/img/headImh.svg" // Example image path - Make sure this exists!
                  alt="Farmers in community"
                  width={600} // Adjust width based on your image and desired size
                  height={400} // Adjust height to maintain aspect ratio
                  className="rounded-lg shadow-lg object-cover relative z-2" // relative z-0 to ensure image is above underlay
                />
              </div>
            </div>
          </div>
      </section>

      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white flex justify-center items-center min-h-[50vh]">
        {/* Container mimicking Group 1230.png's background and rounded corners */}
        <div className="relative max-w-6xl w-full mx-auto ">
          <h2 className="text-center text-4xl font-extrabold text-teal-400 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {valuePropositions.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-teal-400 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
     {/* --- New Section 4: Input Financing Cards & Quick Links --- */}
     <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h2 className="text-center text-4xl font-extrabold text-teal-400 mb-12">
          Our Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

          {/* Left/Middle Column(s): Input Financing Cards - NOW SCROLLABLE */}
          <div
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 pr-2"
            style={{
              maxHeight: '310px', // Height to show exactly 1 pair (2 cards) vertically (1 * 300px + gap)
              overflow: 'hidden',
            }}
          >
            {bnplCardsData.slice(0, 2).map((card, index) => (
              <div
                key={index}
                className="relative p-6 rounded-lg shadow-lg text-white overflow-hidden flex flex-col justify-between items-center text-center min-h-[300px]"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-blue-900 opacity-80 z-0"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-base mb-6">{card.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Quick Links Sidebar */}
          <div className="w-full lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinksData.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className={`block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200
                                ${link.name === 'Services' ? 'bg-gray-100 font-semibold' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;