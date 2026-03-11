```jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <form className="max-w-md w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300">Contact Us</h2>
        <div className="mt-4 flex items-center justify-between mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 sr-only dark:text-white">Name</label>
          <input type="text" id="name" className="border border-gray-200 rounded-lg px-3 py-2 w-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:placeholder:text-gray-400" placeholder="Your Name" required />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
          <input type="email" id="email" className="border border-gray-200 rounded-lg px-3 py-2 w-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:placeholder:text-gray-400" placeholder="Your Email" required />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-medium rounded-lg py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
```