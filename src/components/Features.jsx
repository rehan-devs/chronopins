import React from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, Headphones, Lock, Sparkles, MapPin, Users 
} from 'lucide-react'
import Card from './Card'
import SectionBadge from './SectionBadge'
import AnimatedSection from './AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const features = [
  {
    icon: Clock,
    title: 'Slide Through Decades',
    description: 'A cinematic time slider lets you filter the entire map by era. Watch your city transform from the 1920s to today — one decade at a time.',
    gradient: 'from-violet-500/20 to-purple-600/20',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: Headphones,
    title: 'Hear the Past',
    description: 'Upload and explore ambient soundscapes tied to real locations. The bustling market of 1985. The quiet street before the highway was built. History has a sound.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Lock,
    title: 'Messages for the Future',
    description: 'Write a message, set a future unlock date, and seal it. Your words stay encrypted until the day arrives. A digital time capsule within a time capsule.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
  {
    icon: Sparkles,
    title: 'Reimagine Buildings Through Time',
    description: 'Upload a photo of any building. Our AI re-imagines what it looked like 50 or 100 years ago using historical data, architectural records, and machine learning.',
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
  },
  {
    icon: MapPin,
    title: 'Drop Your Story on the Map',
    description: 'Pin a memory to any location — attach a photo, a story, or a voice recording. Your pin joins thousands of others, building a crowd-sourced atlas of lived experience.',
    gradient: 'from-emerald-500/20 to-green-500/20',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Users,
    title: 'Explore Neighborhood Archives',
    description: "Discover curated collections by neighborhood, theme, or contributor. From 'Lost Restaurants' to 'Childhood Playgrounds' — every layer is a new lens on the same place.",
    gradient: 'from-indigo-500/20 to-blue-500/20',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-[40px] md:py-[80px]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            top: '20%',
            left: '-200px',
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.04) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14 md:mb-20">
          <AnimatedSection>
            <div className="flex justify-center mb-5">
              <SectionBadge icon={Sparkles}>Features</SectionBadge>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-section-title-sm md:text-section-title font-bold gradient-text mb-5 text-balance">
              A New Way to Experience History
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body text-white/50 text-balance">
              ChronoPins combines cartography, storytelling, and community to create a living archive of places and the people who remember them.
            </p>
          </AnimatedSection>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group"
            >
              <div className="card-base p-6 md:p-8 h-full relative overflow-hidden">
                {/* Subtle gradient hover effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} border border-white/[0.06] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon size={22} className={feature.iconColor} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-card-title font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-sm text-white/45 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}