import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Map, Clock, Headphones, Sparkles, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import { staggerContainer, fadeInUp } from '../utils/animations'

const exploreCards = [
  {
    icon: Map,
    title: 'Interactive Map',
    description: 'Navigate an immersive dark-themed map with thousands of glowing memory pins from communities around the world.',
    href: '/map',
    color: '#A78BFA',
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
  {
    icon: Clock,
    title: 'Timeline',
    description: 'Slide through decades and watch cities transform. See which memories belong to which era.',
    href: '/timeline',
    color: '#60A5FA',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Headphones,
    title: 'Audio Layer',
    description: 'Listen to ambient recordings tied to real locations. Experience the soundscapes of places that no longer exist.',
    href: '/audio-layer',
    color: '#34D399',
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    icon: Sparkles,
    title: 'AI Portraits',
    description: 'Upload a photo of any building and see AI reconstruct what it looked like decades ago.',
    href: '/ai-portraits',
    color: '#F472B6',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
]

export default function ExplorePage() {
  return (
    <PageTransition>
      <PageHero
        badge="Explore"
        badgeIcon={Compass}
        title="Discover the World's Living Archive"
        description="Four powerful ways to explore the memories, sounds, and stories pinned to locations around the globe."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {exploreCards.map((card) => (
              <motion.div key={card.title} variants={fadeInUp}>
                <Link to={card.href} className="block group">
                  <div className="card-base p-8 md:p-10 h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 border border-white/[0.06]"
                        style={{ backgroundColor: `${card.color}10` }}
                      >
                        <card.icon size={26} style={{ color: card.color }} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-[1.375rem] font-semibold text-white mb-3 tracking-[-0.01em]">
                        {card.title}
                      </h3>
                      <p className="text-[0.9375rem] text-white/45 leading-relaxed mb-6">
                        {card.description}
                      </p>

                      <div className="flex items-center gap-2 text-[0.875rem] font-medium transition-colors duration-200"
                        style={{ color: card.color }}
                      >
                        Explore
                        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <InnerPageCTA />
    </PageTransition>
  )
}