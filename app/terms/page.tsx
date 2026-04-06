import type { Metadata } from 'next'
import styles from './page.module.css'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of service for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: 2026-04-06</p>
        <div className={styles.content}>
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using {siteConfig.url}, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          <h2>Services</h2>
          <p>{siteConfig.name} provides professional rodent control services in Savannah, GA and surrounding areas. Service availability, pricing, and scheduling are subject to change. All services are performed by licensed pest control professionals.</p>
          <h2>Limitation of Liability</h2>
          <p>{siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services. Our liability is limited to the cost of the services provided.</p>
          <h2>Service Guarantee</h2>
          <p>Our satisfaction guarantee is subject to specific terms communicated at the time of service. The guarantee applies to the specific treatment performed and does not cover new infestations or areas not treated in the original service.</p>
          <h2>Contact</h2>
          <p>Questions? Contact us at {siteConfig.email} or {siteConfig.phone}. Address: {siteConfig.address}.</p>
        </div>
      </div>
    </section>
  )
}
