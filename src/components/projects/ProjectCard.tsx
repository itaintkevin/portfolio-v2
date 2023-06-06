import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

const ProjectCard = () => {
  return (
    <div className="relative flex flex-col justify-between bg-black text-white rounded-xl shadow-2xl w-[100%] max-w-[300px] min-h-[400px]">
        <div className="absolute -left-[10px] -bottom-[10px] border-2 border-black rounded-2xl shadow-lg w-[100%] max-w-[300px] min-h-[400px]"></div>
        <div className="flex justify-between items-center p-4">
            <p>View Repository</p>
            <div><BiLinkExternal/></div>
        </div>
        
        <div className='p-4'>
            <h3 className="text-3xl">
                Enigma
            </h3>
            <p className="text-xs py-2">
                Built ~ Jan 2023
            </p>
            <p className='text-secondary'>
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

        <Link href="/" className='bg-accent-1 text-black text-center rounded-md max-w-[90%] p-2 m-4'>View Deployment</Link>
    </div>
  )
}

export default ProjectCard