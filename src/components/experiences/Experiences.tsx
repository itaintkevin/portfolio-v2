import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <div id="experiences" className="mb-4">
      <section className="flex flex-col">
        <div className="text-2xl font-semibold text-center underline underline-offset-3 decoration-accent-1 mb-5 mt-16 ">Experiences</div>
        <section className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 auto-rows-auto xl:gap-16 gap-8 mt-4 mx-auto">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </section>
      </section>
    </div>
  )
}

export default Experience