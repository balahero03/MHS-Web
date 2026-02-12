import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'

// Internal Components
import GlobalBackground from './components/GlobalBackground'
import Logo from './components/Logo'

// Pages
import Home from './pages/Home'
import Society from './pages/Society'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'

const NavLink = ({ to, label }) => {
  const location = useLocation()
  return (
    <li>
      <Link to={to} className={location.pathname === to ? 'active' : ''}>{label}</Link>
    </li>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <GlobalBackground />

        <header>
          <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Logo minimized={true} />
            </Link>
            <nav>
              <ul className="nav-links">
                <NavLink to="/" label="Archive" />
                <NavLink to="/about" label="Society" />
                <NavLink to="/blogs" label="Scholarly" />
                <NavLink to="/resources" label="Library" />
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Society />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer style={{ padding: '80px 0', borderTop: '1px solid var(--border)', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(20px)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ opacity: 0.8, marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <Logo minimized={true} />
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', letterSpacing: '4px', fontWeight: '800' }}>
              &copy; 2026 MATHEMATICS HONOR SOCIETY • COGNITIO ET VERITAS
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
