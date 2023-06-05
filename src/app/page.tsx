import Navbar from '@/components/layouts/Navbar'
import About from '@/components/hero/About'
import Skills from '@/components/hero/Skills'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main className="container mx-auto flex">
      <section className="fixed top-0 flex flex-col justify-between w-[40%] h-screen">
        <Navbar />
        <About />
        <Skills />
      </section>
      <section className="relative left-[50%] w-[50%]">
        <Projects />
      </section>
    </main>
  )
}
