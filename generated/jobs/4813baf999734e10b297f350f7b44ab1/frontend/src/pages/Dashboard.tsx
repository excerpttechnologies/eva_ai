export default function Dashboard() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
        <header className="bg-white py-6 px-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-900">ShopFlow Dashboard 🚀</h1>
          <div className="flex items-center">
            <span className="text-gray-600 mr-4">Hello, John Doe 👋</span>
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold mb-6">Key Performance Indicators 📊</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/4 p-4">
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 w-2 h-12 mr-4" style={{ height: '75%' }}></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sales 📈</h3>
                    <p className="text-gray-600 leading-relaxed">$12,456 <span className="text-green-500">(+15%)</span></p>
                  </div>
                </div>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Trending Up ⬆️</Badge>
              </Card>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 p-4">
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 w-2 h-12 mr-4" style={{ height: '50%' }}></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Revenue 📊</h3>
                    <p className="text-gray-600 leading-relaxed">$8,234 <span className="text-red-500">(-5%)</span></p>
                  </div>
                </div>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Trending Down ⬇️</Badge>
              </Card>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 p-4">
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 w-2 h-12 mr-4" style={{ height: '90%' }}></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Satisfaction 😊</h3>
                    <p className="text-gray-600 leading-relaxed">85% <span className="text-green-500">(+2%)</span></p>
                  </div>
                </div>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Excellent 👍</Badge>
              </Card>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 p-4">
              <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 w-2 h-12 mr-4" style={{ height: '40%' }}></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Website Traffic 🚗</h3>
                    <p className="text-gray-600 leading-relaxed">12,345 <span className="text-blue-500">(+10%)</span></p>
                  </div>
                </div>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Growing 🚀</Badge>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold mb-6">Sales Chart 📈</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-64">
                  <div className="bg-indigo-500 h-1/2" style={{ height: '60%' }}></div>
                  <div className="bg-gray-200 h-1/2"></div>
                </div>
                <div className="flex flex-col h-64">
                  <div className="bg-indigo-500 h-1/2" style={{ height: '40%' }}></div>
                  <div className="bg-gray-200 h-1/2"></div>
                </div>
                <div className="flex flex-col h-64">
                  <div className="bg-indigo-500 h-1/2" style={{ height: '80%' }}></div>
                  <div className="bg-gray-200 h-1/2"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <table className="w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-gray-600 font-semibold">Date</th>
                      <th className="px-4 py-2 text-gray-600 font-semibold">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">2023-02-01</td>
                      <td className="px-4 py-2 text-gray-600">$1,234</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">2023-02-02</td>
                      <td className="px-4 py-2 text-gray-600">$2,345</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">2023-02-03</td>
                      <td className="px-4 py-2 text-gray-600">$3,456</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold mb-6">Quick Actions 🚀</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Activity Table 📊</h3>
                <table className="w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-gray-600 font-semibold">Date</th>
                      <th className="px-4 py-2 text-gray-600 font-semibold">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">2023-02-01</td>
                      <td className="px-4 py-2 text-gray-600">New Order 📦</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">2023-02-02</td>
                      <td className="px-4 py-2 text-gray-600">New Customer 👋</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">2023-02-03</td>
                      <td className="px-4 py-2 text-gray-600">New Product 📈</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div