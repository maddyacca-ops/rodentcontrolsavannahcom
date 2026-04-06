import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import CallCTA from '@/components/CallCTA/CallCTA'
import FAQ from '@/components/FAQ/FAQ'
import TrustBar from '@/components/TrustBar/TrustBar'
import MapEmbed from '@/components/MapEmbed/MapEmbed'
import { getArea, areas } from '@/lib/areas'
import { services } from '@/lib/siteConfig'
import { siteConfig } from '@/lib/siteConfig'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return areas.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea(params.slug)
  if (!area) return {}
  return {
    title: `Rodent Control in ${area.name}, Savannah GA ${area.zip} | ${siteConfig.name}`,
    description: `Professional rat and mice control in ${area.name}, Savannah GA. Same-day rodent removal and exclusion services. Licensed & insured. Call ${siteConfig.phone}.`,
    alternates: {
      canonical: `${siteConfig.url}/areas/${params.slug}`,
    },
    openGraph: {
      title: `Rodent Control in ${area.name}, Savannah GA`,
      description: `Expert rodent removal in ${area.name}. Same-day service. Call ${siteConfig.phone}.`,
      url: `${siteConfig.url}/areas/${params.slug}`,
    },
    robots: { index: true, follow: true },
  }
}

const areaFaqs = (areaName: string) => [
  { q: `Do you offer same-day rodent control in ${areaName}?`, a: `Yes. We provide same-day and emergency rodent control throughout ${areaName}, Savannah, GA. Call ${siteConfig.phone} and we'll dispatch a technician as quickly as possible.` },
  { q: `What rodents are common in ${areaName}?`, a: `Savannah's humid climate makes it ideal for Norway rats, roof rats, and house mice. Properties in ${areaName} and surrounding areas face persistent pressure from these species year-round.` },
  { q: `How long does rodent treatment take in ${areaName}?`, a: `A typical residential treatment takes 1–3 hours depending on property size and infestation severity. Exclusion and sealing work may require a follow-up visit.` },
  { q: `Is your service available for commercial properties in ${areaName}?`, a: `Absolutely. We service restaurants, offices, retail stores, and any commercial property in ${areaName} and throughout Savannah, GA.` },
  { q: `How do I book rodent control in ${areaName}?`, a: `Simply call ${siteConfig.phone}. Our team will assess your situation and schedule a visit at a time that works for you, often the same day.` },
]

export default function AreaPage({ params }: Props) {
  const area = getArea(params.slug)
  if (!area) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: `${siteConfig.url}/areas/${params.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.street,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: 'US',
    },
    openingHours: siteConfig.hoursSchema,
    areaServed: `${area.name}, Savannah, ${siteConfig.stateFull}`,
    sameAs: [siteConfig.twitter, siteConfig.instagram],
  }

  const otherAreas = areas.filter(a => a.slug !== params.slug).slice(0, 16)

  return (
    <>
      <Script
        id={'schema-area-' + params.slug}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className="badge">Savannah, GA {area.zip}</span>
            <h1>Rodent Control in {area.name}, Savannah, GA</h1>
            <p className={styles.intro}>
              Professional rat and mice control services in {area.name}, Savannah, GA {area.zip}.
              {siteConfig.name} provides expert rodent elimination, exclusion, and cleanup for homes
              and businesses throughout {area.name} and surrounding Savannah neighborhoods.
              Same-day service available. Licensed, insured, and guaranteed.
            </p>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary mt-2">
              📞 Call {siteConfig.phone} — Free Quote
            </a>
            <p className={styles.addr}>📍 Serving {area.name}, Savannah, GA {area.zip} and surrounding areas</p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=520&q=80"
              alt={`Rodent control services in ${area.name}, Savannah, GA`}
              width={520}
              height={380}
              className={styles.img}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section section-dark">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.main}>
              <h2>Expert Rodent Control for {area.name} Residents & Businesses</h2>
              <p>
                Rodents are a year-round problem in {area.name}, Savannah, GA. The warm, humid
                climate of coastal Georgia creates ideal conditions for rats and mice to thrive in
                attics, crawl spaces, and wall voids. Whether you're dealing with a sudden infestation
                or want to prevent one, {siteConfig.name} has the expertise and local knowledge to help.
              </p>
              <p className="mt-1">
                Our certified technicians serve {area.name} (ZIP {area.zip}) as part of our
                comprehensive coverage of all Savannah neighborhoods. We understand the building
                styles, landscaping conditions, and seasonal patterns in this area — giving us a
                major advantage in solving rodent problems quickly and permanently.
              </p>
              <p className="mt-1">
                Our office is located at {siteConfig.address}, just minutes from {area.name}.
                We can typically dispatch same-day to addresses in this ZIP code.
              </p>

              <h3 className="mt-2">Our Services in {area.name}</h3>
              <div className={styles.servicesGrid}>
                {services.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={styles.serviceLink}>
                    {s.title} →
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.callBox}>
                <h3>Get Help in {area.name}</h3>
                <p>Same-day service available in {area.name}, Savannah, GA {area.zip}.</p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📞 {siteConfig.phone}
                </a>
                <p className={styles.hours}>{siteConfig.hours}</p>
              </div>
              <div className={styles.areaBox}>
                <h4>Nearby Areas We Serve</h4>
                {otherAreas.map(a => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} className={styles.areaLink}>
                    {a.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallCTA heading={`Rodent Control in ${area.name}, Savannah GA — Call Today`} />

      <FAQ faqs={areaFaqs(area.name)} heading={`Rodent Control FAQs — ${area.name}`} />

      <MapEmbed
        query={`${area.name}, Savannah, GA ${area.zip}`}
        label={`${area.name}, Savannah, GA`}
      />
    </>
  )
}
