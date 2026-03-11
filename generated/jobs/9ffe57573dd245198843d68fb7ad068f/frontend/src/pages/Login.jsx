import React from 'react';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-white">Welcome Back!</h1>
        <p className="text-lg text-gray-300 mt-2">Let's make your day easier.</p>
        <button
          type="button"
          className={`bg-white text-blue-500 px-6 py-3 rounded-xl shadow-md mt-4 w-full md:w-auto`}
        >
          Sign In
        </button>
      </section>

      <section className="py-20 px-6 container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            title: 'Save Time',
            description: 'Automatically fill in forms with your data.',
          },
          {
            title: 'Stay Secure',
            description: 'Enhance security by using biometric authentication.',
          },
          {
            title: 'Get Insights',
            description: 'Access detailed analytics on your usage patterns.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between"
          >
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl text-white mb-4">Ready to get started?</h2>
        <button
          type="button"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md w-full`}
        >
          Get Started Now
        </button>
      </section>

      <footer className="py-10 bg-gray-800 text-white container mx-auto">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;