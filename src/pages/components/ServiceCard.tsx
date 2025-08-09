import React from 'react';
import { Service } from '../data/servicesData';

interface ServiceCardProps {
  service: Service;
  lang?: 'en' | 'fr';
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang = 'en', onClick }) => {
  const bgColorClass = 'bg-blue-500 hover:bg-blue-600';

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className={`${bgColorClass} p-6 text-white transition-colors duration-300`}>
        <h3 className="text-xl font-bold mb-2">{service.title[lang]}</h3>
      </div>
      
      <div className="p-6 flex-grow bg-white">
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {service.description[lang]}
        </p>
        
        <ul className="mb-4 space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span>{feature[lang]}</span>
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-sm text-gray-500 italic">
              +{service.features.length - 3} more features...
            </li>
          )}
        </ul>
      </div>
      
      <div className="p-6 pt-0 mt-auto bg-white">
        <button 
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-medium transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          {service.ctaText[lang]}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
