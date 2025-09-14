
'use client'
import React, { useState } from 'react';

import Navbar from './components/navbar';


import {
  ShipIcon,
  PlaneIcon,
  TruckIcon,
  WarehouseIcon,
  GlobeIcon,
  ClockIcon,
  ShieldCheckIcon
} from './components/icons';
import { Header, Footer } from './components/nav';
import { ServicesSection } from './components/services';
import { TrackingSection } from './components/tracking';
import { AboutSection } from './about';
import { HeroSection } from './components/hero';
import { TestimonialsSection } from './components/testimonials';

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
      <Header
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />

      <main>
        <HeroSection primaryColor={primaryColor} secondaryColor={secondaryColor} />

        <ServicesSection services={services} primaryColor={primaryColor} secondaryColor={secondaryColor} />

    <TrackingSection secondaryColor={secondaryColor} primaryColor={primaryColor} />


        <AboutSection features={features} primaryColor={primaryColor} />
        
    <TestimonialsSection testimonials={testimonials} primaryColor={primaryColor} secondaryColor={secondaryColor} />

      </main>

      {/* Footer */}
      <Footer secondaryColor={secondaryColor} />
    </div>
  );
}
