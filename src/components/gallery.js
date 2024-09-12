"use client"
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import Button from './button';

function Gallery() {
    const [showModal, setShowModal]= useState(false);
    const [imageURL, setImageURL]= useState()
    return (
        <div className='flex w-full lg:flex-row flex-col mt-10 lg:mt-52 lg:mb-40 relative md:mt-10 md:mb-20'>
            <div className="sm:w-full w-full lg:w-[40%]  mb-32 lg:mb-10 ">
                <h2 className="text-xl mt-5 md:text-4xl font-semibold text-[#FF165D] mb-3">
                    Meet Charity
                    Projects
                </h2>
                <p className="mt-4 md:text-xl text-black mb-10 text-justify">
                Our organization is dedicated to providing a range of essential services, including financial support, sustenance, shelter, education and healthcare to vulnerable populations. Additionally we are committed to facilitating marriage arrangements for helpless females and providing support for individuals with disabilities.                </p>
                <Button>Donate Now</Button>
            </div>
            <div className="  transform  w-full md:h-screen   lg:w-[50%]  lg:left-1/2 overflow-hidden lg:mt-72 lg:absolute  lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex flex-col sm:flex-row items-center justify-center mx-auto  space-x-3 lg:space-x-1">
                    <div className="grid flex-shrink-0  lg:grid-cols-1 gap-y-3 lg:gap-y-2">
                        <div className="h-auto w-auto sm:h-64 sm:w-40 overflow-hidden sm:opacity-100 lg:opacity-100 rounded-md">
                            <Image
                                src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/r5daojnrn0wakhhpzm8b.jpg'}
                                alt="Free Food"
                                width={224}
                                height={336}
                                unoptimized
                                className="h-full lg:rounded-sm w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out  hover:translate-y-3 hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/r5daojnrn0wakhhpzm8b.jpg")
                                    setShowModal(true)
                                  }}
                                />
                        </div>
                        <div className="h-auto w-auto sm:h-64 sm:w-40 overflow-hidden rounded-lg">
                            <Image
                                src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/c9wbmkxwfoyxilihlth6.jpg'}
                                alt="Free Education"
                                width={224}
                                height={336}
                                unoptimized
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out hover:translate-x-2 hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/c9wbmkxwfoyxilihlth6.jpg')
                                    setShowModal(true)
                                }}
                                />
                        </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-1 lg:gap-y-2">
                        <div className="h-auto w-auto sm:h-60 sm:w-40 overflow-hidden rounded-lg">
                            <Image
                                src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/jx8zedpyytuvvxjqjdgw.jpg'}
                                alt="Free Hospitals"
                                width={224}
                                height={436}
                                unoptimized
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/jx8zedpyytuvvxjqjdgw.jpg')
                                    setShowModal(true)
                                  }}
                                />
                        </div>
                        <div className="h-auto w-auto sm:h-60 sm:w-40 overflow-hidden rounded-lg">
                            <Image
                                src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/saohgkbhvzkgcaasavfe.jpg'}
                                alt="charity Programs"
                                width={224}
                                height={336}
                                unoptimized
                                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/saohgkbhvzkgcaasavfe.jpg')
                                    setShowModal(true)
                                  }}
                            />
                        </div>
                        <div className="h-auto w-auto sm:h-60 sm:w-40 overflow-hidden rounded-lg">
                            <Image
                                src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822311/ZaheerWelfare/01-07-24/ctpsjvrcppjzele2kvux.jpg'}
                                alt="family support programs"
                                width={224}
                                height={336}
                                unoptimized
                                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822311/ZaheerWelfare/01-07-24/ctpsjvrcppjzele2kvux.jpg')
                                    setShowModal(true)
                                  }}
                            />
                        </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-1 lg:gap-y-2">
                        <div className="h-auto w-auto sm:h-64 sm:w-40 overflow-hidden rounded-lg">
                            <Image
                                src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0047_zgsh8z.jpg'}
                                alt="welfare Programs"
                                width={224}
                                height={336}
                                unoptimized
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0047_zgsh8z.jpg')
                                    setShowModal(true)
                                  }}
                            />
                        </div>
                        <div className="h-auto w-auto sm:h-64 sm:w-40 overflow-hidden rounded-lg">
                            <Image
                                src='https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/qmd936erqph5f4rdmjy7.jpg'
                                alt="medical complex"
                                width={224}
                                height={336}
                                unoptimized
                                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer"
                                onClick={()=>{
                                    setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/qmd936erqph5f4rdmjy7.jpg')
                                    setShowModal(true)
                                  }}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} imageURL={imageURL}/>
        </div>
    )
}

export default Gallery;
