import React from 'react';
import { MenuIcon, XIcon } from './icons';

export function Header({
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
  primaryColor,
  secondaryColor
}: {
  navLinks: string[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  primaryColor: string;
  secondaryColor: string;
}) {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold" style={{ color: primaryColor }}>
          AM<span style={{ color: secondaryColor }}>movers</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-800 font-medium transition-colors duration-300 hover:text-[#e85620] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#e85620] after:w-0 hover:after:w-full after:transition-all after:duration-300 px-1"
              style={{textDecoration: 'none'}}
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="hidden md:block bg-[#e85620] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-[#d14419] hover:shadow-lg"
          style={{textDecoration: 'none'}}
        >
          Get a Quote
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-700"/> : <MenuIcon className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="relative text-gray-800 font-medium transition-colors duration-300 hover:text-[#e85620] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#e85620] after:w-0 hover:after:w-full after:transition-all after:duration-300 w-full text-center py-2 px-1"
                style={{textDecoration: 'none'}}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#e85620] text-white px-8 py-3 rounded-full font-semibold w-full text-center mt-4 transition-all duration-300 hover:bg-[#d14419] hover:shadow-lg"
              style={{textDecoration: 'none'}}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer({ secondaryColor }: { secondaryColor: string }) {
  return (
    <footer id="contact" className="bg-[#04153A] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
              <h3 className="text-xl font-bold mb-4">AM<span style={{color: secondaryColor}}>movers</span></h3>
            <p className="text-gray-400">Your trusted partner in global logistics, delivering excellence and reliability.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@AMmovers.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Address: 123 Logistics Ave, Global City</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-2">Stay updated with our latest news.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full rounded-l-md px-3 py-2 text-gray-800 focus:outline-none"/>
              <button type="submit" className="bg-[#e85620] px-4 rounded-r-md font-semibold hover:bg-opacity-90">&rarr;</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AMmovers Logistics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
