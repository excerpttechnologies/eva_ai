import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function CommentsSection() {
  return (
<div className="min-h-screen">
  <div className="flex justify-between items-center p-4">
    <h2 className="text-xl font-bold">Comments</h2>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Reply</button>
  </div>
  <ul className="mt-4 space-y-4">
    <li key={1} className="flex items-center justify-between p-3 bg-gray-100 border-b border-gray-200">
      <img src="https:
      <div>
        <p className="text-base font-medium">User 1</p>
        <p className="text-gray-600 text-sm">2 hours ago</p>
      </div>
    </li>
    <li key={2} className="flex items-center justify-between p-3 bg-gray-100 border-b border-gray-200">
      <img src="https:
      <div>
        <p className="text-base font-medium">User 2</p>
        <p className="text-gray-600 text-sm">3 hours ago</p>
      </div>
    </li>
  </ul>
</div>
  )
}