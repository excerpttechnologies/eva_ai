import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function LikesSystem() {
  return (
<div className="min-h-screen">
  <div>
    <h1>Liked Posts</h1>
    <ul>
      {likesData.map((like, index) => (
        <li key={index}>
          <p>{like.postTitle}</p>
          <span>By: {like.username}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
  )
}