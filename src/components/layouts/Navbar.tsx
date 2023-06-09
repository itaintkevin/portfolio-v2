"use client"
import Link from 'next/link'
import Image from 'next/image'
import me from '../../../public/assets/me.jpg'
import { useState } from 'react'

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
  ]; 

  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    console.log("nav clicked");
    nav ? setNav(false) : setNav(true);
  }

  return (
    <nav className="flex justify-between items-center animate-fadeDown w-full lg:mb-5 mb-10">
        {/* <div className="text-2xl font-bold px-2">
            KP
        </div> */}
        <Image className="w-10 h-10 rounded-full mx-2" src={me} alt="Kevin Paul"/>
        <div className="bg-black dark:bg-secondary flex-grow py-[1px]"></div>
        <ul className="hidden sm:flex justify-end">
            {links.map((link, index) => (
            <li key={index} className="font-bold mx-2">
                <Link href={link.href} className='transition ease-in-out duration:300 hover:transition hover:ease-in-out hover:duration-300 hover:text-accent-1'>{link.name}</Link>
            </li>
            ))}
        </ul>
        <button className="sm:hidden mx-2" onClick={handleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className={`fixed ${nav ? "top-0 transition ease-in duration-300" : "-translate-y-full transition ease-out duration-500"} left-0 z-10 bg-white dark:bg-primary dark:text-white shadow-lg dark:shadow-2xl rounded-b-2xl border-b border-black/20 w-full`}>
          <button className="fixed right-0 mt-10 mr-6" onClick={handleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col justify-center w-full h-full mt-14 mb-8">
              {links.map((link, index) => (
              <li key={index} className="text-xl font-bold border-b-2 border-accent-1 line-gap-2 my-2 mx-6">
                  <Link href={link.href} className="transition ease-in-out duration:300 hover:transition hover:ease-in-out hover:duration-300 hover:text-accent-1">{link.name}</Link>
              </li>
              ))}
          </ul>
        </div>
    </nav>
  )
}
