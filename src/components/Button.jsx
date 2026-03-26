import React from 'react'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  icon: Icon,
  className = '',
  ...props 
}) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  
  const sizeClass = size === 'large' 
    ? '!py-4 !px-8 !text-base' 
    : size === 'small' 
    ? '!py-[10px] !px-5 !text-[0.8125rem]' 
    : ''

  return (
    <button className={`${baseClass} ${sizeClass} ${className}`} {...props}>
      <span className="flex items-center gap-2 relative z-10">
        {Icon && <Icon size={size === 'large' ? 18 : 16} strokeWidth={2.5} />}
        {children}
      </span>
    </button>
  )
}