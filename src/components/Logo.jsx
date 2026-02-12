import React from 'react'

const Logo = ({ minimized = false }) => (
    <div className="mhs-branding">
        <div className="mhs-id-top" style={minimized ? { gap: '8px' } : {}}>
            <div className="mhs-tri-logo" style={minimized ? { width: '30px', height: '25px' } : {}}>
                <svg viewBox="0 0 100 100">
                    <path d="M50 10 L90 85 L10 85 Z" stroke="var(--primary)" strokeWidth="3" fill="var(--p-blue)" fillOpacity="0.6" />
                    <path d="M50 10 L50 85" stroke="var(--primary)" strokeWidth="2" />
                    <path d="M10 85 L50 45 L90 85" stroke="var(--primary)" strokeWidth="2" />
                </svg>
            </div>
            <h1 className="mhs-name-main" style={minimized ? { fontSize: '1.8rem' } : {}}>MHS</h1>
        </div>
        {!minimized && <span className="mhs-tagline">Mathematics Honor Society</span>}
    </div>
)

export default Logo
