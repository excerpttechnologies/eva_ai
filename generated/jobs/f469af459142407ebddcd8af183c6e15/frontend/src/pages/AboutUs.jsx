<div className="container mx-auto py-20 px-6">
  <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-xl md:grid-cols-3 grid-cols-1 gap-4 mb-8">
    <div>
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-lg mt-2">At our Education ERP, we are dedicated to providing the best tools for educators and students.</p>
      <button className="bg-white text-blue-500 hover:bg-gray-100 py-2 px-4 rounded-full mt-6">Learn More</button>
    </div>
  </section>

  <section className="features-section md:grid-cols-3 grid-cols-1 gap-4">
    {[
      {
        title: "Student Management",
        description: "Effortlessly manage student records, grades, and attendance.",
        icon: 'fas fa-users',
      },
      {
        title: "Teacher Portal",
        description: "Access all the tools you need to teach effectively from one place.",
        icon: 'fas fa-book-reader',
      },
      {
        title: "Attendance Tracking",
        description: "Track student attendance in real-time and generate reports easily.",
        icon: 'fas fa-calendar-check',
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="flex items-center justify-between mb-2">
          <i className={`text-3xl ${feature.icon}`} />
          <h2 className="text-xl font-bold">{feature.title}</h2>
        </div>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>

  <section className="cta-section text-center md:grid-cols-1 grid-cols-3 gap-4">
    <div className="bg-blue-500 text-white p-6 rounded-lg flex items-center justify-center">
      <h2 className="text-2xl font-bold">Join Our Community</h2>
    </div>
  </section>

  <footer className="footer-section bg-gray-100 py-4 text-center">
    <p>&copy; 2023 Education ERP. All rights reserved.</p>
  </footer>
</div>