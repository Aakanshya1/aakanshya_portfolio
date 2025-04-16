import { useState } from 'react'
import React from 'react'
import project1 from '../assets/image/project1.png'
import { projects } from '../constants/Constants'

import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LiveProjects from './LiveProjects';
import GitProject from './GitProject';
function Projects() {

  return (
    <>
    <section className=' '>
      <div className='relative'>
        <div className=' '>
          <img src={project1} className='h-[321px] w-[1000px] md:w-[900px] lg:w-[1920px] object-cover' alt="" />
        </div>
        <span className='absolute top-0 h-[321px] lg:w-[192px] '></span>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-black'>
        <div className='font-bold  text-[14px] lg:text-[30px] uppercase tracking-[0.5rem] border-8 lg:border-4 w-fit py-4 px-10 items-center monsterrant'>Projects</div>
          </div>
      </div>
      <div className='bg-black opacity-[0.9] h-[50px]  '></div>
      <div className='flex items-center justify-center  gap-20 w-full '>
          <div className='relative grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                  {projects.map((project, key) => (
                    <div key={key} className=' group relative flex  justify-center items-center w-full'>
                      <div className='relative w-full '>
                        {project.img}
                        
                      </div>
                      <span className='absolute top-0 bg-black opacity-[0.3]  w-full h-full group-hover:opacity-[0.7] transition-opacity duration-900'></span>
                         
                      <div className=' absolute top-0 opacity-0 text-white gap-6 text-center h-full  flex flex-col  justify-center items-center w-full group-hover:opacity-100 duration-900 transition-opacity'>
                        <p className=' tracking-[0.2rem] text-2xl'>{project.name}</p>
                        <p>{project.description}</p>
                        <div className='flex flex-row items-center gap-4'>
                        <a href={project.link} className='  '>
                        <div className='border-4  flex flex-row items-center gap-1   px-8 py-2'>
                     
                            <span>Live</span> 
                            <span className='group-hover:translate-x-2 duration-700 '><FaArrowRight /> </span>
                         
                        </div>
                        
                        </a>
                        <a href={project.link} className='  '>
                        <div className='border-4  flex flex-row items-center gap-1   px-8 py-2'>
                     
                            <span>git</span> 
                            <span className='group-hover:translate-x-2 duration-700 '><FaGithub/> </span>
                         
                        </div>
                        
                        </a>
                        </div>
                        
        
                      </div>
                    
                    </div>
                  ))} 
                </div>
      </div>
      <div className='h-[50px] flex flex-row items-center justify-center text-white gap-20 w-full bg-black opacity-[0.9] '>
          <p>And many more!</p>
        </div>
    </section>
    </>
  )
}

export default Projects