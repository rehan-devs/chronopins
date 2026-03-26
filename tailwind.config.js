/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#0a0a0a',
          tertiary: '#111111',
          card: 'rgba(255, 255, 255, 0.03)',
          'card-hover': 'rgba(255, 255, 255, 0.06)',
        },
        text: {
          primary: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(255, 255, 255, 0.6)',
          tertiary: 'rgba(255, 255, 255, 0.4)',
          muted: 'rgba(255, 255, 255, 0.3)',
        },
        accent: {
          primary: '#8B5CF6',
          secondary: '#6D28D9',
          tertiary: '#A78BFA',
          glow: 'rgba(139, 92, 246, 0.15)',
          'glow-strong': 'rgba(139, 92, 246, 0.3)',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          pink: '#EC4899',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          default: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.12)',
          accent: 'rgba(139, 92, 246, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-md': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'hero-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'section-title': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title-sm': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'card-title': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'card-xl': '24px',
        'btn': '12px',
        'btn-full': '100px',
      },
      boxShadow: {
        'glow': '0 0 60px rgba(139, 92, 246, 0.15)',
        'glow-lg': '0 0 120px rgba(139, 92, 246, 0.2)',
        'glow-sm': '0 0 30px rgba(139, 92, 246, 0.1)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        'nav': '20px',
      },
      spacing: {
        'section': '140px',
        'section-sm': '80px',
      }
    },
  },
  plugins: [],
}