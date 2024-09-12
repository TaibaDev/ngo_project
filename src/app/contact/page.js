import React from 'react'
import Image from "next/image";

import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { keywords as keyword, metaData } from '@/utils/seo';
import Link from 'next/link';

export const metadata = {
  title: metaData.contact.title,
  description: metaData.contact.description,
  keywords: keyword
};

const page = () => {
  return (
    <>
      <div className="px-5 md:px-12 lg:px-32">
        <div className="relative w-full md:h-[500px] mt-20">
          <Image
            width={200}
            height={500}
            className=" w-full md:h-[500px] object-cover rounded-md"
            src="https://www.newsweekpakistan.com/wp-content/uploads/2016/04/pakistan-poverty.jpg"
            alt="Free Hospitals" />
          <div className="absolute hidden md:block  left-2 opacity-60 rounded-md" />
          <div className="absolute inset-0 hidden md:flex  justify-center   items-center lg:justify-start md:ml-28">
            <h2 className="text-xl mt-5 md:text-4xl font-semibold text-[#FF165D] mb-3">Contact </h2>
            <p className='text-[#FF9A00] text-3xl  mt-16 italic'>Get in Touch</p>
          </div>
        </div>
        <section className=" mt-10 mb-10" id="contact">
          <div className="mx-auto max-w-7xl w-full  px-4 mt-5 py-5 sm:px-6 lg:px-2 lg:py-20 ">
            <div className="mb-4 lg:w-full">
              <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <div className=" bg-[#FF165D]  mx-auto w-10 h-1 mb-3 rounded-lg "> </div>
                <p className="text-base  text-blue font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                  Contact
                </p>
                <h2 className="text-xl mt-5 md:text-4xl font-semibold text-[#FF165D] px-5 mb-3">
                  Get in Touch
                </h2>
                <p className="mx-auto  text-black mt-4 max-w-3xl text-xl ">
                  Looking to volunteer or voice a concern?
                </p>
              </div>
            </div>
            <div className="lg:w-full h-full w-full items-stretch ">
              <div className="lg:w-full h-full  lg:flex lg:flex-row  ">
                <div className="h-full w-full lg:w-1/2 lg:pl-10  lg:mt-10 lg:pt-20  ">
                  <ul className="mb-6 md:mb-0">
                    <li className="flex">
                      <div className="flex h-5 mt-1 w-10 items-center  justify-center rounded bg-blue-900 text-[#3EC1D3]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6">
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-2xl font-medium leading-6 text-gray-900 text-[#3EC1D3]">
                          Our Address
                        </h3>
                        <p className="text-black">
                          fatima manzil street no 2 , xyz
                        </p>
                        <p className="text-black">
                          pakistan
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-5 mt-1 w-10 items-center justify-center rounded bg-blue-900 text-[#3EC1D3]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6">
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          <path d="M15 7a2 2 0 0 1 2 2" />
                          <path d="M15 3a6 6 0 0 1 6 6" />
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-2xl font-medium leading-6 text-gray-900 text-[#3EC1D3] ">
                          Contact
                        </h3>
                        <p className="text-black">
                          Mobile: +92 319 400 2407
                        </p>
                        <p className="text-black">
                          Mail: zaheerwelfaretrust@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-5 mt-1 w-10 items-center justify-center rounded bg-blue-900 text-[#3EC1D3]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 7v5l3 3" />
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-2xl font-medium leading-6 text-gray-900 text-[#3EC1D3]">
                          Working hours
                        </h3>
                        <p className="text-black">
                          Monday - Friday: 08:00 - 17:00
                        </p>
                        <p className="text-black">
                          Saturday &amp; Sunday: 08:00 - 12:00
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <p className='text-xl mt-5 md:text-4xl font-semibold text-[#FF165D] mb-3'>follow us on social media</p>
                    <div className="flex items-center space-x-4 mt-5">
                      <Link href="https://www.instagram.com/zaheerwelfare/" target='_blank' className="text-blue-900">
                        <FaInstagram color='#3EC1D3' size={25} />
                      </Link>
                      <Link href="https://www.facebook.com/profile.php?id=61560178871297" target='_blank' className="text-blue-900">
                        <FaFacebook color='#3EC1D3' size={25} />
                      </Link>
                      {/* <Link href="#" className="text-blue-900">
                        <FaXTwitter color='#3EC1D3' size={25} />
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="card w-full h-fit lg:w-1/2 md:p-5 lg:mt-9  mt-12 " id="form">
                  <div className="relative w-[100%]  h-2/3 md:h-1/2   lg:h-full sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-brown shadow-lg transform md:-skew-y-3 rotate-2 -skew-y-2    rounded-3xl    sm:rounded-3xl"></div>
                    <div className=" relative  hidden lg:block bg-[#E178C5] shadow-lg sm:rounded-3xl rounded-lg -rotate-3   p-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%"
                        height={480}
                        style={{ border: 0, margin: 'auto', borderRadius: '10px', outline: 'none' }}
                        allowFullScreen=""
                        loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  bg-[#E178C5] shadow-lg lg:hidden  rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height={380}
              style={{ border: 0, margin: 'auto', outline: 'none' }}
              loading="lazy" />
          </div>
        </section>
      </div>
    </>
  )
}
export default page