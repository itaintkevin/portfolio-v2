import { AiOutlineSend } from 'react-icons/ai'
import { CgDanger } from 'react-icons/cg'
import Link from 'next/link'

const contact = () => {
  return (
    <div id="contact" className="max-w-[680px] mx-auto">
        <div className="text-2xl font-semibold text-center underline underline-offset-3 decoration-accent-1 mb-5 mt-16 animate-fadeUp">Say Hello?</div>
        <p className="flex items-center justify-center text-center text-md text-yellow-600 dark:text-yellow-300 animate-pulse">
          <CgDanger className="mr-2"/>
          This section is under development.
        </p>
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
          <input type="text" className="rounded-md w-full p-3 border border-[#3B3B3B] outline-none focus:dark:border-white/20 focus:shadow-md" placeholder='To enter chat click "Send"'/>
          <Link href="/chat" className="bg-accent-1 text-primary rounded-md p-4 ml-2">
            <AiOutlineSend/>
          </Link>
        </div>
    </div>
  )
}

export default contact