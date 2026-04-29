export default function Courses() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-20 px-6" style={{ backgroundImage: "linear-gradient(135deg, #6c5ce7, #8e44ad)", height: "75%" }}>
          <div className="flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold text-gray-100">Empowering Education with EduFlow</h1>
            <div className="flex justify-center mt-6">
              <div className="mr-8">
                <h2 className="text-3xl font-bold">2500+</h2>
                <p className="text-xl font-semibold">Happy Students</p>
              </div>
              <div className="mr-8">
                <h2 className="text-3xl font-bold">150+</h2>
                <p className="text-xl font-semibold">Expert Instructors</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-xl font-semibold">Courses Available</p>
              </div>
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-8">
              Explore Courses <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </section>
        {/* Courses Section */}
        <section className="py-20 px-6">
          <h1 className="text-4xl font-bold text-gray-900">Browse Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Technology</Badge>
              <h2 className="text-2xl font-bold mt-2">Introduction to AI</h2>
              <p className="text-gray-600 leading-relaxed">By <strong>Dr. Maria Rodriguez</strong></p>
              <div className="flex justify-between mt-4">
                <p className="text-xl font-semibold">$199</p>
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-gray-300"></i>
                  <span className="text-gray-600 ml-2">4.5/5</span>
                </div>
              </div>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Enroll Now</Button>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Science</Badge>
              <h2 className="text-2xl font-bold mt-2">Biology Essentials</h2>
              <p className="text-gray-600 leading-relaxed">By <strong>Prof. John Lee</strong></p>
              <div className="flex justify-between mt-4">
                <p className="text-xl font-semibold">$149</p>
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-600 ml-2">5/5</span>
                </div>
              </div>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Enroll Now</Button>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Arts</Badge>
              <h2 className="text-2xl font-bold mt-2">Painting Masterclass</h2>
              <p className="text-gray-600 leading-relaxed">By <strong>Ms. Sophia Patel</strong></p>
              <div className="flex justify-between mt-4">
                <p className="text-xl font-semibold">$299</p>
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-gray-300"></i>
                  <i className="fas fa-star text-gray-300"></i>
                  <span className="text-gray-600 ml-2">3/5</span>
                </div>
              </div>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Enroll Now</Button>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Mathematics</Badge>
              <h2 className="text-2xl font-bold mt-2">Calculus Fundamentals</h2>
              <p className="text-gray-600 leading-relaxed">By <strong>Dr. Liam Chen</strong></p>
              <div className="flex justify-between mt-4">
                <p className="text-xl font-semibold">$199</p>
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-gray-300"></i>
                  <span className="text-gray-600 ml-2">4/5</span>
                </div>
              </div>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Enroll Now</Button>
            </Card>
          </div>
        </section>
        {/* Learning Path Section */}
        <section className="py-20 px-6 bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-900">Your Learning Path</h1>
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-full mr-4"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-4"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-4"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex justify-center text-gray-600 leading-relaxed">
              <p className="mr-8">Course Selected</p>
              <p className="mr-8">In Progress</p>
              <p className="mr-8">Up Next</p>
              <p>Completed</p>
            </div>
            <div className="w-full max-w-md mt-8">
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold">Current Course: Introduction to AI</h2>
                <p className="text-gray-600 leading-relaxed mt-2">By <strong>Dr. Maria Rodriguez</strong></p>
                <div className="flex justify-between mt-4">
                  <p className="text-xl font-semibold">Lesson 5 of 20</p>
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Continue Learning</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}