import styles from './Footer.module.css'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>SAVANNAH<br/>RODENT CONTROL</span>
          </Link>
          <p className={styles.tagline}>Savannah's most trusted rodent elimination specialists. Licensed, insured, and locally owned.</p>
          <div className={styles.social}>
            <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <p className={styles.address}>{siteConfig.address}<br/>{siteConfig.phone} | {siteConfig.email}</p>
        </div>

        <div>
          <h4 className={styles.colTitle}>Our Services</h4>
          <div className={styles.linkCol}>
            <a href="/services/rat-control" className={styles.footLink}>Rat Control</a>
            <a href="/services/mice-control" className={styles.footLink}>Mice Control</a>
            <a href="/services/rodent-removal" className={styles.footLink}>Rodent Removal</a>
            <a href="/services/emergency-rodent-removal" className={styles.footLink}>Emergency Rodent Removal</a>
            <a href="/services/same-day-rat-removal" className={styles.footLink}>Same-Day Rat Removal</a>
            <a href="/services/mouse-infestation-treatment" className={styles.footLink}>Mouse Infestation Treatment</a>
            <a href="/services/residential-rodent-control" className={styles.footLink}>Residential Rodent Control</a>
            <a href="/services/commercial-rodent-control" className={styles.footLink}>Commercial Rodent Control</a>
            <a href="/services/apartment-property-management-rodent-control" className={styles.footLink}>Apartment & Property Management Rodent Control</a>
            <a href="/services/warehouse-rodent-control" className={styles.footLink}>Warehouse Rodent Control</a>
            <a href="/services/rodent-exclusion-services" className={styles.footLink}>View All Services →</a>
          </div>
        </div>

        <div>
          <h4 className={styles.colTitle}>Service Areas</h4>
          <div className={styles.linkCol}>
            <a href="/areas/ardsley-park" className={styles.footLink}>Ardsley Park</a>
            <a href="/areas/baldwin-park" className={styles.footLink}>Baldwin Park</a>
            <a href="/areas/barry" className={styles.footLink}>Barry</a>
            <a href="/areas/beach-institute" className={styles.footLink}>Beach Institute</a>
            <a href="/areas/beechwood" className={styles.footLink}>Beechwood</a>
            <a href="/areas/berkshire-woods" className={styles.footLink}>Berkshire Woods</a>
            <a href="/areas/bingville" className={styles.footLink}>Bingville</a>
            <a href="/areas/bonaventure" className={styles.footLink}>Bonaventure</a>
            <a href="/areas/bradley-point" className={styles.footLink}>Bradley Point</a>
            <a href="/areas/burnside-island" className={styles.footLink}>Burnside Island</a>
            <a href="/areas/cann-park" className={styles.footLink}>Cann Park</a>
            <a href="/areas/carver-heights" className={styles.footLink}>Carver Heights</a>
            <a href="/areas/downtown" className={styles.footLink}>View All Areas →</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} {siteConfig.name}. All rights reserved. |
            <Link href="/privacy"> Privacy Policy</Link> |
            <Link href="/terms"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
