import React from 'react';

const StudentManagement = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-white shadow-md p-6">
        <h1 className="text-xl font-bold">Student Management</h1>
      </header>

      <main className="flex-grow bg-gray-200 p-6">
        {/* Student management content goes here */}
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Manage Students</h2>
          <p>Here you can add, edit, and delete student records.</p>

          <button className="bg-blue-500 text-white p-3 rounded mt-4">Add Student</button>
        </div>
      </main>

      <footer className="bg-gray-100 p-6">
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
};

export default StudentManagement;