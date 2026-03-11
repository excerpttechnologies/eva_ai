import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function RealtimeChatAbout() {
  return (
<div className="min-h-screen">
  <div className="flex justify-center items-center h-full">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Realtime Chat Application</h2>
      <div className="mb-6">
        <label htmlFor="username" className="block text-gray-700">Username:</label>
        <input type="text" id="username" name="username" className="mt-1 w-full p-3 border rounded-lg shadow-sm" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700">Message:</label>
        <input type="text" id="message" name="message" className="mt-1 w-full p-3 border rounded-lg shadow-sm" />
      </div>
      <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
    </div>
  </div>
</div>

<div className="min-h-screen">
  <div className="flex justify-center items-center h-full">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Chat Room List</h2>
      {chatRooms.map((room, index) => (
        <div key={index} className="mb-6">
          <p>{room.name}</p>
          <button onClick={() => joinRoom(room.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join</button>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="min-h-screen">
  <div className="flex justify-center items-center h-full">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Chat Room Messages</h2>
      {messages.map((message, index) => (
        <div key={index} className="mb-6">
          <p>{message.username}: {message.message}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<script>
const chatRooms = [
  { id: 1, name: 'Room A' },
  { id: 2, name: 'Room B' }
];

const messages = [
  { username: 'Alice', message: 'Hello!' },
  { username: 'Bob', message: 'Hi Alice!' }
];

function sendMessage() {
  const newMessage = { username: document.getElementById('username').value, message: document.getElementById('message').value };
  messages.push(newMessage);
}

function joinRoom(roomId) {
  console.log(`Joined room ${roomId}`);
}
</script>
  )
}