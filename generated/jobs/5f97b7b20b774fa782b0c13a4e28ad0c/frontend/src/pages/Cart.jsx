import React from 'react';

const Cart = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-lg text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 md:mt-0" aria-label="Call to Action">
          CTA Button
        </button>
      </header>

      <section className="py-10 px-6 bg-white shadow-md rounded-b-xl md:grid md:grid-cols-3">
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
          <div key={index} className="md:col-span-1 md:p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

        {/* Add more features as needed */}
      </section>

      <footer className="py-10 px-6 bg-white shadow-md rounded-tl-xl">
        <p>Footer Section</p>
      </footer>
    </div>
  );
};

export default Cart;