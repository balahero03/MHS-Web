import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'

const Login = () => {
    const navigate = useNavigate()

    // Shared states
    const [isRegistering, setIsRegistering] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Login states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('Member')

    // Registration states
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [dept, setDept] = useState('')
    const [year, setYear] = useState('1st Year')
    const [institution, setInstitution] = useState('SSN')
    const [otherInstitution, setOtherInstitution] = useState('')
    const [description, setDescription] = useState('')
    const [regRole, setRegRole] = useState('Member')

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Please fill in all fields.')
            setSuccess('')
            return
        }

        // Preset mock credentials for demo purposes
        const mockCredentials = {
            Member: { email: 'member@ssn.edu.in', password: 'member123' },
            Mentor: { email: 'mentor@ssn.edu.in', password: 'mentor123' },
            Officer: { email: 'officer@ssn.edu.in', password: 'officer123' }
        }

        const targetCreds = mockCredentials[role]

        if (email === targetCreds.email && password === targetCreds.password) {
            setError('')
            setSuccess(`Authentication successful as MHS ${role}! Redirecting...`)
            setTimeout(() => {
                navigate(`/dashboard/${role.toLowerCase()}`)
            }, 1000)
        } else {
            setSuccess('')
            setError(`Invalid credentials for ${role} portal. (Hint: Use "${targetCreds.email}" and "${targetCreds.password}")`)
        }
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        if (!fullName || !username || !dept || !description) {
            setError('Please fill in all required fields.')
            setSuccess('')
            return
        }
        if (institution === 'Other' && !otherInstitution) {
            setError('Please specify your institution.')
            setSuccess('')
            return
        }
        setError('')
        setSuccess('Application submitted successfully! Our core committee will review your dossier.')
    }

    const toggleMode = () => {
        setIsRegistering(!isRegistering)
        setError('')
        setSuccess('')
    }

    return (
        <div className="container" style={{ padding: 'clamp(60px, 10vw, 100px) 1.5rem', position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring', damping: 25, stiffness: 120 }}
                className="mentor-card" 
                style={{ width: '100%', maxWidth: isRegistering ? '560px' : '440px' }}
            >
                <AnimatePresence mode="wait">
                    {!isRegistering ? (
                        <Motion.div
                            key="login-form-panel"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                <span className="mentor-eyebrow">Portal Access</span>
                                <h2 className="mentor-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{role} Login</h2>
                                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
                                    Enter your credentials to access the Mathematics Honor Society portal.
                                </p>
                            </div>

                            {/* Sliding Bubble Selector */}
                            <div style={{ 
                                display: 'flex', 
                                background: 'var(--bg-soft)', 
                                padding: '4px', 
                                borderRadius: '100px', 
                                border: '1px solid var(--border)',
                                position: 'relative',
                                margin: '0 auto 2rem',
                                width: 'fit-content',
                                gap: '4px',
                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                {['Member', 'Mentor', 'Officer'].map((r) => {
                                    const isActive = role === r
                                    return (
                                        <button
                                            key={r}
                                            type="button"
                                            onClick={() => setRole(r)}
                                            style={{
                                                padding: '8px 18px',
                                                borderRadius: '100px',
                                                border: 'none',
                                                background: 'transparent',
                                                fontSize: '0.82rem',
                                                fontWeight: '800',
                                                color: isActive ? 'white' : 'var(--text-dim)',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                transition: 'color 0.2s ease',
                                                zIndex: 1,
                                                outline: 'none'
                                            }}
                                        >
                                            {isActive && (
                                                <Motion.div
                                                    layoutId="activeRoleBubble"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'var(--secondary)',
                                                        borderRadius: '100px',
                                                        zIndex: -1,
                                                        boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
                                                    }}
                                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                            {r}
                                        </button>
                                    )
                                })}
                            </div>

                            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

                            <div style={{ textAlign: 'center', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none' }}>
                                    Forgot password?
                                </a>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                                    Not registered?{' '}
                                    <button 
                                        type="button"
                                        onClick={toggleMode}
                                        style={{ background: 'none', border: 'none', padding: 0, color: 'var(--secondary)', textDecoration: 'none', fontWeight: '700', cursor: 'pointer', font: 'inherit' }}
                                    >
                                        Apply for Membership
                                    </button>
                                </div>
                            </div>
                        </Motion.div>
                    ) : (
                        <Motion.div
                            key="register-form-panel"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <span className="mentor-eyebrow">Membership Application</span>
                                <h2 className="mentor-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Join the Society</h2>
                                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
                                    Fill out your academic dossier below to apply for the Mathematics Honor Society.
                                </p>
                            </div>

                            <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mentor-form-grid">
                                    <div>
                                        <label className="mentor-label" htmlFor="reg-fullname">Full Name</label>
                                        <input 
                                            id="reg-fullname"
                                            type="text" 
                                            className="mentor-input" 
                                            placeholder="Leonard Euler"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mentor-label" htmlFor="reg-username">Username</label>
                                        <input 
                                            id="reg-username"
                                            type="text" 
                                            className="mentor-input" 
                                            placeholder="euler1707"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mentor-form-grid">
                                    <div>
                                        <label className="mentor-label" htmlFor="reg-dept">Department</label>
                                        <input 
                                            id="reg-dept"
                                            type="text" 
                                            className="mentor-input" 
                                            placeholder="Biomedical Engineering"
                                            value={dept}
                                            onChange={(e) => setDept(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mentor-label" htmlFor="reg-year">Year of Study</label>
                                        <select 
                                            id="reg-year"
                                            className="mentor-input"
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                            style={{ 
                                                appearance: 'none', 
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231155cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 16px center',
                                                backgroundSize: '16px',
                                                paddingRight: '40px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <option value="1st Year">1st Year</option>
                                            <option value="2nd Year">2nd Year</option>
                                            <option value="3rd Year">3rd Year</option>
                                            <option value="4th Year">4th Year</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mentor-form-grid">
                                    <div>
                                        <label className="mentor-label" htmlFor="reg-institution">Institution</label>
                                        <select 
                                            id="reg-institution"
                                            className="mentor-input"
                                            value={institution}
                                            onChange={(e) => setInstitution(e.target.value)}
                                            style={{ 
                                                appearance: 'none', 
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231155cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 16px center',
                                                backgroundSize: '16px',
                                                paddingRight: '40px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <option value="SSN">SSN College of Engineering</option>
                                            <option value="SNU">Shiv Nadar University (SNU)</option>
                                            <option value="Other">Other (Specify below)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mentor-label" htmlFor="reg-role">Role Desired</label>
                                        <select 
                                            id="reg-role"
                                            className="mentor-input"
                                            value={regRole}
                                            onChange={(e) => setRegRole(e.target.value)}
                                            style={{ 
                                                appearance: 'none', 
                                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231155cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 16px center',
                                                backgroundSize: '16px',
                                                paddingRight: '40px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <option value="Member">MHS Scholar (Member)</option>
                                            <option value="Mentor">MHS Mentor (Academic Peer)</option>
                                        </select>
                                    </div>
                                </div>

                                {institution === 'Other' && (
                                    <Motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <label className="mentor-label" htmlFor="reg-other-inst">Specify Institution Name</label>
                                        <input 
                                            id="reg-other-inst"
                                            type="text" 
                                            className="mentor-input" 
                                            placeholder="Enter your institution name"
                                            value={otherInstitution}
                                            onChange={(e) => setOtherInstitution(e.target.value)}
                                            required
                                        />
                                    </Motion.div>
                                )}

                                <div>
                                    <label className="mentor-label" htmlFor="reg-description">Academic Description / Motivation</label>
                                    <textarea 
                                        id="reg-description"
                                        className="mentor-textarea" 
                                        placeholder="Tell us about your mathematical interests, background, and why you want to join MHS..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="mentor-primary-button" 
                                    style={{ marginTop: '0.5rem', width: '100%' }}
                                >
                                    Submit Dossier
                                </button>
                            </form>

                            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                                    Already registered?{' '}
                                    <button 
                                        type="button"
                                        onClick={toggleMode}
                                        style={{ background: 'none', border: 'none', padding: 0, color: 'var(--secondary)', textDecoration: 'none', fontWeight: '700', cursor: 'pointer', font: 'inherit' }}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </Motion.div>
                    )}
                </AnimatePresence>
            </Motion.div>
        </div>
    )
}

export default Login
