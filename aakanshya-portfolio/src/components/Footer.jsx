import React from 'react'
import { FaFacebookSquare, FaInstagramSquare,  FaLinkedin,FaGithubSquare} from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };
  return (
    <>
    <div className='flex flex-col  justify-center items-center  h-[200px] bg-black '>
    <button
      onClick={handleScrollToTop}
      className="text-white justify-center flex flex-col text-center items-center cursor-pointer bg-black  hover:-translate-y-2 duration-300"
    >
      <MdKeyboardDoubleArrowUp />Scroll to top
    </button>
      
      <ul className='text-white flex flex-row gap-10 justify-center items-center w-full text-2xl  p-10'>
        <li className=' cursor-pointer'><a href="https://www.facebook.com/"><FaFacebookSquare /></a></li>
        <li className=' cursor-pointer'><a href="https://www.instagram.com/?hl=en"><FaInstagramSquare /></a></li>
        <li  className=' cursor-pointer'><a href="www.linkedin.com/in/aakanshya-gyawali-894174257"><FaLinkedin /></a></li>
        <li  className=' cursor-pointer'><a href="https://github.com/Aakanshya1"><FaGithubSquare /></a></li>
      </ul>
      <p className='text-white'>@All Rights Reserved.</p>
        </div>
    </>
  )
}

export default Footer