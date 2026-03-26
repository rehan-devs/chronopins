import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Compass } from 'lucide-react'
import MapView from './MapView'

export default function Hero() {
  return (
    <section className="relative pt-[140px] pb-[40px] md:pt-[180px] md:pb-[80px] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            top: '-300px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            bottom: '0',
            right: '-100px',
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.05) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center mb-6"
          >
            <div className="section-badge">
              <MapPin size={12} strokeWidth={2.5} />
              Drop a pin. Share a memory. Unlock the past.
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[2.25rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-[-0.03em] mb-6 text-balance"
          >
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Every Place Has a Story.{' '}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 50%, #6D28D9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Every Story Has a Time.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-[1.125rem] leading-[1.7] text-white/50 max-w-[640px] mx-auto mb-10 text-balance"
          >
            ChronoPins is a living, breathing time capsule for your city. Drop memory pins on an interactive map, explore decades of hidden stories, and listen to the sounds of places that no longer exist.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button className="btn-primary">
              <span className="flex items-center gap-2">
                <Compass size={18} strokeWidth={2.5} />
                Explore the Map
              </span>
            </button>
            <button className="btn-secondary">
              <span className="flex items-center gap-2">
                <MapPin size={18} strokeWidth={2.5} />
                Drop a Memory
              </span>
            </button>
          </motion.div>
        </div>

        {/* Hero Visual - Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-[960px] mx-auto"
        >
          {/* Glow behind the map */}
          <div
            className="absolute -inset-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative rounded-[24px] overflow-hidden"
            style={{
              boxShadow: '0 0 120px rgba(139, 92, 246, 0.15)',
            }}
          >
            {/* Browser chrome */}
            <div className="bg-[#0c0c0f] border border-white/[0.06] border-b-0 rounded-t-[24px] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.04] rounded-md px-4 py-[5px] text-[0.6875rem] text-white/30 font-medium max-w-[280px] w-full text-center">
                  chronopins.app/explore
                </div>
              </div>
              <div className="w-[54px]" />
            </div>

            <MapView />
          </div>

          {/* Instruction hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-center text-[0.75rem] text-white/25 mt-4 font-medium"
          >
            ↔ Drag the timeline to see pins appear and disappear across eras • Hover a pin to see its story
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}