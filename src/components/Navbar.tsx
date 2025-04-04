
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="font-bold text-navy text-xl">Nagidi Revanth</div>
          <div className="hidden md:flex space-x-6">
            {['about', 'interests', 'experience', 'skills', 'tools', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "text-gray-600 hover:text-navy capitalize transition-colors duration-300",
                  "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full",
                  "after:bg-teal after:transition-all after:duration-300 after:ease-in-out"
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
