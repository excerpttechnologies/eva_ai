import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function UserProfiles() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-500 to-purple-500 py-20 px-6 md:py-32 md:px-12">
        {}
        <h1 className="text-4xl font-bold text-white">Welcome to Our Technology Platform</h1>
        <p className="text-lg text-gray-300 mt-4">Transform your business with our cutting-edge technology solutions.</p>
      </section>

      <section className="py-20 px-6 md:py-32 md:px-12">
        {}
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i} className="rounded-xl shadow-lg mb-8" style={{ backgroundColor: `hsl(${Math.random() * 360 + 15}deg ${Math.random() * 10}% ${Math.random() * 20 + 40}%` }}>
            <div className="text-center">
              <p className="text-xl font-bold mb-4">{`Feature ${i + 1}`}</p>
              <p className="text-gray-500">Description of feature</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="py-20 px-6 md:py-32 md:px-12">
        {}
        <Button variant="primary" size="lg" className="w-full mb-8">
          Get Started
        </Button>
        <p className="text-lg text-gray-500">Join thousands of businesses who have already transformed with our platform.</p>
      </section>

      <footer className="py-20 px-6 md:py-32 md:px-12">
        {}
        <div className="flex flex-col items-center justify-between text-gray-500">
          <span>© 2023 Technology Platform. All rights reserved.</span>
          <a href="#" className="text-blue-600">Privacy Policy</a>
          <a href="#" className="text-blue-600">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default UserProfiles;