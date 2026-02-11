import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, FileText, ExternalLink, User, BookOpen } from 'lucide-react'
import './index.css'

// Replicating the dense background from the image
const GlobalBackground = () => (
  <div className="bg-canvas">
    {/* Triangles Cluster Left */}
    <div className="bg-shape" style={{ top: '5%', left: '5%', background: 'var(--p-blue)', width: '200px', height: '180px' }}></div>
    <div className="bg-shape" style={{ top: '15%', left: '12%', background: 'var(--p-green)', width: '150px', height: '130px', animationDelay: '-5s' }}></div>
    <div className="bg-shape" style={{ top: '60%', left: '8%', background: 'var(--p-purple)', width: '180px', height: '160px', clipPath: 'polygon(30% 0%, 100% 30%, 0% 100%)' }}></div>

    {/* Triangles Cluster Right */}
    <div className="bg-shape" style={{ top: '10%', right: '5%', background: 'var(--p-purple)', width: '220px', height: '200px', animationDelay: '-2s' }}></div>
    <div className="bg-shape" style={{ top: '40%', right: '15%', background: 'var(--p-orange)', width: '140px', height: '120px', animationDelay: '-8s' }}></div>
    <div className="bg-shape" style={{ bottom: '10%', right: '10%', background: 'var(--p-blue)', width: '250px', height: '220px', clipPath: 'polygon(0% 20%, 80% 0%, 100% 100%)' }}></div>

    {/* Center subtle large polygon */}
    <div className="bg-shape" style={{ top: '30%', left: '30%', background: 'var(--p-green)', width: '600px', height: '600px', opacity: 0.03, animationDuration: '40s' }}></div>

    {/* Math Symbols exactly from the image */}
    <div className="bg-symbol col-green sym-lg" style={{ top: '20%', right: '25%' }}>∫ f(x) dx</div>
    <div className="bg-symbol col-purple sym-md" style={{ bottom: '30%', left: '15%' }}>
      <span style={{ fontSize: '5rem' }}>∑</span>
      <sub style={{ fontSize: '1rem', verticalAlign: 'bottom', marginLeft: '-25px' }}>x=1</sub>
      <sup style={{ fontSize: '1.2rem', marginLeft: '-22px' }}>∞</sup>
    </div>
    <div className="bg-symbol col-orange sym-lg" style={{ top: '45%', right: '10%' }}>
      <span style={{ fontSize: '1rem', fontStyle: 'normal' }}>Lt.</span> <br />
      <span style={{ fontSize: '0.8rem', verticalAlign: 'super' }}>t→0</span>
      <span style={{ marginLeft: '10px' }}>e<sup>t</sup></span>
    </div>
    <div className="bg-symbol col-blue sym-md" style={{ top: '55%', left: '20%' }}>e<sup>-λ</sup> λ<sup>x</sup> / x!</div>

    {/* Extra scattered ornaments */}
    <div className="bg-symbol col-green sym-sm" style={{ top: '80%', left: '40%' }}>dy/dx</div>
    <div className="bg-symbol col-purple sym-sm" style={{ top: '10%', left: '50%' }}>π ≈ 3.14159</div>
    <div className="bg-symbol col-blue sym-sm" style={{ bottom: '5%', right: '40%' }}>∇ × F</div>
    <div className="bg-symbol col-orange sym-sm" style={{ top: '35%', left: '5%' }}>lim Δx→0</div>
  </div>
)

// Reconstructed Logo from image: Triangle icon + MHS text
const Logo = ({ minimized = false }) => (
  <div className="mhs-branding">
    <div className="mhs-id-top" style={minimized ? { gap: '8px' } : {}}>
      <div className="mhs-tri-logo" style={minimized ? { width: '30px', height: '25px' } : {}}>
        <svg viewBox="0 0 100 100">
          {/* Stylized Triangle with interior lines from image */}
          <path d="M50 10 L90 85 L10 85 Z" stroke="#1e3a8a" strokeWidth="2.5" fill="#dbeafe" fillOpacity="0.4" />
          <path d="M50 10 L50 85" stroke="#1e3a8a" strokeWidth="1.5" />
          <path d="M10 85 L50 45 L90 85" stroke="#1e3a8a" strokeWidth="1.5" />
        </svg>
      </div>
      <h1 className="mhs-name-main" style={minimized ? { fontSize: '1.8rem' } : {}}>MHS</h1>
    </div>
    {!minimized && <span className="mhs-tagline">Mathematics Honor Society</span>}
  </div>
)

// --- Pages ---

const Home = () => {
  const events = [
    { title: "Calculus Symposium", date: "MAR 15", desc: "Theoretical frameworks of fluid dynamics." },
    { title: "Cryptography Deep-Dive", date: "APR 02", desc: "Mathematical security in modern encryption." },
    { title: "Non-Euclidean Geometry", date: "APR 25", desc: "The mathematics of curved spaces." }
  ]
  const [index, setIndex] = useState(0)

  return (
    <div>
      <section className="hero">
        <Logo />
      </section>

      <section className="container" style={{ paddingBottom: '100px' }}>
        <div className="content-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '3rem', fontSize: '2rem' }}>Institutional Excellence</h2>
          <div className="carousel-container" style={{ background: 'transparent' }}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="carousel-slide"
                style={{ textAlign: 'center', padding: '0 40px' }}
              >
                <span style={{ background: 'var(--p-blue)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)' }}>{events[index].date}</span>
                <h3 style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--primary)' }}>{events[index].title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>{events[index].desc}</p>
              </motion.div>
            </AnimatePresence>
            <button className="carousel-nav" style={{ left: '0' }} onClick={() => setIndex((index - 1 + events.length) % events.length)}><ChevronLeft size={20} /></button>
            <button className="carousel-nav" style={{ right: '0' }} onClick={() => setIndex((index + 1) % events.length)}><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>
    </div>
  )
}

const About = () => {
  const team = [
    { name: "Dr. Arthur Cayley", role: "Faculty Chair", desc: "Group Theory & Matrix Algebra especialista." },
    { name: "Ada Lovelace", role: "Society President", desc: "Computational logic & algorithm design." },
    { name: "Carl Friedrich Gauss", role: "Research Lead", desc: "Number Theory & Magnetic constants." }
  ]
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Our Leadership</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginBottom: '4rem' }}>Recognizing the minds leading mathematical innovation.</p>

      <div className="team-grid">
        {team.map((member, i) => (
          <div key={i} className="content-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--p-blue)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={60} color="var(--primary)" opacity={0.3} />
            </div>
            <h3 style={{ color: 'var(--primary)' }}>{member.name}</h3>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '15px' }}>{member.role}</div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Blogs = () => {
  const blogs = [
    { title: "Riemann Hypothesis", date: "Feb 11, 2026", cat: "Theory" },
    { title: "Topological Data Analysis", date: "Feb 05, 2026", cat: "Applied" },
    { title: "Quantum Computing Logic", date: "Jan 15, 2026", cat: "Innovation" }
  ]
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--primary)', marginBottom: '4rem' }}>Scholarly Blog</h2>
      <div className="blog-grid">
        {blogs.map((blog, i) => (
          <div key={i} className="content-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)' }}>{blog.cat}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{blog.date}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>{blog.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Exploring the intersections of {blog.title.toLowerCase()} and modern discovery.</p>
            <Link to="#" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Read Publication →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const Resources = () => {
  const rs = [
    { n: "Latex Drafting Suite", type: "G Drive", id: "D-001" },
    { n: "Statistical Analysis Workbook", type: "G Drive", id: "D-002" },
    { n: "Non-Linear Equations Archive", type: "Archive", id: "A-045" }
  ]
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--primary)', marginBottom: '4rem' }}>Registry & Template Archive</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {rs.map((r, i) => (
          <div key={i} className="content-card" style={{ padding: '1.5rem 2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ background: 'var(--p-green)', padding: '15px', borderRadius: '12px' }}>
              <FileText size={24} color="var(--primary)" />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>{r.n}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Format: {r.type} • Reference ID: {r.id}</p>
            </div>
            <ExternalLink size={18} color="var(--text-dim)" />
          </div>
        ))}
      </div>
    </div>
  )
}

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>

        <footer style={{ padding: '80px 0', borderTop: '1px solid var(--border)', background: 'rgba(248, 250, 252, 0.5)', backdropFilter: 'blur(10px)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ opacity: 0.5, marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <Logo minimized={true} />
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: '600' }}>
              Sigma Excellence &bull; 2026 Mathematics Honor Society
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
