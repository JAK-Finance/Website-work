// pages/index.tsx (or app/page.tsx)

import { useState, useRef, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

// Import your custom components
import Header from './components/Header';
import Navbar from './components/Navbar';  // Added import for Navbar

// Import types (adjust path as needed based on where types/index.d.ts is)
import { MenuItem } from './components/types';

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#', active: true },
  { name: 'Register a Farm', href: '#' },
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#', active: true },
  { name: 'Register a Farm', href: '#' },
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

const bnplCardsData = [
  {
    title: 'Input Financing (BNPL)',
    description: 'We help farmers afford all they need for a farming season.',
    buttonText: 'Download on the App Store',
    backgroundImage: '/cocoa_beans_bg.png',
    id: 'input-financing',
    iosLink: 'https://apps.apple.com/app',
    androidLink: 'https://play.google.com/store/apps',
  },
  {
    title: 'Offtake Aggregation',
    description: 'We connect farmers to buyers and ensure fair pricing.',
    buttonText: 'Download on Google Play',
    backgroundImage: '/cocoa_beans_bg.png',
    id: 'offtake-aggregation',
    iosLink: 'https://apps.apple.com/app',
    androidLink: 'https://play.google.com/store/apps',
  },
  {
    title: 'Weather Insurance',
    description: 'Protect your harvest from unpredictable weather conditions.',
    buttonText: 'Get a Quote',
    backgroundImage: '/cocoa_beans_bg.png',
    id: 'weather-insurance',
    iosLink: 'https://apps.apple.com/app',
    androidLink: 'https://play.google.com/store/apps',
  },
  {
    title: 'Soil Analysis',
    description: 'Get detailed insights to optimize your soil and yield.',
    buttonText: 'Request Analysis',
    backgroundImage: '/cocoa_beans_bg.png',
    id: 'soil-analysis',
    iosLink: 'https://apps.apple.com/app',
    androidLink: 'https://play.google.com/store/apps',
  },
  {
    title: 'Digital Farming',
    description: 'Use our app to manage your farm and access data.',
    buttonText: 'Download App',
    backgroundImage: '/cocoa_beans_bg.png',
    id: 'digital-farming',
    iosLink: 'https://apps.apple.com/app',
    androidLink: 'https://play.google.com/store/apps',
  },
];

const isIOS = () =>
  typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const isAndroid = () =>
  typeof window !== 'undefined' && /Android/.test(navigator.userAgent);
export default function Home() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeLink, setActiveLink] = useState(bnplCardsData[0].id);

  const handleScroll = () => {
    if (!cardsContainerRef.current) return;

    const container = cardsContainerRef.current;
    const cards = container.children;
    
    let closestCardId = bnplCardsData[0].id;
    let minDistance = Infinity;

    // Determine which card is currently the most visible
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const cardCenter = rect.left + rect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestCardId = bnplCardsData[i].id;
      }
    }
    setActiveLink(closestCardId);
  };

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToCard = (id) => {
    const cardElement = document.getElementById(id);
    if (cardElement) {
      const container = cardsContainerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardElement.getBoundingClientRect();
      
      const scrollPosition = cardRect.left - containerRect.left + container.scrollLeft;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };
  // Data for the "Input Financing (BNPL)" cards




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

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
       <div className="col-span-1 lg:col-span-2 overflow-hidden">
          <div 
            ref={cardsContainerRef} 
            className="flex gap-6 pb-4 -mr-4 lg:-mr-8 overflow-x-auto snap-x snap-mandatory"
          >
            {bnplCardsData.map((card, index) => (
              <div 
                key={card.id} 
                id={card.id} 
                className="relative min-w-[80vw] md:min-w-[48%] lg:min-w-[48%] rounded-lg overflow-hidden h-96 shrink-0 snap-center"
              >
                <Image
                  src={card.backgroundImage}
                  alt={`Background for ${card.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="filter brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                  <h3 className="text-3xl font-bold mb-2 leading-tight">{card.title}</h3>
                  <p className="text-base mb-4">{card.description}</p>
                  <a
                  href={isIOS() ? card.iosLink : card.androidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded-md self-start hover:bg-white hover:text-blue-900 transition-colors duration-300"
                >
                  {isIOS() ? 'Download on the App Store' : 'Download on Google Play'}
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Links Section */}
        <div className="w-full lg:w-72 border-l border-gray-300 p-6 flex flex-col max-h-[80vh] overflow-y-auto">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Services</h4>
          <nav>
            <ul>
              {bnplCardsData.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToCard(service.id);
                    }}
                    className={`block py-3 px-4 text-gray-800 transition-colors duration-200 hover:bg-gray-200 ${activeLink === service.id ? 'bg-gray-200 font-semibold' : ''}`}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      </section>
    </div>
  );
};

/* Remove this line, as Home is already exported as default above */