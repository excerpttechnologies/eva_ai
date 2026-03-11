import React from 'react';

const UserAuthentication = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-white text-4xl font-bold">User Authentication</h1>
        <p className="text-gray-300 mt-4">Experience seamless user authentication.</p>
        <button className="bg-white text-black py-3 px-8 rounded-xl shadow-lg mt-6" type="submit">
          Get Started
        </button>
      </section>

      <section className="py-20 px-6 container mx-auto md:grid grid-cols-3 gap-6">
        {[
          {
            title: 'Secure Login',
            description: 'Ensure your account is secure with two-factor authentication.',
          },
          {
            title: 'Passwordless Sign Up',
            description: 'Sign up quickly without the need for a password.',
          },
          {
            title: 'Biometric Authentication',
            description: 'Authenticate using biometrics like fingerprint or face recognition.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between"
          >
            <h2 className="text-black font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      <section className="py-20 px-6 container mx-auto">
        <h2 className="text-white text-3xl font-semibold">Get Started</h2>
        <button className="bg-black text-white py-4 px-8 rounded-xl shadow-lg mt-6" type="submit">
          Sign Up Now
        </button>
      </section>

      <footer className="py-10 bg-gray-900 text-white container mx-auto text-center">
        <p>© 2023 User Authentication. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserAuthentication;