import React from "react"
import Image from "next/image"

import jazz from "../../assets/payment/jazz.png"
import easy from "../../assets/payment/easy.png"
import naya from "../../assets/payment/naya.png"

function DonateThrough() {
    return (
        <div className=" w-full flex items-center justify-center flex-col my-10">
            <h3 className="text-xl mt-5 md:text-4xl font-semibold text-[#FF165D] mb-3">Donate Us Through</h3>
            <div className="flex items-center gap-1 sm:gap-4 mb-4 mt-10">
                <div className=" border-[.9px] border-x-primary border-y-pink rounded-xl">
                    <Image src={jazz} height={100} width={100} className="h-18 w-24 sm:h-[100px] sm:w-[100px]" alt="image alt" />
                </div>
                <div className="border-[.9px] border-x-primary border-y-pink rounded-xl px-6 py-6 sm:px-6 sm:py-6">
                    <Image src={easy} height={100} width={100} className="h-12 w-12 sm:h-[50px] sm:w-[50px]" alt="image alt" />
                </div>
                <div className=" border-[.9px] border-x-primary border-y-pink rounded-xl">
                    <Image src={naya} height={100} width={100} className="h-18 w-24 sm:h-[100px] sm:w-[100px]" alt="image alt" />
                </div>
            </div>
            <h2 className="text-blue font-semibold text-lg sm:text-2xl md:text-4xl">+92 319 400 2407</h2>
        </div>
    )
}

export default DonateThrough