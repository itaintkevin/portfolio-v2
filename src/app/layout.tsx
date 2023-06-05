'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Nunito_Sans } from 'next/font/google'

const nunito_sans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata = {
  title: "Kevin Paul",
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <ThemeProvider>
          <main className='bg-white dark:bg-primary text-black dark:text-white w-full h-full'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
