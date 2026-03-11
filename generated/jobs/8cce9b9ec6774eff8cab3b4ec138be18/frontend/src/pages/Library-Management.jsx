import React from 'react';

const LibraryManagement = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <h1 className="text-xl font-semibold">Library Management</h1>
      </header>

      {/* Main Content */}
      <main className="flex-auto p-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 text-lg mb-6">Welcome to the Library Management System. Here you can manage your books, authors, and more.</p>

          {/* Main Content Area */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Book Management</h2>
            <div className="mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add Book</button>
              <button className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-500">View Books</button>
            </div>

            {/* Subsection */}
            <h3 className="text-xl font-semibold mb-4">Book Details</h3>
            <p className="text-gray-700">Here you can view and edit details of each book.</p>
          </section>

          {/* Footer */}
          <footer className="bg-white shadow-md p-4">
            <div className="flex justify-between items-center">
              <span>Copyright © 2023 Library Management System</span>
              <button className="text-blue-500 hover:text-blue-700">Contact Us</button>
            </div>
          </footer>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4">
        <p className="text-center text-gray-600">&copy; 2023 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LibraryManagement;