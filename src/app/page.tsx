import Navbar from '@/components/layouts/Navbar'
import About from '@/components/hero/About'
import Skills from '@/components/hero/Skills'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col lg:flex-row">
      <section className="lg:fixed lg:top-0 flex flex-col justify-between lg:xl:w-[50%] lg:w-[70%] lg:h-screen py-10 2xl:px-16 xl:px-8 px-4">
        <Navbar />
        <About />
        <Skills />
      </section>
      <section className="relative xl:left-[50%] lg:left-[70%] xl:w-[50%] lg:w-[30%] py-10 2xl:px-16 xl:px-8 px-4">
        <Projects />
      </section>
    </main>
  )
}
