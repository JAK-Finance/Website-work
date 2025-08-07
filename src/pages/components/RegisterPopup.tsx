import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface RegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  // Function to reset the auto-close timer
  const resetAutoCloseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 45000);
  };

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onClose();
  };

  // Handle click outside the popup
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      resetAutoCloseTimer();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      // Start the initial timer
      resetAutoCloseTimer();
      
      // Add event listeners
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      
      // Reset timer when mouse enters popup
      popupRef.current?.addEventListener('mouseenter', () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      });
      
      // Restart timer when mouse leaves popup
      popupRef.current?.addEventListener('mouseleave', resetAutoCloseTimer);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      aria-hidden={!isOpen}
    >
      <Head>
        <title>Register - Popup</title>
        <meta name="description" content="Registration form popup" />
      </Head>

      <div
        ref={popupRef}
        className="relative z-10 w-full sm:w-3/4 md:max-w-lg lg:w-[250px] xl:w-[400px] 2xl:w-[500px] mx-auto p-6 rounded-lg shadow-2xl bg-[#122342] backdrop-filter backdrop-blur-sm overflow-hidden"
        role="dialog"
        aria-labelledby="register-popup-title"
      >
        {/* Close "X" button - Now properly functional */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-50 w-10 h-10 flex items-center justify-center bg-transparent border-none cursor-pointer"
          aria-label="Close popup"
          type="button"
        >
          ×
        </button>
        
        {/* Background design elements - ensure they don't interfere with close button */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/img/popFormSmall.png"
            alt="Background design element 1"
            width={140}
            height={80}
            className="absolute right-[70px] top-[-380px] z-0 opacity-50 transform translate-x-1/2 translate-y-1/2"
          />

          <Image
            src="/img/popFormSmall.png"
            alt="Background design element 2"
            width={100}
            height={90}
            className="absolute right-[50px] top-[150px] z-0 opacity-70 transform translate-x-1/2 translate-y-1/2"
          />
        </div>

        <div className="relative z-10">
          <h1
            id="register-popup-title"
            className="text-white text-3xl font-bold text-center mb-8"
          >
            Register
          </h1>
          <form 
            className="space-y-4" 
            onSubmit={(e) => {
              e.preventDefault();
              onClose(); // Close when form is submitted
            }}
          >
            {/* Your form inputs remain the same */}
            <div>
              <input
                type="text"
                id="name"
                style={{ borderRadius: '8px', width: '100%', height: '30px' }}  
                className="px-4 bg-gray-300 border border-blue-600 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg transition-colors duration-300 rounded-[12px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                id="phone"
                style={{ borderRadius: '8px', width: '100%', height: '30px' }}  
                className="px-4 bg-gray-300 border border-blue-600 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg transition-colors duration-300 rounded-[12px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
                placeholder="Phone number"
                required
              />
            </div>

            <div>
              <select
                id="region"
                style={{ borderRadius: '8px', width: '100%', height: '30px' }} 
                className="rounded-[5px] px-4 bg-gray-300 border border-blue-600 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg transition-colors duration-300 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Region
                </option>
                <option value="Adamawa">Adamawa</option>
                <option value="Centre">Centre</option>
                <option value="East">East</option>
                <option value="Far North">Far North</option>
                <option value="Littoral">Littoral</option>
                <option value="North">North</option>
                <option value="North-West">North-West</option>
                <option value="West">West</option>
                <option value="South">South</option>
                <option value="South-West">South-West</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                id="town"
                style={{ borderRadius: '8px',width: '100%', height: '30px'}}  
                className="px-4 bg-gray-300 border border-blue-600 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg transition-colors duration-300 rounded-[12px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
                placeholder="Town"
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                style={{ borderRadius: '8px', width: '100%', height: '30px' }}  
                className="px-4 bg-gray-300 border border-blue-600 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg transition-colors duration-300 rounded-[12px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
                placeholder="Email"
                required
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', height: '35px' }} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-300 ease-in-out w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Custom hook remains the same
export const useRegisterPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return { isPopupOpen, closePopup };
};

export default RegisterPopup;