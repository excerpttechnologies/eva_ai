export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Melodia 🎵</h1>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
              <p className="text-xl font-semibold text-gray-600 dark:text-white">Hello, Melody! 👋</p>
            </div>
          </div>
        </header>
        <section className="py-20 px-6">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Dashboard 📊</h2>
            {/* KPI Cards Row */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="pl-4 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold">Active Listeners</h3>
                  <p className="text-2xl font-bold text-gray-900">1,234,567 <span className="text-sm text-green-500">(+15%)</span></p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="pl-4 border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold">New Sign-ups</h3>
                  <p className="text-2xl font-bold text-gray-900">5,678 <span className="text-sm text-red-500">(-5%)</span></p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="pl-4 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold">Streaming Hours</h3>
                  <p className="text-2xl font-bold text-gray-900">10,000 <span className="text-sm text-green-500">(+20%)</span></p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="pl-4 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold">Revenue</h3>
                  <p className="text-2xl font-bold text-gray-900">$123,456 <span className="text-sm text-green-500">(+10%)</span></p>
                </div>
              </div>
            </div>
            {/* Main Chart Area */}
            <div className="relative w-full h-64 mb-8">
              <div className="absolute inset-0 bg-gray-200" />
              <div className="relative flex justify-around h-full">
                <div className="bg-indigo-600 w-4 h-3/4" style={{height: '75%'}}></div>
                <div className="bg-orange-500 w-4 h-2/4"></div>
                <div className="bg-green-500 w-4 h-5/6"></div>
                <div className="bg-yellow-500 w-4 h-1/2"></div>
                <div className="bg-red-500 w-4 h-4/5"></div>
              </div>
            </div>
            {/* 2-col Row: Activity Table & Quick Actions */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="col-span-1">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <table className="w-full border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3">User</th>
                      <th className="px-6 py-3">Action</th>
                      <th className="px-6 py-3">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-4">John Doe</td>
                      <td className="px-6 py-4">Played Song</td>
                      <td className="px-6 py-4">1 hour ago</td>
                    </tr>
                    {/* Add more table rows as needed */}
                  </tbody>
                </table>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="flex flex-col">
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Create Playlist</Button>
                  <Button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 mb-4">Upload Music</Button>
                  <Button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200">View Analytics</Button>
                </div>
              </div>
            </div>
            {/* Progress Bars Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Goals Progress</h3>
              <div className="flex flex-col">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-indigo-600 rounded-full h-2" style={{width: '60%'}}></div>
                </div>
                <p className="text-sm">Listener Engagement <span className="text-indigo-600">60%</span></p>
              </div>
              <div className="flex flex-col mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-orange-500 rounded-full h-2" style={{width: '40%'}}></div>
                </div>
                <p className="text-sm">Content Uploads <span className="text-orange-500">40%</span></p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Artists/Albums Section (from Browse page blueprint, included for demo) */}
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured on Melodia 🎶</h2>
            <div className="grid grid-cols-3 gap-8">
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Artist 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-semibold">Ariana Grande</h3>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Pop</Badge>
              </Card>
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Album 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-semibold">"Melodic Dreams"</h3>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 mt-2">New Release</Badge>
              </Card>
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Artist 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-semibold">The Weeknd</h3>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font