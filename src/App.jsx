import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App