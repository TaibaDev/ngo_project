/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Slider = ({data}) => {
  return (
    <div
      style={{ height: "fit-content" }}
      className="w-52 pb-10 h-60 min-w-fit bg-slate-300 mt-10 rounded-md relative border-t-4 border-sky-700 pt-4 "
    >
      <div className="h-16 w-16 absolute top-0 left-2/4 border-4 -translate-y-2/4 -translate-x-2/4 rounded-full">
        {/* <img
          className="object-cover w-full h-full rounded-full"
          src={data.image}
          alt="image"
        /> */}
        <p className="text-black">sfhergfiowrhferhowfgverywf3iort</p>
      </div>
      <div className="text-center py-2 px-3 flex flex-col justify-center items-center">
        <p className="font-light uppercase tracking-widest mt-3 text-xs text-teal-700">
          {data.job}
        </p>
        <h2 className="tracking-wide font-bold md:text-xl text-teal-900">
          {data.name}
        </h2>
        {/* <div>
          <Image
            src={data.icon}
            alt="logo"
            height={70}
            width={70}
            layout="fixed"
          />
        </div> */}
        <div>
          <p className=" mx-2 text-justify text-xs tracking-wide font-light w-80 text-teal-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            quisquam adipisci aspernatur tempore, expedita aliquid quod nobis
            quos necessitatibus ratione eveniet eos eius nesciunt nostrum animi
            quis atque molestias nam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Illo nemo quasi quibusdam, repudiandae atque, rem
            illo? Officia, repellat molestias esse beatae magni ad optio. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Amet officia unde
            maxime perspiciatis cupiditate recusandae illum voluptatem harum
            rem! Delectus accusantium, quis inventore voluptates molestias
            fugiat. Sequi rerum cupiditate accusamus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
