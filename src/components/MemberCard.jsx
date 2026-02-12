import React from 'react'
import { motion as Motion } from 'framer-motion'

const MemberCard = ({ member, onClick }) => (
    <Motion.div
        className="member-card-wrapper-mini"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(member)}
        layoutId={`member-${member.name}`}
    >
        <div className="member-card-mini">
            <div className="card-math-bg">
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="var(--border)" strokeWidth="0.5" fill="none" opacity="0.3" />
                    <circle cx="50" cy="50" r="30" stroke="var(--border)" strokeWidth="0.5" fill="none" opacity="0.3" />
                    <circle cx="50" cy="50" r="15" stroke="var(--border)" strokeWidth="0.5" fill="none" opacity="0.3" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="var(--border)" strokeWidth="0.5" opacity="0.3" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="var(--border)" strokeWidth="0.5" opacity="0.3" />
                </svg>
            </div>
            <div className="member-photo-mini-container">
                <img src={member.photo} alt={member.name} className="member-photo-mini" />
                <div className="member-status-node" title="Verified Scholar"></div>
                <div className="card-logic-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3h18v18H3z M9 9l6 6 M15 9l-6 6" />
                    </svg>
                </div>
            </div>
            <div className="member-info-mini">
                <h4 className="member-name-mini">{member.name}</h4>
                <div className="member-role-mini">{member.role}</div>
            </div>
        </div>
    </Motion.div>
)

export default MemberCard
