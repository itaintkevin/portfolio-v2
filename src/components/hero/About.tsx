"use client"
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

export default function About() {

    const socials = [
        { logo: <AiOutlineTwitter/>, link: 'https://twitter.com' },
        { logo: <FaLinkedinIn/>, link: 'https://linkedin.com' },
        { logo: <AiOutlineGithub/>, link: 'https://github.com' },
        { logo: <AiOutlineMail/>, link: 'mailto:example@example.com' },
    ];

    return (
        <div>
            <h1 className="2xl:text-9xl lg:text-7xl text-6xl">
                Full Stack Developer
            </h1>
            <p className="text-lg font-semibold pt-10 mx-2">
                Transitioning to Web3.
                <br />
                Junior at SRMIST, pursuing B.Tech in CSE.
                <br />
                I code until I hit a code block.
            </p>
            <p className="flex mt-2 mx-2">
                {socials.map((social, index) => (
                    <Link key={index} href={social.link} className='bg-black text-white text-lg rounded-full p-1.5 mr-2'>
                        {social.logo}
                    </Link>
                ))}
            </p>
        </div>
    )
}
