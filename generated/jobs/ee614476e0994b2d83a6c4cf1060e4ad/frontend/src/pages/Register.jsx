import React from 'react';

const Register = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <form className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        
        <button type="submit" className="block w-full px-4 py-2 text-center font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg mt-4">Register</button>
      </form>
    </div>
  );
};

export default Register;