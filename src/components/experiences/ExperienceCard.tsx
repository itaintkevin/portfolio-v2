"use client"
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import { Experiences } from '../../../typings'

interface ExperienceProps {
    key: number,
    experience: Experiences
}

const ExperienceCard = ({ key, experience }: ExperienceProps) => {
  return (
    <div className="relative z-10 flex flex-col justify-between bg-black dark:bg-white text-white dark:text-black rounded-xl shadow-2xl w-[100%] max-w-[300px] min-h-[400px]">
        <div className="absolute -z-10 -left-[10px] -bottom-[10px] border-b-2 border-l-2 border-black dark:border-white rounded-2xl shadow-lg w-[100%] max-w-[300px] h-full"></div>        
        <div className='px-4'>
            <div className="flex justify-between items-center font-semibold py-4">
                <p>{experience.type}</p>
                <Link className="cursor-pointer" href={experience.website}><BiLinkExternal/></Link>
            </div>
            <h3 className="text-3xl pr-2">
                {experience.role}
            </h3>
            <h4 className="text-xl">{experience.organization}</h4>
            <p className="text-xs py-2">
                {experience.date}
            </p>
            <p className='text-secondary dark:text-black'>
                {experience.work}
            </p>
            <ul className="flex flex-wrap py-4">
                {experience.skills.map((skill, index) => (
                    <li key={index} className="bg-secondary text-black rounded-md w-max px-2 mr-2 mb-2">{skill}</li>
                ))}
            </ul>
        </div>
        <Link href={experience.certificate} className='bg-accent-1 text-black font-semibold text-center rounded-md cursor-pointer max-w-[100%] p-2 m-4'>View Certificate</Link>
    </div>
  )
}

export default ExperienceCard