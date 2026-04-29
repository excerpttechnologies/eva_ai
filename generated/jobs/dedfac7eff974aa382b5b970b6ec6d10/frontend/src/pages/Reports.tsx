export default function Reports() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-6 py-20">
        {/* Date Controls Row */}
        <div className="flex justify-between mb-8">
          <Input label="Start Date" placeholder="YYYY-MM-DD" type="date" className="w-40" />
          <Input label="End Date" placeholder="YYYY-MM-DD" type="date" className="w-40" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Apply</Button>
        </div>
        {/* KPI Summary 4 Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Students Enrolled</h3>
            <div className="flex items-center mt-4">
              <span className="text-3xl font-bold">1,234</span>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-4">+5% 📈</Badge>
            </div>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Teachers Active</h3>
            <div className="flex items-center mt-4">
              <span className="text-3xl font-bold">56</span>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 ml-4">Stable 📊</Badge>
            </div>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Attendance Average</h3>
            <div className="flex items-center mt-4">
              <span className="text-3xl font-bold">92%</span>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-4">👍</Badge>
            </div>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Grades Submitted</h3>
            <div className="flex items-center mt-4">
              <span className="text-3xl font-bold">85%</span>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 ml-4">Ongoing ⏳</Badge>
            </div>
          </Card>
        </div>
        {/* Large Bar Chart */}
        <div className="relative w-full h-screen/2 md:h-96 mt-8" style={{ height: '75%' }}>
          {/* Chart will be rendered here (assuming a library like Chart.js or D3 is used, for this example, we'll use a placeholder SVG for illustration) */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
            <rect x="50" y="50" width="300" height="100" fill="#indigo-600" rx="10" />
          </svg>
          <div className="absolute bottom-0 left-0 w-full text-center text-gray-600">Months 📆</div>
        </div>
        {/* Two Smaller Charts Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
          <div className="relative w-full h-64">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="#purple-700" />
            </svg>
            <div className="absolute bottom-0 left-0 w-full text-center text-gray-600">Student Engagement 📊</div>
          </div>
          <div className="relative w-full h-64">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <polygon points="100,0 200,200 0,200" fill="#green-500" />
            </svg>
            <div className="absolute bottom-0 left-0 w-full text-center text-gray-600">Teacher Satisfaction 😊</div>
          </div>
        </div>
        {/* Data Table with Status Badges */}
        <div className="overflow-x-auto mt-8">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-gray-600">Student Name</th>
                <th className="px-4 py-2 text-gray-600">Grade</th>
                <th className="px-4 py-2 text-gray-600">Attendance</th>
                <th className="px-4 py-2 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">A+</td>
                <td className="px-4 py-2">95%</td>
                <td className="px-4 py-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Active 📚</Badge></td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">B</td>
                <td className="px-4 py-2">88%</td>
                <td className="px-4 py-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Warning ⚠️</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Insights Panel */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Key Insights 📊</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-gray-600 leading-relaxed">Our data shows a <strong>positive correlation</strong> between student engagement and higher grades. 📈</p>
            <p className="text-gray-600 leading-relaxed mt-4">Teachers with <strong>high satisfaction rates</strong> tend to have classes with better attendance. 😊</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Explore More Insights</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}