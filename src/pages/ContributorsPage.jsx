import React from 'react'
import { motion } from 'framer-motion'
import { Users, MapPin, Award, TrendingUp } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import { staggerContainer, fadeInUp } from '../utils/animations'

const topContributors = [
  { name: 'Elena V.', location: 'Buenos Aires', pins: 234, badge: 'Historian', color: '#A78BFA', avatar: 'E' },
  { name: 'James T.', location: 'Chicago, IL', pins: 198, badge: 'Storyteller', color: '#60A5FA', avatar: 'J' },
  { name: 'Priya S.', location: 'Mumbai', pins: 187, badge: 'Sound Collector', color: '#34D399', avatar: 'P' },
  { name: 'Marcus W.', location: 'London', pins: 176, badge: 'Time Keeper', color: '#F472B6', avatar: 'M' },
  { name: 'Akiko H.', location: 'Osaka', pins: 165, badge: 'Archivist', color: '#FBBF24', avatar: 'A' },
  { name: 'Carlos M.', location: 'Lisbon', pins: 152, badge: 'Explorer', color: '#A78BFA', avatar: 'C' },
  { name: 'Sarah K.', location: 'Toronto', pins: 143, badge: 'Storyteller', color: '#60A5FA', avatar: 'S' },
  { name: 'Omar R.', location: 'Cairo', pins: 138, badge: 'Historian', color: '#34D399', avatar: 'O' },
]

const stats = [
  { label: 'Total Contributors', value: '847K', icon: Users },
  { label: 'Countries Represented', value: '142', icon: MapPin },
  { label: 'Pins This Month', value: '34.2K', icon: TrendingUp },
  { label: 'Community Awards', value: '12.8K', icon: Award },
]

export default function ContributorsPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Contributors"
        badgeIcon={Users}
        title="The People Behind the Pins"
        description="ChronoPins is built by its community. Every memory keeper adds another layer to the world's most human map."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px] mx-auto mb-16"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="card-base p-5 text-center">
                <stat.icon size={20} className="text-[#A78BFA] mx-auto mb-3" strokeWidth={1.8} />
                <div className="text-[1.5rem] font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[0.75rem] text-white/35 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Top Contributors */}
          <div className="max-w-[700px] mx-auto">
            <h3 className="text-[1.25rem] font-semibold text-white text-center mb-8">Top Contributors This Month</h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-3"
            >
              {topContributors.map((person, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <div className="card-base p-4 md:p-5 flex items-center gap-4">
                    <div className="text-[0.875rem] font-bold text-white/20 w-6 text-center">
                      {i + 1}
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8125rem] font-bold flex-shrink-0"
                      style={{ backgroundColor: `${person.color}20`, color: person.color }}
                    >
                      {person.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[0.9375rem] font-semibold text-white">{person.name}</div>
                      <div className="text-[0.75rem] text-white/30 flex items-center gap-1">
                        <MapPin size={10} /> {person.location}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-[0.9375rem] font-bold" style={{ color: person.color }}>
                        {person.pins} pins
                      </div>
                      <div className="text-[0.6875rem] px-2 py-0.5 rounded-md inline-block mt-1"
                        style={{ backgroundColor: `${person.color}12`, color: `${person.color}90` }}
                      >
                        {person.badge}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <InnerPageCTA />
    </PageTransition>
  )
}