import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}
      </main>
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 AI Builder
      </footer>
    </div>
  )
}