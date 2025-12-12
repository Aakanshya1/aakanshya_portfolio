import { useState } from 'react'
import React from 'react'
import project1 from '../assets/image/project1.png'
import { projects } from '../constants/Constants'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects() {

  return (
  
    <section>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    viewport={{ amount: 0.3, once: true }}
    className='relative'
  >
    <div>
      <img
        src={project1}
        className='h-[321px] w-[1000px] md:w-[900px] lg:w-[1920px] object-cover'
        alt=''
      />
    </div>

    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-black'>
      <div className='font-bold text-[14px] lg:text-[30px] uppercase tracking-[0.5rem] border-8 lg:border-4 w-fit py-4 px-10 monsterrant'>
        Projects
      </div>
    </div>
  </motion.div>

  <div className='bg-black opacity-[0.9] h-[50px]'></div>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 bg-black">

  {projects.map((project, index) => (
    <div 
      key={index}
      className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden 
      hover:scale-[1.02] transition-all duration-300"
    >
      {/* Project Image */}
      <div className="h-56 w-full overflow-hidden">
        {project.img}
      </div>

      {/* Content */}
      <div className="p-5 text-white flex flex-col gap-3">
        <h2 className="text-xl font-bold">{project.name}</h2>

        <p className="text-gray-400 text-sm leading-relaxed ">
          {project.description}
        </p>

        <div className="flex flex-row gap-4 mt-3">
          {/* Live Button */}
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 border border-white px-4 py-2 rounded-md 
            hover:bg-white hover:text-black transition"
          >
            Live <FaArrowRight />
          </a>

          {/* GitHub Button */}
          <a 
            href={project.link2} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 border border-white px-4 py-2 rounded-md
            hover:bg-white hover:text-black transition"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </div>
  ))}

</div>


  <div className='h-[50px] flex flex-row items-center justify-center text-white gap-20 w-full bg-black opacity-[0.9]'>
    <p>And many more!</p>
  </div>
</section>

    
  )
}

export default React.memo(Projects)