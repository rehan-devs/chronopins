import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Headphones, Play, Pause, MapPin, Clock } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import { staggerContainer, fadeInUp } from '../utils/animations'

const audioEntries = [
  { title: 'Grand Central Market, 1987', location: 'Downtown LA', duration: '3:24', era: '1980s', description: 'Morning rush. Vendors calling out prices. The clatter of shopping carts on tile floors.', color: '#A78BFA', playing: false },
  { title: 'Train Station Platform, 1972', location: 'Kyoto, Japan', duration: '4:10', era: '1970s', description: 'The last steam engine departure. Announcements echo. A single bell rings twice.', color: '#60A5FA', playing: false },
  { title: 'Neighborhood Block Party, 1995', location: 'Bed-Stuy, Brooklyn', duration: '2:58', era: '1990s', description: 'Hip-hop from a boombox. Kids laughing. Ice cream truck melody in the distance.', color: '#F472B6', playing: false },
  { title: 'Factory Whistle Shift Change, 1963', location: 'Pittsburgh, PA', duration: '1:45', era: '1960s', description: 'The 5pm whistle. Boots on metal stairs. Car engines starting in the parking lot.', color: '#34D399', playing: false },
  { title: 'Church Bells at Dawn, 1940', location: 'Florence, Italy', duration: '2:30', era: '1940s', description: 'Five bells ring across the valley. Birds respond. The city has not yet woken.', color: '#FBBF24', playing: false },
  { title: 'Arcade Floor Noise, 1989', location: 'Shibuya, Tokyo', duration: '3:55', era: '1980s', description: 'Bleeps, bloops, joystick clicks, coin drops, and teenagers shouting over game sounds.', color: '#A78BFA', playing: false },
]

export default function AudioLayerPage() {
  const [playingId, setPlayingId] = useState(null)

  return (
    <PageTransition>
      <PageHero
        badge="Audio Layer"
        badgeIcon={Headphones}
        title="Hear the Past"
        description="Ambient soundscapes tied to real locations. Close your eyes and stand in a place that no longer exists."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-[800px] mx-auto space-y-4"
          >
            {audioEntries.map((entry, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card-base p-5 md:p-6 group"
              >
                <div className="flex items-start gap-4">
                  {/* Play button */}
                  <button
                    onClick={() => setPlayingId(playingId === i ? null : i)}
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                    style={{
                      backgroundColor: `${entry.color}15`,
                      border: `1px solid ${entry.color}25`,
                    }}
                  >
                    {playingId === i ? (
                      <Pause size={18} style={{ color: entry.color }} />
                    ) : (
                      <Play size={18} style={{ color: entry.color }} className="ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[1rem] font-semibold text-white mb-1">{entry.title}</h3>
                    <p className="text-[0.8125rem] text-white/40 leading-relaxed mb-3">{entry.description}</p>

                    {/* Waveform visualization */}
                    <div className="flex items-center gap-[2px] h-6 mb-3">
                      {Array.from({ length: 40 }).map((_, j) => {
                        const height = Math.random() * 100
                        const isActive = playingId === i
                        return (
                          <motion.div
                            key={j}
                            className="flex-1 rounded-full min-w-[2px]"
                            style={{ backgroundColor: isActive ? `${entry.color}60` : 'rgba(255,255,255,0.08)' }}
                            animate={isActive ? {
                              height: [`${20 + Math.random() * 60}%`, `${20 + Math.random() * 80}%`, `${20 + Math.random() * 60}%`],
                            } : { height: `${20 + height * 0.5}%` }}
                            transition={isActive ? {
                              duration: 0.4 + Math.random() * 0.4,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            } : { duration: 0 }}
                          />
                        )
                      })}
                    </div>

                    <div className="flex items-center gap-4 text-[0.75rem] text-white/30">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {entry.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {entry.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[0.6875rem] font-medium"
                        style={{ backgroundColor: `${entry.color}12`, color: entry.color }}
                      >
                        {entry.era}
                      </span>
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