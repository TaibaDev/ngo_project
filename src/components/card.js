"use client"

import React from 'react';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Card = ({ imageUrl, count, description }) => {
    const [onCount, setOnCount] = React.useState(false)
    return (
        <>
            <div className="mb-1 md:w-[49%] lg:w-[33%]  w-full rounded-md">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center shadow-2xl h-auto z-0 opacity-45"
                        style={{ backgroundImage: `url(${imageUrl})` }}>
                    </div>
                    <div className="bg-black  overflow-hidden  pt-7 h-auto">
                        <div className="relative z-1 p-6 text-center  h-[300px] pt-10 ">
                            <ScrollTrigger onEnter={() => setOnCount(true)} onExit={() => setOnCount(false)} >
                                {
                                    onCount &&
                                    (<CountUp
                                        start={0}
                                        end={count}
                                        duration={2.75}
                                        separator=","
                                        className="text-[#F6F7D7] font-bold text-6xl md:text-4xl" />)
                                }
                            </ScrollTrigger>
                            <p className="mb-2 text-[#F6F7D7] font-bold text-3xl  md:text-2xl">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;