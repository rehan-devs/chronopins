import React from 'react'
import { motion } from 'framer-motion'
import { Code2, GitBranch, Star, GitFork, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const repos = [
  { name: 'chronopins/core', description: 'The main ChronoPins web application — React, MapLibre, and the pin engine.', stars: '4.2k', forks: '380', language: 'TypeScript', color: '#3178C6' },
  { name: 'chronopins/audio-engine', description: 'Spatial audio processing for location-based ambient soundscapes.', stars: '1.8k', forks: '145', language: 'Rust', color: '#DEA584' },
  { name: 'chronopins/legacy-lock', description: 'End-to-end encrypted time-locked message system.', stars: '2.1k', forks: '210', language: 'Go', color: '#00ADD8' },
  { name: 'chronopins/ai-portraits', description: 'ML model for architectural style transfer and historical reconstruction.', stars: '3.5k', forks: '520', language: 'Python', color: '#3776AB' },
]

export default function OpenSourcePage() {
  return (
    <PageTransition>
      <PageHero
        badge="Open Source"
        badgeIcon={Code2}
        title="Built in the Open"
        description="ChronoPins is open source. We believe the tools for preserving collective memory should belong to everyone."
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
            {repos.map((repo, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="card-base p-6 md:p-7">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitBranch size={16} className="text-[#A78BFA]" />
                      <h3 className="text-[1rem] font-semibold text-white font-mono">{repo.name}</h3>
                    </div>
                    <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>

                  <p className="text-[0.875rem] text-white/40 leading-relaxed mb-4">{repo.description}</p>

                  <div className="flex items-center gap-5">
                    <span className="flex items-center gap-1.5 text-[0.8125rem] text-white/30">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.color }} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1 text-[0.8125rem] text-white/30">
                      <Star size={13} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-[0.8125rem] text-white/30">
                      <GitFork size={13} /> {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection delay={0.2} className="max-w-[600px] mx-auto mt-12 text-center">
            <a href="#" className="btn-primary inline-flex">
              <span className="flex items-center gap-2">
                <Code2 size={16} />
                View on GitHub
              </span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}