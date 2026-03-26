import React, { useState, useCallback } from 'react'

const DECADES = [
  { year: 1920, label: "1920s" },
  { year: 1930, label: "1930s" },
  { year: 1940, label: "1940s" },
  { year: 1950, label: "1950s" },
  { year: 1960, label: "1960s" },
  { year: 1970, label: "1970s" },
  { year: 1980, label: "1980s" },
  { year: 1990, label: "1990s" },
  { year: 2000, label: "2000s" },
  { year: 2010, label: "2010s" },
  { year: 2020, label: "2020s" },
]

export default function TimeSlider({ onYearChange }) {
  const [value, setValue] = useState(60) // start roughly at 1980

  const handleChange = useCallback((e) => {
    const newVal = Number(e.target.value)
    setValue(newVal)

    // Map 0-100 to 1920-2024
    const year = Math.round(1920 + (newVal / 100) * (2024 - 1920))
    if (onYearChange) {
      onYearChange(year)
    }
  }, [onYearChange])

  const currentYear = Math.round(1920 + (value / 100) * (2024 - 1920))
  const currentDecade = Math.floor(currentYear / 10) * 10

  return (
    <div className="w-full px-5 py-4">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.6875rem] font-semibold text-white/25 uppercase tracking-[0.08em]">
          Timeline
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[0.75rem] text-white/40 font-medium">
            {currentYear}
          </span>
          <span
            className="text-[0.8125rem] font-bold px-2 py-0.5 rounded-md"
            style={{
              color: '#A78BFA',
              background: 'rgba(139, 92, 246, 0.1)',
            }}
          >
            {currentDecade}s
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mb-2">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-[6px] appearance-none rounded-full outline-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-[18px]
            [&::-webkit-slider-thumb]:h-[18px]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(139,92,246,0.5),0_0_24px_rgba(139,92,246,0.25)]
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:hover:scale-[1.25]
            [&::-webkit-slider-thumb]:relative
            [&::-webkit-slider-thumb]:z-10
            [&::-moz-range-thumb]:w-[18px]
            [&::-moz-range-thumb]:h-[18px]
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-none
            [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(139,92,246,0.5)]
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-track]:rounded-full
            [&::-moz-range-track]:h-[6px]
          "
          style={{
            background: `linear-gradient(to right, #6D28D9 0%, #8B5CF6 ${value * 0.8}%, #A78BFA ${value}%, rgba(255,255,255,0.06) ${value}%, rgba(255,255,255,0.06) 100%)`
          }}
        />
      </div>

      {/* Decade markers */}
      <div className="flex justify-between px-[2px]">
        {['1920', '1940', '1960', '1980', '2000', '2024'].map((year) => {
          const yearNum = parseInt(year)
          const isActive = currentYear >= yearNum - 5 && currentYear <= yearNum + 5
          return (
            <span
              key={year}
              className={`text-[0.625rem] font-medium transition-all duration-300 ${
                isActive ? 'text-[#A78BFA] scale-110' : 'text-white/15'
              }`}
            >
              {year}
            </span>
          )
        })}
      </div>
    </div>
  )
}