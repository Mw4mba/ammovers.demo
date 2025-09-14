import React from 'react';

export function TrackingSection({ secondaryColor, primaryColor }:{ secondaryColor: string, primaryColor: string }) {
  return (
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
  );
}
