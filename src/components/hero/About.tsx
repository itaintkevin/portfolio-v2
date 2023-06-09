import { getAbout } from '../../../sanity/utils/fetchData'
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { AboutType } from '../../../typings'

const About = async () => {
    const aboutData: AboutType = await getAbout();
    const socials = [
        { logo: <AiOutlineTwitter/>, link: 'https://twitter.com/it_aint_kevin' },
        { logo: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/itaintkevin' },
        { logo: <AiOutlineGithub/>, link: 'https://github.com/itaintkevin' },
        { logo: <AiOutlineMail/>, link: 'mailto:kevinjacobdev@gmail.com' },
    ];
    return (
        <div id="about" className='relative'>
            <h1 className="z-10 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl mx-2 animate-fadeUp">
                {aboutData.salutation}
                <br/>
                <span className="underline underline-offset-3 decoration-accent-1">Kevin</span>
                <span>&nbsp;</span>
                <span className="underline underline-offset-3 decoration-accent-1">Paul</span>
            </h1>
            <div className="z-10 xl:pt-10 lg:pt-5 pt-10">
                <ul>
                    {aboutData.bio.map((bio: string, index:number) => (
                        <li key={index} className="text-lg font-semibold mx-2 animate-fadeUp">{bio}</li>
                    ))}
                </ul>
                <p className="text-lg font-semibold mx-2 animate-fadeUp">Checkout my <Link className="underline underline-offset-3 decoration-accent-1 animate-pulse" href="https://drive.google.com/file/u/2/d/1DPiD1LcvzfbbDc8y4Ul80hRIKbXhuXO-/view">Resume</Link>.</p>
            </div>
            <p className="flex lg:mt-10 mt-2 mx-2 animate-fadeUp">
                {socials.map((social, index) => (
                    <Link key={index} href={social.link} className='bg-black dark:bg-secondary text-white dark:text-black text-lg rounded-full p-1.5 mr-2'>
                        {social.logo}
                    </Link>
                ))}
            </p>
        </div>        
    )
}

export default About
