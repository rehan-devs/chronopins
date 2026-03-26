import React from 'react'
import { Cookie } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const cookieTypes = [
  {
    name: 'Essential Cookies',
    required: true,
    description: 'These cookies are necessary for the website to function properly. They enable core features like authentication, session management, and security. These cannot be disabled.',
    examples: ['Session authentication', 'CSRF protection', 'Load balancer routing'],
    color: '#34D399',
  },
  {
    name: 'Analytics Cookies',
    required: false,
    description: 'These help us understand how visitors interact with ChronoPins. We use this data to improve features and fix issues. All analytics data is anonymized.',
    examples: ['Page views and navigation paths', 'Feature usage frequency', 'Performance metrics'],
    color: '#60A5FA',
  },
  {
    name: 'Preference Cookies',
    required: false,
    description: 'These remember your settings and preferences, such as your preferred map view, timeline position, and interface language.',
    examples: ['Map zoom level and center', 'Timeline position', 'Theme preferences'],
    color: '#A78BFA',
  },
]

export default function CookiesPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Legal"
        badgeIcon={Cookie}
        title="Cookie Policy"
        description="Last updated: January 1, 2025. We use cookies sparingly and transparently."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <div className="max-w-[700px] mx-auto">
            <AnimatedSection>
              <div className="card-base p-6 md:p-8 mb-8">
                <h3 className="text-[1.0625rem] font-semibold text-white mb-3">What Are Cookies?</h3>
                <p className="text-[0.9375rem] text-white/45 leading-[1.8]">
                  Cookies are small text files stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use ChronoPins.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-5">
              {cookieTypes.map((cookie, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="card-base p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-[1.0625rem] font-semibold text-white">{cookie.name}</h3>
                      <span className={`text-[0.6875rem] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                        cookie.required
                          ? 'bg-[#34D399]/10 text-[#34D399]'
                          : 'bg-white/[0.05] text-white/40'
                      }`}>
                        {cookie.required ? 'Required' : 'Optional'}
                      </span>
                    </div>

                    <p className="text-[0.9375rem] text-white/45 leading-[1.8] mb-4">{cookie.description}</p>

                    <div>
                      <span className="text-[0.75rem] text-white/25 uppercase tracking-wider font-medium">Examples:</span>
                      <ul className="mt-2 space-y-1.5">
                        {cookie.examples.map((ex, j) => (
                          <li key={j} className="text-[0.875rem] text-white/35 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: cookie.color }} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3} className="mt-8">
              <div className="card-base p-6 md:p-8 text-center">
                <p className="text-[0.9375rem] text-white/45 leading-[1.7] mb-4">
                  You can manage your cookie preferences at any time.
                </p>
                <button className="btn-secondary !text-[0.875rem]">
                  <span>Manage Cookie Preferences</span>
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}