import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-white">Hero Section</h1>
        <p className="text-lg text-gray-300 mt-4">Subheading</p>
        <button
          type="button"
          className={`mt-8 px-6 py-2 rounded-xl bg-white shadow-md hover:bg-gray-100`}
        >
          CTA Button
        </button>
      </section>

      <section className="py-20 px-6 container mx-auto md:grid grid-cols-3 gap-6">
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
            <h2 className="text-lg font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-white">Call To Action Section</h1>
        <button
          type="button"
          className={`mt-8 px-6 py-2 rounded-xl bg-blue-500 text-white shadow-md hover:bg-gray-100`}
        >
          Bold Message
        </button>
      </section>

      <footer className="py-10 container mx-auto">
        <p>Footer Section</p>
      </footer>
    </div>
  );
};

export default ShoppingCart;