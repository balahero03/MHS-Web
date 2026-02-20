import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react'
import './index.css'

// Internal Components
import GlobalBackground from './components/GlobalBackground'
import Logo from './components/Logo'
import ScrollToTop from './components/ScrollToTop'

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
        <ScrollToTop />
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

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(20px)' }}>

          {/* Top Section — Logo + MHS Info */}
          <div className="container" style={{ paddingTop: '72px', paddingBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <Logo minimized={true} />
            </div>
            <p style={{ textAlign: 'center', color: 'var(--text-dim)', maxWidth: '580px', margin: '0 auto 60px', fontSize: '0.95rem', lineHeight: 1.7 }}>
              The Mathematics Honor Society (MHS) at SSN College of Engineering is a student-led academic body dedicated to fostering mathematical excellence, research culture, and interdisciplinary curiosity.
            </p>

            {/* Main Footer Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', borderTop: '1px solid var(--border)', paddingTop: '48px' }}>

              {/* Column 1 — About SSN */}
              <div>
                <h4 style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '1.2rem' }}>About the Institution</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--primary)' }}>Sri Sivasubramaniya Nadar College of Engineering</strong> is an autonomous institution affiliated with Anna University and accredited by <strong style={{ color: 'var(--primary)' }}>NAAC with an 'A++' Grade</strong>. Ranked among the top engineering colleges in India, SSNCE is approved by AICTE and recognized by the UGC.
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                  Founded by Dr. Shiv Nadar in 1996, the institution is known for academic rigour, research focus, and industry alignment — with over 3,000 students across 14 undergraduate and postgraduate programmes.
                </p>
              </div>

              {/* Column 2 — Department of Mathematics */}
              <div>
                <h4 style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '1.2rem' }}>Department of Mathematics</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  The Department of Mathematics at SSNCE is a centre of academic excellence offering comprehensive coursework across all disciplines of engineering. The department is supported by highly qualified faculty specialising in areas including <strong style={{ color: 'var(--primary)' }}>Applied Mathematics, Graph Theory, Fluid Dynamics, Cryptography, and Numerical Methods</strong>.
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                  It actively facilitates research initiatives, student mentorship programmes (RAMP), and interdisciplinary collaborations to nurture mathematical thinking across engineering domains.
                </p>
              </div>

              {/* Column 3 — Contact & Links */}
              <div>
                <h4 style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '1.2rem' }}>Contact & Location</h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <MapPin size={15} style={{ color: 'var(--secondary)', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                      Rajiv Gandhi Salai, Kalavakkam,<br />Chennai – 603 110, Tamil Nadu, India
                    </span>
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

                {/* Quick Links */}
                <h4 style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--secondary)', marginTop: '2rem', marginBottom: '0.8rem' }}>Quick Links</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'SSN College of Engineering', href: 'https://www.ssn.edu.in' },
                    { label: 'Department of Mathematics', href: 'https://www.ssn.edu.in/department/mathematics/' },
                    { label: 'NAAC Accreditation', href: 'https://www.ssn.edu.in/naac/' },
                  ].map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s' }}
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

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0', background: 'rgba(15,23,42,0.03)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
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
    </Router>
  )
}

export default App
