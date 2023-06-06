import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <div className="my-20">
      <section className="flex flex-col">
        <div className="text-2xl font-semibold text-center mb-5">Experiences</div>
        <section className="grid grid-cols-1 auto-rows-auto gap-8 mx-auto">
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