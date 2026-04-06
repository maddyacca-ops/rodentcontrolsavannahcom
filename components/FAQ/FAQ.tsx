"use client"
import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQ {
  q: string
  a: string
}

interface Props {
  faqs: FAQ[]
  heading?: string
}

export default function FAQ({ faqs, heading = 'Frequently Asked Questions' }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className="text-center">{heading}</h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <svg
                  className={styles.faqIcon}
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={styles.answer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
