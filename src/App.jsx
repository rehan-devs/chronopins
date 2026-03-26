import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import MapPage from './pages/MapPage'
import TimelinePage from './pages/TimelinePage'
import AudioLayerPage from './pages/AudioLayerPage'
import AIPortraitsPage from './pages/AIPortraitsPage'
import StoriesPage from './pages/StoriesPage'
import NeighborhoodsPage from './pages/NeighborhoodsPage'
import ContributorsPage from './pages/ContributorsPage'
import GuidelinesPage from './pages/GuidelinesPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import OpenSourcePage from './pages/OpenSourcePage'
import PressKitPage from './pages/PressKitPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import DropPinPage from './pages/DropPinPage'
import LearnMorePage from './pages/LearnMorePage'

function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="glow-orb"
          style={{
            width: '600px',
            height: '600px',
            background: 'rgba(139, 92, 246, 0.06)',
            top: '-200px',
            right: '-200px',
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: '500px',
            height: '500px',
            background: 'rgba(59, 130, 246, 0.04)',
            bottom: '20%',
            left: '-150px',
          }}
        />
      </div>

      <Navbar />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/audio-layer" element={<AudioLayerPage />} />
          <Route path="/ai-portraits" element={<AIPortraitsPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/open-source" element={<OpenSourcePage />} />
          <Route path="/press-kit" element={<PressKitPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/drop-pin" element={<DropPinPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App