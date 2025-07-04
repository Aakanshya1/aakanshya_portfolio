import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import aaku4 from '../assets/image/aaku4.png';
import { motion } from 'framer-motion';

function Landing() {
  return (
    <section className="overflow-hidden">

      <div className='flex flex-col lg:flex-row lg:w-full'>

        {/* Left Section */}
        <div className='absolute lg:relative flex lg:ml-20 lg:flex-[0.5] lg:w-screen lg:h-screen justify-center items-center w-full h-full'>
          <div className='absolute bottom-0 lg:static flex lg:flex-col flex-row h-fit w-full justify-between lg:justify-center lg:items-start lg:bg-transparent bg-black/70 p-10 diagonal2'>
            {/* Text */}
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }} 
            className='flex flex-col mt-20 lg:mt-0 lg:gap-5 gap-2 justify-center font-bold text-white lg:text-black lg:p-0'>
              <p className="lg:text-4xl text-left">Hi, I am</p>
              <h1 className='lg:text-6xl text-3xl'>Aakanshya Gyawali</h1>
              <p className='lg:text-2xl text-left lg:text-gray-500'>Full Stack Developer</p>
            </motion.div>

            {/* Icons */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='flex lg:flex-row flex-col lg:gap-10 gap-6 text-2xl lg:text-4xl text-white lg:text-black mt-4 lg:mt-20'
            >
              <span className='lg:bg-gray-300 p-2 drop-shadow-lg rounded-full transition hover:scale-110'>
                <a href="https://github.com"><FaGithub /></a>
              </span>
              <span className='lg:bg-gray-300 p-2 drop-shadow-lg rounded-full transition hover:scale-110'>
                <a href="https://linkedin.com"><FaLinkedin /></a>
              </span>
              <span className='lg:bg-gray-300 p-2 drop-shadow-lg rounded-full transition hover:scale-110'>
                <a href="https://linkedin.com"><FaLinkedin /></a>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className='sm:flex lg:flex-[0.5] diagonal1'
        >
          <img
            src={aaku4}
            alt="Hero"
            loading="lazy"
            className="w-full h-screen object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Landing;
