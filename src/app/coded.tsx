'use client'
import React from 'react';
import { useState } from 'react';

// --- SVG Icons (as components for reusability) ---
// Using inline SVGs to keep everything in one file.
// In a real Next.js app, you'd typically use a library like lucide-react.

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ShipIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21h12" />
    <path d="M21 21h-2" />
    <path d="M7 21a2 2 0 0 0 2-2v-4.39a2 2 0 0 1 1.09-1.8l4.41-2.4a2 2 0 0 1 2.41 1.8V19a2 2 0 0 0 2 2" />
    <path d="M11 5h10" />
    <path d="m11 9-9 6" />
  </svg>
);

const PlaneIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
    <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const WarehouseIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 21V9l-9.4-7-1.6 1.4" />
        <path d="M4 21V9l7-5" />
        <path d="M2 21h20" />
        <path d="M12 21v-8.5" />
        <path d="M12 21v-8.5" />
        <path d="M12.5 12.5H16V15h-3.5z" />
        <path d="M8 12.5h3.5V15H8z" />
    </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryColor = "#082463";
  const secondaryColor = "#e85620";

  const navLinks = ["Home", "About", "Services", "Contact"];
  
  const services = [
    {
      icon: <PlaneIcon className="h-10 w-10" />,
      title: "Air Freight",
      description: "Delivering your cargo to any destination worldwide with speed and precision."
    },
    {
      icon: <ShipIcon className="h-10 w-10" />,
      title: "Ocean Freight",
      description: "Cost-effective and reliable sea transportation for large, heavy, or non-urgent shipments."
    },
    {
      icon: <TruckIcon className="h-10 w-10" />,
      title: "Road Freight",
      description: "Flexible and efficient domestic and cross-border trucking services for seamless door-to-door delivery."
    },
    {
        icon: <WarehouseIcon className="h-10 w-10" />,
        title: "Warehousing",
        description: "Secure, modern, and strategically located storage solutions to manage your inventory effectively."
    }
  ];

  const features = [
    {
      icon: <GlobeIcon className="h-10 w-10" />,
      title: "Global Network",
      description: "Our extensive network of partners ensures your shipments reach every corner of the globe."
    },
    {
      icon: <ClockIcon className="h-10 w-10" />,
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist you with any inquiries."
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "Safety & Reliability",
      description: "We prioritize the safety of your cargo, ensuring reliable and secure delivery every time."
    }
  ];

  const testimonials = [
      {
        quote: "Their ocean freight service is unbeatable. Our supply chain has never been more efficient. Highly recommended for any business looking for reliability.",
        name: "Johnathan Smith",
        company: "Global Imports Inc."
      },
      {
        quote: "The 24/7 customer support is a game-changer. We had an urgent air freight shipment, and their team handled it flawlessly, keeping us updated throughout.",
        name: "Maria Garcia",
        company: "Tech Solutions Co."
      },
      {
        quote: "Switching to this logistics provider was the best decision we made. Their tracking system is top-notch and their road freight is always on time.",
        name: "David Chen",
        company: "Retail Goods Ltd."
      }
  ];


  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold" style={{ color: primaryColor }}>
            Swift<span style={{ color: secondaryColor }}>Haul</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-[#e85620] transition-colors duration-300 font-medium">
                {link}
              </a>
            ))}
          </nav>
          <a href="#" className="hidden md:block bg-[#e85620] text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
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
                      <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-[#e85620] transition-colors duration-300 font-medium w-full text-center py-2">
                        {link}
                      </a>
                    ))}
                    <a href="#" className="bg-[#e85620] text-white px-8 py-3 rounded-full font-semibold w-full text-center mt-4">
                        Get a Quote
                    </a>
                </nav>
            </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative text-white min-h-[60vh] md:min-h-[80vh] flex items-center" style={{ backgroundColor: primaryColor }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* You can add a background image here */}
          {/* <img src="https://placehold.co/1920x1080/082463/e85620?text=Logistics+Background" alt="Logistics" className="absolute inset-0 w-full h-full object-cover"/> */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Your Partner in Global Logistics
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
              Reliable, Efficient, and Seamless Shipping Solutions Tailored for Your Business Needs.
            </p>
            <a href="#tracking" className="bg-[#e85620] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block">
              Track Your Shipment
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>Our Services</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We offer a comprehensive range of logistics services to meet your needs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
                  <div className="inline-block p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(232, 86, 32, 0.1)', color: secondaryColor }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking Section */}
        <section id="tracking" className="py-20" style={{backgroundColor: '#f0f4f8'}}>
             <div className="container mx-auto px-6">
                 <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto p-8 md:p-12 lg:flex lg:items-center lg:gap-8">
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>Track Your Shipment</h2>
                        <p className="text-gray-600 mt-2">Enter your tracking number below to get real-time updates on your shipment's status.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="text"
                                placeholder="Enter Tracking ID (e.g., SWH123456)"
                                className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                                style={{'--tw-ring-color': secondaryColor} as React.CSSProperties}
                            />
                            <button
                                type="submit"
                                className="bg-[#e85620] text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 flex-shrink-0"
                            >
                                Track
                            </button>
                        </form>
                    </div>
                </div>
             </div>
        </section>


        {/* Why Choose Us Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>Why Choose AMmovers?</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We are committed to providing exceptional service and value.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                   <div className="inline-block p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(8, 36, 99, 0.1)', color: primaryColor }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20" style={{ backgroundColor: primaryColor }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
                    <p className="text-gray-300 mt-2">Real stories from businesses we've helped succeed.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white">
                           <p className="mb-6 italic">"{testimonial.quote}"</p>
                           <div className="font-bold">{testimonial.name}</div>
                           <div className="text-sm" style={{color: secondaryColor}}>{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#04153A] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Swift<span style={{color: secondaryColor}}>Haul</span></h3>
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
    </div>
  );
}
