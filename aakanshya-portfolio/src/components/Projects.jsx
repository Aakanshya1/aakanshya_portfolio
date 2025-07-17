import { useState } from 'react'
import React from 'react'
import project1 from '../assets/image/project1.png'
import { projects } from '../constants/Constants'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects() {

  return (
  
    <section    className=' '>
      <motion.div 
       initial={{  opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay: 1, duration: 1 }}
      viewport={{  amount: 0.3 }} 
      className='relative'>
        <div className=' '>
          <img src={project1} className='h-[321px] w-[1000px] md:w-[900px] lg:w-[1920px] object-cover' alt="" />
        </div>
        <span className='absolute top-0 h-[321px] lg:w-[192px] '></span>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-black'>
        <div className='font-bold  text-[14px] lg:text-[30px] uppercase tracking-[0.5rem] border-8 lg:border-4 w-fit py-4 px-10 items-center monsterrant'>Projects</div>
          </div>
      </motion.div>
      <div className='bg-black opacity-[0.9] h-[50px]'></div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full '>
       {projects.map((project,index)=>(
        <div key={index} className='relative group'>
          <div className=''>
                 {project.img}
          </div>
          <div className='absolute top-0 h-full flex flex-col justify-center items-center w-full bg-black group-hover:text-white pointer-events-none opacity-0  group-hover:pointer-events-auto group-hover:opacity-50 transition-all duration-500 '>
           <div className='flex flex-col items-center gap-4 '>
            <h1 className='text-[25px] '>{project.name}</h1>
            {project.link && (
              <a href={project.link}>
                <div className='border-4 flex flex-row items-center gap-1 px-8 py-2'>
                  <span>Live</span>
                  <span className='group-hover:translate-x-5 duration-300'>
                    <FaArrowRight />
                  </span>
                </div>
              </a>
            )}
            {project.link2 && (
              <a href={project.link2}>
                <div className='border-4 flex flex-row items-center gap-1 px-8 py-2'>
                  <span>Git</span>
                  <span className='group-hover:translate-x-5 duration-300'>
                    <FaGithub />
                  </span>
                </div>
              </a>
            )}
          </div>

          </div>
        
          </div>
        
       ))}
      </div>


      <div className='h-[50px] flex flex-row items-center justify-center text-white gap-20 w-full bg-black opacity-[0.9] '>
          <p>And many more!</p>
        </div>
    </section>
    
  )
}

export default React.memo(Projects)