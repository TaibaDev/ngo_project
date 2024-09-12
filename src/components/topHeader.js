import React from "react";
import Image from "next/image";

import log from '../assets/images/log.png';

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div className="h-11 hidden lg:flex flex-row-reverse justify-between  bg-[#EF1E60]">
      <div className="flex items-center gap-1 text-white pr-28 ">
        <AiOutlineMail /> <p>zaheerwelfaretrust@gmail.com</p>
        <p className="mx-5 flex items-center gap-1"> <AiOutlinePhone />+923194002407</p>
        <button className=" w-24 py-2 text-sm rounded-lg border-b-2 border-white hover:bg-white hover:text-[#EF1E60] hover:border-b-0  transition-all">Be a Sponsor</button>
      </div>
      <div className="flex justify-between px-36">
        <div className="bg-[#b5e7ed] w-56 h-44 rounded-br-lg relative"
          data-aos="fade-down"
          data-aos-duration="3000"
          data-aos-offset="200">
          <div
            className="origin-bottom -rotate-6 w-full h-16 bg-[#b5e7ed] absolute -bottom-3 logo-box">
          </div>
          <Image src={log} alt="My Image" width={170} height={170} className="absolute top-3 left-6 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;