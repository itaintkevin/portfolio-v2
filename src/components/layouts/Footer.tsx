import Image from 'next/image';
import Link from 'next/link';
import {
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import me from '../../../public/assets/me.jpg'

const Footer = () => {
	const navOptions = [
		{
			name: 'About',
			url: '/#about',
		},
		{
			name: 'Projects',
			url: '#projects',
		},
		{
			name: 'Experiences',
			url: '#experiences',
		},
		{
			name: 'Contact',
			url: '/contact',
		}
	];

  const socials = [
    { logo: <AiOutlineTwitter/>, link: 'https://twitter.com/it_aint_kevin' },
    { logo: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/itaintkevin' },
    { logo: <AiOutlineGithub/>, link: 'https://github.com/itaintkevin' },
    { logo: <AiOutlineMail/>, link: 'mailto:kevinjacobdev@gmail.com' },
];

	return (
		<footer className='dark:text-white mt-16 animate-fadeUp'>
			<div className='container mx-auto flex flex-col flex-wrap min-[1400px]:justify-center min-[1024px]:justify-start min-[768px]:justify-center sm:flex-row sm:py-[2%] my-10 px-2'>
				<div>
					<div className='mb-3 flex items-center'>
            <Image className="w-10 h-10 rounded-full mr-2" src={me} alt="Kevin Paul"/>
						<Link className='text-xl font-semibold' href='/'>
							Kevin Paul
						</Link>
					</div>
					<div className='text-sm'>
						<p>Copyright &copy; 2023 Kevin Paul</p>
						<p>All rights reserved.</p>
					</div>
				</div>
				<div className='min-[1280px]:mx-5 min-[1024px]:mx-0 min-[640px]:mx-5 sm:my-0 my-2'>
					<h4 className='min-[1400px]:mb-3 font-semibold flex items-center text-lg h-10'>Links</h4>
					<nav className='flex flex-wrap'>
						{navOptions.map((option, index) => (
							<Link
								key={index}
								href={option.url}
								className='w-auto rounded-md pr-3 text-sm font-medium'
							>
								{option.name}
							</Link>
						))}
					</nav>
				</div>
				<div>
					<h4 className='min-[1400px]:mb-3 flex font-semibold items-center text-lg h-10'>Socials</h4>
					<nav className='flex flex-wrap'>
            {socials.map((social, index) => (
                    <Link key={index} href={social.link} className='bg-black dark:bg-secondary text-white dark:text-black text-lg rounded-full p-1.5 mr-2'>
                        {social.logo}
                    </Link>
            ))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;