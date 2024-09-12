"use client"
import Modal from '@/components/Modal'
import MyMasonryLayout from '@/components/MyMasonryLayout'
import Image from 'next/image'
import { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'


function Page() {
    const [showModal, setShowModal]= useState(false);
    const [imageURL, setImageURL]= useState()
    return (
        <div className="px-5 pb-6 pt-10 md:px-12 lg:px-32">
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3,1024:4}}
            >
                <Masonry>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821815/ZaheerWelfare/01-07-24/orlgu3zqscrmtlmy2e6s.jpg"} alt='image 1' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821815/ZaheerWelfare/01-07-24/orlgu3zqscrmtlmy2e6s.jpg")
                        setShowModal(true)
                    }} />
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/irdvjwf7fugf3dnhvxej.jpg"} alt='image 2' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719821816/ZaheerWelfare/01-07-24/irdvjwf7fugf3dnhvxej.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0062_xscmut.jpg"} alt='image 3' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0062_xscmut.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} objectFit='contain' className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/nbysubjrm0umno7jmuam.jpg"} alt='image 4' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/nbysubjrm0umno7jmuam.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822311/ZaheerWelfare/01-07-24/ctpsjvrcppjzele2kvux.jpg"} alt='image 5' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822311/ZaheerWelfare/01-07-24/ctpsjvrcppjzele2kvux.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/qmd936erqph5f4rdmjy7.jpg"} alt='image 6' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/qmd936erqph5f4rdmjy7.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822315/ZaheerWelfare/01-07-24/oxczhs7ecscldgnc44nj.jpg"} alt='image 7' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822315/ZaheerWelfare/01-07-24/oxczhs7ecscldgnc44nj.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                    <div className=' p-1 w-[100%] h-[100%]'>
                    <Image unoptimized width={100} height={100} objectFit='fill' className='w-[100%] h-[100%] rounded-md hover:cursor-pointer object-cover' src={"https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/saohgkbhvzkgcaasavfe.jpg"} alt='image 7' onClick={()=>{
                        setImageURL("https://res.cloudinary.com/dzltzfaxy/image/upload/v1719822075/ZaheerWelfare/01-07-24/saohgkbhvzkgcaasavfe.jpg");
                        setShowModal(true)
                    }}/>
                    </div>
                </Masonry>
            </ResponsiveMasonry>
            <Modal showModal={showModal} setShowModal={setShowModal} imageURL={imageURL}/>
    </div>
    )
}

export default Page