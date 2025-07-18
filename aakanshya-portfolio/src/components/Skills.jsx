import React from 'react'
import { skills } from '../constants/Constants'
import img2 from '../assets/image/separatorBlack.png'
import { motion } from 'framer-motion'
function Skills() {
  return (
    <>
    <div className='flex flex-col gap-20 justify-center items-center  '>
    <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.3 , once:true}}
     className='font-bold flex text-center  text-[14px] lg:text-[30px] uppercase tracking-[0.5rem]  border-8 lg:border-4 w-fit py-4 px-10 items-center'>
      <p className=' justify-center items-center monsterrant'>Skills</p>
    </motion.div>
    <div>
      <div className=" w-full flex flex-col h-100vh justify-center items-center">
      <div className="flex flex-col justify-center gap-x-50 gap-y-20">
  {/* First Row - 4 Skills */}
  <motion.div 
  initial={{ y: 100, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.3, once:true }}
  className="flex flex-col lg:flex-row justify-center gap-20">
    {skills.slice(0, 4).map((serv, key) => (
      <div key={key} className="flex flex-col items-center gap-4">
        <div className="h-[64px] w-[61px]">{serv.img}</div>
        <p className=" monsterrant text-[24px ]  uppercase ">{serv.name}</p>
      </div>
    ))}
  </motion.div>

  {/* Second Row - 3 Skills (Centered Below) */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.3 ,once:true}}
    className="flex flex-col lg:flex-row justify-center gap-20"
  >
    {skills.slice(4).map((serv, key) => (
      <div key={key} className="flex flex-col items-center gap-4">
        <div className="h-[64px] w-[61px]">{serv.img}</div>
        <p className=" font-thin uppercase monsterrant text-[24px ]">{serv.name}</p>
      </div>
    ))}
  </motion.div>
</div>

         <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.3, once:true }} className=' p-20'>
              <img src={img2} alt="" />
            </motion.div>
      </div>
     
    </div>
    </div>
   
    </>
  )
}

export default Skills