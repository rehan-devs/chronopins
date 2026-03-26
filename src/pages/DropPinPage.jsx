import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Upload, Calendar, Mic, Image, Type, Lock,
  ChevronRight, ChevronLeft, Check, X, Headphones, Globe
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const decades = ['1920s','1930s','1940s','1950s','1960s','1970s','1980s','1990s','2000s','2010s','2020s']

export default function DropPinPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    decade: '1990s',
    story: '',
    mediaType: null,
    legacyLock: false,
    unlockDate: '',
  })

  const totalSteps = 4

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-[120px] pb-[80px] md:pt-[140px] md:pb-[120px]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{
            width: '600px', height: '600px', top: '-200px', left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.06) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }} />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-[600px] mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-10">
              <div className="flex justify-center mb-5">
                <div className="section-badge">
                  <MapPin size={12} strokeWidth={2.5} />
                  Drop a Pin
                </div>
              </div>
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.1] tracking-[-0.02em] mb-4"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}
              >
                Pin a Memory to the Map
              </h1>
              <p className="text-[0.9375rem] text-white/45 leading-[1.7]">
                Your story becomes part of the world's living archive. It only takes a moment.
              </p>
            </AnimatedSection>

            {/* Progress bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.75rem] text-white/30 font-medium">Step {step} of {totalSteps}</span>
                <span className="text-[0.75rem] text-[#A78BFA] font-semibold">{Math.round((step / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #6D28D9, #A78BFA)' }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Step content */}
            <div className="card-base p-6 md:p-10 mb-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-[1.25rem] font-semibold text-white mb-6 flex items-center gap-2">
                      <MapPin size={20} className="text-[#A78BFA]" /> Location & Title
                    </h2>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-[0.8125rem] text-white/50 font-medium mb-2">Memory Title</label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => updateForm('title', e.target.value)}
                          placeholder="e.g., The Corner Bakery on 5th Street"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[0.9375rem] text-white placeholder:text-white/20 outline-none focus:border-[#A78BFA]/40 focus:bg-white/[0.05] transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-[0.8125rem] text-white/50 font-medium mb-2">Location</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => updateForm('location', e.target.value)}
                            placeholder="Search for an address or place..."
                            className="w-full px-4 py-3.5 pl-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[0.9375rem] text-white placeholder:text-white/20 outline-none focus:border-[#A78BFA]/40 focus:bg-white/[0.05] transition-all duration-200"
                          />
                          <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" />
                        </div>
                        <p className="text-[0.75rem] text-white/20 mt-2">Or click directly on the map to place your pin</p>
                      </div>

                      {/* Mini map placeholder */}
                      <div className="w-full h-[200px] rounded-xl bg-[#080810] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="dropgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#dropgrid)" />
                        </svg>
                        <div className="text-center z-10">
                          <MapPin size={28} className="text-[#A78BFA]/30 mx-auto mb-2" />
                          <p className="text-[0.8125rem] text-white/25">Click to place your pin</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-[1.25rem] font-semibold text-white mb-6 flex items-center gap-2">
                      <Calendar size={20} className="text-[#60A5FA]" /> Set the Era
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-[0.8125rem] text-white/50 font-medium mb-3">Which decade does this memory belong to?</label>
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                          {decades.map((d) => (
                            <button
                              key={d}
                              onClick={() => updateForm('decade', d)}
                              className={`py-2.5 px-3 rounded-xl text-[0.8125rem] font-semibold transition-all duration-200 cursor-pointer ${
                                formData.decade === d
                                  ? 'bg-[#A78BFA]/20 border-[#A78BFA]/40 text-[#A78BFA]'
                                  : 'bg-white/[0.03] border-white/[0.06] text-white/40 hover:bg-white/[0.05] hover:text-white/60'
                              } border`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[0.8125rem] text-white/50 font-medium mb-2">Specific year (optional)</label>
                        <input
                          type="number"
                          min="1920"
                          max="2025"
                          placeholder="e.g., 1987"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[0.9375rem] text-white placeholder:text-white/20 outline-none focus:border-[#A78BFA]/40 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-[1.25rem] font-semibold text-white mb-6 flex items-center gap-2">
                      <Type size={20} className="text-[#34D399]" /> Your Story
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-[0.8125rem] text-white/50 font-medium mb-2">Write your memory</label>
                        <textarea
                          value={formData.story}
                          onChange={(e) => updateForm('story', e.target.value)}
                          placeholder="Tell your story... What happened here? What did it look like, sound like, feel like?"
                          rows={6}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[0.9375rem] text-white placeholder:text-white/20 outline-none focus:border-[#A78BFA]/40 transition-all duration-200 resize-none leading-relaxed"
                        />
                        <p className="text-[0.75rem] text-white/20 mt-1.5 text-right">
                          {formData.story.length} characters
                        </p>
                      </div>

                      <div>
                        <label className="block text-[0.8125rem] text-white/50 font-medium mb-3">Attach media (optional)</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { type: 'photo', icon: Image, label: 'Photo', color: '#A78BFA' },
                            { type: 'audio', icon: Mic, label: 'Audio', color: '#60A5FA' },
                            { type: 'voice', icon: Headphones, label: 'Voice Note', color: '#34D399' },
                          ].map((media) => (
                            <button
                              key={media.type}
                              onClick={() => updateForm('mediaType', formData.mediaType === media.type ? null : media.type)}
                              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center gap-2 cursor-pointer ${
                                formData.mediaType === media.type
                                  ? 'border-white/[0.15] bg-white/[0.05]'
                                  : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]'
                              }`}
                            >
                              <media.icon size={22} style={{ color: formData.mediaType === media.type ? media.color : 'rgba(255,255,255,0.25)' }} strokeWidth={1.8} />
                              <span className={`text-[0.75rem] font-medium ${formData.mediaType === media.type ? 'text-white/70' : 'text-white/30'}`}>
                                {media.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {formData.mediaType && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4"
                          >
                            <div className="rounded-xl border-2 border-dashed border-white/[0.08] p-8 text-center cursor-pointer hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-200">
                              <Upload size={24} className="text-white/20 mx-auto mb-2" />
                              <p className="text-[0.8125rem] text-white/30">
                                Click to upload or drag and drop
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-[1.25rem] font-semibold text-white mb-6 flex items-center gap-2">
                      <Lock size={20} className="text-[#FBBF24]" /> Legacy Lock (Optional)
                    </h2>

                    <div className="space-y-6">
                      <div
                        className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                          formData.legacyLock
                            ? 'border-[#FBBF24]/30 bg-[#FBBF24]/[0.05]'
                            : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03]'
                        }`}
                        onClick={() => updateForm('legacyLock', !formData.legacyLock)}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-200 ${
                            formData.legacyLock ? 'border-[#FBBF24] bg-[#FBBF24]' : 'border-white/[0.15]'
                          }`}>
                            {formData.legacyLock && <Check size={12} className="text-black" strokeWidth={3} />}
                          </div>
                          <div>
                            <h4 className="text-[1rem] font-semibold text-white mb-1">Seal this memory</h4>
                            <p className="text-[0.8125rem] text-white/40 leading-relaxed">
                              Lock this pin so it cannot be read until a specific future date. The message will be encrypted and hidden from everyone — including you — until the unlock day arrives.
                            </p>
                          </div>
                        </div>
                      </div>

                      {formData.legacyLock && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-[0.8125rem] text-white/50 font-medium mb-2">Unlock Date</label>
                            <input
                              type="date"
                              value={formData.unlockDate}
                              onChange={(e) => updateForm('unlockDate', e.target.value)}
                              min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[0.9375rem] text-white outline-none focus:border-[#FBBF24]/40 transition-all duration-200 [color-scheme:dark]"
                            />
                          </div>
                          <div className="p-4 rounded-xl bg-[#FBBF24]/[0.05] border border-[#FBBF24]/20">
                            <p className="text-[0.8125rem] text-[#FBBF24]/70 leading-relaxed flex items-start gap-2">
                              <Lock size={14} className="flex-shrink-0 mt-0.5" />
                              Once sealed, this message cannot be read, edited, or deleted by anyone until the unlock date.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* Review summary */}
                      <div className="pt-6 border-t border-white/[0.06]">
                        <h4 className="text-[0.9375rem] font-semibold text-white mb-4">Review Your Pin</h4>
                        <div className="space-y-3">
                          {[
                            { label: 'Title', value: formData.title || 'Not set' },
                            { label: 'Location', value: formData.location || 'Not set' },
                            { label: 'Era', value: formData.decade },
                            { label: 'Story', value: formData.story ? `${formData.story.substring(0, 60)}...` : 'Not written' },
                            { label: 'Media', value: formData.mediaType ? formData.mediaType.charAt(0).toUpperCase() + formData.mediaType.slice(1) : 'None' },
                            { label: 'Legacy Lock', value: formData.legacyLock ? `Locked until ${formData.unlockDate || 'date not set'}` : 'No' },
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                              <span className="text-[0.8125rem] text-white/30">{item.label}</span>
                              <span className="text-[0.8125rem] text-white/60 font-medium text-right max-w-[60%] truncate">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`btn-secondary !text-[0.875rem] ${step === 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className="flex items-center gap-2">
                  <ChevronLeft size={16} /> Back
                </span>
              </button>

              {step < totalSteps ? (
                <button
                  onClick={() => setStep(Math.min(totalSteps, step + 1))}
                  className="btn-primary !text-[0.875rem] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    Continue <ChevronRight size={16} />
                  </span>
                </button>
              ) : (
                <button className="btn-primary !text-[0.875rem] cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #34D399, #059669)' }}
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={16} /> Drop Your Pin
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}