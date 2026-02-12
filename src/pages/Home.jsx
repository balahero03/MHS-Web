import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Logo from '../components/Logo'

const Home = () => {
    const events = [
        { title: "Calculus Symposium", date: "MAR 15", desc: "Exploring the theoretical frameworks of fluid dynamics and chaos theory through the lens of Navier-Stokes equations.", icon: "∫" },
        { title: "Cryptography Deep-Dive", date: "APR 02", desc: "Mathematical security in modern encryption, RSA architecture, and elliptic curve protocols.", icon: "⟿" },
        { title: "Non-Euclidean Geometry", date: "APR 25", desc: "The mathematics of curved spaces and their applications in general relativity and cosmology.", icon: "◯" },
        { title: "Prime Distribution", date: "MAY 10", desc: "Unlocking the mysteries of the Riemann Hypothesis and the distribution of primes in large fields.", icon: "ℙ" }
    ]
    const [index, setIndex] = useState(0)

    const next = () => setIndex((index + 1) % events.length)
    const prev = () => setIndex((index - 1 + events.length) % events.length)

    return (
        <div className="home-page">
            <section className="hero">
                <Motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Logo />
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <div style={{
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--secondary)',
                        marginBottom: '1.5rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '8px 20px',
                        borderRadius: '100px',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}>
                        {"{"} x ∈ MHS | x: Academic Excellence {"}"}
                    </div>
                </Motion.div>
            </section>

            <section className="container" style={{ paddingBottom: '120px' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '12rem',
                        opacity: 0.03,
                        fontWeight: 900,
                        zIndex: -1,
                        color: 'var(--primary)'
                    }}>
                        ∑
                    </div>

                    <div className="content-card impressive-carousel" style={{ maxWidth: '1100px', margin: '0 auto', overflow: 'visible', padding: '4rem' }}>
                        <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '4rem', fontSize: '3rem', fontWeight: '800', letterSpacing: '-1px' }}>
                            Institutional Events
                        </h2>

                        <div className="carousel-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <button className="carousel-nav-large" onClick={prev}>
                                <ChevronLeft size={32} />
                            </button>

                            <div style={{ flex: 1, position: 'relative', height: '400px' }}>
                                <AnimatePresence mode='wait'>
                                    <Motion.div
                                        key={index}
                                        initial={{ opacity: 0, rotateY: -30, x: 100 }}
                                        animate={{ opacity: 1, rotateY: 0, x: 0 }}
                                        exit={{ opacity: 0, rotateY: 30, x: -100 }}
                                        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                        style={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '100%'
                                        }}
                                    >
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: 'var(--p-blue)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2.5rem',
                                            color: 'var(--math-blue)',
                                            marginBottom: '2rem',
                                            border: '2px solid var(--math-blue)'
                                        }}>
                                            {events[index].icon}
                                        </div>

                                        <span style={{
                                            background: 'var(--secondary)',
                                            padding: '6px 24px',
                                            borderRadius: '30px',
                                            fontSize: '0.85rem',
                                            fontWeight: '800',
                                            color: 'white',
                                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                                            marginBottom: '1.5rem'
                                        }}>
                                            {events[index].date}
                                        </span>

                                        <h3 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.1 }}>
                                            {events[index].title}
                                        </h3>

                                        <p style={{ color: 'var(--text-dim)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                                            {events[index].desc}
                                        </p>
                                    </Motion.div>
                                </AnimatePresence>
                            </div>

                            <button className="carousel-nav-large" onClick={next}>
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        {/* Pagination dots */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '3rem' }}>
                            {events.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    style={{
                                        width: i === index ? '40px' : '12px',
                                        height: '12px',
                                        borderRadius: '6px',
                                        background: i === index ? 'var(--secondary)' : 'var(--p-blue)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
