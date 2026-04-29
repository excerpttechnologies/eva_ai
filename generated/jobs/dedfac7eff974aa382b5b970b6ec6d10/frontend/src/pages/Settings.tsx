export default function Settings() {
  return (
    <Layout>
      <div className="gradient-hero-banner bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
        <h1 className="text-4xl font-bold text-white">Settings 
          <span className="text-2xl font-normal">EduFlow Administration</span>
        </h1>
        <p className="text-xl text-gray-200 leading-relaxed mt-4">Configure your EduFlow experience</p>
        <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-6">Save Changes</Button>
      </div>
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
          <div className="flex flex-wrap justify-center -mx-6 mt-8">
            <Card className="w-full lg:w-1/2 xl:w-1/2 px-6 py-6 mt-6 lg:mx-6">
              <h3 className="text-xl font-semibold">General</h3>
              <Input label="Institution Name" placeholder="EduFlow School" type="text" className="mt-4" />
              <Input label="Email Address" placeholder="admin@edufloow.com" type="email" className="mt-4" />
              <Input label="Phone Number" placeholder="(123) 456-7890" type="tel" className="mt-4" />
            </Card>
            <Card className="w-full lg:w-1/2 xl:w-1/2 px-6 py-6 mt-6 lg:mx-6">
              <h3 className="text-xl font-semibold">Security</h3>
              <Input label="Current Password" placeholder="********" type="password" className="mt-4" />
              <Input label="New Password" placeholder="********" type="password" className="mt-4" />
              <Input label="Confirm New Password" placeholder="********" type="password" className="mt-4" />
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-100">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Integration Settings</h2>
          <div className="flex flex-wrap justify-center -mx-6 mt-8">
            <Card className="w-full lg:w-1/3 xl:w-1/3 px-6 py-6 mt-6 lg:mx-6">
              <h3 className="text-xl font-semibold">Google Calendar 
                <i className="fas fa-calendar ml-2"></i>
              </h3>
              <p className="text-gray-600 leading-relaxed">Sync your school events</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Connect</Button>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Connected</Badge>
            </Card>
            <Card className="w-full lg:w-1/3 xl:w-1/3 px-6 py-6 mt-6 lg:mx-6">
              <h3 className="text-xl font-semibold">Microsoft Teams 
                <i className="fas fa-video ml-2"></i>
              </h3>
              <p className="text-gray-600 leading-relaxed">Enable virtual classrooms</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Enable</Button>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-600 mt-2">Disabled</Badge>
            </Card>
            <Card className="w-full lg:w-1/3 xl:w-1/3 px-6 py-6 mt-6 lg:mx-6">
              <h3 className="text-xl font-semibold">Payment Gateways 
                <i className="fas fa-credit-card ml-2"></i>
              </h3>
              <p className="text-gray-600 leading-relaxed">Manage payment methods</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Configure</Button>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Active</Badge>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Notification Preferences</h2>
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-600 leading-relaxed">Email notifications for student enrollments</p>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" checked />
              <p className="text-gray-600 leading-relaxed">SMS alerts for upcoming events</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-600 leading-relaxed">In-app notifications for grade updates</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-100">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">System Logs 
            <i className="fas fa-file-alt ml-2"></i>
          </h2>
          <table className="w-full mt-8">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-gray-600">Event</th>
                <th className="px-6 py-3 text-left text-gray-600">User</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-600">2023-02-20</td>
                <td className="px-6 py-4 text-gray-600">System Update</td>
                <td className="px-6 py-4 text-gray-600">Admin</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4 text-gray-600">2023-02-15</td>
                <td className="px-6 py-4 text-gray-600">New User Registered</td>
                <td className="px-6 py-4 text-gray-600">John Doe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Support & Feedback</h2>
          <p className="text-gray-600 leading-relaxed mt-4">Having trouble? 
            <Link to="/support">Visit our support center</Link> or email 
            <a href="mailto:support@edufloow.com" className="text-indigo-600 hover:text-indigo-800">support@edufloow.com</a>
          </p>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Submit Feedback</Button>
        </div>
      </section>
      <footer className="py-10 px-6 bg-gray-100 text-gray-600">
        <div className="container max-w-7xl mx-auto flex justify-between">
          <p>&copy; 2023 EduFlow. All Rights Reserved.</p>
          <ul className="flex">
            <li className="mr-4"><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </Layout>
  )
}