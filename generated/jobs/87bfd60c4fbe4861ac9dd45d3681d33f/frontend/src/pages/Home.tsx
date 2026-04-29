export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        <section className="container mx-auto p-6 pt-20">
          <div className="flex justify-center">
            <Badge className="bg-indigo-100 text-indigo-700">Premium Education ERP</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Edify: Empowering Education</h1>
          <p className="text-gray-600 leading-relaxed text-lg">Streamline your educational institution's operations with our comprehensive ERP system.</p>
          <div className="flex justify-center space-x-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started</Button>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
          </div>
          <div className="flex justify-center mt-6">
            <p className="text-gray-600 leading-relaxed text-lg">Trusted by <span className="font-bold">500+</span> educational institutions worldwide.</p>
          </div>
        </section>
        <section className="container mx-auto p-6 pt-20">
          <div className="flex justify-center space-x-4">
            <img src="logo1.png" alt="Logo 1" className="w-12 h-12" />
            <img src="logo2.png" alt="Logo 2" className="w-12 h-12" />
            <img src="logo3.png" alt="Logo 3" className="w-12 h-12" />
            <img src="logo4.png" alt="Logo 4" className="w-12 h-12" />
          </div>
        </section>
        <section className="container mx-auto p-6 pt-20">
          <div className="grid grid-cols-3 gap-6">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Student Portal</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">Manage your student profile, enroll in courses, and track your grades.</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 19v-7l6-6 6 6v7M3 5v14m9-14v14m9-14v14" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Teacher Portal</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">Manage your classes, track attendance, and grade your students.</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-5c0-1-1-2-1-3h-4s-1 2-1 3v5m0-6V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Admin Dashboard</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">Get an overview of your institution's data, manage system settings, and control user access.</p>
            </Card>
          </div>
        </section>
        <section className="container mx-auto p-6 pt-20">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold text-gray-900">How it Works</h2>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">Step 1: Sign Up</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Create an account and get started with Edify.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 19v-7l6-6 6 6v7M3 5v14m9-14v14m9-14v14" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">Step 2: Set Up Your Institution</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Configure your institution's settings and add users.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-5c0-1-1-2-1-3h-4s-1 2-1 3v5m0-6V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">Step 3: Start Using Edify</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Begin managing your institution's data and operations with Edify.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">Step 4: Get Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Get help and support from our team whenever you need it.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}