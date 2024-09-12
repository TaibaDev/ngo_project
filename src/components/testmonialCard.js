import React from "react";
import Image from "next/image";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function TestimonialCard({ imageUrl, name, comment, address }) {

    function truncateComment(comment, maxLines) {
        const lines = comment.split('\n');
        if (lines.length > maxLines) {
            return lines.slice(0, maxLines).join('\n') + '...';
        }
        return comment;
    }

    const maxLines = 5;
    const truncatedComment = truncateComment(comment, maxLines);

    return (
            <div className="flex flex-col  xl:flex-row w-full mx-auto">
                <div className="w-full mt-3 xl:mt-5 xl:w-1/2  m-auto">
                    <ImQuotesLeft size={24} className='text-[#ccd3e4] mb-2 ' />
                    <p className=" text-center">
                        {truncatedComment}
                    </p>
                    <ImQuotesRight size={24} className='text-[#ccd3e4] text-center  absolute right-36 mt-1' />
                    <h3 className="capitalize text-2xl text-center font-black text-[#3EC1D3] mt-8 md:mt-5 mb-1">{name}</h3>
                    <p className="text-lg text-center"> {address} </p>
                </div>
            </div>
    )
}
export default TestimonialCard