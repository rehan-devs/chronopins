import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Layers, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import { staggerContainer, fadeInUp } from '../utils/animations'

const neighborhoods = [
  { name: 'Williamsburg', city: 'Brooklyn, NY', pins: 4200, layers: 12, topLayer: 'Lost Music Venues', color: '#A78BFA' },
  { name: 'Shibuya', city: 'Tokyo, Japan', pins: 3800, layers: 9, topLayer: 'Arcade History', color: '#F472B6' },
  { name: 'Kreuzberg', city: 'Berlin, Germany', pins: 2900, layers: 11, topLayer: 'Wall Memories', color: '#60A5FA' },
  { name: 'La Condesa', city: 'Mexico City', pins: 2100, layers: 7, topLayer: 'Earthquake Stories', color: '#34D399' },
  { name: 'Fitzroy', city: 'Melbourne, Australia', pins: 1800, layers: 8, topLayer: 'Street Art Timeline', color: '#FBBF24' },
  { name: 'Trastevere', city: 'Rome, Italy', pins: 3100, layers: 10, topLayer: 'Family Restaurants', color: '#A78BFA' },
  { name: 'Le Marais', city: 'Paris, France', pins: 2600, layers: 14, topLayer: 'Hidden Courtyards', color: '#F472B6' },
  { name: 'Hongdae', city: 'Seoul, South Korea', pins: 2400, layers: 6, topLayer: 'Indie Music Scene', color: '#60A5FA' },
]

export default function NeighborhoodsPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Neighborhoods"
        badgeIcon={Layers}
        title="Explore by Neighborhood"
        description="Every neighborhood is a universe of stories. Browse curated community archives organized by place, theme, and era."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto"
          >
            {neighborhoods.map((hood, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="card-base p-6 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ background: `linear-gradient(135deg, ${hood.color}08, ${hood.color}03)` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[1.125rem] font-semibold text-white mb-1">{hood.name}</h3>
                        <p className="text-[0.8125rem] text-white/35 flex items-center gap-1">
                          <MapPin size={11} /> {hood.city}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-white/15 group-hover:text-white/40 transition-all duration-200 group-hover:translate-x-1 mt-1" />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[0.8125rem] font-semibold" style={{ color: hood.color }}>
                        {hood.pins.toLocaleString()} pins
                      </span>
                      <span className="text-[0.8125rem] text-white/30 flex items-center gap-1">
                        <Layers size={12} /> {hood.layers} layers
                      </span>
                    </div>

                    <div className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[0.6875rem] text-white/25 uppercase tracking-wider font-medium">Top Layer: </span>
                      <span className="text-[0.8125rem] text-white/60 font-medium">{hood.topLayer}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <InnerPageCTA />
    </PageTransition>
  )
}