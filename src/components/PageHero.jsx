import React from 'react'
import { motion } from 'framer-motion'
import SectionBadge from './SectionBadge'

export default function PageHero({ badge, badgeIcon, title, description, children }) {
  return (
    <section className="relative pt-[140px] pb-[60px] md:pt-[180px] md:pb-[80px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            width: '700px',
            height: '700px',
            top: '-250px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center max-w-[700px] mx-auto">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-5"
            >
              <SectionBadge icon={badgeIcon}>{badge}</SectionBadge>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] mb-6 text-balance"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-[1.125rem] leading-[1.7] text-white/50 max-w-[580px] mx-auto text-balance"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}