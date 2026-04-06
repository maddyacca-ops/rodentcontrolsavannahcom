import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.code}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist. Try our homepage or contact us for help.</p>
        <div className={styles.links}>
          <Link href="/" className="btn btn-primary">← Back to Home</Link>
          <a href="tel:9123050115" className="btn btn-outline">📞 (912) 305-0115</a>
        </div>
      </div>
    </section>
  )
}
