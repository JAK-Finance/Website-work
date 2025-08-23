import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface MenuItem {
  name: string;
  href: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ['/img/headImage.png', '/img/cocoahead.jpg'];

  const [textIndex, setTextIndex] = useState(0);
  const textContents = [
    {
      title: 'Empowering Sustainable Future',
      description: 'We help small-scale farmers across Francophone Africa become profitable, sustainable, and confident.',
      linkText: 'Register Farm here',
    },
    {
      title: 'Another Inspiring Title',
      description: 'This is another compelling description to engage our users. Learn more here.',
      linkText: 'Learn more here',
    },
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textContents.length);
    }, 5500);

    return () => {
      clearInterval(bgInterval);
      clearInterval(textInterval);
    };
  }, [bgImages.length, textContents.length]);

  return (
    <header className="relative h-[600px] md:h-[900px] overflow-hidden text-[#14B9C1]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500" 
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      ></div>
      
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="container mx-auto  h-full w-full md:w-auto p-4 md:p-10 flex flex-col justify-center items-center text-center relative z-10  bg-opacity-50 md:p-6 rounded-lg">
        {/* Left Side Image */}
        <div className="absolute left-4 lg:left-10 top-1/2  hidden md:block w-32 h-32 rounded-full overflow-hidden">
          <Image src="/img/headCardImg.png" alt="Side Image" width={1600} height={700} className='w-full h-full object-cover' />
        </div>

        {/* Text Content */}
        <div className="transition-all duration-500 transform ease-in-out text-[#14B9C1] max-w-lg mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{textContents[textIndex].title}</h1>
          <p className="text-lg md:text-xl mb-8">{textContents[textIndex].description}
            <a href="#" className="text-[#14B900] hover:underline ml-2">{textContents[textIndex].linkText}</a>
          </p>
        </div>

        {/* Right Side Image */}
        {/*
          The right side image is commented out in your original code,
          so it remains commented here. If you want to use it, you would add similar
          responsive classes as the left image.
        */}
      </div>
    </header>
  );
};

export default Header;