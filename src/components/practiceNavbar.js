'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import Image from "next/image";
import Drawer from "./rightDrawer";
import textLogo from '../assets/images/textLogo.png'

import { FaHeart, FaBars } from "react-icons/fa";

const PracticeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <nav className="flex justify-end items-center bg-gray-100 px-5  md:px-32 lg:py-4 lg:mb-10">
        <div className="flex items-center">
          <ul
            className={`lg:flex ${isOpen ? 'hidden' : 'hidden'} items-center gap-x-10 font-semibold lg:mt-5`}
          >
            <li className="relative group">
              <Link href="/" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >Home</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link href="/about" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/about' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >About</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link href="/contact" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/contact' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >Contact</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link href="/gallery" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/gallery' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >Gallery</Link>
              <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li>
              <Link href='/donate' className="bg-blue rounded-md px-5 py-2 text-white text-xl flex items-center gap-x-2 hover:bg-[#EF1E60] transition-all duration-300 ease-in-out">
                Donate <FaHeart />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <nav className="flex flex-col justify-center items-start px-10 mt-10">
          <div className="flex items-center">
            <ul className={`lg:flex items-center gap-x-16 font-semibold mt-10`}>
              <li className="relative group mt-2">
                <Link href="/" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 mt-5 ease-in-out hover:text-[#EF1E60] `} >Home</Link>
                <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li className="relative group mt-2">
                <Link href="/about" onClick={handleLinkClick} className={`text-black  px-3 ${pathname === '/about' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 mt-5 ease-in-out hover:text-[#EF1E60] `} >About</Link>
                <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li className="relative group mt-2">
                <Link href="/contact" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/contact' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all mt-5 duration-300 ease-in-out hover:text-[#EF1E60] `} >Contact</Link>
                <div className="absolute  left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li className="relative group mt-2">
                <Link href="/gallery" onClick={handleLinkClick} className={`text-black px-3 ${pathname === '/gallery' ? 'text-blue' : ''} underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all mt-5 duration-300 ease-in-out hover:text-[#EF1E60] `} >Gallery</Link>
                <div className="absolute  left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </li>
              <li>
                <Link href='/donate' onClick={handleLinkClick} className={`bg-blue rounded-md px-5 py-2 ${pathname === '/donate' ? 'text-blue' : ''} text-white text-xl flex items-center gap-x-2 hover:bg-[#EF1E60] transition-all duration-300 mt-3 ease-in-out`}>
                  Donate <FaHeart />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Drawer>
      <div className="flex flex-row-reverse justify-between shadow-md w-full md:py-3  mb-4 lg:hidden bg-white">
        <button
          className="text-blue focus:outline-none text-2xl focus:text-gray-800 lg:hidden pr-5 md:pr-12 "
          onClick={toggleMenu}>
          {isOpen ? '' : <FaBars />}
        </button>
        <div className=" ml-6 md:ml-12 ">
          <Image src={textLogo} alt="log" className="w-[100px] h-[50px]  md:h-[70px] overflow-hidden object-contain lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default PracticeNavbar;