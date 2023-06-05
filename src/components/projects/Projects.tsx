import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div className="p-10">
      <section className="flex h-screen">
        <section>
          <div className="text-2xl font-semibold mx-5 mb-5">Projects</div>
          <ProjectCard />
          <ProjectCard />
        </section>
        <section>
          <ProjectCard />
          <ProjectCard />
        </section>
      </section>
    </div>
  )
}

export default Project