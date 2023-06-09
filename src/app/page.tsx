import Navbar from '@/components/layouts/Navbar'
import About from '@/components/hero/About'
import Skills from '@/components/hero/Skills'
import Projects from '@/components/projects/Projects'
import Experiences from '@/components/experiences/Experiences'
import ThemeToggle from './ThemeToggle'
import SplashScreen from './SplashScreen'
import Footer from '@/components/layouts/Footer'
import Contact from '@/components/contact/Contact'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col lg:flex-row">
      <SplashScreen/>
      <ThemeToggle />
      <section className="dark:bg-primary lg:fixed lg:top-0 flex flex-col justify-between lg:xl:w-[50%] lg:w-[70%] lg:h-screen lg:py-16 pt-16 mb-4 2xl:px-16 xl:px-8 px-4">
        <Navbar />
        <About />
      </section>
      <section className="relative overflow-x-hidden xl:left-[50%] lg:left-[70%] xl:w-[50%] lg:w-[30%] 2xl:px-16 xl:px-8 px-4">
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}
