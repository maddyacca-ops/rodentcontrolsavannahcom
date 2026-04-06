import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import styles from './page.module.css'
import CallCTA from '@/components/CallCTA/CallCTA'
import TrustBar from '@/components/TrustBar/TrustBar'
import MapEmbed from '@/components/MapEmbed/MapEmbed'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: `About ${siteConfig.name} | Savannah, GA Rodent Control Specialists`,
  description: `Learn about ${siteConfig.name} — Savannah's trusted rodent control experts. Licensed, insured, and locally owned. Call ${siteConfig.phone} for a free quote.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    foundingDate: siteConfig.founded,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.street,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
    },
  }

  return (
    <>
      <Script id="schema-about" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className="badge">About Us</span>
            <h1>Savannah's Rodent Control Specialists</h1>
            <p>{siteConfig.name} was founded with a single mission: to give Savannah homeowners and businesses a reliable, expert solution to rodent infestations. We combine deep local knowledge of Savannah's neighborhoods with proven pest control methods and a genuine commitment to our community.</p>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary mt-2">📞 {siteConfig.phone}</a>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80"
              alt="Savannah Rodent Control team of professionals"
              width={500} height={380}
              className={styles.img} loading="lazy"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section section-dark">
        <div className="container">
          <div className={styles.grid}>
            <div>
              <h2>Our Story</h2>
              <p>Founded in {siteConfig.founded}, {siteConfig.name} was born from a frustration shared by many Savannah residents: too many pest control companies treat rodents as an afterthought. We specialize exclusively in rodents — rats, mice, and the exclusion work that keeps them out permanently.</p>
              <p className="mt-1">Our team understands how Savannah's beautiful live oak canopy, historic building stock, and coastal humidity create unique rodent pressures that generic pest control approaches simply don't address. We've built our entire service menu around the specific needs of this community.</p>
              <p className="mt-1">We're based at {siteConfig.address}, right here in Savannah, GA. When you call us, you're getting local experts — not a national franchise.</p>
            </div>
            <div>
              <h2>Our Approach</h2>
              <p>We believe in permanent solutions, not ongoing dependency. Our three-phase process:</p>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>01</span>
                  <div><strong>Inspect</strong><p>Thorough assessment of your entire property to identify the species, population size, entry points, and conditions contributing to the infestation.</p></div>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>02</span>
                  <div><strong>Eliminate</strong><p>Targeted removal using the most effective and appropriate methods for your specific situation, prioritizing safety for your family and pets.</p></div>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>03</span>
                  <div><strong>Exclude</strong><p>Physical sealing of every entry point so rodents cannot return. This is what separates our service from companies that only trap — we fix the structural vulnerability.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallCTA />

      <MapEmbed
        query={`${siteConfig.address}`}
        label="Savannah, GA"
      />
    </>
  )
}
