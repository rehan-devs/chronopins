import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'
import SectionBadge from './SectionBadge'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    question: 'What is ChronoPins?',
    answer: 'ChronoPins is a community-driven digital time capsule that lets you pin memories, stories, photos, and sounds to an interactive map — organized by location and decade.',
  },
  {
    question: 'Is it free to use?',
    answer: 'Yes. ChronoPins is completely free for individuals. We believe memory belongs to everyone.',
  },
  {
    question: 'How does the Legacy Lock work?',
    answer: 'You write a message and choose a future date. The message is encrypted and cannot be read by anyone — not even us — until that date arrives.',
  },
  {
    question: 'Can I upload audio?',
    answer: 'Absolutely. You can upload ambient recordings, voice memos, or any sound clip up to 5 minutes long and attach it to a specific pin.',
  },
  {
    question: 'What cities are supported?',
    answer: 'ChronoPins works globally. Any location on Earth can have a pin. We also have featured community hubs for select cities.',
  },
  {
    question: 'How does the AI building tool work?',
    answer: 'Upload a current photo of a building, and our generative AI uses historical architectural records, old photographs, and style transfer to reconstruct an approximation of its past appearance.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
      >
        <span className={`text-[0.9375rem] md:text-base font-medium transition-colors duration-200 pr-8 ${
          isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
        }`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
        >
          <ChevronDown size={18} className={`transition-colors duration-200 ${isOpen ? 'text-[#A78BFA]' : 'text-white/30'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.2, delay: 0.05 }
            }}
            className="overflow-hidden"
          >
            <p className="text-[0.875rem] text-white/45 leading-relaxed pb-5 md:pb-6 pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  // Changed from useState(0) to useState(null) - no item open by default
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="relative py-[40px] md:py-[80px]">
      <div className="w-full px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-[720px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <AnimatedSection>
              <div className="flex justify-center mb-5">
                <SectionBadge icon={HelpCircle}>FAQ</SectionBadge>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-balance"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Frequently Asked Questions
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base text-white/50 leading-[1.7] text-balance">
                Everything you need to know about ChronoPins and how it works.
              </p>
            </AnimatedSection>
          </div>

          {/* FAQ Items */}
          <AnimatedSection delay={0.3}>
            <div
              className="rounded-[16px] overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="px-6 md:px-8">
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}