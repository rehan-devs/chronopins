import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, MessageCircle, MapPin, Calendar } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import InnerPageCTA from '../components/InnerPageCTA'
import { staggerContainer, fadeInUp } from '../utils/animations'

const stories = [
  {
    title: 'The Creak in the Hallway',
    author: 'Mara J.',
    location: 'Brooklyn, NY',
    era: '1978',
    excerpt: 'I moved into this apartment three years ago and always noticed the creak on the fifth step. Then I found a pin from someone who lived here in 1978 describing the exact same sound. Some things outlast us all.',
    likes: 342,
    comments: 48,
    color: '#A78BFA',
    avatar: 'M',
  },
  {
    title: 'Grandfather\'s School',
    author: 'Tomás R.',
    location: 'Mexico City',
    era: '1952',
    excerpt: 'I uploaded a photo of the building that replaced my grandfather\'s elementary school. The AI showed what the original might have looked like. When I showed him, he sat in silence for a long time, then said he could almost smell the chalk.',
    likes: 891,
    comments: 127,
    color: '#60A5FA',
    avatar: 'T',
  },
  {
    title: 'A Letter to 2031',
    author: 'David K.',
    location: 'Melbourne',
    era: '2024',
    excerpt: 'My daughter is five. I locked a message for her to open when she turns 18. I described the way she laughs, the songs she makes up, the way she calls the moon "the nightlight." I hope future-her knows how loved she was at five.',
    likes: 1203,
    comments: 89,
    color: '#34D399',
    avatar: 'D',
  },
  {
    title: 'The Sound of Platform 3',
    author: 'Yuki S.',
    location: 'Kyoto',
    era: '1968',
    excerpt: 'Someone uploaded the last recording of the bell at the old train station. They demolished it in 1972. I visit that pin sometimes just to stand and listen. Some sounds deserve to outlive their buildings.',
    likes: 567,
    comments: 73,
    color: '#F472B6',
    avatar: 'Y',
  },
  {
    title: 'The Corner Store That Knew Everyone',
    author: 'Aisha M.',
    location: 'Detroit, MI',
    era: '1985',
    excerpt: 'Mr. Henderson knew every kid in the neighborhood by name. He gave us free candy on report card day. The building is a parking lot now, but on ChronoPins, his store still stands. Fourteen people have added their own memories of him.',
    likes: 445,
    comments: 62,
    color: '#FBBF24',
    avatar: 'A',
  },
  {
    title: 'Dancing at the Pier',
    author: 'Rosa L.',
    location: 'Havana, Cuba',
    era: '1959',
    excerpt: 'My grandmother told me about the dances at the old pier before the revolution. I pinned her story with a recording of her voice describing it. She passed last year, but her voice still lives on the map.',
    likes: 789,
    comments: 94,
    color: '#A78BFA',
    avatar: 'R',
  },
]

export default function StoriesPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Stories"
        badgeIcon={BookOpen}
        title="Stories From the Map"
        description="Real memories from real people. Every pin tells a story. Here are some of the most moving, surprising, and human moments shared by our community."
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
            {stories.map((story, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                <div className="card-base p-6 md:p-8">
                  {/* Author row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8125rem] font-bold"
                      style={{ backgroundColor: `${story.color}20`, color: story.color }}
                    >
                      {story.avatar}
                    </div>
                    <div>
                      <div className="text-[0.875rem] font-semibold text-white/90">{story.author}</div>
                      <div className="flex items-center gap-3 text-[0.75rem] text-white/30">
                        <span className="flex items-center gap-1"><MapPin size={10} /> {story.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={10} /> {story.era}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[1.125rem] font-semibold text-white mb-3">{story.title}</h3>
                  <p className="text-[0.9375rem] text-white/50 leading-[1.8] mb-5 italic">"{story.excerpt}"</p>

                  {/* Engagement */}
                  <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
                    <button className="flex items-center gap-1.5 text-[0.8125rem] text-white/30 hover:text-[#F472B6] transition-colors cursor-pointer">
                      <Heart size={15} /> {story.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-[0.8125rem] text-white/30 hover:text-[#60A5FA] transition-colors cursor-pointer">
                      <MessageCircle size={15} /> {story.comments}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <InnerPageCTA />
    </PageTransition>
  )
}