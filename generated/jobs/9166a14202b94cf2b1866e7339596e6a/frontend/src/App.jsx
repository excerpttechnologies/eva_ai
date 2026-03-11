import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import RealtimeChatHome from "./pages/RealtimeChatHome.jsx"
import RealtimeChatFeatures from "./pages/RealtimeChatFeatures.jsx"
import RealtimeChatPricing from "./pages/RealtimeChatPricing.jsx"
import RealtimeChatContact from "./pages/RealtimeChatContact.jsx"
import RealtimeChatAbout from "./pages/RealtimeChatAbout.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/realtime-chat-home" element={<RealtimeChatHome />} />
            <Route path="/realtime-chat-features" element={<RealtimeChatFeatures />} />
            <Route path="/realtime-chat-pricing" element={<RealtimeChatPricing />} />
            <Route path="/realtime-chat-contact" element={<RealtimeChatContact />} />
            <Route path="/realtime-chat-about" element={<RealtimeChatAbout />} />
            <Route path="/" element={<RealtimeChatHome />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}