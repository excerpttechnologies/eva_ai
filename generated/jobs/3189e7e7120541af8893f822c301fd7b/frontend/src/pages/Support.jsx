import React from 'react';

const Support = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900">Support Us</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">Join our community and help us grow.</p>
        <button type="button" className="mt-6 inline-block rounded-xl bg-blue-500 px-8 py-3 text-white font-semibold hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
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
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="mt-24 flex items-center justify-between border-t border-gray-200 pt-16">
        <strong className="text-xl font-bold">Join Our Community</strong>
        <button type="button" className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600">Subscribe Now</button>
      </section>

      {/* Footer Section */}
      <footer className="mt-24 flex items-center justify-between border-t border-gray-200 pt-16">
        <p>© 2023 Support Us. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Support;