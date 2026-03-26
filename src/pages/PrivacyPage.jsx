import React from 'react'
import { Shield } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'When you create an account, we collect your email address and display name. When you drop a pin, we store the location coordinates, text content, media files, and associated metadata you provide. We also collect basic usage analytics to improve the service.'
  },
  {
    title: '2. How We Use Your Information',
    content: 'Your information is used to display your pins on the public map, enable community features like comments and reactions, send you relevant notifications, and improve the ChronoPins platform. We do not sell your personal data to third parties.'
  },
  {
    title: '3. Legacy Lock Encryption',
    content: 'Messages sealed with Legacy Lock are encrypted using AES-256 encryption. The decryption key is time-locked and cannot be accessed by ChronoPins staff or any third party before the specified unlock date. We have no ability to read locked messages.'
  },
  {
    title: '4. Data Storage & Security',
    content: 'Your data is stored on encrypted servers with SOC 2 Type II certification. We implement industry-standard security measures including TLS encryption, regular security audits, and strict access controls for our infrastructure.'
  },
  {
    title: '5. Your Rights',
    content: 'You can download all your data, edit or delete any pin you have created, close your account at any time, and request complete data deletion. We respond to all data requests within 30 days.'
  },
  {
    title: '6. Audio & Media Files',
    content: 'Audio recordings, photos, and other media you upload are stored securely and displayed only in the context of your pins. You retain full ownership of all media you upload. By uploading, you grant ChronoPins a license to display the content on the platform.'
  },
  {
    title: '7. Cookies',
    content: 'We use essential cookies for authentication and session management. We use analytics cookies only with your consent. You can manage your cookie preferences at any time through the cookie settings panel.'
  },
  {
    title: '8. Changes to This Policy',
    content: 'We will notify you of any material changes to this privacy policy via email and an in-app notification at least 30 days before the changes take effect.'
  },
]

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Legal"
        badgeIcon={Shield}
        title="Privacy Policy"
        description="Last updated: January 1, 2025. Your privacy matters. Here is exactly how we handle your data."
      />

      <section className="pb-[60px] md:pb-[120px]">
        <div className="container-main">
          <div className="max-w-[700px] mx-auto space-y-8">
            {sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div>
                  <h3 className="text-[1.0625rem] font-semibold text-white mb-3">{section.title}</h3>
                  <p className="text-[0.9375rem] text-white/45 leading-[1.8]">{section.content}</p>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.4}>
              <div className="pt-8 border-t border-white/[0.06]">
                <p className="text-[0.875rem] text-white/30">
                  Questions about privacy? Contact us at <span className="text-[#A78BFA] font-medium">privacy@chronopins.app</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}