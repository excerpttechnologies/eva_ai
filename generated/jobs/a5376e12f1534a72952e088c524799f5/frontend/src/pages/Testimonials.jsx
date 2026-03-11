import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-hero-gradient py-20 px-6">
      <h1 className="text-4xl font-bold text-white">Hero Section</h1>
      <p className="text-lg text-white mb-8">Subheading</p>
      <button className="rounded-xl bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">CTA Button</button>
    </div>

    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Features Section</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Feature 1',
            description: 'Description for Feature 1'
          },
          {
            title: 'Feature 2',
            description: 'Description for Feature 2'
          },
          {
            title: 'Feature 3',
            description: 'Description for Feature 3'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Call To Action Section</h2>
      <button className="rounded-xl bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 shadow-md">Bold Message</button>
    </section>

    <footer className="py-16">
      <p>Copyright Text or Simple Links</p>
    </footer>
  );
};

export default Testimonials;