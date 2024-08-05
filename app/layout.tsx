import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Montserrat, Roboto } from 'next/font/google'
import { ReactElement } from 'react'

const roboto = Roboto({
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'bmuller wtf',
    template: '%s | bmuller wtf',
  },
  description: 'Bio site for B Muller',
  openGraph: {
    title: 'bmuller wtf',
    description: 'Bio site for B Muller',
    url: baseUrl,
    siteName: 'B Muller WTF',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default ({ children }: ReactElement) => (
  <html lang="en" className={`text-black bg-white dark:text-white dark:bg-black ${roboto.variable} ${montserrat.variable}`}>
    <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </main>
    </body>
  </html>
)
