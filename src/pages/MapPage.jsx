import React from 'react'
import { motion } from 'framer-motion'
import { Map } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import MapView from '../components/MapView'
import InnerPageCTA from '../components/InnerPageCTA'

export default function MapPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Map"
        badgeIcon={Map}
        title="The Interactive Memory Map"
        description="Every glowing pin represents a real memory from a real person. Zoom in, explore neighborhoods, and discover the hidden histories beneath familiar streets."
      />

      <section className="pb-[80px] md:pb-[140px]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[1000px] mx-auto relative"
          >
            <div className="absolute -inset-8 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
                filter: 'blur(30px)',
              }}
            />
            <div className="relative shadow-glow rounded-[24px] overflow-hidden">
              <div className="bg-[#0c0c0f] border border-white/[0.06] border-b-0 rounded-t-[24px] px-4 py-3 flex items-center gap-2">
  <div className="flex gap-[6px]">
    <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]" />
    <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
    <div className="w-[10px] h-[10px] rounded-full bg-[#27CA40]" />
  </div>
  <div className="flex-1 flex justify-center">
    <div className="bg-white/[0.04] rounded-md px-4 py-[5px] text-[0.6875rem] text-white/30 font-medium max-w-[280px] w-full text-center">
      chronopins.app/map
    </div>
  </div>
  <div className="w-[54px]" />
</div>
              <MapView />
            </div>
          </motion.div>

          {/* Map features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 max-w-[900px] mx-auto"
          >
            {[
              { title: 'Search Anywhere', desc: 'Find any address, landmark, or neighborhood on Earth.' },
              { title: 'Filter by Era', desc: 'Use the timeline slider to focus on specific decades.' },
              { title: 'Pin Clusters', desc: 'Zoom out to see memory density across entire cities.' },
            ].map((item, i) => (
              <div key={i} className="card-base p-6 text-center">
                <h3 className="text-[1rem] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[0.8125rem] text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <InnerPageCTA />
    </PageTransition>
  )
}