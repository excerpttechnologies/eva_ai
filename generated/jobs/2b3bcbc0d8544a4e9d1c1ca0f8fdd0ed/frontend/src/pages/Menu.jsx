import React from 'react';

const Menu = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-white text-4xl font-bold">Hero Section</h1>
        <p className="text-gray-300 mt-4">Subheading</p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-xl shadow-lg mt-6" role="button">
          CTA Button
        </button>
      </section>

      <section className="py-10 px-6 container mx-auto md:grid grid-cols-3 gap-6">
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
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between"
          >
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-10 px-6 container mx-auto">
        <h2 className="text-white text-3xl font-bold">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl shadow-lg mt-6" role="button">
          Call to Action
        </button>
      </section>

      <footer className="py-10 px-6 container mx-auto text-center">
        © 2023 Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Menu;