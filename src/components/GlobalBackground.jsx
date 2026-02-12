import React from 'react'

const GlobalBackground = () => (
    <div className="bg-canvas">
        {/* Dense background elements from version 1 + enhancements */}

        {/* Large animated polygons with blurs */}
        <div className="bg-shape" style={{ top: '5%', left: '5%', background: 'var(--p-blue)', width: '400px', height: '360px' }}></div>
        <div className="bg-shape" style={{ top: '60%', right: '8%', background: 'var(--p-purple)', width: '380px', height: '320px', clipPath: 'polygon(30% 0%, 100% 30%, 0% 100%)' }}></div>
        <div className="bg-shape" style={{ bottom: '5%', left: '10%', background: 'var(--p-orange)', width: '300px', height: '280px', opacity: 0.1 }}></div>

        {/* Floating Math Symbols */}
        <div className="bg-symbol col-green sym-lg" style={{ top: '15%', right: '20%' }}>∫ f(x) dx</div>
        <div className="bg-symbol col-purple sym-md" style={{ bottom: '25%', left: '12%' }}>
            <span style={{ fontSize: '5rem' }}>∑</span>
            <sub style={{ fontSize: '1rem', verticalAlign: 'bottom', marginLeft: '-25px' }}>x=1</sub>
            <sup style={{ fontSize: '1.2rem', marginLeft: '-22px' }}>∞</sup>
        </div>
        <div className="bg-symbol col-orange sym-lg" style={{ top: '40%', right: '8%', transform: 'rotate(15deg)' }}>
            <span style={{ fontSize: '1rem', fontStyle: 'normal' }}>Lt.</span> <br />
            <span style={{ fontSize: '0.8rem', verticalAlign: 'super' }}>t→0</span>
            <span style={{ marginLeft: '10px' }}>e<sup>t</sup></span>
        </div>
        <div className="bg-symbol col-blue sym-md" style={{ top: '55%', left: '18%', transform: 'rotate(-10deg)' }}>e<sup>-λ</sup> λ<sup>x</sup> / x!</div>

        {/* Small scattered ornaments */}
        <div className="bg-symbol col-green sym-sm" style={{ top: '85%', left: '35%' }}>dy/dx</div>
        <div className="bg-symbol col-purple sym-sm" style={{ top: '8%', left: '45%' }}>π ≈ 3.14159</div>
        <div className="bg-symbol col-blue sym-sm" style={{ bottom: '10%', right: '35%' }}>∇ × F</div>
        <div className="bg-symbol col-orange sym-sm" style={{ top: '30%', left: '3%', opacity: 0.2 }}>lim Δx→0</div>
        <div className="bg-symbol col-blue sym-sm" style={{ top: '70%', left: '5%' }}>A = πr²</div>
        <div className="bg-symbol col-green sym-sm" style={{ bottom: '40%', right: '5%' }}>E = mc²</div>

        {/* Vertical and Horizontal Axis Lines like a Graph */}
        <div style={{ position: 'fixed', top: '50%', left: 0, width: '100%', height: '1px', background: 'rgba(226, 232, 240, 0.5)', zIndex: -1 }}></div>
        <div style={{ position: 'fixed', left: '50%', top: 0, width: '1px', height: '100%', background: 'rgba(226, 232, 240, 0.5)', zIndex: -1 }}></div>
    </div>
)

export default GlobalBackground
