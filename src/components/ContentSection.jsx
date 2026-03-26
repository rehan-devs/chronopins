import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function ContentSection({ children, className = '' }) {
  return (
    <section className={`py-[40px] md:py-[80px] ${className}`}>
      <div className="container-main relative z-10">
        {children}
      </div>
    </section>
  )
}