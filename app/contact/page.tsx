import type { Metadata } from 'next'
import Script from 'next/script'
import styles from './page.module.css'
import MapEmbed from '@/components/MapEmbed/MapEmbed'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: `Contact ${siteConfig.name} | Savannah, GA Rodent Control`,
  description: `Contact ${siteConfig.name} for expert rodent control in Savannah, GA. Call ${siteConfig.phone} for same-day service. Located at ${siteConfig.address}.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">Get In Touch</span>
          <h1>Contact {siteConfig.name}</h1>
          <p className={styles.sub}>Ready to solve your rodent problem? We're available Mon–Sat, 7AM–10PM. Call us for the fastest response — same-day service available throughout Savannah, GA.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className={styles.grid}>
            <div>
              <h2>Reach Us Directly</h2>
              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
                    <p>{siteConfig.hours}</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <span className={styles.icon}>📧</span>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    <p>We respond within 1 business day</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <span className={styles.icon}>📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>{siteConfig.address}</p>
                    <p>Savannah, GA {siteConfig.zip}</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <span className={styles.icon}>🕐</span>
                  <div>
                    <strong>Hours</strong>
                    <p>Monday – Saturday</p>
                    <p>7:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className={styles.cta}>
                <h3>Fastest Response: Call Us</h3>
                <p>For same-day service, please call. We're ready to help immediately.</p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary">
                  📞 Call {siteConfig.phone}
                </a>
              </div>
            </div>
            <div>
              <h2>Service Coverage</h2>
              <p style={{ color: 'var(--gray)', marginTop: '0.75rem' }}>We serve all of Savannah, GA and surrounding communities including:</p>
              <ul className={styles.areaList}>
                {['Downtown Savannah', 'Ardsley Park', 'Midtown', 'Isle of Hope', 'Victorian District',
                  'Windsor Forest', 'Southbridge', 'Forest Park', 'Burnside Island', 'Coffee Bluff',
                  'Gordonston', 'The Landings', 'Vernonburg', 'Bradley Point'].map(a => (
                  <li key={a}>✅ {a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MapEmbed
        query={`${siteConfig.address}`}
        label="Our Savannah, GA Location"
      />
    </>
  )
}
