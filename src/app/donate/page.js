import React from 'react'
import Image from 'next/image'

import DonateThrough from './donateThrough'

function DonatePage() {
    return (
        <div className="px-5 md:px-12 lg:px-32">
            <div className="relative h-full w-full rounded-md overflow-hidden mt-20">
                <Image
                    width={1000}
                    height={1000}
                    className=" w-full md:h-[500px] object-cover bg-cover overflow-hidden"
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Free Hospitals" />
                <div className="absolute inset-0 bg-black bg-opacity-65" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-[#FF9A00] font-bold md:text-6xl">Donate Now</h1>
                    <p className="text-xl text-center  text-[#F6F7D7] mt-4 italic"> No one has ever become poor from giving</p>
                </div>
            </div>
            <DonateThrough />
        </div>
    )
}

export default DonatePage