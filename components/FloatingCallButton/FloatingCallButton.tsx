"use client"
import styles from './FloatingCallButton.module.css'
import { siteConfig } from '@/lib/siteConfig'

export default function FloatingCallButton() {
  return (
    <a href={`tel:${siteConfig.phoneRaw}`} className={styles.fab} aria-label="Call now">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
      <span>Call Now</span>
    </a>
  )
}
