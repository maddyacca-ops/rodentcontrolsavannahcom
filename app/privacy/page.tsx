import type { Metadata } from 'next'
import styles from './page.module.css'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: 2026-04-06</p>
        <div className={styles.content}>
          <h2>Information We Collect</h2>
          <p>{siteConfig.name} ("we", "us", "our") operates {siteConfig.url}. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service. We collect information you provide when you contact us by phone or email, including your name, phone number, address, and details about your rodent control needs.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to provide and improve our rodent control services, respond to inquiries, schedule service appointments, and communicate with you about our services.</p>
          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to service providers who assist us in operating our business.</p>
          <h2>Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, although this may affect certain features of our site.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this privacy policy, contact us at {siteConfig.email} or call {siteConfig.phone}. Our address is {siteConfig.address}.</p>
        </div>
      </div>
    </section>
  )
}
