import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import MemberCard from '../components/MemberCard'
import StackedModal from '../components/StackedModal'

const Society = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    // ── Level 1 · Faculty ─────────────────────────────────────────────────────
    const faculty = {
        name: "Dr. I. Jayakaran Amalraj",
        role: "Faculty Advisor",
        dept: "Department of Mathematics, SSNCE",
        bio: "Dr. I. Jayakaran Amalraj is an Associate Professor in the Department of Mathematics at SSN College of Engineering with over 28 years of teaching experience. He is dedicated to helping students deeply understand mathematical concepts rather than simply complete coursework. As Faculty In-Charge of the Mathematics Honor Society (MHS), he actively supports student-led initiatives and fosters a culture of academic rigor, curiosity, and integrity.",
        photo: "/images-club_members/ijk-sir-img.jpeg",
        linkedin: null,
        scholar: "https://scholar.google.com/citations?user=Jz7fgBcAAAAJ&hl=en",
        email: "jayakarana@ssn.edu.in"
    }

    // ── Level 2 · President & Vice President ──────────────────────────────────
    const leads = [
        {
            name: "Vishwa Sivamurugan",
            role: "President",
            dept: "Biomedical Engineering",
            year: "2028",
            bio: "Vishwa is a Biomedical Engineering undergraduate at SSN College of Engineering and serves as President of the Mathematics Honor Society. He enjoys designing mathematical problems, building educational resources, exploring interdisciplinary research ideas, and mentoring younger students. He believes that learning should feel both challenging and deeply rewarding — driven not by pressure, but by genuine intellectual excitement.",
            photo: "/images-club_members/vishwa-image.jpeg",
            linkedin: "https://www.linkedin.com/in/vishwa-siva/",
            email: "vishwaaditya2410369@ssn.edu.in"
        },
        {
            name: "Aravindaa Krishnan",
            role: "Vice President",
            dept: "Biomedical Engineering",
            year: "2028",
            bio: "Aravindaa is a Biomedical Engineering undergraduate at SSN College of Engineering, where she serves as Vice President of the Mathematics Honor Society. Passionate about interdisciplinary innovation, she actively engages with IEEE Signal Processing Society (IEEE SPS). Her academic interests lie at the intersection of electronics, communication systems, and biology.",
            photo: "/images-club_members/aravind-image.jpeg",
            linkedin: "https://www.linkedin.com/in/aravindaa-krishnan-m-7a5b75309",
            email: "aravindaakrishnan2410946@ssn.edu.in"
        }
    ]

    // ── Level 3 · Core Team ───────────────────────────────────────────────────
    const level3 = [
        {
            name: "Yuva Sriram",
            role: "Secretary",
            dept: "Biomedical Engineering",
            year: "2028",
            bio: "Driven by a deep curiosity for scientific discovery, Yuva focuses on drug discovery and development, with a strong interest in nanotechnology and its role in nanomedicine for detecting and treating diseases. He is passionate about interdisciplinary innovation, connecting biology, chemistry, and engineering to create effective healthcare solutions that improve patient outcomes.",
            photo: "/images-club_members/yuva-image.jpeg",
            linkedin: "https://www.linkedin.com/in/yuva-sriram",
            email: "yuva2410379@ssn.edu.in"
        },
        {
            name: "P Nethraa",
            role: "Joint Secretary",
            dept: "Computer Science",
            year: "2028",
            bio: "Hey, this is Nethraa! My curiosity to learn and constantly challenge myself has been one of the biggest drivers of my life — whether I'm solving a complex math problem or pushing my limits on the basketball court.",
            photo: "/images-club_members/nethra-image.jpeg",
            linkedin: "https://www.linkedin.com/in/nethraa-p-4a1405334/",
            email: "nethraapradheep@gmail.com"
        },
        {
            name: "Balamuthukrishnan",
            role: "Web Dev Head",
            dept: "Information Technology",
            year: "2028",
            bio: "A passionate tech enthusiast with a strong interest in web development and a deep curiosity for all things related to computers and technology. Driven by an innate desire to build and implement projects, he finds genuine joy in turning ideas into successful outcomes. His reliability and sense of responsibility help strengthen and unify the team.",
            photo: "/images-club_members/bala-image.jpeg",
            linkedin: "https://www.linkedin.com/in/bala-muthu-krishnan",
            email: "balamuthukrishnan2412003@ssn.edu.in"
        },
        {
            name: "Oviya T S",
            role: "Editorial Head",
            dept: "Information Technology",
            year: "2028",
            bio: "Oviya T S is a published author passionate about education, policy-making, and writing. Her interests lie at the intersection of technology and society — understanding how thoughtful policy and ethical design can shape inclusive futures. As a writer, she uses her voice to reflect on contemporary issues and inspire meaningful progress.",
            photo: "/images-club_members/oviya-image.jpeg",
            linkedin: "https://www.linkedin.com/in/oviya-t-s-147b52329/",
            email: "oviya2410048@ssn.edu.in"
        }
    ]

    // ── Level 4 · Extended Team ───────────────────────────────────────────────
    const level4 = [
        {
            name: "Yogesh",
            role: "Treasurer",
            dept: "Biomedical Engineering",
            year: "2028",
            bio: "Yogesh is a Biomedical Engineering undergraduate at SSN College of Engineering and serves as Treasurer of the Mathematics Honor Society. Outside of his academic work, Yogesh enjoys cycling and trekking, and he loves visiting new places and exploring more people.",
            photo: "/images-club_members/yogesh-image.jpeg",
            linkedin: "https://www.linkedin.com/in/yogesh-vaduganathan-24a52a32a",
            email: "yogesh@ssn.edu.in"
        },
        {
            name: "Smrithi S",
            role: "Head of Public Relations",
            dept: "Biomedical Engineering",
            year: "2028",
            bio: "Smrithi S. is a Biomedical Engineering undergraduate with a keen interest in the intersection of healthcare, technology, and innovation. She has developed a strong foundation in biomedical instrumentation and physiology. Beyond academics, Smrithi has a deep passion for calligraphy — appreciating the precision, patience, and creativity it demands.",
            photo: "/images-club_members/smriti-image.jpeg",
            linkedin: "https://www.linkedin.com/in/smrithi-s-41968b389",
            email: "smrithi2410873@ssn.edu.in"
        },
        {
            name: "Boobesh",
            role: "Head of Design",
            dept: "Electrical & Electronics Engineering",
            year: "2028",
            bio: "Creative mind at the helm of MHS visual identity. Boobesh leads the design initiatives, crafting compelling visuals and maintaining the aesthetic coherence of all society materials, branding, and event collateral.",
            photo: "/images-club_members/boobesh-image.jpeg",
            linkedin: null,
            email: "boobesh2410192@ssn.edu.in"
        },
        {
            name: "Kishor V",
            role: "Web Developer",
            dept: "Information Technology",
            year: "2028",
            bio: "An enthusiastic and self-motivated Information Technology student with a strong practical orientation and a passion for applying theoretical concepts to real-world problems. He continuously seeks opportunities to enhance his technical skills, work on hands-on projects, and develop innovative solutions in the field of IT.",
            photo: "/images-club_members/kishor-image.png",
            linkedin: "https://www.linkedin.com/in/kishor-v-b7bb9532a/",
            email: "Kishorveeraragavan28@gmail.com"
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

                {/* ── Level 1 · Faculty Advisor ─────────────────────────── */}
                <div className="tree-node">
                    <MemberCard member={faculty} onClick={setSelectedMember} />
                    <div className="tree-line-v"></div>
                    <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>FACULTY ADVISOR</div>
                </div>

                {/* ── Level 2 · President & Vice President ─────────────── */}
                <div className="tree-node" style={{ width: '100%' }}>
                    <div className="tree-line-h" style={{ width: '500px', left: '50%', transform: 'translateX(-50%)' }}></div>
                    <div className="tree-row">
                        {leads.map((lead, i) => (
                            <div key={i} className="tree-node">
                                <div className="tree-line-v-top"></div>
                                <MemberCard member={lead} onClick={setSelectedMember} />
                                <div className="tree-line-v"></div>
                                <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>{lead.role.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Level 3 · Core Team ───────────────────────────────── */}
                <div className="tree-node" style={{ width: '100%' }}>
                    <div className="tree-line-h" style={{ width: '1050px', left: '50%', transform: 'translateX(-50%)' }}></div>
                    <div className="tree-row">
                        {level3.map((member, i) => (
                            <div key={i} className="tree-node">
                                <div className="tree-line-v-top"></div>
                                <MemberCard member={member} onClick={setSelectedMember} />
                                <div className="tree-line-v"></div>
                                <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>{member.role.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Level 4 · Extended Team ───────────────────────────── */}
                <div className="tree-node" style={{ width: '100%' }}>
                    <div className="tree-line-h" style={{ width: '1050px', left: '50%', transform: 'translateX(-50%)' }}></div>
                    <div className="tree-row">
                        {level4.map((member, i) => (
                            <div key={i} className="tree-node">
                                <div className="tree-line-v-top"></div>
                                <MemberCard member={member} onClick={setSelectedMember} />
                                <div style={{ position: 'absolute', bottom: '-25px', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '800' }}>{member.role.toUpperCase()}</div>
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
