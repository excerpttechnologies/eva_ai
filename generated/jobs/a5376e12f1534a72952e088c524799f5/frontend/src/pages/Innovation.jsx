import React from 'react';

const Innovation = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-white">Innovation</h1>
        <p className="text-lg text-gray-300 mt-4">Transforming the future with cutting-edge solutions.</p>
        <button className="bg-white text-black py-2 px-4 rounded-xl shadow-md mt-6" type="button">
          Discover More
        </button>
      </section>

      <section className="py-10 px-6 container mx-auto md:grid grid-cols-3 gap-6">
        {[
          {
            title: 'Enhanced Security',
            description: 'Stay protected with the latest security protocols and AI-driven analytics.',
          },
          {
            title: 'Efficient Performance',
            description: 'Experience lightning-fast performance across all devices and platforms.',
          },
          {
            title: 'Customizable Solutions',
            description: 'Tailor our solutions to fit your unique needs and workflows.',
          },
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

      <section className="py-10 px-6 container mx-auto">
        <h2 className="text-3xl text-white mt-10">Ready to Innovate?</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl shadow-md" type="button">
          Get Started
        </button>
      </section>

      <footer className="py-10 px-6 container mx-auto text-center text-gray-300 mt-10">
        © 2023 Innovation. All rights reserved.
      </footer>
    </div>
  );
};

export default Innovation;