import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Modal({ showModal, setShowModal, imageURL }) {
    return (
        <>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
            >
              <div className="relative w-full h-full mx-auto my-0 bg-black shadow-lg outline-none focus:outline-none">
                <div className="flex flex-col w-full h-full">
                  <div className="flex items-center justify-between p-1">
                    <button
                      className="p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <IoClose size={22} color="white" />
                    </button>
                  </div>
                  <div className="relative flex flex-auto justify-center items-center p-2 overflow-hidden my-auto">
                    <Image
                      width={100}
                      height={100}
                      unoptimized
                      className="w-auto h-auto lg:h-[99%] mx-auto rounded-md pb-4 mb-1"
                      src={imageURL}
                      alt="Image Preview"
                    />
                  </div>
                  {/* <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-600 rounded-md outline-none focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </>
      
    );
}
