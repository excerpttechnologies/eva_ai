import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CommentsSection = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6 md:py-24 md:px-12">
        {}
        <h1 className="text-3xl font-bold text-white">Welcome to TechConnect</h1>
        <p className="mt-4 text-gray-200">Your one-stop platform for technology enthusiasts.</p>
      </section>

      <section className="py-20 px-6 md:py-24 md:px-12">
        {}
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i} className="rounded-xl shadow-lg mb-8" style={{ backgroundColor: `hsl(${(i * 60 + 30) % 360}, 100%, 90%)` }}>
            <div className="p-6">
              <h2 className="text-2xl font-bold">Feature {i + 1}</h2>
              <p className="mt-4 text-gray-500">Description of feature.</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="py-20 px-6 md:py-24 md:px-12">
        {}
        <Button variant="primary" size="lg" className="mt-8 w-full rounded-xl shadow-lg">
          Join Now
        </Button>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
        <p>&copy; 2023 TechConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CommentsSection;