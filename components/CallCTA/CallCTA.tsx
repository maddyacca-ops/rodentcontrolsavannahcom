import styles from './CallCTA.module.css'
import { siteConfig } from '@/lib/siteConfig'

interface Props {
  heading?: string
}

export default function CallCTA({ heading = 'Get a Free Rodent Control Quote' }: Props) {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2>{heading}</h2>
          <p>Same-day service available throughout Savannah, GA. Licensed, insured, and guaranteed results.</p>
          <ul className={styles.badges}>
            <li>✅ Licensed & Insured</li>
            <li>✅ Free Estimates</li>
            <li>✅ Same-Day Service</li>
            <li>✅ Satisfaction Guarantee</li>
          </ul>
        </div>
        <div className={styles.phone}>
          <p className={styles.hours}>Available {siteConfig.hours}</p>
          <a href={`tel:${siteConfig.phoneRaw}`} className={styles.callBtn}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {siteConfig.phone}
          </a>
          <p className={styles.saveNote}>Save our number — we're here when you need us.</p>
        </div>
      </div>
    </section>
  )
}
