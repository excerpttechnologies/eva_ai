import React from 'react';

const LikeManagement = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-8 container mx-auto">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-gray-700 text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-3" type="button">
          CTA Button
        </button>
      </header>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-8 container mx-auto md:grid-cols-3 grid-cols-1">
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
          <div key={index} className="bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

        {/* Add more features as needed */}
      </section>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl container mx-auto">
        <h1 className="text-4xl font-bold text-center">Call To Action Section</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-3" type="button">
          Bold Message
        </button>
      </section>

      <footer className="py-20 px-6 bg-gray-100 container mx-auto text-center">
        <p>Footer Section</p>
      </footer>
    </div>
  );
};

export default LikeManagement;