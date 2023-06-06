import Navbar from '@/components/layouts/Navbar'
import About from '@/components/hero/About'
import Skills from '@/components/hero/Skills'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main className="mx-auto flex">
      <section className="fixed top-0 flex flex-col justify-between xl:w-[50%] w-[70%] h-screen py-10 2xl:px-16 xl:px-8 px-4">
        <Navbar />
        <About />
        <Skills />
      </section>
      <section className="relative xl:left-[50%] left-[70%] xl:w-[50%] w-[30%] py-10 2xl:px-16 xl:px-8 px-4">
        <Projects />
      </section>
    </main>
  )
}
