import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import heroimg from '../assets/image/imagehero.png'
function Landing() {
  return (
   <>
   
   <div className='flex flex-row  text-yellow  lg:w-full  '>
   <div className='diagonal bg-black w-full h-screen inset-0 absolute md:flex hidden'>
</div>
    <div className='flex w-full h-screen justify-center  '>
      <div className='justify-center font-bold gap-10 lg:items-start items-center lg:text-left text-center flex flex-col display-1'>
      <p className="text-4xl text-left">Hi,I am</p>
      <span><h1 className='text-6xl'>Aakanshya Gyawali</h1>
      <p className='text-2xl text-gray-500'>Web Developer</p></span>
      
      <div className='text-2xl flex gap-4 mt-6'>
        <span className='bg-gray-300 p-2 drop-shadow-lg'> <a href="http://"><FaGithub /></a> </span>
        <span className='bg-gray-300 p-2 drop-shadow-lg'> <a href="http://"><FaLinkedin /></a> </span>
      </div>
      
      </div>
    </div>
    <div className=' w-full justify-end  h-screen text-yellow md:flex hidden'>
      <img src={heroimg} alt="Hero" className=" h-[85vh] relative  mt-26 text-white " />
    </div>

   </div>
   
   </>
  )
}

export default Landing