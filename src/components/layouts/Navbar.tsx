import Link from 'next/link'

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]; 
  return (
    <nav className="flex justify-between items-center w-full mb-10">
        <div className="text-2xl font-bold px-2">
            Kevin Paul
        </div>
        <div className="bg-black flex-grow py-[1px]"></div>
        <ul className="hidden sm:flex justify-end">
            {links.map((link, index) => (
            <li key={index} className="font-bold mx-2">
                <Link href={link.href}>{link.name}</Link>
            </li>
            ))}
        </ul>
        <div className="sm:hidden mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-Linecap="round" stroke-Linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
    </nav>
  )
}
