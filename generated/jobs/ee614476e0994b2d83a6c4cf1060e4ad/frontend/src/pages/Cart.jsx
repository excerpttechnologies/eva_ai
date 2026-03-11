import React from 'react';

const Cart = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {/* Add more components here for cart items */}
        <p className="text-gray-700">No items in your cart.</p>
      </div>
    </div>
  );
};

export default Cart;