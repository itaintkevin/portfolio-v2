import { AiOutlineSend } from 'react-icons/ai'

const contact = () => {
  return (
    <div id="contact" className="max-w-[680px] mx-auto">
        <div className="text-2xl font-semibold text-center underline underline-offset-3 decoration-accent-1 mb-5 mt-16">Say Hello?</div>
        <div className="flex justify-end w-full my-1">
          <div className="text-right bg-accent-1 text-primary font-semibold rounded-l-full rounded-br-full p-3 w-max">
            Hey! Leave a message.
          </div>
        </div>
        <div className="flex justify-start w-full my-1">
          <div className="text-right bg-secondary text-primary font-semibold rounded-r-full rounded-bl-full p-3 w-max">
            Hey! How are you?
          </div>
        </div>
        <div className="flex justify-between my-5">
          <input type="text" className="rounded-md w-full p-3 border border-[#3B3B3B] outline-none focus:dark:border-white/20 focus:shadow-md" placeholder="Enter text here"/>
          <button className="bg-accent-1 border-2 border-primary/40 text-primary rounded-md py-3 px-4 ml-2">
            <AiOutlineSend/>
          </button>
        </div>
    </div>
  )
}

export default contact