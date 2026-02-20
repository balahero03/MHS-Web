import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Lightbulb, ChevronRight, Hash } from 'lucide-react'

const ProblemOfTheWeek = () => {
    const [inputValue, setInputValue] = useState('')
    const [showSolution, setShowSolution] = useState(false)

    const problem = {
        id: "PW-2026-06",
        title: "The Sum of the Infinite",
        question: "Find the sum of the series: 1 + 1/2 + 1/4 + 1/8 + ...",
        answer: "2",
        explanation: "This is a geometric series with a=1 and r=1/2. The sum S = a / (1-r) = 1 / (1 - 1/2) = 2."
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === problem.answer) {
            setShowSolution(true)
        } else {
            alert("Incorrect approach. Evaluate the limit again.")
        }
    }

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <div className="content-card problem-card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="card-logic-icon" style={{ top: '24px', left: '24px' }}>
                    <Hash size={14} />
                </div>

                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase' }}>Challenge {problem.id}</span>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '1rem 0', fontWeight: '900' }}>Problem of the Week</h2>

                    <div className="problem-statement" style={{ background: 'var(--p-blue)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)', margin: '2rem 0' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '600', fontStyle: 'italic' }}>"{problem.question}"</p>
                    </div>

                    {!showSolution ? (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <input
                                type="text"
                                placeholder="Enter sum..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                style={{
                                    padding: '12px 20px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border)',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    minWidth: '200px'
                                }}
                            />
                            <button className="reveal-btn" type="submit" style={{ border: 'none', cursor: 'pointer' }}>
                                SUBMIT PROOF <ChevronRight size={18} />
                            </button>
                        </form>
                    ) : (
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="solution-reveal"
                            style={{ textAlign: 'left', background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '16px', position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', top: '-10px', right: '20px', background: 'var(--math-green)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '900' }}>Q.E.D.</div>
                            <h4 style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><Lightbulb size={18} color="var(--math-orange)" /> Theoretical Proof</h4>
                            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>{problem.explanation}</p>
                            <button
                                onClick={() => { setShowSolution(false); setInputValue('') }}
                                style={{ marginTop: '1.5rem', background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem' }}
                            >
                                RESET WORKSPACE
                            </button>
                        </Motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProblemOfTheWeek
