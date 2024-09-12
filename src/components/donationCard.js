"use client";
import React, { useState } from 'react'
import Image from 'next/image';
// import { IoMdCloseCircleOutline } from "react-icons/io";

const DonationCard = () => {
    // const [hidePopUp, setHidePopUp] = useState(false)
    return (
        <>
            <div className="mt-10 lg:mt-28 border" >
                <div className="w-auto h-[80%]">
                    <Image
                    src="https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0062_xscmut.jpg"
                    width={100}
                    height={100}
                    alt='hero-image'
                    className='object-cover w-full h-full'
                    unoptimized
                    />
                    {/* <div className="main-div w-full h-[80%]  rounded-lg border-opacity-50"
                        style={{ backgroundImage: `url('https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0062_xscmut.jpg')`, width: '100%', backgroundSize: 'cover', backgroundPosition: 'cover', }}>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default DonationCard