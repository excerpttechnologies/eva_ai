```jsx
import React from 'react';

const Products = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <header className="px-4 py-6 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Products</h1>
      </header>

      <main className="flex-grow px-4 pb-8">
        {/* Product list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <article key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between space-x-4">
              <img src={`https://via.placeholder.com/200x200?text=Product+${index+1}`} alt={`Product ${index + 1}`} className="w-32 h-32 object-cover" />
              <div>
                <h2 className="text-xl font-bold">Product Name {index + 1}</h2>
                <p className="text-gray-600">Description of Product {index + 1}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">View Details</button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="px-4 bg-gray-100">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Products;
```