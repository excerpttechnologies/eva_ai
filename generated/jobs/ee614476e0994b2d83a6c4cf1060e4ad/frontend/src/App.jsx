import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-10 text-2xl">Home</div>} />
      </Routes>
    </BrowserRouter>
  )
}