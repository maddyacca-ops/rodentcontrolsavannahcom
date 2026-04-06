import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import styles from './page.module.css'
import CallCTA from '@/components/CallCTA/CallCTA'
import TrustBar from '@/components/TrustBar/TrustBar'
import Reviews from '@/components/Reviews/Reviews'
import FAQ from '@/components/FAQ/FAQ'
import MapEmbed from '@/components/MapEmbed/MapEmbed'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Savannah Rodent Control | Expert Rat & Mice Removal in Savannah, GA',
  description: 'Professional rodent control in Savannah, GA. Same-day rat and mice removal, exclusion, and cleanup services. Licensed & insured. Call (912) 305-0115 for a free quote.',
  alternates: {
    canonical: 'https://rodentcontrolsavannah.com',
  },
  openGraph: {
    title: 'Savannah Rodent Control | Expert Rat & Mice Removal',
    description: 'Same-day rodent control services in Savannah, GA. Licensed, insured, guaranteed.',
    url: 'https://rodentcontrolsavannah.com',
  },
}

const faqs = [
  { q: 'How fast can you respond to a rodent emergency in Savannah?', a: 'We offer same-day and emergency service Mon–Sat 7AM–10PM. Most calls are dispatched within 1–2 hours.' },
  { q: 'What rodents do you treat in Savannah, GA?', a: 'We specialize in rats (Norway and roof rats) and mice. We also handle squirrels in attics and other small rodents on a case-by-case basis.' },
  { q: 'Is your rodent control safe for pets and children?', a: 'Yes. We use family-safe, EPA-registered products. Our technicians will advise on any temporary precautions specific to your home.' },
  { q: 'Do you offer a guarantee?', a: 'Absolutely. We back every service with a satisfaction guarantee. If rodents return within the coverage period, we return at no charge.' },
  { q: 'What areas do you serve around Savannah?', a: "We serve all of Savannah including Downtown, Midtown, Ardsley Park, Isle of Hope, Windsor Forest, Southbridge, and 40+ surrounding neighborhoods." },
  { q: 'How do I prevent rodents from coming back?', a: 'Exclusion is the key — sealing every entry point. We offer full rodent exclusion and proofing services that physically prevent re-entry.' },
]

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-home"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Savannah Rodent Control",
  "url": "https://rodentcontrolsavannah.com",
  "telephone": "(912) 305-0115",
  "email": "info@rodentcontrolsavannah.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "412 E Park Ave",
    "addressLocality": "Savannah",
    "addressRegion": "GA",
    "postalCode": "31401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.0535",
    "longitude": "-81.0998"
  },
  "openingHours": "Mo-Sa 07:00-22:00",
  "areaServed": "Savannah, Georgia",
  "sameAs": [
    "https://x.com/SavannahRodentCtrl",
    "https://www.instagram.com/savannahrodentcontrol/"
  ]
}`,
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="badge">Savannah, GA Rodent Specialists</span>
            <h1>Savannah's Most Trusted<br/><span className="text-green">Rodent Control</span> Experts</h1>
            <p className={styles.heroSub}>Fast, guaranteed elimination of rats and mice from your home or business. Serving all of Savannah and surrounding neighborhoods. Available Mon–Sat, 7AM–10PM.</p>
            <div className={styles.heroCtas}>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary">
                📞 Call for Free Quote
              </a>
              <Link href="/services/rodent-inspection-services" className="btn btn-outline">
                Learn About Inspections
              </Link>
            </div>
            <p className={styles.address}>📍 {siteConfig.address}</p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              alt="Professional rodent control technician in Savannah, GA"
              width={580}
              height={420}
              priority
              className={styles.img}
            />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="section section-dark">
        <div className="container">
          <div className="badge">Complete Pest Solutions</div>
          <h2>Our Rodent Control Services in Savannah, GA</h2>
          <p className={styles.sectionSub}>From emergency rat removal to long-term exclusion, we offer the full spectrum of rodent control services for homes and businesses across Savannah, Georgia.</p>
          <div className={styles.servicesGrid}>
          <Link key="rat-control" href="/services/rat-control" className={styles.serviceCard}><span>Rat Control</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="mice-control" href="/services/mice-control" className={styles.serviceCard}><span>Mice Control</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="rodent-removal" href="/services/rodent-removal" className={styles.serviceCard}><span>Rodent Removal</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="emergency-rodent-removal" href="/services/emergency-rodent-removal" className={styles.serviceCard}><span>Emergency Rodent Removal</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="same-day-rat-removal" href="/services/same-day-rat-removal" className={styles.serviceCard}><span>Same-Day Rat Removal</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="mouse-infestation-treatment" href="/services/mouse-infestation-treatment" className={styles.serviceCard}><span>Mouse Infestation Treatment</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="residential-rodent-control" href="/services/residential-rodent-control" className={styles.serviceCard}><span>Residential Rodent Control</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="commercial-rodent-control" href="/services/commercial-rodent-control" className={styles.serviceCard}><span>Commercial Rodent Control</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="apartment-property-management-rodent-control" href="/services/apartment-property-management-rodent-control" className={styles.serviceCard}><span>Apartment & Property Management Rodent Control</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="warehouse-rodent-control" href="/services/warehouse-rodent-control" className={styles.serviceCard}><span>Warehouse Rodent Control</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="rodent-exclusion-services" href="/services/rodent-exclusion-services" className={styles.serviceCard}><span>Rodent Exclusion Services</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="rat-proofing-services" href="/services/rat-proofing-services" className={styles.serviceCard}><span>Rat Proofing Services</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="mouse-proofing-sealing-entry-points" href="/services/mouse-proofing-sealing-entry-points" className={styles.serviceCard}><span>Mouse Proofing & Sealing Entry Points</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="crawl-space-rodent-sealing" href="/services/crawl-space-rodent-sealing" className={styles.serviceCard}><span>Crawl Space Rodent Sealing</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="attic-rodent-proofing" href="/services/attic-rodent-proofing" className={styles.serviceCard}><span>Attic Rodent Proofing</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="rodent-droppings-cleanup" href="/services/rodent-droppings-cleanup" className={styles.serviceCard}><span>Rodent Droppings Cleanup</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="rat-nest-removal" href="/services/rat-nest-removal" className={styles.serviceCard}><span>Rat Nest Removal</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="attic-rodent-cleanup-sanitization" href="/services/attic-rodent-cleanup-sanitization" className={styles.serviceCard}><span>Attic Rodent Cleanup & Sanitization</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="insulation-replacement-after-rodent-damage" href="/services/insulation-replacement-after-rodent-damage" className={styles.serviceCard}><span>Insulation Replacement After Rodent Damage</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          <Link key="rodent-inspection-services" href="/services/rodent-inspection-services" className={styles.serviceCard}><span>Rodent Inspection Services</span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <div className="badge">Why Choose Us</div>
              <h2>Savannah's Rodent Control Specialists Since {siteConfig.founded}</h2>
              <p>At {siteConfig.name}, we understand the unique rodent pressures that Savannah's humid climate and historic building stock create. From the Victorian District's older homes to the modern subdivisions in Windsor Forest, we've seen every type of infestation — and solved every one.</p>
              <p className="mt-1">Our certified technicians use a three-phase approach: thorough inspection, targeted elimination, and permanent exclusion. We don't just treat the symptom — we fix the problem for good.</p>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary mt-2">Call {siteConfig.phone}</a>
            </div>
            <div className={styles.whyPoints}>
              {[
                ['⚡ Same-Day Response', 'Most calls dispatched within 1–2 hours across Savannah.'],
                ['🎓 Certified Technicians', 'State-licensed pest control professionals with extensive rodent training.'],
                ['🔒 Permanent Exclusion', 'We seal every entry point — not just trap the rodents.'],
                ['💰 Free Estimates', 'Honest, upfront pricing with no hidden fees.'],
                ['🏠 Local & Family-Owned', 'We live and work in the Savannah community.'],
                ['✅ Guaranteed Results', 'We stand behind every job with a satisfaction guarantee.'],
              ].map(([title, desc], i) => (
                <div key={i} className={styles.whyPoint}>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallCTA />

      <Reviews />

      {/* SERVICE AREAS */}
      <section className="section section-dark">
        <div className="container">
          <div className="badge">Coverage Map</div>
          <h2>Rodent Control Across All of Savannah</h2>
          <p className={styles.sectionSub}>We serve all Savannah neighborhoods and surrounding communities. Same-day service available throughout our coverage area.</p>
          <div className={styles.areasGrid}>
          <Link key="ardsley-park" href="/areas/ardsley-park" className={styles.areaChip}>Ardsley Park</Link>
          <Link key="baldwin-park" href="/areas/baldwin-park" className={styles.areaChip}>Baldwin Park</Link>
          <Link key="barry" href="/areas/barry" className={styles.areaChip}>Barry</Link>
          <Link key="beach-institute" href="/areas/beach-institute" className={styles.areaChip}>Beach Institute</Link>
          <Link key="beechwood" href="/areas/beechwood" className={styles.areaChip}>Beechwood</Link>
          <Link key="berkshire-woods" href="/areas/berkshire-woods" className={styles.areaChip}>Berkshire Woods</Link>
          <Link key="bingville" href="/areas/bingville" className={styles.areaChip}>Bingville</Link>
          <Link key="bonaventure" href="/areas/bonaventure" className={styles.areaChip}>Bonaventure</Link>
          <Link key="bradley-point" href="/areas/bradley-point" className={styles.areaChip}>Bradley Point</Link>
          <Link key="burnside-island" href="/areas/burnside-island" className={styles.areaChip}>Burnside Island</Link>
          <Link key="cann-park" href="/areas/cann-park" className={styles.areaChip}>Cann Park</Link>
          <Link key="carver-heights" href="/areas/carver-heights" className={styles.areaChip}>Carver Heights</Link>
          <Link key="chatham-parkway" href="/areas/chatham-parkway" className={styles.areaChip}>Chatham Parkway</Link>
          <Link key="coffee-bluff" href="/areas/coffee-bluff" className={styles.areaChip}>Coffee Bluff</Link>
          <Link key="cuyler-brownsville" href="/areas/cuyler-brownsville" className={styles.areaChip}>Cuyler Brownsville</Link>
          <Link key="deerfield" href="/areas/deerfield" className={styles.areaChip}>Deerfield</Link>
          <Link key="derenne-plaza" href="/areas/derenne-plaza" className={styles.areaChip}>Derenne Plaza</Link>
          <Link key="downtown" href="/areas/downtown" className={styles.areaChip}>Downtown</Link>
          <Link key="east-savannah" href="/areas/east-savannah" className={styles.areaChip}>East Savannah</Link>
          <Link key="fairmont" href="/areas/fairmont" className={styles.areaChip}>Fairmont</Link>
            <Link href="/areas/downtown" className={styles.areaChip}>+ View All Areas</Link>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <MapEmbed
        query="Savannah Rodent Control, 412 E Park Ave, Savannah GA"
        label="Savannah, GA"
      />
    </>
  )
}
