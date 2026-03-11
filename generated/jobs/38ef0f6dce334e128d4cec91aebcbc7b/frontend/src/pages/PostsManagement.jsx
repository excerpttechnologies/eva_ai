import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function PostsManagement() {
  return (
<div className="min-h-screen">
  <h1>PostsManagement</h1>
  <div className="flex justify-between items-center p-4 mb-4 bg-blue-50 border-b">
    <input type="text" placeholder="Search posts..." className="w-full px-3 py-2 mr-2 border rounded"/>
    <button className="px-4 py-2 text-white bg-blue-700 rounded">Filter</button>
  </div>
  <ul className="list-disc pl-8">
    {[
      { id: 1, title: 'Post 1', content: 'Content of post 1', likes: 5, comments: [{ user: 'User A', text: 'Great post!' }, { user: 'User B', text: 'I like it.' }] },
      { id: 2, title: 'Post 2', content: 'Content of post 2', likes: 3, comments: [{ user: 'User C', text: 'Interesting read.' }] }
    ].map(post => (
      <li key={post.id} className="mt-4">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div className="flex justify-between items-center mt-4 mb-2 bg-gray-100 p-3 rounded">
          <span> Likes: {post.likes} </span>
          <button className="px-4 py-2 text-white bg-blue-700 rounded">Like</button>
        </div>
        <h3>Comments:</h3>
        <ul className="list-disc pl-8 mt-2">
          {post.comments.map(comment => (
            <li key={comment.user} className="mt-4 mb-2 bg-gray-100 p-3 rounded">
              <span>{comment.user}: {comment.text}</span>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>
  )
}