import React, { useContext, useRef } from "react"
import s from '../styles/skills.module.css'

const Skills: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div>
            I have more than several skills.
          </div>
          <span>
            I can help you to find vulnerabilities of your website. 
          </span>
          <span>
            I&apos;m good at music so I can also make beats for your music.
          </span>
          <span>
            I also provide UI design and cover design sevices.
          </span>
          <span>
            I also do some front-end developing.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Skills
