'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-70 transition-shadow ${isScrolled ? 'shadow-md bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="flex w-full items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900 tracking-wide">
            LogiFlow
          </Link>
          <ul className={`hidden md:flex space-x-8 items-center font-medium transition-all duration-300 ${isMobileMenuOpen ? 'block' : ''}`}>
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/tracking" onClick={closeMobileMenu}>
                Tracking
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <Link href="/quote" className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Get Quote
          </Link>

          <div className="md:hidden ml-4 cursor-pointer p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 p-4 font-medium">
            <li>
              <Link href="/" onClick={closeMobileMenu} className="text-gray-700 hover:text-orange-600 transition-colors duration-300 w-full text-center py-2">Home</Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMobileMenu} className="text-gray-700 hover:text-orange-600 transition-colors duration-300 w-full text-center py-2">Services</Link>
            </li>
            <li>
              <Link href="/tracking" onClick={closeMobileMenu} className="text-gray-700 hover:text-orange-600 transition-colors duration-300 w-full text-center py-2">Tracking</Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMobileMenu} className="text-gray-700 hover:text-orange-600 transition-colors duration-300 w-full text-center py-2">About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-orange-600 transition-colors duration-300 w-full text-center py-2">Contact</Link>
            </li>
            <li>
              <Link href="/quote" className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold w-full text-center mt-4">Get Quote</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;