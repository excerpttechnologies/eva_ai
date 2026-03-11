import React from 'react';

const GroupChats = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-white text-4xl font-bold">Hero Section</h1>
        <p className="text-gray-300 mt-4">Subheading</p>
        <button className="bg-white text-black py-2 px-4 rounded-xl shadow-lg mt-6">CTA Button</button>
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
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      <section className="py-20 px-6 container mx-auto md:grid grid-cols-3 gap-6">
        {[
          {
            title: 'Call To Action 1',
            description: 'Description for Call To Action 1'
          },
          {
            title: 'Call To Action 2',
            description: 'Description for Call To Action 2'
          },
          {
            title: 'Call To Action 3',
            description: 'Description for Call To Action 3'
          }
        ].map((cta, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">{cta.title}</h2>
            <p>{cta.description}</p>
            <button className="bg-black text-white py-2 px-4 rounded-full mt-4">Button</button>
          </div>
        ))}

      </section>

      <footer className="py-10 bg-gray-800 container mx-auto text-white">
        <p>Copyright Text or Links</p>
      </footer>
    </div>
  );
};

export default GroupChats;