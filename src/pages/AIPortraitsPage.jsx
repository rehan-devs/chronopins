import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Upload, ArrowRight, Building, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import AnimatedSection from '../components/AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const examples = [
  { building: 'Flatiron Building', city: 'New York City', currentYear: '2024', pastYear: '1905', color: '#A78BFA' },
  { building: 'Shibuya Station', city: 'Tokyo', currentYear: '2024', pastYear: '1935', color: '#60A5FA' },
  { building: 'Palau de la Musica', city: 'Barcelona', currentYear: '2024', pastYear: '1910', color: '#F472B6' },
  { building: 'Union Station', city: 'Los Angeles', currentYear: '2024', pastYear: '1939', color: '#34D399' },
]

export default function AIPortraitsPage() {
  const [dragActive, setDragActive] = useState(false)

  return (
    <PageTransition>
      <PageHero
        badge="AI Portraits"
        badgeIcon={Sparkles}
        title="Reimagine Buildings Through Time"
        description="Upload a photo of any building. Our AI reconstructs what it looked like decades or centuries ago using historical data and machine learning."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          {/* Upload area */}
          <AnimatedSection className="max-w-[600px] mx-auto mb-16">
            <div
              className={`relative rounded-[20px] border-2 border-dashed p-12 md:p-16 text-center transition-all duration-300 cursor-pointer ${
                dragActive ? 'border-[#A78BFA] bg-[#A78BFA]/[0.05]' : 'border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.03]'
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false) }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center mx-auto mb-5">
                <Upload size={28} className="text-[#A78BFA]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Upload a Building Photo</h3>
              <p className="text-[0.875rem] text-white/40 mb-6">Drag and drop an image here, or click to browse your files</p>
              <button className="btn-primary !text-[0.8125rem]">
                <span className="flex items-center gap-2"><Upload size={14} /> Choose File</span>
              </button>
              <p className="text-[0.75rem] text-white/25 mt-4">PNG, JPG up to 10MB</p>
            </div>
          </AnimatedSection>

          {/* How it works */}
          <AnimatedSection className="max-w-[800px] mx-auto mb-16">
            <h3 className="text-[1.25rem] font-semibold text-white text-center mb-8">How the AI Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: '01', icon: Upload, title: 'Upload', desc: 'Take or upload a photo of any building from any angle.' },
                { step: '02', icon: Sparkles, title: 'AI Analysis', desc: 'Our model cross-references historical records and architectural styles.' },
                { step: '03', icon: Building, title: 'Time Travel', desc: 'See a reconstructed image of the building as it may have looked decades ago.' },
              ].map((s, i) => (
                <div key={i} className="card-base p-6 text-center">
                  <div className="text-[0.6875rem] font-bold text-[#A78BFA] mb-3 tracking-[0.08em]">STEP {s.step}</div>
                  <div className="w-11 h-11 rounded-xl bg-[#A78BFA]/10 border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
                    <s.icon size={20} className="text-[#A78BFA]" strokeWidth={1.8} />
                  </div>
                  <h4 className="text-[1rem] font-semibold text-white mb-2">{s.title}</h4>
                  <p className="text-[0.8125rem] text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Examples */}
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection>
              <h3 className="text-[1.25rem] font-semibold text-white text-center mb-8">Example Reconstructions</h3>
            </AnimatedSection>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {examples.map((ex, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <div className="card-base p-6 relative overflow-hidden">
                    <div className="flex gap-3 mb-5">
                      <div className="flex-1 aspect-[4/3] rounded-xl bg-white/[0.04] border border-white/[0.06] flex flex-col items-center justify-center relative">
                        <Building size={28} className="text-white/15 mb-2" />
                        <span className="text-[0.6875rem] text-white/25 font-medium">Today</span>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white/[0.06] text-[0.625rem] text-white/30 font-medium">{ex.currentYear}</div>
                      </div>
                      <div className="flex items-center"><ArrowRight size={16} className="text-white/15" /></div>
                      <div className="flex-1 aspect-[4/3] rounded-xl border flex flex-col items-center justify-center relative" style={{ backgroundColor: `${ex.color}08`, borderColor: `${ex.color}20` }}>
                        <Sparkles size={28} style={{ color: `${ex.color}40` }} className="mb-2" />
                        <span className="text-[0.6875rem] font-medium" style={{ color: `${ex.color}60` }}>AI Reconstructed</span>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[0.625rem] font-medium" style={{ backgroundColor: `${ex.color}15`, color: ex.color }}>{ex.pastYear}</div>
                      </div>
                    </div>
                    <h4 className="text-[1rem] font-semibold text-white mb-1">{ex.building}</h4>
                    <p className="text-[0.8125rem] text-white/35 flex items-center gap-1"><MapPin size={11} /> {ex.city}</p>
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