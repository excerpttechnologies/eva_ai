import React from 'react';

const Books = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <header className="text-gray-700 text-xl font-bold mb-4">Books</header>
      
      {/* Book List */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between mb-4">
            <img src={`https://via.placeholder.com/150`} alt={`Book ${index + 1}`} className="w-24 h-32 object-cover" />
            <div>
              <h3 className="text-gray-700 font-bold">{`Title ${index + 1}`}</h3>
              <p className="text-gray-500">Author: Author Name</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 p-4">
        © 2023 Books. All rights reserved.
      </footer>
    </div>
  );
};

export default Books;