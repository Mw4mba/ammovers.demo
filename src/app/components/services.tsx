import React from 'react';
import { ShipIcon, PlaneIcon, TruckIcon, WarehouseIcon } from './icons';

export function ServicesSection({ services, primaryColor, secondaryColor }:{ services: Array<{icon: React.ReactElement, title: string, description: string}>, primaryColor: string, secondaryColor: string }) {
  return (
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
  );
}
