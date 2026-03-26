import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Check, X, AlertTriangle } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const guidelines = [
  {
    title: 'Be Authentic',
    description: 'Share real memories from real places. ChronoPins is built on genuine human experience.',
    icon: Check,
    type: 'do',
  },
  {
    title: 'Respect Privacy',
    description: 'Do not share personal information about others without their consent. Anonymize names when appropriate.',
    icon: Shield,
    type: 'do',
  },
  {
    title: 'Date Accurately',
    description: 'Tag your memory with the correct decade or year. If uncertain, mark it as approximate.',
    icon: Check,
    type: 'do',
  },
  {
    title: 'No Hate Speech',
    description: 'Memories that promote violence, discrimination, or hatred of any kind will be removed.',
    icon: X,
    type: 'dont',
  },
  {
    title: 'No Spam or Advertising',
    description: 'ChronoPins is a community archive, not a marketing platform. Commercial content will be removed.',
    icon: X,
    type: 'dont',
  },
  {
    title: 'Sensitive Content',
    description: 'If your memory involves traumatic events, please use content warnings so others can choose to engage.',
    icon: AlertTriangle,
    type: 'caution',
  },
]

export default function GuidelinesPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Guidelines"
        badgeIcon={Shield}
        title="Community Guidelines"
        description="ChronoPins is a shared space for collective memory. These guidelines help ensure every contributor feels safe, respected, and heard."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <div className="max-w-[700px] mx-auto space-y-4">
            {guidelines.map((g, i) => {
              const colors = {
                do: { bg: '#34D39915', border: '#34D39930', icon: '#34D399' },
                dont: { bg: '#EF444415', border: '#EF444430', icon: '#EF4444' },
                caution: { bg: '#FBBF2415', border: '#FBBF2430', icon: '#FBBF24' },
              }
              const c = colors[g.type]

              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="card-base p-6 md:p-7 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <g.icon size={18} style={{ color: c.icon }} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-semibold text-white mb-2">{g.title}</h3>
                      <p className="text-[0.875rem] text-white/45 leading-relaxed">{g.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection delay={0.3} className="max-w-[700px] mx-auto mt-12">
            <div className="card-base p-8 text-center">
              <p className="text-base text-white/50 leading-[1.7]">
                Memory belongs to everyone. By contributing to ChronoPins, you agree to uphold these principles and help build a respectful, inclusive archive of shared human experience.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}