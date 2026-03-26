import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ children, className = '', delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`card-base p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}