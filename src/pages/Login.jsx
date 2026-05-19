import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Please fill in all fields.')
            setSuccess('')
            return
        }
        // Simulated authentication
        setError('')
        setSuccess('Authentication successful! Redirecting...')
    }

    return (
        <div className="container" style={{ padding: 'clamp(60px, 10vw, 100px) 1.5rem', position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mentor-card" 
                style={{ width: '100%', maxWidth: '440px' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <span className="mentor-eyebrow">Portal Access</span>
                    <h2 className="mentor-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Member Login</h2>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
                        Enter your credentials to access the Mathematics Honor Society portal.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {error && (
                        <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'var(--p-orange)', color: 'var(--math-orange)', fontSize: '0.85rem', fontWeight: '700' }}>
                            {error}
                        </div>
                    )}
                    {success && (
                        <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'var(--p-green)', color: 'var(--math-green)', fontSize: '0.85rem', fontWeight: '700' }}>
                            {success}
                        </div>
                    )}

                    <div>
                        <label className="mentor-label" htmlFor="login-email">Email Address</label>
                        <input 
                            id="login-email"
                            type="email" 
                            className="mentor-input" 
                            placeholder="member@ssn.edu.in"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mentor-label" htmlFor="login-password">Password</label>
                        <input 
                            id="login-password"
                            type="password" 
                            className="mentor-input" 
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="mentor-primary-button" 
                        style={{ marginTop: '0.5rem', width: '100%' }}
                    >
                        Sign In
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <a href="#" style={{ fontSize: '0.8rem', color: 'var(--secondary)', textDecoration: 'none', fontWeight: '700' }}>
                        Forgot password?
                    </a>
                </div>
            </Motion.div>
        </div>
    )
}

export default Login
