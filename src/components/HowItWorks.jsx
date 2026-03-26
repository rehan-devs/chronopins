import React from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, CalendarDays, MessageCircle, ArrowRight } from 'lucide-react'
import SectionBadge from './SectionBadge'
import AnimatedSection from './AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Choose a Location',
    description: 'Navigate the interactive map or search for a specific address, landmark, or neighborhood.',
    color: '#A78BFA',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Drop a Pin',
    description: 'Place your memory pin on the exact spot. Add a title, year, story, photo, or audio recording.',
    color: '#60A5FA',
  },
  {
    number: '03',
    icon: CalendarDays,
    title: 'Set the Era',
    description: "Tag your memory with a decade. It'll appear when other explorers slide the timeline to that period.",
    color: '#34D399',
  },
  {
    number: '04',
    icon: MessageCircle,
    title: 'Explore & Connect',
    description: 'Browse pins from strangers, neighbors, and generations past. React, comment, and build on shared memories.',
    color: '#F472B6',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-[40px] md:py-[80px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.02) 50%, transparent 100%)' }} />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14 md:mb-20">
          <AnimatedSection>
            <div className="flex justify-center mb-5">
              <SectionBadge>How It Works</SectionBadge>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-balance"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              From Memory to Map in Seconds
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base text-white/50 leading-[1.7] text-balance">
              Four simple steps to preserve your story and connect it to the world around you.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="card-base p-6 md:p-8 h-full">
                {/* Step Number Label */}
                <div 
                  className="text-[0.6875rem] font-bold mb-4 tracking-[0.08em]"
                  style={{ color: step.color }}
                >
                  STEP {step.number}
                </div>

                {/* Icon */}
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 border border-white/[0.06]"
                  style={{ backgroundColor: `${step.color}10` }}
                >
                  <step.icon size={20} style={{ color: step.color }} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-[1.25rem] font-semibold text-white mb-3 tracking-[-0.01em]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] text-white/45 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-[14px] transform -translate-y-1/2 z-20">
                  <ArrowRight size={16} className="text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}