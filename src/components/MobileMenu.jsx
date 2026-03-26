import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

export default function MobileMenu({ links, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute right-0 top-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/[0.06] pt-[88px] px-6"
      >
        <div className="flex flex-col gap-1">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
            >
              <Link
                to={link.href}
                onClick={onClose}
                className="block py-3 px-4 text-[1rem] font-medium text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 pt-6 border-t border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/drop-pin" onClick={onClose} className="btn-primary w-full !text-[0.875rem]">
            <span className="flex items-center justify-center gap-2">
              <MapPin size={16} strokeWidth={2.5} />
              Drop a Pin
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}