import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

<div className="min-h-screen">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 md:py-20 md:px-12 flex items-center justify-center text-white">
    <h1 className="text-4xl font-bold">LikesSystem</h1>
  </div>

  <section className="md:grid md:grid-cols-3 md:gap-6">
    {Array.from({ length: 3 }, (_, i) => (
      <Card key={i} className="p-6 rounded-xl shadow-lg bg-white">
        <h2 className="text-xl font-bold mb-4">Feature {i + 1}</h2>
        <p>Realistic industry-specific content here.</p>
      </Card>
    ))}
  </section>

  <div className="bg-gray-50 p-6 md:py-20">
    <Button variant="primary" size="lg" className="w-full mb-4">Sign Up Now</Button>
    <Button variant="secondary" size="lg" className="w-full">Learn More</Button>
  </div>

  <footer className="bg-gray-100 p-6 text-center">
    <p>&copy; 2023 LikesSystem. All rights reserved.</p>
  </footer>
</div>