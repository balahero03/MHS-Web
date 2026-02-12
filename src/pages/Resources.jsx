import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FileText, ExternalLink, Download, Search } from 'lucide-react'

const Resources = () => {
    const rs = [
        { n: "Latex Drafting Suite", type: "G Drive", id: "D-001", size: "1.2 MB" },
        { n: "Statistical Analysis Workbook", type: "G Drive", id: "D-002", size: "4.5 MB" },
        { n: "Non-Linear Equations Archive", type: "Archive", id: "A-045", size: "128 MB" },
        { n: "Matrix Theory Handouts", type: "PDF", id: "P-102", size: "850 KB" },
        { n: "Differential Forms Reference", type: "E-Book", id: "B-009", size: "12 MB" }
    ]
    return (
        <div className="container" style={{ padding: '100px 0' }}>
            <header style={{ textAlign: 'center', marginBottom: '6rem', display: 'block', background: 'none', border: 'none', height: 'auto' }}>
                <h2 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '900' }}>The Library</h2>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>A curated collection of resources for mathematical research.</p>

                <div style={{
                    maxWidth: '500px',
                    margin: '3rem auto 0',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="Search index..."
                        style={{
                            width: '100%',
                            padding: '18px 25px 18px 55px',
                            borderRadius: '20px',
                            border: '1px solid var(--border)',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                        }}
                    />
                    <Search style={{ position: 'absolute', left: '20px', color: 'var(--text-dim)' }} size={20} />
                </div>
            </header>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {rs.map((r, i) => (
                    <Motion.div
                        key={i}
                        whileHover={{ x: 15, borderColor: 'var(--secondary)', background: 'white' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="content-card"
                        style={{ padding: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '25px', borderRadius: '24px' }}
                    >
                        <div style={{
                            background: 'var(--bg-soft)',
                            padding: '20px',
                            borderRadius: '20px',
                            color: 'var(--secondary)',
                            border: '1px solid var(--border)'
                        }}>
                            <FileText size={32} />
                        </div>

                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '4px', fontWeight: '800' }}>{r.n}</h4>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', opacity: 0.8 }}>IDX: {r.id}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '800' }}>{r.type}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{r.size}</span>
                            </div>
                        </div>

                        <button style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-dim)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease'
                        }} className="resource-action">
                            <Download size={20} />
                        </button>
                        <ExternalLink size={20} color="var(--border)" />
                    </Motion.div>
                ))}
            </div>
        </div>
    )
}

export default Resources
