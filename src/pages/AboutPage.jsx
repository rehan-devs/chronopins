import React from 'react'
import { motion } from 'framer-motion'
import { Info, Heart, Globe, Users, Target, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import AnimatedSection from '../components/AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const values = [
  { icon: Heart, title: 'Memory is Sacred', description: 'Every story deserves to be preserved. We treat personal memories with the respect they deserve.', color: '#F472B6' },
  { icon: Globe, title: 'Open to All', description: 'ChronoPins is free, global, and community-owned. We believe memory belongs to everyone.', color: '#60A5FA' },
  { icon: Users, title: 'Community First', description: 'Our users are our architects. Every feature, layer, and archive is shaped by the people who use it.', color: '#34D399' },
  { icon: Target, title: 'Accuracy Matters', description: 'We encourage historical accuracy while embracing the beautiful imperfection of human memory.', color: '#A78BFA' },
]

const milestones = [
  { year: '2022', event: 'ChronoPins concept born from a hackathon project about neighborhood history' },
  { year: '2023', event: 'Beta launch with 12 pilot cities. First 10,000 pins dropped.' },
  { year: '2024', event: 'Audio layer and AI portraits launched. Community grows to 500K+ members.' },
  { year: '2025', event: 'Legacy Lock feature released. Over 2.4 million memories now on the map.' },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        badge="About"
        badgeIcon={Info}
        title="The Story Behind ChronoPins"
        description="We started with a simple question: what if every place on Earth could tell its own story, in the voices of the people who lived there?"
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          {/* Mission statement */}
          <AnimatedSection className="max-w-[700px] mx-auto mb-20">
            <div className="card-base p-8 md:p-12 text-center">
              <h3 className="text-[1.25rem] font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-[1.0625rem] text-white/55 leading-[1.8] italic">
                "To build the world's most human map — a living archive where anyone can pin a memory to a place, share it across time, and connect with strangers through the shared experience of belonging somewhere."
              </p>
            </div>
          </AnimatedSection>

          {/* Values */}
          <div className="max-w-[800px] mx-auto mb-20">
            <AnimatedSection>
              <h3 className="text-[1.25rem] font-semibold text-white text-center mb-8">Our Values</h3>
            </AnimatedSection>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {values.map((v, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <div className="card-base p-6 h-full">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border border-white/[0.06]"
                      style={{ backgroundColor: `${v.color}10` }}
                    >
                      <v.icon size={20} style={{ color: v.color }} strokeWidth={1.8} />
                    </div>
                    <h4 className="text-[1rem] font-semibold text-white mb-2">{v.title}</h4>
                    <p className="text-[0.875rem] text-white/40 leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="max-w-[600px] mx-auto">
            <AnimatedSection>
              <h3 className="text-[1.25rem] font-semibold text-white text-center mb-8">Our Journey</h3>
            </AnimatedSection>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#A78BFA] shadow-[0_0_10px_rgba(139,92,246,0.4)] flex-shrink-0" />
                      {i < milestones.length - 1 && (
                        <div className="w-[1px] flex-1 bg-white/[0.06] my-1" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="text-[0.8125rem] font-bold text-[#A78BFA] mb-1">{m.year}</div>
                      <p className="text-[0.9375rem] text-white/50 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InnerPageCTA />
    </PageTransition>
  )
}