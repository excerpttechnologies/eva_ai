import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function RealtimeChatFeatures() {
  return (
<div className="min-h-screen">
  <div className="flex justify-center items-center h-full">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Realtime Chat Features</h2>
      <ul className="list-disc pl-4 mt-4">
        <li>Private Messaging: Users can send messages to individual users.</li>
        <li>Group Chats: Users can create and join group chats for multiple participants.</li>
      </ul>
    </div>
  </div>
</div>
  )
}