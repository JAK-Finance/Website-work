import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface RegisterPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            resetAutoCloseTimer();
            
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
            
            popupRef.current?.addEventListener('mouseenter', () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            });
            
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
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md p-4"
            aria-hidden={!isOpen}
        >
            <Head>
                <title>Register - Popup</title>
                <meta name="description" content="Registration form popup" />
            </Head>

            <div
                ref={popupRef}
                className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl bg-[#122342] overflow-hidden"
                role="dialog"
                aria-labelledby="register-popup-title"
            >
                {/* Background design elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <Image
                        src="/img/popFormSmall.png"
                        alt="Background design element"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20 transform scale-150"
                    />
                </div>

                {/* Form content wrapper */}
                <div className="relative z-10 p-8 sm:p-12">
                    <h1
                        id="register-popup-title"
                        className="text-[#14B9C1] text-2xl font-bold mb-1 text-center"
                    >
                        REGISTER FARM
                    </h1>
                    <p className="text-white text-center mb-6 text-sm">Fill out all the required fields marked (*)</p>
                    
                    <form 
                        className="space-y-4" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            onClose(); 
                        }}
                    >
                        {/* Form Inputs */}
                        <div>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#14B9C1] transition-colors duration-300"
                                placeholder="Name*"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                className="w-full h-12 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#14B9C1] transition-colors duration-300"
                                placeholder="Phone number*"
                                required
                            />
                        </div>
                        <div>
                            <select
                                className="w-full h-12 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#14B9C1] transition-colors duration-300"
                                defaultValue=""
                            >
                                <option value="" disabled hidden className="bg-[#122342] text-gray-400">Region*</option>
                                <option value="Adamawa" className="bg-[#122342]">Adamawa</option>
                                <option value="Centre" className="bg-[#122342]">Centre</option>
                                <option value="East" className="bg-[#122342]">East</option>
                                <option value="Far North" className="bg-[#122342]">Far North</option>
                                <option value="Northwest" className="bg-[#122342]">Northwest</option>
                                <option value="South" className="bg-[#122342]">South</option>
                                <option value="Southwest" className="bg-[#122342]">Southwest</option>
                                <option value="West" className="bg-[#122342]">West</option>

                                {/* Add other options */}
                            </select>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#14B9C1] transition-colors duration-300"
                                placeholder="Town*"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="w-full h-12 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#14B9C1] transition-colors duration-300"
                                placeholder="Email"
                            />
                        </div>
                        
                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#14B9C1] text-white font-bold rounded-lg hover:bg-[#119da4] transition-colors duration-300"
                            >
                                sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

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