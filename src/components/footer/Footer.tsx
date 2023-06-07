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
		<footer className='dark:text-white mt-16'>
			<div className='container mx-auto flex flex-col flex-wrap min-[1400px]:justify-center sm:flex-row py-[3%]'>
				<div>
					<div className='mb-3 flex items-center'>
            <Image className="w-10 h-10 rounded-full mr-2" src={me} alt="Kevin Paul"/>
						<Link className='text-xl font-semibold' href='/'>
							Kevin Paul
						</Link>
					</div>
					<p className='text-sm'>
						<p>Copyright &copy; 2023 Kevin Paul</p>
						<p>All rights reserved.</p>
					</p>
				</div>
				<div className='min-[1280px]:mx-5'>
					<h4 className='min-[1400px]:mb-3 flex items-center text-lg font-medium h-10'>Links</h4>
					<nav className='flex flex-wrap'>
						{navOptions.map((option, index) => (
							<>
								<Link
									key={index}
									href={option.url}
									className='w-auto rounded-md pr-3 text-sm font-medium'
								>
									{option.name}
								</Link>
							</>
						))}
					</nav>
				</div>
				<div>
					<h4 className='min-[1400px]:mb-3 flex items-center text-lg font-medium h-10'>Socials</h4>
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