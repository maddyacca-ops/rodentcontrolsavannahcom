"use client"
import styles from './MapEmbed.module.css'

interface Props {
  query: string
  label?: string
}

export default function MapEmbed({ query, label }: Props) {
  const encoded = encodeURIComponent(query)
  return (
    <section className={styles.mapSection}>
      <div className="container">
        {label && <h2 className={styles.heading}>Serving {label}</h2>}
        <div className={styles.mapWrapper}>
          <iframe
            title={`Map of ${query}`}
            src={`https://maps.google.com/maps?q=${encoded}&output=embed&z=14`}
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
