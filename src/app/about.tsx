import React from 'react';
import { GlobeIcon, ClockIcon, ShieldCheckIcon } from './components/icons';

export function AboutSection({ features, primaryColor }:{ features: Array<{icon: React.ReactElement, title: string, description: string}>, primaryColor: string }) {
  return (
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
  );
}
