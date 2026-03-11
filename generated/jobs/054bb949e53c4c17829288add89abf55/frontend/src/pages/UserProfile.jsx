import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-8">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-lg text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-3 col-span-2" type="button">
          CTA Button
        </button>
      </header>

      <section className="py-16 px-6 bg-white shadow-md rounded-xl grid gap-8 md:grid-cols-3 grid-cols-1">
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
            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

        {/* Add more features as needed */}
      </section>

      <section className="py-16 px-6 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl font-bold mb-8">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md" type="button">
          Bold Message
        </button>
      </section>

      <footer className="py-16 px-6 bg-gray-300 text-center border-t-2 border-gray-500">
        Copyright Text or Simple Links
      </footer>
    </div>
  );
};

export default UserProfile;