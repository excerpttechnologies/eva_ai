```jsx
import React from 'react';

const TeacherPortal = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="px-4 py-2 bg-white shadow-md">
        <h1 className="text-xl font-bold text-center">Teacher Portal</h1>
      </header>

      {/* Main Content */}
      <main className="flex-auto p-4">
        <div className="container mx-auto flex items-start justify-between">
          <aside className="w-full md:w-1/3 bg-white rounded shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold">Announcements</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Class Schedule Update</li>
              <li>New Assignment Due Date</li>
              <li>Grading Policy Changes</li>
            </ul>
          </aside>

          <main className="w-full md:w-2/3 bg-white rounded shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold">Class Materials</h2>
            <div className="mb-4 flex items-center justify-between">
              <span>Recent Files:</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">View All</button>
            </div>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li><a href="#" className="text-blue-700 hover:underline">Class Notes.pdf</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Homework Guide.docx</a></li>
            </ul>

            <div className="mb-4 flex items-center justify-between">
              <span>Recent Assignments:</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">View All</button>
            </div>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li><a href="#" className="text-blue-700 hover:underline">Assignment 1.pdf</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Assignment 2.docx</a></li>
            </ul>
          </main>

          <aside className="w-full md:w-1/3 bg-white rounded shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold">Classroom Resources</h2>
            <div className="mb-4 flex items-center justify-between">
              <span>Recent Files:</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">View All</button>
            </div>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li><a href="#" className="text-blue-700 hover:underline">Classroom Rules.pdf</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Emergency Contact List.docx</a></li>
            </ul>

            <div className="mb-4 flex items-center justify-between">
              <span>Recent Assignments:</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">View All</button>
            </div>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li><a href="#" className="text-blue-700 hover:underline">Homework Checklist.pdf</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Classroom Schedule.docx</a></li>
            </ul>
          </aside>
        </div>

        {/* Footer */}
        <footer className="px-4 py-2 bg-white shadow-md">
          <p className="text-center text-gray-500">© 2023 Teacher Portal. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default TeacherPortal;
```