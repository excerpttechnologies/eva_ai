<div className="container mx-auto py-20 px-6">
  <section>
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-lg p-8 mb-10 flex items-center justify-between">
      <h1 className="text-4xl font-bold">RealTime Edu</h1>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full">Enroll Now</button>
    </header>
  </section>

  <section className="grid grid-cols-3 gap-6 md:gap-8">
    {[
      {
        title: "Track Attendance",
        description: "Monitor student attendance in real-time.",
        icon: 'fas fa-calendar-check',
      },
      {
        title: "Manage Grades",
        description: "Effortlessly manage and track grades.",
        icon: 'fas fa-chart-line',
      },
      {
        title: "Class Scheduling",
        description: "Simplify class scheduling with our tools.",
        icon: 'fas fa-calendar-week',
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white shadow-lg rounded p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold mr-2">{feature.icon}</span>
          <h3>{feature.title}</h3>
        </div>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>

  <section className="mb-10 flex items-center justify-between">
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full">Get Started</button>
  </section>

  <footer className="text-gray-500 text-sm p-6 bg-gray-100">
    &copy; 2023 RealTime Edu. All rights reserved.
  </footer>
</div>