"use client"
import './globals.css'
import Providers from './Providers'
import SplashScreen from './SplashScreen'
import { Nunito_Sans } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const nunito_sans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata = {
  title: "Kevin Paul",
  description: 'Portfolio Website',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {

  const pathName = usePathname()
  const isHome = pathName === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <Providers>
          {isLoading && isHome ? (
            <SplashScreen finishLoading = {() => setIsLoading(false)}/>
          ) : (
            <main className='bg-white dark:bg-primary text-black dark:text-white w-full h-full'>
              {children}
            </main>
          )}
        </Providers>
      </body>
    </html>
  )
}
