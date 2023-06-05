import Navbar from '@/components/layouts/Navbar'
import About from '@/components/hero/About'
import Skills from '@/components/hero/Skills'

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen">
      <section className="flex flex-col justify-evenly w-[50%] h-screen">
        <Navbar />
        <About />
        <Skills />
      </section>
      <section className="w-[50%] h-screen"></section>
    </main>
  )
}
