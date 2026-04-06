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
import { getService, services } from '@/lib/services'
import { siteConfig } from '@/lib/siteConfig'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: `${service.title} in Savannah, GA | ${siteConfig.name}`,
    description: service.description,
    alternates: {
      canonical: `${siteConfig.url}/services/${params.slug}`,
    },
    openGraph: {
      title: `${service.title} in Savannah, GA`,
      description: service.description,
      url: `${siteConfig.url}/services/${params.slug}`,
    },
    robots: { index: true, follow: true },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.street,
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        postalCode: siteConfig.zip,
      },
    },
    areaServed: `${siteConfig.city}, ${siteConfig.stateFull}`,
    serviceType: service.title,
  }

  const allServices = services.filter(s => s.slug !== params.slug).slice(0, 8)

  return (
    <>
      <Script
        id={'schema-service-' + params.slug}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className="badge">Savannah, GA</span>
            <h1>{service.title} in Savannah, GA</h1>
            <p className={styles.intro}>{service.intro}</p>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary mt-2">
              📞 Call {siteConfig.phone} — Free Quote
            </a>
            <p className={styles.addr}>📍 {siteConfig.address}</p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=520&q=80"
              alt={`${service.title} technician in Savannah, GA`}
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
              <h2>Why Savannah Homeowners Choose {siteConfig.name} for {service.title}</h2>
              <p>When it comes to {service.title.toLowerCase()} in Savannah, GA, experience and local knowledge matter. Our technicians have worked across Savannah's diverse neighborhoods — from the historic Victorian District to modern subdivisions in Southbridge — and understand the specific rodent pressures each area faces.</p>
              <p className="mt-1">We use a proven approach: comprehensive inspection, targeted treatment, and permanent exclusion. Every service is backed by our satisfaction guarantee. Located at {siteConfig.address}, we're always nearby when you need us.</p>

              <h3 className="mt-2">What's Included in Our {service.title} Service</h3>
              <ul className={styles.included}>
                <li>✅ Full property inspection and rodent assessment</li>
                <li>✅ Identification of all active entry points</li>
                <li>✅ Targeted rodent elimination using proven methods</li>
                <li>✅ Entry point sealing and exclusion work</li>
                <li>✅ Written report with findings and recommendations</li>
                <li>✅ Follow-up visit if needed within warranty period</li>
              </ul>

              <h3 className="mt-2">Signs You Need {service.title}</h3>
              <p>If you're noticing droppings, gnaw marks, strange noises in walls or ceilings, or have spotted live or dead rodents, don't wait. Rodent infestations grow rapidly in Savannah's warm climate. Call {siteConfig.phone} for immediate assistance.</p>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.callBox}>
                <h3>Get a Free Quote</h3>
                <p>Same-day service available throughout Savannah, GA.</p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📞 {siteConfig.phone}
                </a>
                <p className={styles.hours}>{siteConfig.hours}</p>
              </div>
              <div className={styles.relBox}>
                <h4>Related Services</h4>
                {allServices.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={styles.relLink}>
                    {s.title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallCTA heading={`Ready for Professional ${service.title} in Savannah?`} />

      <FAQ faqs={service.faqs} heading={`${service.title} FAQs`} />

      <section className="section section-dark">
        <div className="container">
          <h2>Areas We Serve for {service.title}</h2>
          <p>We provide {service.title.toLowerCase()} throughout Savannah and surrounding communities:</p>
          <div className={styles.areasGrid}>
            {[
              ['downtown', 'Downtown Savannah'],
              ['ardsley-park', 'Ardsley Park'],
              ['midtown', 'Midtown'],
              ['isle-of-hope', 'Isle of Hope'],
              ['victorian-district', 'Victorian District'],
              ['windsor-forest', 'Windsor Forest'],
              ['southbridge', 'Southbridge'],
              ['forest-park', 'Forest Park'],
            ].map(([slug, name]) => (
              <Link key={slug} href={`/areas/${slug}`} className={styles.areaChip}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MapEmbed
        query={`${siteConfig.address}`}
        label="Savannah, GA"
      />
    </>
  )
}
