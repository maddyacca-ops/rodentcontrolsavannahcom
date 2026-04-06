import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Topbar from '@/components/Topbar/Topbar'
import FloatingCallButton from '@/components/FloatingCallButton/FloatingCallButton'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rodentcontrolsavannah.com'),
  title: {
    default: 'Savannah Rodent Control | Professional Rodent Control in Savannah, GA',
    template: '%s | Savannah Rodent Control',
  },
  description: 'Expert rodent control services in Savannah, GA. Rats, mice, and rodent exclusion specialists. Same-day service. Call (912) 305-0115 for a free quote.',
  openGraph: {
    siteName: 'Savannah Rodent Control',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SavannahRodentCtrl',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
