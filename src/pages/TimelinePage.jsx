import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import { staggerContainer, fadeInUp } from '../utils/animations'

const decades = [
  { era: '1920s', count: '1,240', highlight: 'Prohibition speakeasies, early jazz venues, immigrant neighborhoods', color: '#FBBF24' },
  { era: '1930s', count: '980', highlight: 'Depression-era storefronts, WPA projects, dust bowl migrations', color: '#F59E0B' },
  { era: '1940s', count: '2,100', highlight: 'WWII home fronts, victory gardens, war memorial dedications', color: '#EF4444' },
  { era: '1950s', count: '3,450', highlight: 'Drive-in theaters, suburban boom, corner soda shops', color: '#F472B6' },
  { era: '1960s', count: '4,200', highlight: 'Civil rights landmarks, counterculture hubs, moon landing celebrations', color: '#A78BFA' },
  { era: '1970s', count: '5,800', highlight: 'Disco clubs, community gardens, punk rock venues', color: '#818CF8' },
  { era: '1980s', count: '8,300', highlight: 'Arcade halls, graffiti walls, underground music scenes', color: '#60A5FA' },
  { era: '1990s', count: '12,400', highlight: 'Internet cafes, rave warehouses, skateparks', color: '#34D399' },
  { era: '2000s', count: '18,900', highlight: 'Community memorials, neighborhood transformations, local landmarks', color: '#2DD4BF' },
  { era: '2010s', count: '24,600', highlight: 'Pop-up shops, street art murals, gentrification stories', color: '#38BDF8' },
  { era: '2020s', count: '31,200', highlight: 'Pandemic memories, mutual aid sites, protest landmarks', color: '#A78BFA' },
]

export default function TimelinePage() {
  const [activeEra, setActiveEra] = useState('1980s')

  return (
    <PageTransition>
      <PageHero
        badge="Timeline"
        badgeIcon={Clock}
        title="A Century of Memories"
        description="Every decade tells a different story. Browse through 100+ years of community memories organized by era."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-[800px] mx-auto space-y-3"
          >
            {decades.map((decade) => (
              <motion.div
                key={decade.era}
                variants={fadeInUp}
                onClick={() => setActiveEra(decade.era)}
                className={`group cursor-pointer rounded-[16px] border transition-all duration-300 ${
                  activeEra === decade.era
                    ? 'border-white/[0.12] bg-white/[0.04]'
                    : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.08]'
                }`}
              >
                <div className="p-5 md:p-6 flex items-center gap-4 md:gap-6">
                  {/* Era badge */}
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-[1rem] md:text-[1.125rem] transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${decade.color}12`,
                      color: decade.color,
                      border: `1px solid ${decade.color}25`,
                    }}
                  >
                    {decade.era}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[0.8125rem] font-semibold" style={{ color: decade.color }}>
                        {decade.count} pins
                      </span>
                    </div>
                    <p className="text-[0.875rem] text-white/45 leading-relaxed line-clamp-2">
                      {decade.highlight}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`flex-shrink-0 transition-all duration-200 ${
                      activeEra === decade.era ? 'text-white/50' : 'text-white/15 group-hover:text-white/30'
                    }`}
                  />
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