'use client'

import React from 'react'

export const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full space-y-3">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-left">Hi. I'm Aymene, nice to meet you.</p>
          </div>
          <div>
            <p className="font-light">
              I am passionate about building excellent software. During my internships at{' '}
              <span className="font-bold text-pink-600">Coinhouse</span>,
              <span className="font-bold text-pink-600">Bodyguard.ai</span>, and{' '}
              <span className="font-bold text-pink-600">Yomo.ai</span>, I have gained extensive experience in full-stack
              development, DevOps, and cloud technologies, allowing me to create software solutions that empower
              individuals, small businesses, and large corporations alike. With this expertise, we can open doors to
              impactful and transformative software. Let's work together to build a brighter future!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
