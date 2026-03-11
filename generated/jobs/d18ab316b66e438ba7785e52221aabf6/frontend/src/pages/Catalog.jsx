import React from 'react';
import { Container, Box } from '@tailwindcss/components';

const Catalog = () => {
  return (
    <Container className="mx-auto py-20 px-6">
      {}
      <Box as="header" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 rounded-xl shadow-lg flex items-center justify-between">
        <h1 className="text-4xl font-bold">EduLib</h1>
        <p className="text-xl">Discover the world of learning with EduLib.</p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-lg hover:bg-gray-100">Explore Books</button>
      </Box>

      {}
      <div className="grid grid-cols-3 gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between text-black">
          <h2 className="text-xl font-bold">Feature 1</h2>
          <p>Learn more about EduLib's first feature.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between text-black">
          <h2 className="text-xl font-bold">Feature 2</h2>
          <p>Discover how EduLib enhances learning experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between text-black">
          <h2 className="text-xl font-bold">Feature 3</h2>
          <p>EduLib's third feature, making education more accessible.</p>
        </div>
      </div>

      {}
      <Box as="footer" className="bg-gray-100 p-6 text-center">
        <strong>Join EduLib today and transform your learning experience!</strong>
        <button className="bg-blue-500 px-8 py-2 rounded-full shadow-lg hover:bg-blue-700">Sign Up</button>
      </Box>

      {}
      <footer className="text-center text-gray-600 p-6">
        &copy; 2023 EduLib. All rights reserved.
      </footer>
    </Container>
  );
};

export default Catalog;


This `Catalog` component adheres to the specified requirements, including a modern and responsive design using Tailwind CSS for styling. It includes all necessary sections such as the Hero section, Features Section, Call To Action Section, and Footer Section.