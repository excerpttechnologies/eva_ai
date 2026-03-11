export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:opacity-90 transition"
    >
      {children}
    </button>
  )
}