import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils'; 

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-8 right-8 cursor-pointer transition-opacity duration-300 z-50',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={scrollToTop}
    >
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="1.30029" width="39" height="39" rx="19.5" stroke="#013065"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.5119 17.2309C19.7928 16.9901 20.2072 16.9901 20.4881 17.2309L27.4881 23.2309C27.8026 23.5004 27.839 23.9739 27.5695 24.2884C27.2999 24.6029 26.8264 24.6393 26.5119 24.3697L20 18.7881L13.4881 24.3697C13.1736 24.6393 12.7001 24.6029 12.4306 24.2884C12.161 23.9739 12.1974 23.5004 12.5119 23.2309L19.5119 17.2309Z" fill="#013065"/>
      </svg>
    </div>
  );
};

export default ScrollToTopButton;