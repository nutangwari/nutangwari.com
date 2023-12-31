import Nav from '@/components/Nav'
import './globals.css'
import { Inter, Josefin_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { MetadataTags } from '@/lib/app.constant';

// const inter = Inter({ subsets: ['latin'] })
const josefin = Josefin_Sans({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = MetadataTags

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} flex flex-col w-full h-[calc(100vh_-_5rem_-_1px)] bg-neutral-900`}>
        <nav className='fixed z-10 top-0 w-full backdrop-blur'>
          <Nav />
        </nav>

        {/* removing the margin mt-20 (5rem) from screen height */}
        <main className='mt-20 w-full flex-grow px-2 md:px-10 mx-auto'>
          {children}
          <Analytics />
        </main>

        <Footer />
      </body>
    </html>
  )
}
