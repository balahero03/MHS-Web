import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Globe, MapPin, ExternalLink, ChevronDown, LogIn } from 'lucide-react'
import './index.css'

import GlobalBackground from './components/GlobalBackground'
import Logo from './components/Logo'
import ScrollToTop from './components/ScrollToTop'
import CoordinateCursor from './components/CoordinateCursor'

import Home from './pages/Home'
import Society from './pages/Society'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'
import MentorDoubts from './pages/MentorDoubts'
import MentorFeedback from './pages/MentorFeedback'
import Login from './pages/Login'

const NavLink = ({ to, label, onClick }) => {
  const location = useLocation()
  return (
    <li>
      <Link to={to} onClick={onClick} className={location.pathname === to ? 'active' : ''}>{label}</Link>
    </li>
  )
}

// Inner app — must be inside Router to use useLocation
function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mentorMenuOpen, setMentorMenuOpen] = useState(false)
  const [mobileMentorOpen, setMobileMentorOpen] = useState(false)
  const location = useLocation()

  // Close mobile nav on route change
  useEffect(() => {
    const resetTimer = window.setTimeout(() => {
      setMenuOpen(false)
      setMentorMenuOpen(false)
      setMobileMentorOpen(false)
    }, 0)

    return () => window.clearTimeout(resetTimer)
  }, [location])
  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const currentLabel = location.pathname.startsWith('/mentor-connect')
    ? 'Mentor Connect'
    : location.pathname === '/login'
      ? 'Login'
      : location.pathname === '/'
        ? 'Archive'
        : (location.pathname === '/about' ? 'Society' : 'Library')

  return (
    <div className="app">
      <ScrollToTop />
      <GlobalBackground />
      <CoordinateCursor />

      {/* ── Header ──────────────────────────────────────────────── */}
      <header>
        <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={close}>
            <Logo minimized={true} />
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-nav" style={{ position: 'relative' }}>
            <ul className="nav-links">
              <NavLink to="/" label="Archive" />
              <NavLink to="/about" label="Society" />
              <NavLink to="/resources" label="Library" />
              <li style={{ position: 'relative' }}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setMentorMenuOpen((open) => !open)
                  }}
                  className={location.pathname.startsWith('/mentor-connect') ? 'active' : ''}
                  aria-expanded={mentorMenuOpen}
                  aria-label="Mentor Connect"
                >
                  Mentor Connect <ChevronDown size={13} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
                </a>
                <AnimatePresence>
                  {mentorMenuOpen && (
                    <Motion.div
                      className="mobile-nav-dropdown"
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                      style={{ position: 'absolute', top: 'calc(100% + 14px)', right: '0', width: '240px' }}
                    >
                      <ul className="dropdown-list">
                        <li>
                          <Link to="/mentor-connect/doubts" onClick={() => setMentorMenuOpen(false)} className={`dropdown-item ${location.pathname === '/mentor-connect/doubts' ? 'active' : ''}`}>
                            <div className="dropdown-circle" style={{ background: 'var(--math-blue)' }}>
                              <Globe size={14} />
                            </div>
                            <span className="dropdown-label">Ask a Doubt</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/mentor-connect/feedback" onClick={() => setMentorMenuOpen(false)} className={`dropdown-item ${location.pathname === '/mentor-connect/feedback' ? 'active' : ''}`}>
                            <div className="dropdown-circle" style={{ background: 'var(--math-green)' }}>
                              <MapPin size={14} />
                            </div>
                            <span className="dropdown-label">Give Feedback</span>
                          </Link>
                        </li>
                      </ul>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </li>
              <NavLink to="/login" label="Login" />
            </ul>
          </nav>

          {/* Unified Mobile Menu Button (Pill Layout) */}
          <button
            className="mobile-unified-nav-btn mobile-only"
            onClick={() => setMenuOpen(o => !o)}
            style={{ 
              background: 'var(--primary)', 
              color: '#ffffff',
              padding: '0 18px',
              height: '42px', /* Fixed medium height */
              borderRadius: '100px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(17, 85, 204, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Left side: Current Page Label */}
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: '800', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              borderRight: '1px solid rgba(255, 255, 255, 0.3)',
              paddingRight: '12px',
              display: 'flex',
              alignItems: 'center',
              height: '100%'
            }}>
              {currentLabel}
            </span>

            {/* Right side: 3-Bar Menu */}
            <div className={`hamburger-btn${menuOpen ? ' open' : ''}`} style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              width: '18px', 
              height: '18px', /* Scaled to fit */
              margin: 0,
              padding: 0
            }}>
              <span className="hamburger-bar" style={{ background: '#ffffff', width: '100%', height: '2px', margin: '2px 0', transition: 'all 0.3s ease' }} />
              <span className="hamburger-bar" style={{ background: '#ffffff', width: '100%', height: '2px', margin: '2px 0', transition: 'all 0.3s ease' }} />
              <span className="hamburger-bar" style={{ background: '#ffffff', width: '100%', height: '2px', margin: '2px 0', transition: 'all 0.3s ease' }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="mobile-nav-dropdown"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <ul className="dropdown-list">
              {[
                { to: "/", label: "Archive", color: "var(--math-blue)", icon: <Globe size={14} /> },
                { to: "/about", label: "Society", color: "var(--math-green)", icon: <MapPin size={14} /> },
                { to: "/resources", label: "Library", color: "var(--math-purple)", icon: <ExternalLink size={14} /> },
                { to: "/login", label: "Login", color: "var(--math-orange)", icon: <LogIn size={14} /> }
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} onClick={close} className={`dropdown-item ${location.pathname === item.to ? 'active' : ''}`}>
                    <div className="dropdown-circle" style={{ background: item.color }}>
                      {item.icon}
                    </div>
                    <span className="dropdown-label">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setMobileMentorOpen((open) => !open)}
                  aria-expanded={mobileMentorOpen}
                  aria-label="Mentor Connect"
                  style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer' }}
                >
                  <div className="dropdown-circle" style={{ background: 'var(--secondary)' }}>
                    <ChevronDown size={14} />
                  </div>
                  <span className="dropdown-label">Mentor Connect</span>
                </button>
              </li>
              {mobileMentorOpen && (
                <li>
                  <ul className="dropdown-list" style={{ paddingLeft: '8px' }}>
                    <li>
                      <Link to="/mentor-connect/doubts" onClick={close} className={`dropdown-item ${location.pathname === '/mentor-connect/doubts' ? 'active' : ''}`}>
                        <div className="dropdown-circle" style={{ background: 'var(--math-blue)' }}>
                          <Globe size={14} />
                        </div>
                        <span className="dropdown-label">Ask a Doubt</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/mentor-connect/feedback" onClick={close} className={`dropdown-item ${location.pathname === '/mentor-connect/feedback' ? 'active' : ''}`}>
                        <div className="dropdown-circle" style={{ background: 'var(--math-green)' }}>
                          <MapPin size={14} />
                        </div>
                        <span className="dropdown-label">Give Feedback</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Society />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/mentor-connect/doubts" element={<MentorDoubts />} />
            <Route path="/mentor-connect/feedback" element={<MentorFeedback />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="main-footer">
        <div className="container footer-content-container">
          <ul className="nav-links" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <li><Link to="/">Archive</Link></li>
            <li><Link to="/about">Society</Link></li>
            <li><Link to="/resources">Library</Link></li>
            <li><Link to="/mentor-connect/doubts">Ask a Doubt</Link></li>
            <li><Link to="/mentor-connect/feedback">Give Feedback</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-copyright-bar">
          <div className="container footer-bottom" style={{ justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: '700' }}>
              © 2026 MATHEMATICS HONOR SOCIETY · SSNCE
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  )
}

export default App
