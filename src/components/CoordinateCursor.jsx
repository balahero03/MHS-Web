import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'

const CoordinateCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isTouch, setIsTouch] = useState(true)

    useEffect(() => {
        // Only show on pointer:fine devices (mouse), not touch screens
        setIsTouch(window.matchMedia('(pointer: coarse)').matches)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.member-card-wrapper-mini')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseEnter)
        }
    }, [])

    if (isTouch) return null


    return (
        <div className="coordinate-cursor-container" style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
            {/* Crosshair Vertical */}
            <Motion.div
                className="cursor-crosshair cursor-v"
                animate={{ x: mousePos.x }}
                style={{ position: 'fixed', top: 0, width: '1px', height: '100%', background: 'var(--secondary)', opacity: 0.1 }}
            />
            {/* Crosshair Horizontal */}
            <Motion.div
                className="cursor-crosshair cursor-h"
                animate={{ y: mousePos.y }}
                style={{ position: 'fixed', left: 0, height: '1px', width: '100%', background: 'var(--secondary)', opacity: 0.1 }}
            />

            {/* Cursor Point */}
            <Motion.div
                className="cursor-point"
                animate={{ x: mousePos.x - 4, y: mousePos.y - 4, scale: isHovering ? 2 : 1 }}
                style={{ position: 'fixed', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', boxShadow: '0 0 15px var(--secondary)' }}
            />

            {/* Coordinates Display */}
            <Motion.div
                className="cursor-coords"
                animate={{ x: mousePos.x + 20, y: mousePos.y + 20 }}
                style={{ position: 'fixed', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', background: 'rgba(255,255,255,0.8)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border)', backdropFilter: 'blur(5px)' }}
            >
                (x:{mousePos.x.toString().padStart(4, '0')}, y:{mousePos.y.toString().padStart(4, '0')})
            </Motion.div>
        </div>
    )
}

export default CoordinateCursor
