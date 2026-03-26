import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen, Map, Clock, Headphones, Sparkles, Lock, Users,
  MapPin, Compass, ArrowRight, Globe, Heart, Code2
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { staggerContainer, fadeInUp } from '../utils/animations'

const sections = [
  {
    icon: Map,
    title: 'The Interactive Map',
    description: 'At the heart of ChronoPins is a dark-themed interactive map where every glowing pin represents a real memory from a real person. Navigate neighborhoods, zoom into streets, and discover the hidden histories beneath familiar places.',
    color: '#A78BFA',
    link: '/map',
  },
  {
    icon: Clock,
    title: 'The Time Slider',
    description: 'A cinematic timeline slider lets you filter the entire map by decade. Slide from the 1920s to today and watch pins appear and disappear as you travel through time. Each era reveals a different city.',
    color: '#60A5FA',
    link: '/timeline',
  },
  {
    icon: Headphones,
    title: 'The Audio Layer',
    description: 'Some memories have a sound. The audio layer lets contributors upload ambient recordings tied to specific locations. The bustling market of 1985. The quiet street before the highway. History has a soundtrack.',
    color: '#34D399',
    link: '/audio-layer',
  },
  {
    icon: Sparkles,
    title: 'AI Building Portraits',
    description: 'Upload a photo of any building and our generative AI will reconstruct an approximation of what it looked like 50 or 100 years ago, using historical records, architectural patterns, and machine learning.',
    color: '#F472B6',
    link: '/ai-portraits',
  },
  {
    icon: Lock,
    title: 'Legacy Lock',
    description: 'Write a message, choose a future date, and seal it. The message is encrypted and hidden from everyone — including you and us — until the unlock day arrives. A digital time capsule within a time capsule.',
    color: '#FBBF24',
    link: '/',
  },
  {
    icon: Users,
    title: 'Community Layers',
    description: 'Browse curated collections organized by neighborhood, theme, or contributor. From "Lost Restaurants" to "Childhood Playgrounds," every layer offers a new lens on the same familiar place.',
    color: '#A78BFA',
    link: '/neighborhoods',
  },
]

const stats = [
  { value: '2.4M+', label: 'Memories Pinned' },
  { value: '190+', label: 'Cities Active' },
  { value: '847K', label: 'Community Members' },
  { value: '104', label: 'Years of History' },
]

export default function LearnMorePage() {
  return (
    <PageTransition>
      <PageHero
        badge="Learn More"
        badgeIcon={BookOpen}
        title="Everything About ChronoPins"
        description="A comprehensive guide to the world's most human map — what it is, how it works, and why it matters."
      />

      {/* Stats */}
      <section className="pb-[60px] md:pb-[80px]">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px] mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="card-base p-5 text-center">
                <div className="text-[1.5rem] md:text-[2rem] font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[0.75rem] text-white/35 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features deep dive */}
      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-white mb-4">Core Features</h2>
            <p className="text-[0.9375rem] text-white/40 max-w-[500px] mx-auto">
              Six powerful tools that work together to create a living archive of human memory.
            </p>
          </AnimatedSection>

          <div className="max-w-[800px] mx-auto space-y-5">
            {sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Link to={section.link} className="block group">
                  <div className="card-base p-6 md:p-8 flex flex-col md:flex-row items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.06] transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${section.color}10` }}
                    >
                      <section.icon size={22} style={{ color: section.color }} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.125rem] font-semibold text-white mb-2">{section.title}</h3>
                      <p className="text-[0.9375rem] text-white/40 leading-[1.7] mb-3">{section.description}</p>
                      <span className="text-[0.8125rem] font-medium flex items-center gap-1.5 transition-colors"
                        style={{ color: section.color }}
                      >
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <AnimatedSection className="max-w-[700px] mx-auto">
            <div className="card-base p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, transparent 60%)' }}
              />
              <div className="relative z-10">
                <Heart size={28} className="text-[#F472B6]/50 mx-auto mb-5" />
                <h3 className="text-[1.25rem] font-semibold text-white mb-4">Why We Built This</h3>
                <p className="text-[1rem] text-white/50 leading-[1.8] mb-6 italic">
                  "Every day, memories vanish. Buildings get demolished. Neighborhoods transform. People pass away taking their stories with them. ChronoPins exists because we believe every place deserves to be remembered — and every person deserves to be heard."
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/drop-pin" className="btn-primary">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> Drop Your First Pin
                    </span>
                  </Link>
                  <Link to="/about" className="btn-secondary">
                    <span className="flex items-center gap-2">
                      About the Team <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Open source note */}
      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <AnimatedSection className="max-w-[600px] mx-auto text-center">
            <Code2 size={24} className="text-[#A78BFA]/40 mx-auto mb-4" />
            <h3 className="text-[1.125rem] font-semibold text-white mb-3">Open Source & Free Forever</h3>
            <p className="text-[0.9375rem] text-white/40 leading-[1.7] mb-5">
              ChronoPins is open source and completely free for individuals. We believe memory belongs to everyone. Our code is available on GitHub for anyone to inspect, contribute to, or fork.
            </p>
            <Link to="/open-source" className="text-[0.875rem] font-medium text-[#A78BFA] hover:text-[#c4b5fd] transition-colors inline-flex items-center gap-1.5">
              View our repositories <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}