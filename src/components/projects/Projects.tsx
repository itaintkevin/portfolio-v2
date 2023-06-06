import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div>
      <section className="flex flex-col">
        <div className="text-2xl font-semibold text-center mb-5">Projects</div>
        <section className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 auto-rows-auto xl:gap-16 gap-8 mx-auto">
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