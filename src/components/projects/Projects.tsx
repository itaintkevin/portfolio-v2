import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div>
      <section className="flex flex-col h-screen">
        <div className="text-2xl font-semibold mb-5">Projects</div>
        <section className="grid xl:grid-cols-2 auto-rows-auto xl:gap-16 gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </section>
    </div>
  )
}

export default Project