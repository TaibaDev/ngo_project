import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import { metaData } from "@/utils/seo";
import log from "../assets/images/log.png";
import { FaXTwitter } from "react-icons/fa6";

export const metadata = {
  title: metaData.footer.title,
  description: metaData.footer.description,
};

const Footer = () => {
  return (
    <div className="bg-[#b5e7ed] w-full px-5 md:px-16 overflow-hidden md:flex md:flex-row gap-3 lg:px-8 justify-between text-black">
      <div >
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex flex-col md:w-[20%] py-4 md:py-10 md:mt-10 lg:mt-5">
            <Image
              src={log}
              alt="My Image"
              width={130}
              height={130}
              className=" mx-auto " />
            <p className="text-lg pt-3 w-full whitespace-normal break-normal md:text-start lg:text-center text-center">
              Over the past few months, the Zaheer Welfare Foundation has carved a remarkable path in the heart of fatima Manzil, xyz
            </p>
            {/* <div className="flex gap-x-8 py-7 md:py-1 lg:py-10">
            <Link href="https://www.facebook.com/profile.php?id=61560178871297" target='_blank' className="text-blue-900">
            <FaFacebook color="#EF1E60" size={30} className="cursor-pointer hover:transition-all duration-300 ease-in-out " />
            </Link>
            <Link href="https://www.instagram.com/zaheerwelfare/" target='_blank' className="text-blue-900">
            <FaInstagram color="#EF1E60" size={30} className="cursor-pointer" />
            </Link>
              <FaXTwitter color="#EF1E60" size={30} className="cursor-pointer" />
              <FaYoutube color="#EF1E60" size={30} className="cursor-pointer" />
            </div> */}
          </div>

          <div className="flex flex-col gap-0 md:w-[20%] py-4 md:py-10 md:mt-28 lg:mt-5">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#EF1E60]">
              Our Campaigns
            </h2>
            <div className="flex flex-col pt-5">
              <ul className="font-semibold space-y-3 text-white">
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >
                    Qurbani
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >
                    Zakat
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Fitra
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Old Age Homes
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Orphanage House
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Ambulance
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>

              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-0 py-4 md:w-[20%] md:py-10 md:mt-28 lg:mt-5">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#EF1E60]">
              Our Services
            </h2>
            <div className="flex flex-col pt-5">
              <ul className="font-semibold space-y-3 text-white">
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >
                    Free Medical Camps
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `} >
                    Free Education
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Free Dasterkhawn
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Free IT lab
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className={`text-black  underline-offset-8 decoration-4 decoration-rose-500 hover:decoration-gap-2 transition-all duration-300 ease-in-out hover:text-[#EF1E60] `}>
                    Free Diagnostic lab
                  </Link>
                  <div className="absolute left-0 w-0 h-[3px] bg-[#EF1E60] transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col pt-10 pb-3 md:w-[24%] md:mt-28  lg:mt-5 ">
            <ul>
              <form>
                <div className="flex w-full">
                  <label
                    htmlFor="search-dropdown"
                    className="text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Your Email
                  </label>
                  <div className="relative w-[80%] md:w-full">
                    <input
                      type="input"
                      id="search-dropdown"
                      className="block py-3 outline-none rounded-md p-2.5 w-full  text-sm text-black bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500"
                      placeholder="Email Address"
                      required />
                    <button
                      type="submit"
                      className="absolute px-2 py-3 bg-[#EF1E60] w-[40%]  lg:w-[30%] text-center font-semibold outline-none text-white top-0 end-0 p-1.5 h-full text-sm bg-blue-700 rounded-e-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 ">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
              <h3 className="text-2xl  lg:text-3xl py-3 text-[#EF1E60]"> Contact Info </h3>
              <p>
                Fatima manzil block 06 <br /> Avenue Town, xyz
              </p>
              <p className="py-5">+92 319 400 2407</p>
              <p>zaheerwelfaretrust@gmail.com</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
