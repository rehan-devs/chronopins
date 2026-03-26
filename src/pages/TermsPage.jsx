import React from 'react'
import { FileText } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using ChronoPins, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform.'
  },
  {
    title: '2. User Accounts',
    content: 'You must be at least 13 years old to create an account. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.'
  },
  {
    title: '3. User Content',
    content: 'You retain ownership of all content you post to ChronoPins, including text, photos, audio recordings, and other media. By posting content, you grant ChronoPins a non-exclusive, worldwide license to display, distribute, and promote your content within the platform.'
  },
  {
    title: '4. Acceptable Use',
    content: 'You agree not to post content that is hateful, threatening, or discriminatory; infringes on intellectual property rights; contains spam or commercial advertising; or violates any applicable laws. We reserve the right to remove content that violates these terms.'
  },
  {
    title: '5. Legacy Lock Terms',
    content: 'Messages sealed with Legacy Lock are subject to the unlock date you specify. ChronoPins is not liable for messages that cannot be recovered due to account deletion or technical issues. We recommend keeping backup copies of important messages.'
  },
  {
    title: '6. Intellectual Property',
    content: 'The ChronoPins platform, including its design, code, and branding, is protected by intellectual property laws. The open-source components are available under their respective licenses as specified in each repository.'
  },
  {
    title: '7. Limitation of Liability',
    content: 'ChronoPins is provided on an "as is" basis. We do not guarantee the accuracy of AI-generated historical reconstructions. We are not liable for any damages arising from your use of the platform.'
  },
  {
    title: '8. Termination',
    content: 'We may suspend or terminate your account if you violate these terms. You may delete your account at any time. Upon termination, your pins will be removed from the public map within 30 days.'
  },
  {
    title: '9. Governing Law',
    content: 'These terms are governed by the laws of the State of California, United States. Any disputes will be resolved through binding arbitration.'
  },
]

export default function TermsPage() {
  return (
    <PageTransition>
      <PageHero
        badge="Legal"
        badgeIcon={FileText}
        title="Terms of Service"
        description="Last updated: January 1, 2025. Please read these terms carefully before using ChronoPins."
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
                  Questions? Contact <span className="text-[#A78BFA] font-medium">legal@chronopins.app</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}