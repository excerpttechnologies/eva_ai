import React from 'react';

const TeacherPortal = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6">
      <header className="text-white text-3xl font-bold mb-10">
        Welcome to the Teacher Portal
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold">Feature 1</h2>
          <p className="mt-4 text-gray-700">Description of Feature 1.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold">Feature 2</h2>
          <p className="mt-4 text-gray-700">Description of Feature 2.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold">Feature 3</h2>
          <p className="mt-4 text-gray-700">Description of Feature 3.</p>
        </div>
      </section>
      <section className="mb-10 flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md w-full md:w-auto">Start Using Now</button>
      </section>
      <footer className="text-gray-600 text-sm mt-10">
        &copy; 2023 Teacher Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default TeacherPortal;


This code snippet exports a React component named `TeacherPortal` that adheres to the specified structure and design rules for an Education ERP website's teacher portal section.