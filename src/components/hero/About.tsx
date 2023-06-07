"use client"
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import GradientBubble from './GradientBubble'
import Link from 'next/link'

export default function About() {

    const socials = [
        { logo: <AiOutlineTwitter/>, link: 'https://twitter.com/it_aint_kevin' },
        { logo: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/itaintkevin' },
        { logo: <AiOutlineGithub/>, link: 'https://github.com/itaintkevin' },
        { logo: <AiOutlineMail/>, link: 'mailto:kevinjacobdev@gmail.com' },
    ];

    return (
        <div id="about" className='relative'>
            <GradientBubble/>
            <h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl mx-2">
                Hey! I&apos;m 
                <br/>
                <span className="underline underline-offset-3 decoration-accent-1">Kevin</span>
                <span>&nbsp;</span>
                <span className="underline underline-offset-3 decoration-accent-1">Paul</span>
            </h1>
            <p className="text-lg font-semibold xl:pt-10 lg:pt-5 pt-10 mx-2">
                Full Stack Developer.
                <br/>
                Transitioning to Web3.
                <br />
                Junior at SRMIST, pursuing B.Tech in CSE.
                <br />
                I keep coding until I hit a code block.
                <br/>
                Checkout my <Link className="underline underline-offset-3 decoration-accent-1 animate-pulse" href="">Resume</Link>.
            </p>
            <p className="flex lg:mt-10 mx-2">
                {socials.map((social, index) => (
                    <Link key={index} href={social.link} className='bg-black dark:bg-secondary text-white dark:text-black text-lg rounded-full p-1.5 mr-2'>
                        {social.logo}
                    </Link>
                ))}
            </p>
        </div>
    )
}
