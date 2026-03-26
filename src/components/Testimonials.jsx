import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquareQuote, Star } from 'lucide-react'
import SectionBadge from './SectionBadge'
import AnimatedSection from './AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const testimonials = [
  {
    quote: "I found a pin from someone who lived in my apartment in 1978. They described the same creak in the hallway floor. I'm not crying, you're crying.",
    name: 'Mara J.',
    location: 'Brooklyn, NY',
    avatar: 'M',
    color: '#A78BFA',
  },
  {
    quote: "My grandfather couldn't believe it when I showed him the AI reconstruction of his childhood school. He said it was almost exactly right.",
    name: 'Tomás R.',
    location: 'Mexico City',
    avatar: 'T',
    color: '#60A5FA',
  },
  {
    quote: 'I locked a message for my daughter to read when she turns 18 in 2031. ChronoPins made it feel sacred.',
    name: 'David K.',
    location: 'Melbourne',
    avatar: 'D',
    color: '#34D399',
  },
  {
    quote: 'The audio layer is haunting. Someone uploaded the sound of the old train station before they demolished it. You can just... stand there and listen.',
    name: 'Yuki S.',
    location: 'Kyoto',
    avatar: 'Y',
    color: '#F472B6',
  },
]

export default function Testimonials() {
  return (
    <section id="community" className="relative py-[40px] md:py-[80px]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.015) 50%, transparent 100%)',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14 md:mb-20">
          <AnimatedSection>
            <div className="flex justify-center mb-5">
              <SectionBadge icon={MessageSquareQuote}>Community Voices</SectionBadge>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-section-title-sm md:text-section-title font-bold gradient-text mb-5 text-balance">
              Stories From the Map
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body text-white/50 text-balance">
              Real stories from real people who've found connection across time and place.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[900px] mx-auto"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="group"
            >
              <div className="card-base p-6 md:p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      size={14} 
                      className="text-amber-400/80" 
                      fill="currentColor" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-body-sm md:text-body text-white/65 leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8125rem] font-bold text-white"
                    style={{ 
                      backgroundColor: `${testimonial.color}20`,
                      color: testimonial.color,
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[0.875rem] font-semibold text-white/90">
                      {testimonial.name}
                    </div>
                    <div className="text-[0.75rem] text-white/35">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}