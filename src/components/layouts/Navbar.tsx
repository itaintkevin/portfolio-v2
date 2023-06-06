"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonStars, BsFillSunFill } from 'react-icons/bs'

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]; 

  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleNav = () => {
    nav ? setNav(false) : setNav(true);
  }

  const handleDarkMode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav className="flex justify-between items-center w-full mb-10">
        <div className="text-2xl font-bold px-2">
            Kevin Paul
        </div>
        <div className="bg-black dark:bg-secondary flex-grow py-[1px]"></div>
        <ul className="hidden sm:flex justify-end">
            {links.map((link, index) => (
            <li key={index} className="font-bold mx-2">
                <Link href={link.href}>{link.name}</Link>
            </li>
            ))}
        </ul>
        <button onClick={handleDarkMode} className="text-xl mx-2">
          {currentTheme === "dark" ? <BsFillSunFill className="cursor-pointer"/> :<BsMoonStars className="cursor-pointer"/>}
        </button>
        <button className="sm:hidden mx-2" onClick={handleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-Linecap="round" stroke-Linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className={`fixed ${nav ? "top-0 transition ease-in duration-300" : "-translate-y-full transition ease-out duration-500"} left-0 z-10 bg-white shadow-lg rounded-b-2xl border-b border-black/20 w-full`}>
          <button className="fixed right-0 mt-10 mr-6" onClick={handleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-Linecap="round" stroke-Linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col justify-center w-full h-full mt-14 my-4">
              {links.map((link, index) => (
              <li key={index} className="text-xl font-bold border-b-2 border-accent-1 line-gap-2 my-2 mx-6">
                  <Link href={link.href} className="">{link.name}</Link>
              </li>
              ))}
          </ul>
        </div>
    </nav>
  )
}
