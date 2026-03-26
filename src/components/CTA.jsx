import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, ArrowRight, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-[40px] md:py-[80px] overflow-hidden">
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-[900px] mx-auto"
        >
          <div className="relative rounded-[24px] overflow-hidden">
            <div className="relative bg-[#0a0a0f] rounded-[24px] p-10 md:p-16 text-center border border-white/[0.06]">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.06) 0%, transparent 60%)' }}
              />

              <div className="absolute top-6 left-8 opacity-10">
                <MapPin size={20} className="text-[#A78BFA]" />
              </div>
              <div className="absolute bottom-8 right-10 opacity-10">
                <MapPin size={16} className="text-blue-400" />
              </div>

              <div className="relative z-10">
                <h2 className="text-[1.75rem] md:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-balance"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}
                >
                  Every Place Deserves to Be Remembered
                </h2>
                <p className="text-base md:text-[1.125rem] text-white/45 max-w-[500px] mx-auto mb-8 text-balance leading-[1.7]">
                  Join thousands of memory keepers building the world's most human map. Drop your first pin today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/explore" className="btn-primary">
                    <span className="flex items-center gap-2">
                      <Compass size={18} strokeWidth={2.5} />
                      Start Exploring
                    </span>
                  </Link>
                  <Link to="/learn-more" className="btn-secondary">
                    <span className="flex items-center gap-2">
                      Learn More About the Project
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}