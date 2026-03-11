import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function RealtimeChatHome() {
  return (
<div className="min-h-screen">
  <header>
    <h1>Realtime Chat Home</h1>
  </header>
  <main>
    <section id="private-chats">
      <h2>Private Chats</h2>
      {privateChats.map(chat => (
        <div key={chat.id}>
          <strong>{chat.sender}</strong>: {chat.message}
        </div>
      ))}
    </section>
    <section id="group-chats">
      <h2>Group Chats</h2>
      {groupChats.map(groupChat => (
        <div key={groupChat.id}>
          <strong>{groupChat.name}: </strong>
          {groupChat.messages.map(message => (
            <span key={message.id}>{message.sender} says: {message.message}</span>
          ))}
        </div>
      ))}
    </section>
  </main>
</div>
  )
}