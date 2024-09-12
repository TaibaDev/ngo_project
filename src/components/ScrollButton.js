'use client';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollTop = () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scroll = (scrollY / totalHeight) * 100;
    setScrollProgress(scroll);
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5  right-2 md:right-8 z-50 flex items-center justify-center ">
          <svg
            className="absolute  w-12 h-12 md:w-16 md:h-16"
            viewBox="0 0 36 36">
            <path
              className="text-[#3EC1D3]"
              strokeDasharray="100, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              stroke="currentColor"
              strokeWidth="2"
              fill="none" />
            <path
              className="text-[#FF165D]"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              stroke="currentColor"
              strokeWidth="2"
              fill="none" />
          </svg>
          <button
            onClick={scrollToTop}
            className="relative z-10 p-3  font-bold text-2xl rounded-full text-[#FF165D]" >
            ↑
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
