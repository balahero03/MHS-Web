import React from 'react'
import { motion as Motion } from 'framer-motion'
import { Github, Linkedin, Mail, X, Scale, Hash, Compass } from 'lucide-react'

const StackedModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <Motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <Motion.div
                className="dossier-card"
                layoutId={`member-${member.name}`}
                initial={{ y: 50, scale: 0.9, opacity: 0, rotateX: 20 }}
                animate={{ y: 0, scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ y: 50, scale: 0.9, opacity: 0, rotateX: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Mathematical Geometry Background */}
                <div className="dossier-geometry">
                    <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
                        <circle cx="200" cy="150" r="120" stroke="var(--secondary)" strokeWidth="0.5" fill="none" opacity="0.1" />
                        <path d="M50 300 Q200 100 350 300" stroke="var(--accent)" strokeWidth="0.5" fill="none" opacity="0.1" />
                        <line x1="0" y1="150" x2="400" y2="150" stroke="var(--border)" strokeWidth="0.5" opacity="0.1" />
                        <line x1="200" y1="0" x2="200" y2="600" stroke="var(--border)" strokeWidth="0.5" opacity="0.1" />
                    </svg>
                </div>

                <button className="dossier-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="dossier-layout">
                    {/* Sidebar / Left Column */}
                    <aside className="dossier-sidebar">
                        <div className="dossier-photo-frame">
                            <img src={member.photo} alt={member.name} className="dossier-photo" />
                            <div className="frame-corner corner-tl"></div>
                            <div className="frame-corner corner-tr"></div>
                            <div className="frame-corner corner-bl"></div>
                            <div className="frame-corner corner-br"></div>
                        </div>

                        <div className="dossier-meta">
                            <div className="meta-item">
                                <Scale size={14} className="meta-icon" />
                                <span>{member.role}</span>
                            </div>
                            <div className="meta-item">
                                <Hash size={14} className="meta-icon" />
                                <span>{member.year}</span>
                            </div>
                        </div>

                        <div className="dossier-socials">
                            <a href={member.github} className="social-node"><Github size={20} /></a>
                            <a href={member.linkedin} className="social-node"><Linkedin size={20} /></a>
                            <a href={`mailto:${member.email}`} className="social-node"><Mail size={20} /></a>
                        </div>
                    </aside>

                    {/* Main Content / Right Column */}
                    <section className="dossier-content">
                        <div className="dossier-header">
                            <h2 className="dossier-name">{member.name}</h2>
                            <div className="dossier-dept-badge">
                                <Compass size={14} style={{ marginRight: '8px' }} />
                                {member.dept}
                            </div>
                        </div>

                        <div className="dossier-body">
                            <div className="dossier-section">
                                <h4 className="section-label">Proposition</h4>
                                <p className="section-text">{member.bio}</p>
                            </div>

                            <div className="dossier-qed">
                                <div className="qed-line"></div>
                                <span className="qed-text">Q.E.D.</span>
                            </div>
                        </div>
                    </section>
                </div>
            </Motion.div>
        </Motion.div>
    )
}

export default StackedModal
