import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, ExternalLink, Menu, X } from 'lucide-react'
import './index.css'

import GlobalBackground from './components/GlobalBackground'
import Logo from './components/Logo'
import ScrollToTop from './components/ScrollToTop'
import CoordinateCursor from './components/CoordinateCursor'

import Home from './pages/Home'
import Society from './pages/Society'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'

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
  const location = useLocation()

  // Close mobile nav on route change
  useEffect(() => { setMenuOpen(false) }, [location])
  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

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
          <nav className="desktop-nav">
            <ul className="nav-links">
              <NavLink to="/" label="Archive" />
              <NavLink to="/about" label="Society" />
              <NavLink to="/resources" label="Library" />
            </ul>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className={`hamburger-btn${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="mobile-nav-links">
              <NavLink to="/" label="Archive" onClick={close} />
              <NavLink to="/about" label="Society" onClick={close} />
              <NavLink to="/resources" label="Library" onClick={close} />
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
          </Routes>
        </AnimatePresence>
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(20px)' }}>
        <div className="container" style={{ paddingTop: '72px', paddingBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <Logo minimized={true} />
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-dim)', maxWidth: '580px', margin: '0 auto 60px', fontSize: '0.95rem', lineHeight: 1.7 }}>
            The Mathematics Honor Society (MHS) at SSN College of Engineering is a student-led academic body dedicated to fostering mathematical excellence, research culture, and interdisciplinary curiosity.
          </p>

          <div className="footer-grid">
            {/* Column 1 */}
            <div>
              <h4 className="footer-col-title">About the Institution</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--primary)' }}>Sri Sivasubramaniya Nadar College of Engineering</strong> is an autonomous institution affiliated with Anna University and accredited by <strong style={{ color: 'var(--primary)' }}>NAAC with an 'A++' Grade</strong>. Approved by AICTE and recognised by UGC.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                Founded by Dr. Shiv Nadar in 1996, the institution is known for academic rigour, research focus, and industry alignment — with over 3,000 students across 14 undergraduate and postgraduate programmes.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="footer-col-title">Department of Mathematics</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
                The Department of Mathematics at SSNCE is a centre of academic excellence offering coursework across all engineering disciplines, specialising in <strong style={{ color: 'var(--primary)' }}>Applied Mathematics, Graph Theory, Fluid Dynamics, Cryptography, and Numerical Methods</strong>.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                It actively facilitates research initiatives, student mentorship programmes (RAMP), and interdisciplinary collaborations.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="footer-col-title">Contact &amp; Location</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={15} style={{ color: 'var(--secondary)', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>Rajiv Gandhi Salai, Kalavakkam,<br />Chennai – 603 110, Tamil Nadu, India</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={15} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>+91 44 2746 9700</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={15} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                  <a href="mailto:principal@ssn.edu.in" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>principal@ssn.edu.in</a>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Globe size={15} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                  <a href="https://www.ssn.edu.in" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    www.ssn.edu.in <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              <h4 className="footer-col-title" style={{ marginTop: '2rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'SSN College of Engineering', href: 'https://www.ssn.edu.in' },
                  { label: 'Department of Mathematics', href: 'https://www.ssn.edu.in/department/mathematics/' },
                  { label: 'NAAC Accreditation', href: 'https://www.ssn.edu.in/naac/' },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    <ExternalLink size={11} /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0', background: 'rgba(15,23,42,0.03)' }}>
          <div className="container footer-bottom">
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: '700' }}>
              © 2026 MATHEMATICS HONOR SOCIETY · SSNCE
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', letterSpacing: '3px', fontWeight: '700' }}>
              COGNITIO ET VERITAS
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
