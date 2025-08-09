import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import RegisterPopup from './RegisterPopup';
import { Service } from '../data/servicesData';

interface ServicePopupWrapperProps {
  services: Service[];
  lang?: 'en' | 'fr';
}

const ServicePopupWrapper: React.FC<ServicePopupWrapperProps> = ({ services, lang = 'en' }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleServiceClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} onClick={handleServiceClick}>
            <ServiceCard service={service} lang={lang} />
          </div>
        ))}
      </div>
      
      <RegisterPopup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup}
      />
    </>
  );
};

export default ServicePopupWrapper;
