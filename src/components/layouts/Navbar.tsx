import Link from 'next/link'

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]; 
  return (
    <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold px-2">
            Kevin Paul
        </div>
        <div className="bg-black flex-grow py-[1px]"></div>
        <ul className="flex justify-end">
            {links.map((link, index) => (
            <li key={index} className="font-bold mx-2">
                <Link href={link.href}>{link.name}</Link>
            </li>
            ))}
        </ul>
    </nav>
  )
}
