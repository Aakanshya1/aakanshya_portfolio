import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = (
    <>
      <li><a href="#landing" onClick={closeMenu} className="hover:text-gray-600">Home</a></li>
      <li><a href="#about" onClick={closeMenu} className="hover:text-gray-600">About</a></li>
      <li><a href="#skills" onClick={closeMenu} className="hover:text-gray-600">Skills</a></li>
      <li><a href="#projects" onClick={closeMenu} className="hover:text-gray-600">Projects</a></li>
      <li><a href="#contact" onClick={closeMenu} className="hover:text-gray-600">Contact</a></li>
    </>
  );

  return (
    <>
      <div className="fixed z-10  text-white lg:py-10 font-bold md:w-full lg:w-full flex justify-end lg:bg-transparent bg-black   ">
  
        <div className="md:hidden text-2xl cursor-pointer w-screen flex flex-row-reverse border-b-4 py-4 px-6" onClick={toggleMenu} >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
        

        {/* Desktop Menu */}
        <ul className=" hidden md:flex  flex-row w-full lg:w-[50%] justify-around pr-10 ">
          {navItems}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden  w-screen fixed top-15   text-white py-4 space-y-2 justify-center items-center flex flex-col z-10 font-bold bg-black">
          {navItems}
        </ul>
      )}
    </>
  );
}

export default Navbar;
