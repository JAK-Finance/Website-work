import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { MenuItem } from '../components/types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AboutProps {
  menuItems: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const About: React.FC<AboutProps> = ({ menuItems }) => {
  const teamMembers = [
    {
      name: 'Sir Epie Mabrice NJUME',
      role: 'CEO & Founder',
      image: 'img/cocoahead.jpg', // Replace with the actual image path
    },
    {
      name: 'Sir Pascal',
      role: 'CFO & Founder',
      image: 'img/cocoahead.jpg', // Replace with the actual image path
    },
    {
      name: 'Sir Epie Mabrice NJUME',
      role: 'CTO & Founder',
      image: 'img/cocoahead.jpg', // Replace with the actual image path
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - Didi Finance</title>
        <meta name="description" content="Learn about Didi Finance's mission, vision, and commitment to empowering sustainable agriculture in Africa" />
      </Head>

      <Header menuItems={menuItems} />
      <Navbar menuItems={menuItems}/>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">About Didi Finance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering sustainable agriculture and transforming lives across Africa
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  To empower small-scale farmers across Africa by providing innovative
                  financial solutions, sustainable farming practices, and market access that transforms
                  their agricultural productivity and livelihoods.
                </p>
                <p className="text-lg text-gray-600">
                  We believe in creating lasting impact through transparency, innovation, and
                  community-centered approaches that benefit all stakeholders.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-4">
                  To be the leading financial partner for sustainable agriculture in Africa,
                  creating a future where every farmer has access to the resources and support
                  they need to thrive.
                </p>
                <p className="text-lg text-gray-600">
                  We envision prosperous farming communities that contribute to food security,
                  economic growth, and environmental sustainability across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Transparency', description: 'Open communication and honest dealings with all stakeholders' },
                { title: 'Innovation', description: 'Continuously seeking new solutions to improve farming practices' },
                { title: 'Integrity', description: 'Maintaining the highest ethical standards in all our operations' },
                { title: 'Excellence', description: 'Striving for the best in everything we do' },
                { title: 'Growth', description: 'Fostering sustainable growth for farmers and communities' },
                { title: 'Teamwork', description: 'Collaborating with partners to achieve shared goals' }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to transform agriculture in Africa, Didi Finance started as a small initiative
                to help local farmers access financial resources. Today, we serve thousands of farmers across
               Africa, providing innovative solutions that bridge the gap between traditional
                farming and modern agricultural practices.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been marked by continuous learning, adaptation, and commitment to our mission.
                We have grown from serving a handful of farmers to becoming a trusted partner for sustainable
                agriculture, always keeping our focus on the communities we serve.
              </p>
              <p className="text-lg text-gray-600">
                As we look to the future, we remain dedicated to expanding our reach and impact,
                ensuring that every farmer has the opportunity to succeed and contribute to a sustainable
                agricultural future.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              Meet the dedicated team behind Didi Finance's success on our <a href="/team" className="text-blue-600 hover:text-blue-800 underline">Team page</a>.
            </p>
            <a 
              href="/team" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Meet the Team
            </a>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;