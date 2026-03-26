import React from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Download, Image, FileText } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const assets = [
  { title: 'Logo Package', description: 'SVG, PNG in dark and light variants. Includes icon-only and wordmark versions.', icon: Image, format: 'ZIP • 2.4 MB', color: '#A78BFA' },
  { title: 'Brand Guidelines', description: 'Colors, typography, spacing, tone of voice, and usage rules.', icon: FileText, format: 'PDF • 8.1 MB', color: '#60A5FA' },
  { title: 'Product Screenshots', description: 'High-resolution screenshots of the map, timeline, audio layer, and AI portraits.', icon: Image, format: 'ZIP • 15 MB', color: '#34D399' },
  { title: 'Fact Sheet', description: 'Key stats, milestones, founding story, and team information.', icon: FileText, format: 'PDF • 420 KB', color: '#F472B6' },
]

export default function PressKitPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Press Kit"
        badgeIcon={Newspaper}
        title="Press & Media Resources"
        description="Everything journalists, bloggers, and partners need to tell the ChronoPins story."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          {/* One-liner */}
          <AnimatedSection className="max-w-[700px] mx-auto mb-12">
            <div className="card-base p-8 text-center">
              <h3 className="text-[0.8125rem] font-semibold text-[#A78BFA] uppercase tracking-wider mb-3">Boilerplate</h3>
              <p className="text-[1rem] text-white/55 leading-[1.7] italic">
                "ChronoPins is a community-driven digital time capsule that lets anyone pin memories, stories, photos, and sounds to an interactive map — organized by location and decade. With over 2.4 million memories across 190+ cities, it is the world's most human map."
              </p>
            </div>
          </AnimatedSection>

          {/* Downloads */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto"
          >
            {assets.map((asset, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="card-base p-6 h-full flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.06]"
                    style={{ backgroundColor: `${asset.color}10` }}
                  >
                    <asset.icon size={20} style={{ color: asset.color }} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[1rem] font-semibold text-white mb-1">{asset.title}</h4>
                    <p className="text-[0.8125rem] text-white/40 leading-relaxed mb-3">{asset.description}</p>
                    <div className="flex items-center gap-2 text-[0.75rem]" style={{ color: asset.color }}>
                      <Download size={12} /> {asset.format}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection delay={0.3} className="max-w-[700px] mx-auto mt-12 text-center">
            <p className="text-[0.875rem] text-white/35">
              For press inquiries, contact <span className="text-[#A78BFA] font-medium">press@chronopins.app</span>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}