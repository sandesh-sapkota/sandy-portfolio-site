import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import CursorGlow from './components/CursorGlow'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
