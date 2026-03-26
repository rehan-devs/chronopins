import React from 'react'

export default function SectionBadge({ children, icon: Icon }) {
  return (
    <div className="section-badge">
      {Icon && <Icon size={12} strokeWidth={2.5} />}
      {children}
    </div>
  )
}