import React from 'react'
import img2 from '../../src/assets/image/separatorBlack.png'
import { services } from '../constants/Constants'
import { motion } from 'framer-motion'
function About() {
  return (
    <section>
      <div className='flex flex-col gap-20 justify-center items-center '>
      {/* about me */}
      <motion.div
      initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 , once:true}}
        className=' w-[80%] lg:w-[50%]  gap-20 flex flex-col items-center text-center mt-15  '>
      <div className='monsterrant font-bold text-[18px] lg:text-[30px] uppercase tracking-[0.2rem ] lg:tracking-[0.5rem] border-8 lg:border-4 w-fit py-4 px-10 items-center'>About Me</div>
      <p className='opensans text-justify ' >Hello! I'm a software developer passionate about building intuitive and responsive web applications. With a strong background in both front-end and back-end development, I specialize in React, Node.js, and integrating machine learning into projects. My approach is focused on delivering seamless user experiences while maintaining clean, efficient, and scalable code.

I thrive on problem-solving and enjoy working on projects that challenge me to think creatively. I follow Agile methodologies to ensure timely, quality delivery and always strive to enhance my skills by exploring new technologies and best practices.

Outside of coding, I'm dedicated to staying fit and healthy through regular workouts and love exploring new ideas for personal and professional growth.

Feel free to explore my portfolio, and let's connect if you'd like to collaborate or discuss potential opportunities!</p>
      <div className=''>
        <img src={img2} alt="" />
      </div>
     </motion.div>
     {/* Services */}
   
<motion.div 
 initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }} 
    viewport={{  amount: 0.3 ,once:true}}
className=" w-full flex flex-col h-100vh justify-center items-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[85%] lg:w-[70%] text-left place-items-center">
    {services.map((serv, key) => (
      <div
        key={key}
        className={`flex flex-col  text-center ${
          key === 2 ? " lg:col-span-2 lg:w-[50%] " : ""
        }`}
      >
        <div>
        <div className="absolute h-[64px] w-[61px]">{serv.img}</div>
        </div>
       
        <div className="p-6 flex flex-col gap-4 text-left">
          <p className=" font-bold tracking-wider monsterrant text-[22px]">{serv.title}</p>
          <p className="text-[14px] opensans  lg:text-left">{serv.description}</p>
        </div>
      </div>
    ))}
  </div>
  <div className=' p-20'>
        <img src={img2} alt="" />
      </div>
</motion.div>





    </div>
    </section>
  )
}

export default About