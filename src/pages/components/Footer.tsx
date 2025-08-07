import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Subscription failed');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
      setStatus('error');
    }
  };

  return (
    <footer className="bg-blue-400 text-white font-syne">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start text-left">
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="bg-blue-200 text-[#5D4037] rounded-full px-4 py-1 text-sm font-semibold mb-2 ">
          <center>Newsletter</center>
        </div>
        <h2 className="text-3xl font-bold">
          Subscribe Our Newsletter
        </h2>
        <p className="max-w-md">
          Get latest updates and offers from Didi Finance
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow rounded-l-md px-4 py-2 text-[#5D4037] bg-white focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-900 px-6 py-2 rounded-r-md font-semibold hover:bg-blue-800 transition-colors"
          >
            {status === 'loading' ? 'Signing up...' : 'sign up'}
          </button>
        </form>
      </div>
      <div className="hidden md:block mt-8 ml-auto">
        <img src="/img/handGestureImage.svg" alt="Hand Gesture" className="max-w-xs" />
      </div> {/* Closing div for the hidden image section */}
    </div>


      {/* Bottom Section */}
      <div className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Contact Us */}
          <div className="pl-6 pb-3 text-sm">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p>Douala, Cameroon</p>
            <p>contact@Didifinance.io</p>
            <p>+237 675 370 867</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.5 0-1 .5-1 1v2h3l-1 3h-2v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 110 10 5 5 0 010-10z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4zm4.5 14h-3v-7h3v7zm-1.5-8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5 8h-3v-3.5c0-2-2-1.8-2 0V17h-3v-7h3v1.5c1.4-2.6 5-2.8 5 2.5V17z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-6 pb-3 text-sm">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/register-farm" className="hover:underline">Register a Farm</a></li>
            </ul>
          </div>

          {/* Talk to an Agent & Back to Top */}
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 15l7-7 7 7"></path>
              </svg>
              <span>Back to top</span>
            </button>
            <a href="mailto:contact@Didifinance.io" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 3h20v18H2V3zm18 2l-8 5-8-5v12h16V5z" />
              </svg>
              <span>Talk to an Agent</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
