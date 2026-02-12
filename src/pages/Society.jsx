import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import MemberCard from '../components/MemberCard'
import StackedModal from '../components/StackedModal'

const Society = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const faculty = {
        name: "Dr. Arthur Cayley",
        role: "Faculty Chair",
        dept: "Pure Mathematics",
        year: "Faculty Advisor",
        bio: "A pioneer in algebraic structures, Dr. Cayley specializes in Group Theory and Matrix Algebra. He has authored multiple foundational texts and oversees the academic rigors of the MHS.",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        github: "https://github.com", linkedin: "https://linkedin.com", email: "cayley@mhs.edu"
    }

    const leads = [
        {
            name: "Ada Lovelace",
            role: "Society President",
            dept: "Applied Maths & Comp Sci",
            year: "2026",
            bio: "An algorithm specialist focused on the intersections of discrete mathematics and computational theory. Ada leads our strategic partnerships and student research workshops.",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "ada@mhs.edu"
        },
        {
            name: "Carl Friedrich Gauss",
            role: "Vice President",
            dept: "Number Theory",
            year: "2026",
            bio: "Prince of Mathematics. Carl's work focus on prime distribution and magnetic constants. He manages the society's internal academic competitions and tutoring programs.",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "gauss@mhs.edu"
        }
    ]

    const members = [
        {
            name: "Leonhard Euler",
            role: "Secretary",
            dept: "Mathematical Analysis",
            year: "2027",
            bio: "Dedicated to bridge theory and complex topography. Leonhard handles all society documentation and registry archives.",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "euler@mhs.edu"
        },
        {
            name: "Sophie Germain",
            role: "Research Lead",
            dept: "Elasticity Theory",
            year: "2027",
            bio: "Investigating the patterns of elastic surfaces and Fermat's Last Theorem applications. Sophie coordinates our monthly scholarly blog posts.",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "sophie@mhs.edu"
        },
        {
            name: "Bernhard Riemann",
            role: "Treasurer",
            dept: "Differential Geometry",
            year: "2027",
            bio: "Exploring manifolds and non-Euclidean spaces. Bernhard manages the society's grants and library budget.",
            photo: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "riemann@mhs.edu"
        },
        {
            name: "Hypatia",
            role: "Academic Mentor",
            dept: "Neoplatonism & Astronomy",
            year: "2027",
            bio: "Specializing in conic sections and astrolabe construction. Hypatia mentors junior members in theoretical synthesis.",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "hypatia@mhs.edu"
        },
        {
            name: "Blaise Pascal",
            role: "Technical Lead",
            dept: "Probability Theory",
            year: "2027",
            bio: "Developing computational fluids and probability frameworks. Blaise maintains the society's digital asset library.",
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "pascal@mhs.edu"
        },
        {
            name: "Isaac Newton",
            role: "Research Associate",
            dept: "Classical Mechanics",
            year: "2028",
            bio: "Working on fluxions and gravitational constants. Isaac contributes to our monthly physics-math integration papers.",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
            github: "https://github.com", linkedin: "https://linkedin.com", email: "newton@mhs.edu"
        }
    ]



    return (
        <div className="container" style={{ padding: '100px 0' }}>
            <header style={{
                textAlign: 'center',
                marginBottom: '8rem',
                display: 'block',
                background: 'none',
                backdropFilter: 'none',
                position: 'relative',
                border: 'none'
            }}>
                <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <div style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: '900', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Hierarchy of Excellence</div>
                    <h2 style={{ fontSize: '4.5rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '-2px' }}>Society Governance</h2>
                </Motion.div>
            </header>

            <div className="tree-container">
                {/* Faculty Level */}
                <div className="tree-node">
                    <MemberCard member={faculty} onClick={setSelectedMember} />
                    <div className="tree-line-v"></div>
                    <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>FACULTY ADVISOR</div>
                </div>

                {/* Leads Level */}
                <div className="tree-node" style={{ width: '100%' }}>
                    <div className="tree-line-h" style={{ width: '500px', left: '50%', transform: 'translateX(-50%)' }}></div>
                    <div className="tree-row">
                        {leads.map((lead, i) => (
                            <div key={i} className="tree-node">
                                <div className="tree-line-v-top"></div>
                                <MemberCard member={lead} onClick={setSelectedMember} />
                                <div className="tree-line-v"></div>
                                <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>{lead.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* General Members Level */}
                <div className="tree-node" style={{ width: '100%' }}>
                    <div className="tree-line-h" style={{ width: '1100px', left: '50%', transform: 'translateX(-50%)' }}></div>
                    <div className="tree-row">
                        {members.map((member, i) => (
                            <div key={i} className="tree-node">
                                <div className="tree-line-v-top"></div>
                                <MemberCard member={member} onClick={setSelectedMember} />
                                <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <StackedModal member={selectedMember} onClose={() => setSelectedMember(null)} />
                )}
            </AnimatePresence>
        </div>
    )
}

export default Society
