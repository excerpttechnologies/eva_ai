import React from 'react';

const Register = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <p className="text-gray-700 text-center">Join our community and get exclusive access.</p>
      </header>

      <section className="py-20 px-6 md:grid md:grid-cols-3">
        {[
          {
            title: 'Feature 1',
            description: 'Description for feature 1.',
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2.',
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 md:col-span-1"
          >
            <h2 className="text-lg font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

        {/* Add more features as needed */}
      </section>

      <footer className="py-20 px-6 text-center">
        <a href="#" className="block py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white rounded-xl">Get Started</a>
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;