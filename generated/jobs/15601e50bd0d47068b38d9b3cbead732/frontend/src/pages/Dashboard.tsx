export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <div className="bg-white shadow-sm py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900">🍴 BiteBistro Dashboard</h1>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80" alt="User Avatar" className="w-10 h-10 object-cover rounded-full mr-3" />
              <div className="text-xl font-semibold text-gray-600">Welcome, Chef!</div>
            </div>
          </div>
        </div>
        {/* Hero Section (Modified to fit Dashboard Blueprint, originally for Home) */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📊 Today's Insights</h2>
            <div className="flex flex-wrap justify-center mb-8">
              {/* KPI Cards Row */}
              <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{borderLeft: '4px solid #34C759'}}>
                  <i className="fas fa-users text-2xl text-green-500 mb-3" />
                  <div className="text-xl font-semibold text-gray-600">245</div>
                  <div className="block text-gray-500">Customers Today <span className="text-green-500">(+15%)</span></div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{borderLeft: '4px solid #FFC107'}}>
                  <i className="fas fa-dollar-sign text-2xl text-orange-500 mb-3" />
                  <div className="text-xl font-semibold text-gray-600">$1,200</div>
                  <div className="block text-gray-500">Revenue Today <span className="text-orange-500">(+8%)</span></div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{borderLeft: '4px solid #03A9F4'}}>
                  <i className="fas fa-clock text-2xl text-blue-500 mb-3" />
                  <div className="text-xl font-semibold text-gray-600">98%</div>
                  <div className="block text-gray-500">Order Fulfillment Rate <span className="text-blue-500">(+2%)</span></div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{borderLeft: '4px solid #FF6384'}}>
                  <i className="fas fa-star text-2xl text-red-500 mb-3" />
                  <div className="text-xl font-semibold text-gray-600">4.5/5</div>
                  <div className="block text-gray-500">Average Rating <span className="text-red-500">(-1%)</span></div>
                </div>
              </div>
            </div>
            {/* Main Chart Area (Simplified for JSX, actual chart would require a library like D3 or Chart.js) */}
            <div className="w-full mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">📈 Sales by Hour</h3>
                <div className="flex">
                  <div className="w-1/6 bg-gray-200 h-32" style={{height: '60px'}}></div>
                  <div className="w-1/6 bg-gray-300 h-48" style={{height: '80px'}}></div>
                  <div className="w-1/6 bg-gray-200 h-64" style={{height: '120px'}}></div>
                  <div className="w-1/6 bg-gray-300 h-40" style={{height: '60px'}}></div>
                  <div className="w-1/6 bg-gray-200 h-80" style={{height: '100px'}}></div>
                  <div className="w-1/6 bg-gray-300 h-32" style={{height: '40px'}}></div>
                </div>
              </div>
            </div>
            {/* 2-col Row: Activity Table & Quick Actions */}
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full lg:w-2/3 xl:w-2/3 px-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">📋 Recent Activity</h3>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-gray-500">Time</th>
                        <th className="px-4 py-2 text-gray-500">Order ID</th>
                        <th className="px-4 py-2 text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">10:05 AM</td>
                        <td className="px-4 py-2">#ORD123</td>
                        <td className="px-4 py-2"><Badge className="bg-green-100 text-green-500">Delivered</Badge></td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full lg:w-1/3 xl:w-1/3 px-4 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">🔥 Quick Actions</h3>
                  <ul>
                    <li className="py-2 border-b border-gray-200 last:border-none">
                      <Link to="/new-order" className="text-gray-600 hover:text-indigo-600">New Order</Link>
                    </li>
                    <li className="py-2 border-b border-gray-200 last:border-none">
                      <Link to="/inventory" className="text-gray-600 hover:text-indigo-600">Check Inventory</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/staff" className="text-gray-600 hover:text-indigo-600">Staff Management</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Progress Bars Section */}
            <div className="w-full mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">📊 Goal Progress</h3>
                <div className="mb-4">
                  <span className="text-gray-600">Daily Sales Goal</span>
                  <div className="w-full bg-gray-200 h-2">
                    <div className="h-2 bg-indigo-600" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-gray-600">60% Achieved</span>
                </div>
                <div>
                  <span className="text-gray-600">Monthly Revenue Goal</span>
                  <div className="w-full bg-gray-200 h-2">
                    <div className="h-2 bg-indigo-600" style={{width: '30%'}}></div>
                  </div>
                  <span className="text-gray-600">30% Achieved</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}