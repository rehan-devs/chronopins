import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowRight, Calendar } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import { staggerContainer, fadeInUp } from '../utils/animations'

const posts = [
  {
    title: 'How Audio Memories Are Changing the Way We Experience Cities',
    excerpt: 'The audio layer launched three months ago. Here is what we have learned about the power of sound to transport people through time.',
    date: 'Jan 15, 2025',
    category: 'Feature',
    readTime: '6 min read',
    color: '#A78BFA',
  },
  {
    title: 'Community Spotlight: The Brooklyn Memory Project',
    excerpt: 'A group of Brooklyn residents has been systematically documenting every lost business on Atlantic Avenue since 1950.',
    date: 'Jan 8, 2025',
    category: 'Community',
    readTime: '4 min read',
    color: '#60A5FA',
  },
  {
    title: 'Introducing Legacy Lock: Messages for the Future',
    excerpt: 'Today we are launching the most personal feature we have ever built — the ability to lock a message that cannot be opened until a future date you choose.',
    date: 'Dec 20, 2024',
    category: 'Product',
    readTime: '5 min read',
    color: '#34D399',
  },
  {
    title: 'The Ethics of AI-Generated Historical Images',
    excerpt: 'When our AI reconstructs a building from the past, how accurate is it? And what are our responsibilities to historical truth?',
    date: 'Dec 12, 2024',
    category: 'Technology',
    readTime: '8 min read',
    color: '#F472B6',
  },
  {
    title: '2024 Year in Review: 2.4 Million Memories and Counting',
    excerpt: 'A look back at the year that took ChronoPins from a beta experiment to a global community of memory keepers.',
    date: 'Dec 1, 2024',
    category: 'Updates',
    readTime: '7 min read',
    color: '#FBBF24',
  },
]

export default function BlogPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Blog"
        badgeIcon={FileText}
        title="From the ChronoPins Team"
        description="Product updates, community stories, technical deep-dives, and reflections on the intersection of memory and technology."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-[800px] mx-auto space-y-5"
          >
            {posts.map((post, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="card-base p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[0.6875rem] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider"
                      style={{ backgroundColor: `${post.color}12`, color: post.color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[0.75rem] text-white/25 flex items-center gap-1">
                      <Calendar size={11} /> {post.date}
                    </span>
                    <span className="text-[0.75rem] text-white/25">{post.readTime}</span>
                  </div>

                  <h3 className="text-[1.125rem] md:text-[1.25rem] font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[0.9375rem] text-white/40 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[0.8125rem] font-medium transition-colors" style={{ color: post.color }}>
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}