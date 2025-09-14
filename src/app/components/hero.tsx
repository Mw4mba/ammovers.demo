import React from 'react';

export function HeroSection({ primaryColor, secondaryColor }:{ primaryColor: string, secondaryColor: string }) {
  return (
    <section id="home" className="relative text-white min-h-[60vh] md:min-h-[80vh] flex items-center" style={{ backgroundColor: primaryColor }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* You can add a background image here */}
       <img src="./truck.png" alt="Logistics" className="absolute inset-0 w-full h-full object-cover"/> 
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
  );
}
