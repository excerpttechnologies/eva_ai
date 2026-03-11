import React from 'react';

const ProductCatalog = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      {}
      <section>
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-lg p-10 md:grid-cols-3 grid-cols-1 items-center justify-around">
          <h1 className="text-4xl font-bold">Welcome to Retail Hub</h1>
          <p className="text-xl mt-2">Discover the latest in fashion and home decor.</p>
        </header>
      </section>

      {}
      <section className="grid grid-cols-3 gap-6 md:gap-8">
        {[
          {
            title: 'Fast Delivery',
            description: 'Enjoy free shipping on orders over $50.',
            icon: 'fas fa-truck-fast'
          },
          {
            title: 'Secure Payments',
            description: 'Pay with confidence using the latest security protocols.',
            icon: 'fas fa-lock'
          },
          {
            title: 'Customer Support',
            description: 'Get help 24/7 from our dedicated support team.',
            icon: 'fas fa-phone-volume'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
            <i className={`text-3xl ${feature.icon}`} />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      {}
      <section>
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md rounded-lg p-10 md:grid-cols-3 grid-cols-1 items-center justify-around">
          <h2 className="text-4xl font-bold">Join Our Community</h2>
          <p className="mt-2">Be the first to know about new arrivals and exclusive offers.</p>
        </header>
      </section>

      {}
      <footer className="bg-gray-100 text-center p-6">
        <p>&copy; 2023 Retail Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductCatalog;


This code snippet provides a production-ready React component for an e-commerce website's product catalog section, following the specified structure and design rules.