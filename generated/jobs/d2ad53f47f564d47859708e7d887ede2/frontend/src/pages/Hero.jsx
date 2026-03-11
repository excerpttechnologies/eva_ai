import React from 'react';

const Hero = () => {
  return (
    <div className="bg-hero-gradient py-20 px-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Hero Section</h1>
      <p className="text-lg leading-relaxed mb-12">Subheading goes here.</p>
      <button className="rounded-xl bg-blue-500 text-white py-3 px-6 hover:bg-blue-700">CTA Button</button>
    </div>

    <section className="py-20 px-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-8">Features Section</h2>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-3 sm:gap-4">
        {[
          {
            title: 'Feature 1',
            description: 'Description for Feature 1.',
          },
          {
            title: 'Feature 2',
            description: 'Description for Feature 2.',
          },
          {
            title: 'Feature 3',
            description: 'Description for Feature 3.',
          },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 px-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-8">Call To Action Section</h2>
      <button className="rounded-xl bg-blue-500 text-white py-3 px-6 hover:bg-blue-700">Bold Message Button</button>
    </section>

    <footer className="py-10 container mx-auto">
      <p>Copyright 2023. All rights reserved.</p>
    </footer>
  );
};

export default Hero;