import React, {useId} from 'react'

export function CircuitBackground() {
    const id = useId();
    const patternId = `circuit-pattern-${id}`;

    return (
        <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none -z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id={patternId} x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                        {/* Grid lines */}
                        <path d="M 300 0 L 0 0 0 300" fill="none" stroke="currentColor" strokeWidth="1"/>

                        {/* Horizontal connection lines */}
                        <line x1="0" y1="75" x2="90" y2="75" stroke="currentColor" strokeWidth="2"/>
                        <line x1="120" y1="75" x2="180" y2="75" stroke="currentColor" strokeWidth="2"/>
                        <line x1="210" y1="75" x2="300" y2="75" stroke="currentColor" strokeWidth="2"/>

                        <line x1="0" y1="150" x2="60" y2="150" stroke="currentColor" strokeWidth="2"/>
                        <line x1="90" y1="150" x2="210" y2="150" stroke="currentColor" strokeWidth="2"/>
                        <line x1="240" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="2"/>

                        <line x1="0" y1="225" x2="120" y2="225" stroke="currentColor" strokeWidth="2"/>
                        <line x1="150" y1="225" x2="240" y2="225" stroke="currentColor" strokeWidth="2"/>
                        <line x1="270" y1="225" x2="300" y2="225" stroke="currentColor" strokeWidth="2"/>

                        {/* Vertical connection lines */}
                        <line x1="75" y1="0" x2="75" y2="60" stroke="currentColor" strokeWidth="2"/>
                        <line x1="75" y1="90" x2="75" y2="150" stroke="currentColor" strokeWidth="2"/>
                        <line x1="75" y1="180" x2="75" y2="240" stroke="currentColor" strokeWidth="2"/>

                        <line x1="150" y1="0" x2="150" y2="120" stroke="currentColor" strokeWidth="2"/>
                        <line x1="150" y1="150" x2="150" y2="210" stroke="currentColor" strokeWidth="2"/>

                        <line x1="225" y1="30" x2="225" y2="90" stroke="currentColor" strokeWidth="2"/>
                        <line x1="225" y1="120" x2="225" y2="180" stroke="currentColor" strokeWidth="2"/>
                        <line x1="225" y1="210" x2="225" y2="270" stroke="currentColor" strokeWidth="2"/>

                        {/* Circuit nodes/connection points */}
                        <circle cx="75" cy="75" r="5" fill="currentColor"/>
                        <circle cx="150" cy="75" r="5" fill="currentColor"/>
                        <circle cx="225" cy="75" r="5" fill="currentColor"/>
                        <circle cx="75" cy="150" r="5" fill="currentColor"/>
                        <circle cx="150" cy="150" r="5" fill="currentColor"/>
                        <circle cx="225" cy="150" r="5" fill="currentColor"/>
                        <circle cx="75" cy="225" r="5" fill="currentColor"/>
                        <circle cx="150" cy="225" r="5" fill="currentColor"/>
                        <circle cx="225" cy="225" r="5" fill="currentColor"/>

                        {/* Microchip/IC rectangles */}
                        <rect x="90" y="65" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="90" y1="70" x2="85" y2="70" stroke="currentColor" strokeWidth="1"/>
                        <line x1="90" y1="75" x2="85" y2="75" stroke="currentColor" strokeWidth="1"/>
                        <line x1="90" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="1"/>
                        <line x1="120" y1="70" x2="125" y2="70" stroke="currentColor" strokeWidth="1"/>
                        <line x1="120" y1="75" x2="125" y2="75" stroke="currentColor" strokeWidth="1"/>
                        <line x1="120" y1="80" x2="125" y2="80" stroke="currentColor" strokeWidth="1"/>

                        <rect x="210" y="140" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="210" y1="145" x2="205" y2="145" stroke="currentColor" strokeWidth="1"/>
                        <line x1="210" y1="150" x2="205" y2="150" stroke="currentColor" strokeWidth="1"/>
                        <line x1="210" y1="155" x2="205" y2="155" stroke="currentColor" strokeWidth="1"/>
                        <line x1="240" y1="145" x2="245" y2="145" stroke="currentColor" strokeWidth="1"/>
                        <line x1="240" y1="150" x2="245" y2="150" stroke="currentColor" strokeWidth="1"/>
                        <line x1="240" y1="155" x2="245" y2="155" stroke="currentColor" strokeWidth="1"/>

                        <rect x="60" y="140" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="60" y1="145" x2="55" y2="145" stroke="currentColor" strokeWidth="1"/>
                        <line x1="60" y1="150" x2="55" y2="150" stroke="currentColor" strokeWidth="1"/>
                        <line x1="60" y1="155" x2="55" y2="155" stroke="currentColor" strokeWidth="1"/>
                        <line x1="90" y1="145" x2="95" y2="145" stroke="currentColor" strokeWidth="1"/>
                        <line x1="90" y1="150" x2="95" y2="150" stroke="currentColor" strokeWidth="1"/>
                        <line x1="90" y1="155" x2="95" y2="155" stroke="currentColor" strokeWidth="1"/>

                        {/* Resistor symbols */}
                        <path d="M 180 75 L 185 70 L 190 80 L 195 70 L 200 80 L 205 70 L 210 75" fill="none"
                              stroke="currentColor" strokeWidth="2"/>
                        <path d="M 150 180 L 150 185 L 155 190 L 145 195 L 155 200 L 145 205 L 150 210" fill="none"
                              stroke="currentColor" strokeWidth="2"/>

                        {/* Capacitor symbols */}
                        <line x1="120" y1="215" x2="120" y2="235" stroke="currentColor" strokeWidth="2"/>
                        <line x1="130" y1="215" x2="130" y2="235" stroke="currentColor" strokeWidth="2"/>

                        {/* Small connection dots */}
                        <circle cx="195" cy="75" r="3" fill="currentColor"/>
                        <circle cx="75" cy="180" r="3" fill="currentColor"/>
                        <circle cx="150" cy="210" r="3" fill="currentColor"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} className="text-gray-900"/>
            </svg>
        </div>
    );
}
