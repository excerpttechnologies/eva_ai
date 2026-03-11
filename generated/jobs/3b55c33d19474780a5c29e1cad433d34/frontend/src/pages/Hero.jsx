import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between md:grid md:grid-cols-3 md:max-w-none">
        <div>
          <h1 className="text-4xl font-bold text-white">EduLib</h1>
          <p className="mt-2 text-lg text-gray-300">Your One-Stop Education Resource Hub</p>
          <button type="button" className="bg-white text-blue-500 px-6 py-3 rounded-md mt-8 shadow-xl hover:shadow-inner transition duration-150 ease-in-out">
            Explore Books
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:col-span-2">
          <h2 className="text-2xl font-bold text-white">Our Features</h2>
          <div className="grid grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-black">Online Learning Platform</p>
                <p className="text-sm text-gray-500">Access to thousands of educational resources.</p>
              </div>
              <img src="/online-learning-icon.svg" alt="Online Learning Icon" className="w-16 h-16 object-contain" />
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-black">Virtual Labs</p>
                <p className="text-sm text-gray-500">Interactive simulations for better understanding.</p>
              </div>
              <img src="/virtual-labs-icon.svg" alt="Virtual Labs Icon" className="w-16 h-16 object-contain" />
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-black">Expert Tutors</p>
                <p className="text-sm text-gray-500">One-on-one tutoring sessions for personalized learning.</p>
              </div>
              <img src="/tutoring-icon.svg" alt="Tutoring Icon" className="w-16 h-16 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;