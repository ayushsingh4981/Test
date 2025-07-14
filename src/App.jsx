import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FAQ from './pages/Faq.jsx'
import FitCheck from './pages/FitCheck.jsx'
import Profile from './pages/Profile.jsx'
import Result from './pages/Result.jsx'
import ChatGrid from './components/ChatGrid';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/fitcheck" element={<FitCheck />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/results" element={<Result />} />
      <Route path="/chat" element={<ChatGrid />} />

    </Routes>
  )
}

export default App