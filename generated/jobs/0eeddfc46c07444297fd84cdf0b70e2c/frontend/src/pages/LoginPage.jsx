import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function LoginPage() {
  return (
<div className="min-h-screen">
  <div className="flex justify-center items-center h-full">
    <form action="/submit-login" method="POST" className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <label htmlFor="email" className="block text-gray-700">Email</label>
      <input type="email" id="email" name="email" required className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" />
      <label htmlFor="password" className="block mt-4 text-gray-700">Password</label>
      <input type="password" id="password" name="password" required className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" />
      <button type="submit" className="block mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Login</button>
    </form>
  </div>
</div>
  )
}