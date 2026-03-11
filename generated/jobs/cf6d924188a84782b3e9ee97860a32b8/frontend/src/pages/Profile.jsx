import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Heading</h1>
        <p className="text-lg text-center py-4">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-3">CTA Button</button>
      </header>

      <section className="py-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`md:grid md:grid-cols-3 md:gap-6 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
          >
            <div className="p-4 rounded-xl">
              <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 md:grid md:grid-cols-3 gap-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Bold Message</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>
      </section>

      <footer className="py-16 bg-gray-100">
        <p>Copyright Text or Links</p>
      </footer>
    </div>
  );
};

const features = [
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
];

export default Profile;