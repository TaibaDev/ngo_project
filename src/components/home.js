import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import Link from "next/link";
import { useRouter } from 'next/navigation'
import Button from "./button";


const HomeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState()
  const [hidePopUp, setHidePopUp] = useState(false)
  const router=useRouter()
  return (
    <div>
      <>
        {/* ======================== */}
        {!hidePopUp && (
          <>
            <div className="flex flex-col-reverse md:flex-row  bg-white fixed top-2 sm:top-10 md:top-[18%] right-0 md:right-[10%] lg:right-[12%] xl:right-[20%] md:w-[80%] lg:w-[75%] xl:w-[60%] mx-2 md:h-[50%] lg:h-[50%] xl:h-[50%] overflow-hidden z-50 rounded-md"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
            >
              <p className='bg-pink-600 text-2xl font-semibold text-black absolute z-10 top-0 right-0 md:right-0 cursor-pointer p-2' onClick={() => setHidePopUp(true)}><IoMdCloseCircleOutline style={{ color: "#3EC1D3" }} className="text-xl md:text-3xl" /></p>
              <div className="w-full bg-[#caf4ff8d]">
                <h3 className=" text-xl mt-5 md:text-4xl font-semibold text-[#FF165D] px-5 mb-3 md:my-7 xl:my-5">Fundraising for a Worthy Cause </h3>
                <p className="text-md mt-1 text-black px-5 xl:pt-4"> With the help of your donations we are dedicated to providing support to deserving individuals, enhancing their well-being and improving their quality of life.Your generosity will significantly improve the lives of those in need. </p>
                <div className="mx-5 pt-2 lg:pt-5 md:my-5 xl:my-5">
                <Button onClick={()=>router.push("/donate")}>Donate</Button>
                </div>
                <div className='bg-[#ff165cbf] md:mt-0 md:p-2 md:pb-3 md:h-14 md:w-[50%]  md:absolute md:bottom-0'>
                  <p className='text-lg md:text-xl mt-2 pl-3' >Saving lives, Savings smiles</p>
                </div>
              </div>
              <div className="w-full h-full">
                <Image width={20} height={20} src={'https://res.cloudinary.com/dzltzfaxy/image/upload/v1718365524/ZaheerWelfare/7-6-24/extra-images/usflkal9kinm6b0fahwg.png'} unoptimized alt='image' className="h-[250px] md:h-full  overflow-hidden w-full" />
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
        {/* ======================== */}
        <div className="lg:relative  mb-5 md:mb-10  flex flex-col items-center lg:flex-row-reverse lg:w-full lg:mt-10 xl:w-full">
          <div className="w-full h-64 lg:w-1/2 lg:h-auto hover:cursor-pointer">
            <Image
              width={50}
              height={50}
              unoptimized
              className="lg:h-[600px] h-full w-full lg:mx-auto object-cover rounded-md "
              src='https://res.cloudinary.com/dzltzfaxy/image/upload/v1718365523/ZaheerWelfare/7-6-24/extra-images/nxhxypex5gotqnjqcnsz.jpg'
              alt="Food For Poor"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="200"
              onClick={() => {
                setShowModal(true)
                setImageURL('https://res.cloudinary.com/dzltzfaxy/image/upload/v1718365523/ZaheerWelfare/7-6-24/extra-images/nxhxypex5gotqnjqcnsz.jpg')
              }}
            />
          </div>
          <div
            className="max-w-full lg:bg-[#e2f2f6] lg:z-10 lg:right-0 md:shadow-lg lg:absolute lg:top-0 md:mt-20 lg:w-3/5 lg:-left-5  lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
            data-aos="fade-right">
            <div className="flex flex-col md:p-12 md:px-10 lg:py-16">
              <h2 className="text-2xl text-[#3EC1D3] md:w-[100%] font-semibold capitalize text-green-800 lg:text-4xl">
                Welcome to
                <span className="text-[#FF9A00] mx-2">
                  Zaheer Welfare
                </span>
              </h2>
              <p className="text-2xl text-[#EF1E60] font-semibold capitalize text-green-800 lg:text-4xl inline">
                Saving <span className="typewriter text-[#3FC0D4]"></span>{" "}
              </p>
              <p className="mt-4 pt-3 text-justify text-black">
                We aim to serve poor people in Pakistan, including helpless individuals, orphans, street children, widows, and those affected by disasters, providing basic human needs like food, shelter, and medical care. Our mission is to provide free education to needy individuals, focusing on religious education that develops personal growth and character formation, striving to save lives and transform communities.
              </p>
              <div className="mt-8 mx-auto md:mx-0 ">
               <Button>Learn More</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} imageURL={imageURL} />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomeSection;
