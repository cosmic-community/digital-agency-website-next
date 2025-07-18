import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency - Web Development, SEO & Marketing Services',
  description: 'Professional digital agency offering web development, SEO optimization, brand identity design, and social media marketing services. Transform your business with our expert team.',
  keywords: 'digital agency, web development, SEO, marketing, brand identity, social media',
  authors: [{ name: 'Digital Agency' }],
  creator: 'Digital Agency',
  openGraph: {
    title: 'Digital Agency - Web Development, SEO & Marketing Services',
    description: 'Professional digital agency offering web development, SEO optimization, brand identity design, and social media marketing services.',
    url: 'https://digitalagency.com',
    siteName: 'Digital Agency',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/fa3b88d0-63ed-11f0-a051-23c10f41277a-photo-1414235077428-338989a2e8c0-1752853419599.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Digital Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency - Web Development, SEO & Marketing Services',
    description: 'Professional digital agency offering web development, SEO optimization, brand identity design, and social media marketing services.',
    images: ['https://imgix.cosmicjs.com/fa3b88d0-63ed-11f0-a051-23c10f41277a-photo-1414235077428-338989a2e8c0-1752853419599.jpg?w=1200&h=630&fit=crop&auto=format,compress'],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}