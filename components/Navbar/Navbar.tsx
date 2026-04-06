"use client"
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { siteConfig } from '@/lib/siteConfig'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🐀</span>
          <span>
            <span className={styles.logoLine1}>SAVANNAH</span>
            <span className={styles.logoLine2}>RODENT CONTROL</span>
          </span>
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>About</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={styles.dropToggle} onClick={() => setServicesOpen(o => !o)}>
              Services <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
            {servicesOpen && (
              <div className={styles.dropMenu}>
                <a href="/services/rat-control" className={styles.dropLink}>Rat Control</a>
              <a href="/services/mice-control" className={styles.dropLink}>Mice Control</a>
              <a href="/services/rodent-removal" className={styles.dropLink}>Rodent Removal</a>
              <a href="/services/emergency-rodent-removal" className={styles.dropLink}>Emergency Rodent Removal</a>
              <a href="/services/same-day-rat-removal" className={styles.dropLink}>Same-Day Rat Removal</a>
              <a href="/services/mouse-infestation-treatment" className={styles.dropLink}>Mouse Infestation Treatment</a>
              <a href="/services/residential-rodent-control" className={styles.dropLink}>Residential Rodent Control</a>
              <a href="/services/commercial-rodent-control" className={styles.dropLink}>Commercial Rodent Control</a>
              <a href="/services/apartment-property-management-rodent-control" className={styles.dropLink}>Apartment & Property Management Rodent Control</a>
              <a href="/services/warehouse-rodent-control" className={styles.dropLink}>Warehouse Rodent Control</a>
              <a href="/services/rodent-exclusion-services" className={styles.dropLink}>Rodent Exclusion Services</a>
              <a href="/services/rat-proofing-services" className={styles.dropLink}>Rat Proofing Services</a>
              <a href="/services/mouse-proofing-sealing-entry-points" className={styles.dropLink}>Mouse Proofing & Sealing Entry Points</a>
              <a href="/services/crawl-space-rodent-sealing" className={styles.dropLink}>Crawl Space Rodent Sealing</a>
              <a href="/services/attic-rodent-proofing" className={styles.dropLink}>Attic Rodent Proofing</a>
              <a href="/services/rodent-droppings-cleanup" className={styles.dropLink}>Rodent Droppings Cleanup</a>
              <a href="/services/rat-nest-removal" className={styles.dropLink}>Rat Nest Removal</a>
              <a href="/services/attic-rodent-cleanup-sanitization" className={styles.dropLink}>Attic Rodent Cleanup & Sanitization</a>
              <a href="/services/insulation-replacement-after-rodent-damage" className={styles.dropLink}>Insulation Replacement After Rodent Damage</a>
              <a href="/services/rodent-inspection-services" className={styles.dropLink}>Rodent Inspection Services</a>
              </div>
            )}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button className={styles.dropToggle} onClick={() => setAreasOpen(o => !o)}>
              Service Areas <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
            {areasOpen && (
              <div className={`${styles.dropMenu} ${styles.dropMenuWide}`}>
                <div className={styles.dropCol}>
                  <a href="/areas/ardsley-park" className={styles.dropLink}>Ardsley Park</a>
              <a href="/areas/baldwin-park" className={styles.dropLink}>Baldwin Park</a>
              <a href="/areas/barry" className={styles.dropLink}>Barry</a>
              <a href="/areas/beach-institute" className={styles.dropLink}>Beach Institute</a>
              <a href="/areas/beechwood" className={styles.dropLink}>Beechwood</a>
              <a href="/areas/berkshire-woods" className={styles.dropLink}>Berkshire Woods</a>
              <a href="/areas/bingville" className={styles.dropLink}>Bingville</a>
              <a href="/areas/bonaventure" className={styles.dropLink}>Bonaventure</a>
              <a href="/areas/bradley-point" className={styles.dropLink}>Bradley Point</a>
              <a href="/areas/burnside-island" className={styles.dropLink}>Burnside Island</a>
              <a href="/areas/cann-park" className={styles.dropLink}>Cann Park</a>
              <a href="/areas/carver-heights" className={styles.dropLink}>Carver Heights</a>
              <a href="/areas/chatham-parkway" className={styles.dropLink}>Chatham Parkway</a>
              <a href="/areas/coffee-bluff" className={styles.dropLink}>Coffee Bluff</a>
              <a href="/areas/cuyler-brownsville" className={styles.dropLink}>Cuyler Brownsville</a>
              <a href="/areas/deerfield" className={styles.dropLink}>Deerfield</a>
              <a href="/areas/derenne-plaza" className={styles.dropLink}>Derenne Plaza</a>
              <a href="/areas/downtown" className={styles.dropLink}>Downtown</a>
              <a href="/areas/east-savannah" className={styles.dropLink}>East Savannah</a>
              <a href="/areas/fairmont" className={styles.dropLink}>Fairmont</a>
              <a href="/areas/forest-park" className={styles.dropLink}>Forest Park</a>
              <a href="/areas/georgetown" className={styles.dropLink}>Georgetown</a>
              <a href="/areas/gordonston" className={styles.dropLink}>Gordonston</a>
              <a href="/areas/grove-park" className={styles.dropLink}>Grove Park</a>
              <a href="/areas/highland-park" className={styles.dropLink}>Highland Park</a>
                </div>
                <div className={styles.dropCol}>
                  <a href="/areas/isle-of-hope" className={styles.dropLink}>Isle of Hope</a>
              <a href="/areas/kensington-park" className={styles.dropLink}>Kensington Park</a>
              <a href="/areas/lake-mayer" className={styles.dropLink}>Lake Mayer</a>
              <a href="/areas/largo-woods" className={styles.dropLink}>Largo Woods</a>
              <a href="/areas/live-oak" className={styles.dropLink}>Live Oak</a>
              <a href="/areas/magnolia-park" className={styles.dropLink}>Magnolia Park</a>
              <a href="/areas/midtown" className={styles.dropLink}>Midtown</a>
              <a href="/areas/moon-river" className={styles.dropLink}>Moon River</a>
              <a href="/areas/oakdale" className={styles.dropLink}>Oakdale</a>
              <a href="/areas/oakhurst" className={styles.dropLink}>Oakhurst</a>
              <a href="/areas/parkside" className={styles.dropLink}>Parkside</a>
              <a href="/areas/pine-gardens" className={styles.dropLink}>Pine Gardens</a>
              <a href="/areas/pinecrest" className={styles.dropLink}>Pinecrest</a>
              <a href="/areas/savannah-gardens" className={styles.dropLink}>Savannah Gardens</a>
              <a href="/areas/skyland-terrace" className={styles.dropLink}>Skyland Terrace</a>
              <a href="/areas/southbridge" className={styles.dropLink}>Southbridge</a>
              <a href="/areas/springhill" className={styles.dropLink}>Springhill</a>
              <a href="/areas/tatemville" className={styles.dropLink}>Tatemville</a>
              <a href="/areas/the-landings" className={styles.dropLink}>The Landings</a>
              <a href="/areas/twickenham" className={styles.dropLink}>Twickenham</a>
              <a href="/areas/vernonburg" className={styles.dropLink}>Vernonburg</a>
              <a href="/areas/victory-heights" className={styles.dropLink}>Victory Heights</a>
              <a href="/areas/victorian-district" className={styles.dropLink}>Victorian District</a>
              <a href="/areas/windsor-forest" className={styles.dropLink}>Windsor Forest</a>
              <a href="/areas/woodville" className={styles.dropLink}>Woodville</a>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</Link>

          <a href={`tel:${siteConfig.phoneRaw}`} className={`${styles.cta} btn btn-primary`}>
            📞 Free Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
