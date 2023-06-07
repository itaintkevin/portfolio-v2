import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div id="projects" className="mb-4">
      <section className="flex flex-col">
        <div className="text-2xl font-semibold text-center underline underline-offset-3 decoration-accent-1 mb-5 mt-16">Projects</div>
        <section className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 auto-rows-auto xl:gap-16 gap-8 mx-auto mt-4">
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