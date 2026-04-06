import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Marcus T.',
    location: 'Ardsley Park, Savannah',
    text: "Had rats in our attic for weeks before calling Savannah Rodent Control. They came the same day, found 3 entry points, sealed everything, and set traps. Incredibly professional.",
  },
  {
    name: 'Denise L.',
    location: 'Isle of Hope, Savannah',
    text: "Discovered mouse droppings in our kitchen. These guys showed up the next morning, did a full inspection, sealed every gap they found, and followed up two weeks later. Zero signs of rodents since.",
  },
  {
    name: 'James W.',
    location: 'Victorian District, Savannah',
    text: "Running a restaurant means a rodent problem is a business-ending emergency. Savannah Rodent Control responded in under 2 hours, handled everything discreetly, and set up an ongoing monitoring plan. Absolute lifesavers.",
  },
]

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className="badge">What Savannah Residents Say</div>
        <h2>Trusted by Homeowners &amp; Businesses Across Savannah, GA</h2>
        <div className={`grid-3 ${styles.cards}`}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
              <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.author}>
                <strong>{r.name}</strong>
                <span>{r.location}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.aggregate}>&#11088; 4.9/5 average rating &mdash; 200+ verified reviews across Savannah, GA</p>
      </div>
    </section>
  )
}
