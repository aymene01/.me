'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hey, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aymene</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Software Engineer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] font-extralight">
          I’m a Software Engineer based in Paris, actually working at{' '}
          <span className="text-pink-600 font-medium">Coinhouse</span> in a Cloud & DevOps Engineer Intern position.
        </p>
        <Link to="work" smooth={true} duration={1000}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
