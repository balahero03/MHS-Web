import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, ChevronRight, Hash, RefreshCw, CheckCircle, XCircle } from 'lucide-react'

const problems = [
    {
        id: "PW-2026-01",
        title: "Infinite Series",
        topic: "Calculus",
        question: "Find the sum of the infinite geometric series: 1 + 1/4 + 1/16 + 1/64 + ···",
        hint: "Use S = a / (1 - r) where a is the first term and r is the common ratio.",
        answer: ["4/3", "1.333", "1.33"],
        explanation: "This is a geometric series with a = 1 and r = 1/4. The sum S = a / (1 − r) = 1 / (1 − 1/4) = 1 / (3/4) = 4/3 ≈ 1.333"
    },
    {
        id: "PW-2026-02",
        title: "Eigenvalue Problem",
        topic: "Linear Algebra",
        question: "Find the eigenvalues of the matrix A = [[3, 1], [0, 2]].",
        hint: "Solve det(A − λI) = 0.",
        answer: ["2 and 3", "3 and 2", "2,3", "3,2", "{2,3}", "{3,2}"],
        explanation: "The characteristic equation is (3−λ)(2−λ) = 0, giving λ₁ = 3 and λ₂ = 2. The eigenvalues are 3 and 2."
    },
    {
        id: "PW-2026-03",
        title: "Differential Equation",
        topic: "ODE",
        question: "Solve the ODE: dy/dx = 2xy, given y(0) = 1. What is y(1)?",
        hint: "Separate variables: dy/y = 2x dx, then integrate both sides.",
        answer: ["e", "2.718", "e^1"],
        explanation: "Separating variables: ln|y| = x² + C. With y(0) = 1, C = 0. So y = e^(x²). At x = 1, y(1) = e ≈ 2.718."
    },
    {
        id: "PW-2026-04",
        title: "Laplace Transform",
        topic: "Transforms",
        question: "What is the Laplace transform of f(t) = t·e^(−2t)?",
        hint: "Use the formula L{t·e^(at)} = 1/(s−a)².",
        answer: ["1/(s+2)^2", "1/(s+2)²"],
        explanation: "Using L{t·e^(at)} = 1/(s−a)², with a = −2, we get L{t·e^(−2t)} = 1/(s+2)²."
    },
    {
        id: "PW-2026-05",
        title: "Complex Integration",
        topic: "Complex Analysis",
        question: "Evaluate the contour integral ∮ dz/(z²+1) over the unit circle |z| = 2.",
        hint: "Find poles inside the contour and apply the Residue Theorem.",
        answer: ["0", "2πi·0"],
        explanation: "The poles of 1/(z²+1) = 1/((z+i)(z−i)) at z = ±i are both inside |z| = 2. The sum of residues is 1/(2i) + 1/(−2i) = 0. By Cauchy's theorem, the integral = 2πi · 0 = 0."
    }
]

// Simple confetti particle
const Particle = ({ x, y, color, delay }) => (
    <Motion.div
        initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
        animate={{ opacity: 0, x: x, y: y, scale: 0, rotate: 360 }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 8,
            height: 8,
            borderRadius: 2,
            background: color,
            pointerEvents: 'none',
            zIndex: 10
        }}
    />
)

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4']

const ProblemOfTheWeek = () => {
    const [idx, setIdx] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [status, setStatus] = useState('idle') // idle | correct | wrong
    const [showHint, setShowHint] = useState(false)
    const [showSolution, setShowSolution] = useState(false)
    const [particles, setParticles] = useState([])
    const [attempts, setAttempts] = useState(0)

    const problem = problems[idx]

    const spawnParticles = () => {
        const pts = Array.from({ length: 24 }, (_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 200 - 60,
            color: COLORS[i % COLORS.length],
            delay: Math.random() * 0.3
        }))
        setParticles(pts)
        setTimeout(() => setParticles([]), 1600)
    }

    const normalize = str => str.trim().toLowerCase().replace(/\s+/g, '')

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = normalize(inputValue)
        const isCorrect = problem.answer.some(a => normalize(a) === input)
        if (isCorrect) {
            setStatus('correct')
            setShowSolution(true)
            spawnParticles()
        } else {
            setStatus('wrong')
            setAttempts(a => a + 1)
            setTimeout(() => setStatus('idle'), 800)
        }
    }

    const nextProblem = () => {
        setIdx((idx + 1) % problems.length)
        setInputValue('')
        setStatus('idle')
        setShowSolution(false)
        setShowHint(false)
        setAttempts(0)
    }

    const reset = () => {
        setInputValue('')
        setStatus('idle')
        setShowSolution(false)
        setShowHint(false)
        setAttempts(0)
    }

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <div className="content-card" style={{ position: 'relative', overflow: 'visible', padding: '3.5rem' }}>

                {/* Confetti particles */}
                {particles.map(p => (
                    <Particle key={p.id} x={p.x} y={p.y} color={p.color} delay={p.delay} />
                ))}

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--secondary)', letterSpacing: '3px', fontWeight: '700' }}>
                            {problem.id}
                        </span>
                        <span style={{ background: 'var(--p-blue)', color: 'var(--math-blue)', fontSize: '0.7rem', fontWeight: '800', padding: '3px 10px', borderRadius: '100px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            {problem.topic}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                            {idx + 1} / {problems.length}
                        </span>
                    </div>
                    <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '-1px' }}>
                        Problems of the Week
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{problem.title}</p>
                </div>

                {/* Question */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.07), rgba(139,92,246,0.05))',
                    border: '1px solid rgba(59,130,246,0.2)',
                    padding: '2rem 2.5rem',
                    borderRadius: '20px',
                    margin: '0 auto 2rem',
                    maxWidth: '720px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--primary)', fontWeight: '700', fontFamily: 'var(--font-mono)', lineHeight: 1.8 }}>
                        {problem.question}
                    </p>
                </div>

                {/* Attempts warning */}
                {attempts >= 2 && !showSolution && (
                    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        <button onClick={() => setShowHint(true)}
                            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '10px', padding: '6px 16px', cursor: 'pointer', fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700' }}>
                            💡 Show Hint
                        </button>
                    </Motion.div>
                )}

                {/* Hint */}
                <AnimatePresence>
                    {showHint && (
                        <Motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            style={{ textAlign: 'center', marginBottom: '1.5rem', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '14px', padding: '1rem 1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                            <span style={{ fontSize: '0.88rem', color: 'var(--math-orange)', fontWeight: '600' }}>
                                💡 Hint: {problem.hint}
                            </span>
                        </Motion.div>
                    )}
                </AnimatePresence>

                {/* Input or Solution */}
                {!showSolution ? (
                    <Motion.form
                        onSubmit={handleSubmit}
                        animate={status === 'wrong' ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
                        transition={{ duration: 0.4 }}
                        style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        <input
                            type="text"
                            placeholder="Enter your answer…"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            style={{
                                padding: '14px 22px',
                                borderRadius: '14px',
                                border: `2px solid ${status === 'wrong' ? '#ef4444' : 'var(--border)'}`,
                                outline: 'none',
                                fontSize: '1rem',
                                fontWeight: '600',
                                minWidth: '220px',
                                transition: 'border 0.2s',
                                fontFamily: 'var(--font-mono)'
                            }}
                        />
                        <button type="submit" className="reveal-btn"
                            style={{ border: 'none', cursor: 'pointer', padding: '14px 28px', borderRadius: '14px', background: 'var(--primary)', color: 'white', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', letterSpacing: '1px' }}>
                            SUBMIT <ChevronRight size={16} />
                        </button>
                        {status === 'wrong' && (
                            <Motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444', fontSize: '0.85rem', fontWeight: '700' }}>
                                <XCircle size={16} /> Try again
                            </Motion.span>
                        )}
                    </Motion.form>
                ) : (
                    <AnimatePresence>
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                            style={{ maxWidth: '720px', margin: '0 auto' }}
                        >
                            {/* Correct banner */}
                            <Motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '14px', padding: '12px 24px' }}>
                                <CheckCircle size={20} color="#10b981" />
                                <span style={{ color: '#059669', fontWeight: '900', fontSize: '0.95rem', letterSpacing: '2px' }}>CORRECT — Q.E.D.</span>
                            </Motion.div>

                            {/* Solution box */}
                            <div style={{ background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'left' }}>
                                <h4 style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                    <Lightbulb size={18} color="#f59e0b" /> Proof & Explanation
                                </h4>
                                <p style={{ opacity: 0.9, lineHeight: 1.8, fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{problem.explanation}</p>
                            </div>

                            {/* Action buttons */}
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                                <button onClick={reset}
                                    style={{ border: '1px solid var(--border)', background: 'white', borderRadius: '12px', padding: '10px 20px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <RefreshCw size={14} /> RESET
                                </button>
                                <button onClick={nextProblem}
                                    style={{ background: 'var(--secondary)', color: 'white', border: 'none', borderRadius: '12px', padding: '10px 22px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    NEXT PROBLEM <ChevronRight size={14} />
                                </button>
                            </div>
                        </Motion.div>
                    </AnimatePresence>
                )}

                {/* Progress dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2.5rem' }}>
                    {problems.map((_, i) => (
                        <div key={i} onClick={() => { setIdx(i); reset() }}
                            style={{ width: i === idx ? '28px' : '8px', height: '8px', borderRadius: '4px', background: i === idx ? 'var(--secondary)' : 'var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProblemOfTheWeek
