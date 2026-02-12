import React from 'react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Blogs = () => {
    const blogs = [
        { title: "Riemann Hypothesis", date: "Feb 11, 2026", cat: "Theory", difficulty: "Advanced" },
        { title: "Topological Data Analysis", date: "Feb 05, 2026", cat: "Applied", difficulty: "Intermediate" },
        { title: "Quantum Computing Logic", date: "Jan 15, 2026", cat: "Innovation", difficulty: "Advanced" },
        { title: "Fractal Geometry in Nature", date: "Jan 10, 2026", cat: "Theory", difficulty: "Beginner" }
    ]
    return (
        <div className="container" style={{ padding: '100px 0' }}>
            <header style={{ textAlign: 'center', marginBottom: '6rem', position: 'relative', background: 'none', border: 'none', height: 'auto', display: 'block' }}>
                <h2 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '900' }}>Scholarly Blog</h2>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>Insights into the mathematical universe from our top scholars.</p>
            </header>

            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
                {blogs.map((blog, i) => (
                    <Motion.div
                        key={i}
                        whileHover={{ y: -15, scale: 1.02 }}
                        className="content-card"
                        style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            padding: '10px 20px',
                            background: 'var(--p-blue)',
                            fontSize: '0.7rem',
                            fontWeight: 900,
                            color: 'var(--math-blue)',
                            borderRadius: '0 0 0 20px'
                        }}>
                            {blog.difficulty}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '2px' }}>{blog.cat}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{blog.date}</span>
                        </div>

                        <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '800' }}>{blog.title}</h3>

                        <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                            Diving deep into the proofs and practical implications of {blog.title.toLowerCase()} in modern scientific discovery.
                        </p>

                        <Link to="#" className="reveal-btn" style={{
                            color: 'white',
                            background: 'var(--primary)',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            fontWeight: '800',
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 20px rgba(15, 23, 42, 0.2)'
                        }}>
                            REVEAL PROOF <ChevronRight size={18} />
                        </Link>
                    </Motion.div>
                ))}
            </div>
        </div>
    )
}

export default Blogs
