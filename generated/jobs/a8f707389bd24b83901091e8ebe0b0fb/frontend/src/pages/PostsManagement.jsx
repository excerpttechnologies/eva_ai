import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const PostsManagement = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-12 text-white">
        {}
        <h1 className="text-4xl font-bold mb-6">Posts Management</h1>
        <p className="text-lg">Effortlessly manage your social media posts with our cutting-edge platform.</p>
      </section>

      <section className="py-20 px-6 md:grid md:grid-cols-3">
        {}
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="rounded-xl shadow-lg p-12 mb-8" style={{ backgroundColor: `hsl(${Math.random() * 360}, 50%, 90%)` }}>
            <div>
              <p className="text-2xl font-bold">Feature {index + 1}</p>
              <p className="text-gray-700 mt-4">Description of feature {index + 1} in the technology industry.</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="py-20 px-6">
        {}
        <Button variant="primary" size="lg" className="w-full mb-8">
          Get Started
        </Button>
        <p className="text-lg">Join thousands of technology companies who have already transformed their social media presence with our platform.</p>
      </section>

      <footer className="py-12 px-6 text-center bg-gray-900 text-white">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PostsManagement;