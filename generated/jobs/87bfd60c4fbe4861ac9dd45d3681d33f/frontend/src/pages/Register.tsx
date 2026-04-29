export default function Register() {
  return (
    <Layout>
      <div className="flex h-screen">
        <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold text-gray-100">Edify</h1>
            <p className="text-xl font-semibold text-gray-200">Empowering Education, Enhancing Futures 📚</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
          </div>
        </div>
        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold">Create Your Account</h2>
            <div className="flex flex-col">
              <Input label="First Name" placeholder="John" type="text" />
              <Input label="Last Name" placeholder="Doe" type="text" />
              <Input label="Email" placeholder="johndoe@example.com" type="email" />
              <Input label="Password" placeholder="password123" type="password" />
              <div className="flex justify-between">
                <div className="w-1/2">
                  <Input label="Confirm Password" placeholder="password123" type="password" />
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <p className="text-gray-600 leading-relaxed">Password Strength:</p>
                    <div className="flex justify-between">
                      <div className="w-1/4 bg-red-500 h-5" style={{width: '25%'}}></div>
                      <div className="w-1/4 bg-yellow-500 h-5" style={{width: '25%'}}></div>
                      <div className="w-1/4 bg-green-500 h-5" style={{width: '25%'}}></div>
                      <div className="w-1/4 bg-gray-200 h-5" style={{width: '25%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-600 leading-relaxed">I agree to the terms and conditions 📝</p>
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Account</Button>
            <p className="text-gray-600 leading-relaxed">or</p>
            <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">
              Google SSO 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="w-5 h-5">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="py-20 px-6">
        <h3 className="text-xl font-semibold">Why Edify?</h3>
        <div className="flex flex-col">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold">Empowering Educators</h4>
            <p className="text-gray-600 leading-relaxed">Edify provides educators with the tools they need to succeed, from lesson planning to grade tracking 📚</p>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold">Enhancing Student Experience</h4>
            <p className="text-gray-600 leading-relaxed">Edify offers students a personalized learning experience, with features like course enrollment and attendance tracking 📊</p>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold">Streamlining Administration</h4>
            <p className="text-gray-600 leading-relaxed">Edify simplifies administrative tasks, from user management to system settings 📈</p>
          </Card>
        </div>
      </div>
      <div className="py-20 px-6">
        <h3 className="text-xl font-semibold">Get Started with Edify</h3>
        <p className="text-gray-600 leading-relaxed">Ready to experience the power of Edify? Create your account today and start empowering your education 🚀</p>
        <Link to="/login">Already have an account? Log in here</Link>
      </div>
    </Layout>
  )
}