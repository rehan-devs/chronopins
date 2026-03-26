import React, { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TimeSlider from './TimeSlider'

const ALL_PINS = [
  { id: 1, x: 22, y: 28, label: 'Jazz Club — The Blue Room', category: '🎵 Music Venue', era: [1920, 1960], color: '#A78BFA' },
  { id: 2, x: 68, y: 18, label: 'Harbor Fishmarket', category: '🐟 Local Market', era: [1920, 1990], color: '#60A5FA' },
  { id: 3, x: 45, y: 52, label: 'Grand Central Hotel', category: '🏨 Historic Hotel', era: [1920, 2024], color: '#F472B6' },
  { id: 4, x: 12, y: 62, label: 'Woolworth Department Store', category: '🏬 Retail', era: [1930, 1980], color: '#34D399' },
  { id: 5, x: 78, y: 45, label: "Rosie's Diner", category: '🍽️ Lost Restaurant', era: [1940, 1995], color: '#FBBF24' },
  { id: 6, x: 55, y: 72, label: 'Elm Street Schoolhouse', category: '🏫 School', era: [1920, 2010], color: '#A78BFA' },
  { id: 7, x: 33, y: 38, label: 'Victory Theater', category: '🎭 Cinema & Theater', era: [1935, 1988], color: '#F472B6' },
  { id: 8, x: 82, y: 70, label: 'Old Rail Depot', category: '🚂 Train Station', era: [1920, 1975], color: '#60A5FA' },
  { id: 9, x: 40, y: 15, label: "St. Anne's Bell Tower", category: '⛪ Landmark', era: [1920, 2024], color: '#34D399' },
  { id: 10, x: 60, y: 40, label: 'City Public Library', category: '📚 Library', era: [1940, 2024], color: '#A78BFA' },
  { id: 11, x: 18, y: 80, label: 'Riverside Swimming Hole', category: '🏊 Recreation', era: [1920, 1970], color: '#FBBF24' },
  { id: 12, x: 75, y: 30, label: "Shipwright's Workshop", category: '🔨 Workshop', era: [1920, 1960], color: '#60A5FA' },
  { id: 13, x: 50, y: 85, label: 'Memorial Park Bandstand', category: '🎶 Public Space', era: [1945, 2024], color: '#34D399' },
  { id: 14, x: 88, y: 55, label: 'Neon Bowl-O-Rama', category: '🎳 Entertainment', era: [1955, 2005], color: '#F472B6' },
  { id: 15, x: 28, y: 48, label: "Kowalski's Bakery", category: '🥐 Bakery', era: [1950, 2015], color: '#FBBF24' },
  { id: 16, x: 65, y: 60, label: 'Community Radio WXYZ', category: '📻 Radio Station', era: [1960, 2024], color: '#A78BFA' },
  { id: 17, x: 38, y: 68, label: 'The Vinyl Vault Records', category: '🎸 Record Shop', era: [1965, 2010], color: '#F472B6' },
  { id: 18, x: 52, y: 25, label: 'Chinatown Gate', category: '🏮 Cultural Landmark', era: [1920, 2024], color: '#FBBF24' },
  { id: 19, x: 85, y: 82, label: 'Skate Park under the Bridge', category: '🛹 Recreation', era: [1985, 2024], color: '#60A5FA' },
  { id: 20, x: 15, y: 35, label: 'Prohibition Speakeasy', category: '🥃 Hidden Bar', era: [1920, 1935], color: '#A78BFA' },
  { id: 21, x: 70, y: 78, label: 'Tech Startup Hub', category: '💻 Co-working Space', era: [2010, 2024], color: '#34D399' },
  { id: 22, x: 42, y: 42, label: 'War Memorial Statue', category: '🗽 Monument', era: [1945, 2024], color: '#60A5FA' },
  { id: 23, x: 58, y: 55, label: 'Underground Jazz Lounge', category: '🎷 Nightlife', era: [1958, 1990], color: '#F472B6' },
  { id: 24, x: 30, y: 75, label: 'Public Mural Wall', category: '🎨 Street Art', era: [1990, 2024], color: '#FBBF24' },
  { id: 25, x: 48, y: 35, label: 'Abandoned Factory Lofts', category: '🏭 Industrial', era: [1930, 1985], color: '#A78BFA' },
]

function GlowingPin({ pin, isVisible, hoveredPin, setHoveredPin }) {
  const isHovered = hoveredPin === pin.id

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: Math.random() * 0.3 }}
          className="absolute cursor-pointer z-10"
          style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: 'translate(-50%, -50%)' }}
          onMouseEnter={() => setHoveredPin(pin.id)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none"
                style={{ zIndex: 50 }}
              >
                <div
                  className="relative whitespace-nowrap rounded-xl px-4 py-3 shadow-lg"
                  style={{
                    background: 'rgba(10, 10, 15, 0.95)',
                    border: `1px solid ${pin.color}40`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 0 30px ${pin.color}15, 0 8px 32px rgba(0,0,0,0.5)`,
                  }}
                >
                  <div className="text-[0.6875rem] font-semibold mb-1 tracking-wide" style={{ color: pin.color }}>{pin.category}</div>
                  <div className="text-[0.8125rem] font-medium text-white/90 leading-tight">{pin.label}</div>
                  <div className="text-[0.6875rem] text-white/35 mt-1">{pin.era[0]}s — {pin.era[1] >= 2024 ? 'Present' : `${pin.era[1]}s`}</div>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-3 h-3 rotate-45"
                    style={{ background: 'rgba(10, 10, 15, 0.95)', borderRight: `1px solid ${pin.color}40`, borderBottom: `1px solid ${pin.color}40` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pin container - stacked vertically */}
          <div className="flex flex-col items-center">
            {/* The dot */}
            <div
              className="rounded-full transition-all duration-300 relative z-10"
              style={{
                width: isHovered ? 14 : 10,
                height: isHovered ? 14 : 10,
                background: `linear-gradient(135deg, ${pin.color}, ${pin.color}bb)`,
                boxShadow: `0 0 8px ${pin.color}60`,
              }}
            />
            
            {/* Glow BELOW the dot */}
            <motion.div
              className="rounded-full"
              style={{
                width: 16,
                height: 6,
                marginTop: 2,
                background: `${pin.color}`,
                filter: 'blur(4px)',
                opacity: 0.5,
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function MapView() {
  const [currentYear, setCurrentYear] = useState(1980)
  const [hoveredPin, setHoveredPin] = useState(null)

  const handleYearChange = useCallback((year) => {
    setCurrentYear(year)
  }, [])

  const visiblePinIds = useMemo(() => {
    const visible = new Set()
    ALL_PINS.forEach((pin) => {
      if (currentYear >= pin.era[0] && currentYear <= pin.era[1]) {
        visible.add(pin.id)
      }
    })
    return visible
  }, [currentYear])

  const visibleCount = visiblePinIds.size

  return (
    <div className="relative w-full rounded-[16px] overflow-hidden border border-white/[0.06] bg-[#080810]">
      <div className="relative w-full aspect-[16/9] min-h-[300px]">
        {/* Background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
          </svg>

          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 50 Q 25 45, 50 50 T 100 48" stroke="white" strokeWidth="0.4" fill="none"/>
            <path d="M 50 0 Q 48 25, 50 50 T 52 100" stroke="white" strokeWidth="0.4" fill="none"/>
            <path d="M 0 30 Q 30 28, 60 35 T 100 30" stroke="white" strokeWidth="0.25" fill="none"/>
            <path d="M 20 0 Q 22 30, 20 50 T 25 100" stroke="white" strokeWidth="0.25" fill="none"/>
            <path d="M 70 0 Q 72 20, 75 40 T 72 100" stroke="white" strokeWidth="0.25" fill="none"/>
            <path d="M 0 75 Q 30 72, 50 78 T 100 72" stroke="white" strokeWidth="0.25" fill="none"/>
          </svg>

          <div className="absolute" style={{ left: '0%', bottom: '0%', width: '35%', height: '25%', background: 'radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.06) 0%, transparent 70%)' }} />
          <div className="absolute rounded-full" style={{ left: '58%', top: '62%', width: '18%', height: '22%', background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.04) 0%, transparent 70%)' }} />
        </div>

        {/* Pins */}
        {ALL_PINS.map((pin) => (
          <GlowingPin
            key={pin.id}
            pin={pin}
            isVisible={visiblePinIds.has(pin.id)}
            hoveredPin={hoveredPin}
            setHoveredPin={setHoveredPin}
          />
        ))}

        {/* UI overlays */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-black/60 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2">
            <span className="text-[0.6875rem] text-white/50 font-medium">📍 Brooklyn, NY</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-1 z-20">
          <button className="w-8 h-8 bg-black/60 backdrop-blur-md border border-white/[0.08] rounded-lg flex items-center justify-center text-white/40 hover:text-white/70 transition-all cursor-pointer">+</button>
          <button className="w-8 h-8 bg-black/60 backdrop-blur-md border border-white/[0.08] rounded-lg flex items-center justify-center text-white/40 hover:text-white/70 transition-all cursor-pointer">−</button>
        </div>

        <div className="absolute bottom-4 right-4 z-20">
          <div className="bg-black/60 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2">
            <span className="text-[0.6875rem] text-white/50 font-medium">
              <motion.span key={visibleCount} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[#A78BFA] font-bold">{visibleCount}</motion.span> memories visible
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-black/60 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2">
            <motion.span key={currentYear} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[0.6875rem] font-bold text-white/70">
              📅 {Math.floor(currentYear / 10) * 10}s
            </motion.span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-black/40 backdrop-blur-md">
        <TimeSlider onYearChange={handleYearChange} />
      </div>
    </div>
  )
}