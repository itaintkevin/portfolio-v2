"use client"
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

const ExperienceCard = () => {
  return (
    <div className="relative flex flex-col justify-between bg-black dark:bg-white text-white dark:text-black rounded-xl shadow-2xl w-[100%] max-w-[300px] min-h-[400px]">
        <div className="absolute -left-[10px] -bottom-[10px] border-b-2 border-l-2 border-black dark:border-white rounded-2xl shadow-lg w-[100%] max-w-[300px] h-full"></div>
        <div className="flex justify-between items-center font-semibold p-4">
            <p>INTERNSHIP</p>
            <div><BiLinkExternal/></div>
        </div>
        
        <div className='p-4'>
            <h3 className="text-3xl">
                Full Stack Developer
            </h3>
            <h4 className="text-2xl">Codelance Devs</h4>
            <p className="text-xs py-2">
                Built ~ Jan 2023
            </p>
            <p className='text-secondary dark:text-black'>
            A one-time secret message 
            link generator built in React 
            with Vite & TailwindCSS.
            </p>
        </div>

        <ul className="flex flex-wrap p-4">
            <li className="bg-secondary text-black rounded-md w-min px-2 mr-2 mb-2">React.js</li>
            <li className="bg-secondary text-black rounded-md w-min px-2 mr-2 mb-2">Vite</li>
            <li className="bg-secondary text-black rounded-md w-min px-2 mr-2 mb-2">Tailwind</li>
            <li className="bg-secondary text-black rounded-md w-min px-2 mr-2 mb-2">Firebase</li>
            <li className="bg-secondary text-black rounded-md w-min px-2 mr-2 mb-2">Crypto.js</li>
        </ul>

        <Link href="/" className='bg-accent-1 text-black font-semibold text-center rounded-md max-w-[100%] p-2 m-4'>View Certificate</Link>
    </div>
  )
}

export default ExperienceCard