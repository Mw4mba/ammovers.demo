import React from 'react';

export function TestimonialsSection({ testimonials, primaryColor, secondaryColor }:{ testimonials: Array<{quote: string, name: string, company: string}>, primaryColor: string, secondaryColor: string }) {
  return (
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
  );
}
