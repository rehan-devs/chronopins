import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import SectionBadge from './SectionBadge'
import AnimatedSection from './AnimatedSection'
import MapView from './MapView'

export default function MapSection() {
  return (
    <section id="explore" className="relative py-[40px] md:py-[80px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute"
          style={{
            width: '700px',
            height: '700px',
            top: '10%',
            right: '-250px',
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.04) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14 md:mb-16">
          <AnimatedSection>
            <div className="flex justify-center mb-5">
              <SectionBadge icon={Globe}>Live Map</SectionBadge>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-section-title-sm md:text-section-title font-bold gradient-text mb-5 text-balance">
              Explore the Living Archive
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body text-white/50 text-balance">
              Every glowing pin is a memory waiting to be discovered. Slide through time and watch the city reveal its hidden layers of history.
            </p>
          </AnimatedSection>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[960px] mx-auto relative"
        >
          {/* Glow */}
          <div 
            className="absolute -inset-8 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
              filter: 'blur(30px)',
            }}
          />
          <div className="relative shadow-glow">
            <MapView />
          </div>

          {/* Stats below map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10"
          >
            {[
              { value: '2.4M+', label: 'Memories Pinned' },
              { value: '190+', label: 'Cities Active' },
              { value: '847K', label: 'Community Members' },
              { value: '104', label: 'Years Covered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-body-sm text-white/35 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}