import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
export default function Signup() {
  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (password.length < 8) {
      setPasswordStrength('weak');
    } else if (password.length < 12) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  }, [password]);

  return (
    <Layout>
      <div className="flex w-full h-screen">
        <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="FoodPal Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="overlay w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white">Join the Foodie Fun! 🍴👥</h1>
            <p className="text-xl text-gray-200 leading-relaxed mt-4">Discover, Order, and Enjoy with FoodPal! 🍔👌</p>
          </div>
        </div>
        <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12 py-20">
          <div className="flex flex-col w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4">Create Your FoodPal Account 🍳</h2>
            <div className="flex flex-row justify-between mb-4">
              <Input label="First Name" placeholder="John" type="text" className="w-1/2 pr-2" />
              <Input label="Last Name" placeholder="Doe" type="text" className="w-1/2 pl-2" />
            </div>
            <Input label="Email Address" placeholder="johndoe@example.com" type="email" className="mb-4" />
            <div className="relative mb-4">
              <Input 
                label="Password" 
                placeholder="********" 
                type="password" 
                className="pl-10" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M12 3v1m6 9h-1M4 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-row justify-start mt-2 text-xs">
                <div className={passwordStrength === 'weak' ? 'bg-red-300' : passwordStrength === 'medium' ? 'bg-yellow-300' : 'bg-green-300'} className="w-1/4 h-2 mr-1" />
                <div className={passwordStrength === 'weak' || passwordStrength === 'medium' ? 'bg-red-300' : 'bg-green-300'} className="w-1/4 h-2 mr-1" />
                <div className={passwordStrength === 'weak' ? 'bg-red-300' : 'bg-green-300'} className="w-1/4 h-2" />
              </div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-600">I agree to FoodPal's Terms & Conditions 📄</label>
            </div>
            <Button className="w-full mb-4">Create Account 🎉</Button>
            <p className="text-gray-600">Or, sign up with:</p>
            <Button className="w-full bg-red-500 hover:bg-red-700 text-white mb-2">
              Google SSO 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </Button>
            <p className="text-gray-600">Already a FoodPal? 
              <Link to="/login" className="text-indigo-600 hover:text-indigo-800">Login Now 👉</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}