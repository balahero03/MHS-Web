import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FileText, ExternalLink, Download, Search, BookOpen, Sigma, GitBranch, BarChart2, Zap, Layers } from 'lucide-react'

const categories = [
    {
        id: 'all',
        label: 'All Resources',
        icon: <Layers size={16} />
    },
    {
        id: 'calculus',
        label: 'Calculus & Analysis',
        icon: <Sigma size={16} />
    },
    {
        id: 'linalg',
        label: 'Linear Algebra',
        icon: <GitBranch size={16} />
    },
    {
        id: 'ode',
        label: 'Differential Equations',
        icon: <Zap size={16} />
    },
    {
        id: 'stats',
        label: 'Probability & Statistics',
        icon: <BarChart2 size={16} />
    },
    {
        id: 'transforms',
        label: 'Transforms & Methods',
        icon: <BookOpen size={16} />
    }
]

const resources = [
    // ── Calculus & Analysis ──────────────────────────────────────────────────
    {
        title: "Single Variable Calculus — Lecture Notes",
        author: "MIT 18.01 · Prof. David Jerison",
        type: "PDF",
        category: "calculus",
        desc: "Complete undergraduate calculus covering limits, derivatives, integrals, series and applications in engineering.",
        size: "3.2 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/"
    },
    {
        title: "Multivariable Calculus — Lecture Notes",
        author: "MIT 18.02 · Prof. Denis Auroux",
        type: "PDF",
        category: "calculus",
        desc: "Vectors, partial derivatives, double and triple integrals, Green's and Stokes' theorems — essential for engineers.",
        size: "5.1 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"
    },
    {
        title: "Engineering Mathematics — Calculus Module",
        author: "NPTEL · IIT Madras",
        type: "PDF",
        category: "calculus",
        desc: "Comprehensive engineering calculus module from IIT Madras, covering sequences, series, and integral transforms.",
        size: "4.8 MB",
        tag: "NPTEL",
        href: "https://nptel.ac.in/courses/111106100"
    },

    // ── Linear Algebra ───────────────────────────────────────────────────────
    {
        title: "Introduction to Linear Algebra — 5th Ed.",
        author: "Prof. Gilbert Strang · MIT",
        type: "Reference",
        category: "linalg",
        desc: "The definitive engineering linear algebra text — matrices, eigenvalues, SVD and applications in data science and engineering.",
        size: "—",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/"
    },
    {
        title: "Linear Algebra — Lecture Notes & Problem Sets",
        author: "MIT 18.06",
        type: "PDF",
        category: "linalg",
        desc: "Full set of lecture notes, problem sets and exams from the most popular linear algebra course on the internet.",
        size: "12 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/"
    },
    {
        title: "Linear Algebra for Engineers — NPTEL",
        author: "Prof. Vittal Rao · IISc",
        type: "PDF",
        category: "linalg",
        desc: "Matrices, systems of equations, eigenvalues and eigenvectors with engineering applications.",
        size: "6.4 MB",
        tag: "NPTEL",
        href: "https://nptel.ac.in/courses/111108066"
    },

    // ── Differential Equations ───────────────────────────────────────────────
    {
        title: "Differential Equations — Lecture Notes",
        author: "MIT 18.03 · Prof. Arthur Mattuck",
        type: "PDF",
        category: "ode",
        desc: "First and second order ODEs, Laplace transforms, systems, Fourier series — the engineering DE backbone.",
        size: "7.3 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/"
    },
    {
        title: "Ordinary Differential Equations — NPTEL",
        author: "Prof. P. N. Agrawal · IIT Roorkee",
        type: "PDF",
        category: "ode",
        desc: "A complete treatment of ODEs for engineering students including series solutions and Sturm-Liouville theory.",
        size: "4.2 MB",
        tag: "NPTEL",
        href: "https://nptel.ac.in/courses/111107108"
    },
    {
        title: "Partial Differential Equations for Engineers",
        author: "MIT 18.152",
        type: "PDF",
        category: "ode",
        desc: "PDEs in engineering — heat equation, wave equation, Laplace equation with Fourier and separation of variables methods.",
        size: "5.6 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/"
    },

    // ── Probability & Statistics ─────────────────────────────────────────────
    {
        title: "Probability and Statistics for Engineers",
        author: "MIT 6.041 · Prof. John Tsitsiklis",
        type: "PDF",
        category: "stats",
        desc: "Probability models, discrete and continuous distributions, inference and hypothesis testing for engineering applications.",
        size: "8.9 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/"
    },
    {
        title: "Engineering Statistics — NPTEL",
        author: "Prof. Somesh Kumar · IIT Kharagpur",
        type: "PDF",
        category: "stats",
        desc: "Statistical methods for quality control, reliability, regression and design of experiments in engineering.",
        size: "3.7 MB",
        tag: "NPTEL",
        href: "https://nptel.ac.in/courses/111105041"
    },

    // ── Transforms & Numerical ───────────────────────────────────────────────
    {
        title: "Signals and Systems — Fourier & Laplace",
        author: "MIT 6.003",
        type: "PDF",
        category: "transforms",
        desc: "Fourier series, Fourier transforms, Laplace transforms and Z-transforms — the mathematical core of signal processing.",
        size: "6.1 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/"
    },
    {
        title: "Numerical Methods for Engineers",
        author: "MIT 18.330",
        type: "PDF",
        category: "transforms",
        desc: "Root finding, interpolation, numerical integration, finite differences and ODEs — the computational side of engineering math.",
        size: "4.4 MB",
        tag: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/"
    },
    {
        title: "Z-Transform and Discrete Systems — NPTEL",
        author: "Prof. S. C. Dutta Roy · IIT Delhi",
        type: "PDF",
        category: "transforms",
        desc: "Z-transforms, discrete Fourier transforms and their applications in digital signal processing and control systems.",
        size: "2.9 MB",
        tag: "NPTEL",
        href: "https://nptel.ac.in/courses/117102060"
    }
]

const tagColors = {
    'MIT OpenCourseWare': { bg: 'rgba(59,130,246,0.08)', color: 'var(--secondary)' },
    'NPTEL': { bg: 'rgba(16,185,129,0.08)', color: 'var(--math-green)' }
}

const Resources = () => {
    const [query, setQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')

    const filtered = resources.filter(r => {
        const matchesCat = activeCategory === 'all' || r.category === activeCategory
        const matchesSearch = r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.author.toLowerCase().includes(query.toLowerCase()) ||
            r.desc.toLowerCase().includes(query.toLowerCase())
        return matchesCat && matchesSearch
    })

    return (
        <div style={{ padding: '100px 0' }}>
            {/* Header */}
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '5rem', display: 'block', background: 'none', border: 'none', height: 'auto' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: '900', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Open Access · Engineering Mathematics
                    </div>
                    <h2 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '900', letterSpacing: '-2px' }}>
                        The Library
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                        Study materials and resources to help students strengthen their understanding of engineering mathematics.
                    </p>

                    {/* Search */}
                    <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Search style={{ position: 'absolute', left: '20px', color: 'var(--text-dim)', zIndex: 1 }} size={18} />
                        <input
                            type="text"
                            placeholder="Search by title, author, or topic…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 24px 16px 52px',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                fontSize: '0.95rem',
                                outline: 'none',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                                background: 'white',
                                fontFamily: 'var(--font-main)'
                            }}
                        />
                    </div>
                </header>

                {/* Category Filter Pills */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
                    {categories.map(cat => (
                        <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '7px',
                                padding: '10px 20px', borderRadius: '100px',
                                border: `1px solid ${activeCategory === cat.id ? 'var(--secondary)' : 'var(--border)'}`,
                                background: activeCategory === cat.id ? 'var(--secondary)' : 'white',
                                color: activeCategory === cat.id ? 'white' : 'var(--text-dim)',
                                fontWeight: '700', fontSize: '0.8rem', cursor: 'pointer',
                                transition: 'all 0.2s ease', letterSpacing: '0.5px'
                            }}>
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '2px', marginBottom: '2.5rem' }}>
                    SHOWING {filtered.length} / {resources.length} RESOURCES
                </div>

                {/* Resource List */}
                <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-dim)' }}>
                            <p style={{ fontSize: '1.1rem' }}>No resources match your search.</p>
                        </div>
                    ) : (
                        filtered.map((r, i) => (
                            <Motion.div
                                key={`${r.title}-${i}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ x: 10, borderColor: 'var(--secondary)', background: 'white' }}
                                className="content-card"
                                style={{ padding: '1.8rem 2rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '20px', borderRadius: '20px', cursor: 'default' }}
                            >
                                {/* Icon */}
                                <div style={{ background: 'var(--bg-soft)', padding: '16px', borderRadius: '16px', color: 'var(--secondary)', border: '1px solid var(--border)', flexShrink: 0 }}>
                                    <FileText size={26} />
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>{r.title}</h4>
                                        <span style={{
                                            padding: '2px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800',
                                            background: tagColors[r.tag]?.bg || 'var(--p-blue)',
                                            color: tagColors[r.tag]?.color || 'var(--secondary)',
                                            letterSpacing: '0.5px', whiteSpace: 'nowrap'
                                        }}>{r.tag}</span>
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '700', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>{r.author}</p>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 0 }}>{r.desc}</p>
                                </div>

                                {/* Actions */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', background: 'var(--bg-soft)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}>{r.type}</span>
                                    <a href={r.href} target="_blank" rel="noopener noreferrer"
                                        className="resource-action"
                                        style={{
                                            background: 'var(--bg-soft)', border: '1px solid var(--border)', borderRadius: '12px',
                                            padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px',
                                            color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '700',
                                            fontSize: '0.78rem', transition: 'all 0.2s ease', letterSpacing: '0.5px'
                                        }}>
                                        <ExternalLink size={14} /> OPEN
                                    </a>
                                </div>
                            </Motion.div>
                        ))
                    )}
                </div>


            </div>
        </div>
    )
}

export default Resources
