import React from 'react'

const Logo = ({ minimized = false }) => (
    <div className="mhs-branding">
        <div className="mhs-id-top" style={minimized ? { gap: '8px' } : {}}>
            <div className="mhs-tri-logo" style={minimized ? { width: '30px', height: '25px' } : {}}>
                {/* Exact paths from user's SVG file (public/Copy of Untitled drawing.svg) */}
                <svg
                    viewBox="0 0 720 720"
                    fill="none"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Face 1: left-face */}
                    <path
                        fill="#275cef"
                        fillOpacity="0.1824"
                        fillRule="evenodd"
                        d="m153.69675 505.6453l349.64276 -335.25095l10.014496 324.18604z"
                    />
                    <path
                        stroke="#1155cc"
                        strokeWidth="16"
                        strokeLinejoin="round"
                        strokeLinecap="butt"
                        fillRule="evenodd"
                        d="m153.69675 505.6453l349.64276 -335.25095l10.014496 324.18604z"
                    />

                    {/* Face 2: bottom-face */}
                    <path
                        fill="#275cef"
                        fillOpacity="0.1824"
                        fillRule="evenodd"
                        d="m154.26152 506.21918l456.85858 148.7066l-97.394226 -160.117z"
                    />
                    <path
                        stroke="#1155cc"
                        strokeWidth="16"
                        strokeLinejoin="round"
                        strokeLinecap="butt"
                        fillRule="evenodd"
                        d="m154.26152 506.21918l456.85858 148.7066l-97.394226 -160.117z"
                    />

                    {/* Face 3: right-face */}
                    <path
                        fill="#275cef"
                        fillOpacity="0.1824"
                        fillRule="evenodd"
                        d="m504.20184 170.54588l9.255798 323.29608l97.86395 160.7847z"
                    />
                    <path
                        stroke="#1155cc"
                        strokeWidth="16"
                        strokeLinejoin="round"
                        strokeLinecap="butt"
                        fillRule="evenodd"
                        d="m504.20184 170.54588l9.255798 323.29608l97.86395 160.7847z"
                    />
                </svg>
            </div>
            <h1 className="mhs-name-main" style={minimized ? { fontSize: '1.8rem' } : {}}>MHS</h1>
        </div>
        {!minimized && <span className="mhs-tagline">Mathematics Honor Society</span>}
    </div>
)

export default Logo
