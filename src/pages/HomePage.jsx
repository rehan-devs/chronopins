import React from 'react'
import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import MapSection from '../components/MapSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <HowItWorks />
      <MapSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </PageTransition>
  )
}