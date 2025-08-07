import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Stat {
  label: string;
  value: string | number;
}

interface CardProps {
  backgroundImage?: string;
  title: ReactNode;
  description: ReactNode;
  stats?: Stat[];
  showFooter?: boolean;
  footerText?: ReactNode;
  onMenuClick?: () => void; // This is the connection point
}

const Card: React.FC<CardProps> = ({
  backgroundImage,
  title,
  description,
  stats,
  showFooter = false,
  footerText,
  onMenuClick, // Destructured here
}) => {
  return (
<div
      className="relative p-8 shadow-lg
                 flex flex-col items-center space-y-6 bg-white/30 backdrop-blur-md
                 w-full h-full max-h-[60vh] max-w-[75vw]
                 sm:p-6 sm:w-full sm:max-w-full
                 md:w-[90%] md:max-w-[90vw] md:min-h-[60vh]
                 m-auto rounded-br-3xl overflow-hidden text-white"
      style={{ marginTop: '100px', marginBottom: '100px', marginLeft: 'auto', marginRight: 'auto', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0 }}
    >
      <div className="relative z-10 w-full flex flex-col items-center space-y-6 text-current">
        {/* Title */}
        <h2 className="text-left break-words text-5xl font-extrabold leading-tight">{title}</h2>

        {/* Description */}
        <p className="text-left break-words text-lg max-w-xl mb-2">{description}</p>

        

        {/* Footer */}
        {showFooter && footerText && (
          <div className="mt-8 text-center text-teal-300 font-extrabold text-3xl tracking-widest">
            {footerText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;