import styles from './TrustBar.module.css'

const badges = [
  { icon: '⚡', label: 'Same-Day Service' },
  { icon: '🛡️', label: 'Licensed & Insured' },
  { icon: '💬', label: 'Free Quote' },
  { icon: '✅', label: 'Satisfaction Guaranteed' },
  { icon: '🌿', label: 'Eco-Friendly Options' },
  { icon: '🔒', label: 'Exclusion Specialists' },
]

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.items}>
          {badges.map((b, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.icon}>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
