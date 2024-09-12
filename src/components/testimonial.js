'use client'
import { useRef } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "swiper/css/autoplay";
import 'swiper/css/bundle';
// import "swiper/css/scrollbar";
// import { data } from "@/assets/data";
// import Slider from "./Slider";

const members = [
    {
        name: 'Awais Ahmed',
        picture: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        company: 'Founder & President',
        description: 'This component contains an array of member data and maps through this array to render a MemberCard for each member. The space-y-6 class is used to add vertical spacing between each member card',
    },
    {
        name: 'Hassan Shahid',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hYbOOYwdiiw2CT9qVV6OA2CGnJwrPpenGQ&s',
        company: 'CEO',
        description: 'This component contains an array of member data and maps through this array to render a MemberCard for each member. The space-y-6 class is used to add vertical spacing between each member card',
    },
    {
        name: 'Alice Johnson',
        picture: 'https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        company: 'Managing Director',
        description: 'This component contains an array of member data and maps through this array to render a MemberCard for each member. The space-y-6 class is used to add vertical spacing between each member card',
    },
    {
        name: 'Sabrina',
        picture: 'https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        company: 'Head',
        description: 'This component contains an array of member data and maps through this array to render a MemberCard for each member. The space-y-6 class is used to add vertical spacing between each member card',
    },
];


const Testimonial = () => {
    const ref = useRef();
    return (
        <>
            <div className="main-div lg:px-[1%]  lg:mt-10 my-2">
                <div className="px-6 pt-8 pb-5 relative">
                    <p className="text-xl text-center mt-5 md:text-4xl font-semibold text-[#FF165D] px-5 mb-3">
                        Our Motivations
                    </p>
                    {/* <p className="text-center md:mt-3 md:mb-3 text-black text-lg">What they Say ?</p> */}
                    <div className=" md:px-10 mx-auto border-black ">

                        <div className="md:mb-6 md:p-10 mx-6 md:text-xl">
                            <p className="text-center text-black">
                                &quot;Those who spend their wealth [in <span className="font-bold text-[#3EC1D3]"> Allah&apos;s </span> way] by night and by day, secretly and publicly - they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve.&quot;(<span className="font-bold">Al-Baqarah 2:274</span>)
                            </p>
                            <p className="text-center text-black">
                                <span className="font-bold text-[#3EC1D3]">Prophet Muhammad (PBUH) said,</span>  “The one who looks after a widow or a poor person is like a Mujahid (warrior) who fights for the cause of Allah.” (<span className="font-bold">Bukhari</span>) <br/>
                                <span className="text-center">“Charity does not decrease wealth.” (<span className="font-bold">Muslim</span>)</span>
                            </p>
                            {/* {testimonialData.map((data, index) => {
                        return <TestimonialCard key={index} imageUrl={data.imageUrl} name={data.name} comment={data.comment} address={data.address} />
                    })} */}
                        </div>

                    </div>
                </div>
            </div>
            {/* <h1 className="text-[#EF1E60] text-xl md:text-3xl text-center">Meet Our Team</h1>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1080: {
                        slidesPerView: 3,
                    },
                }}
                style={{
                    marginBottom: "1rem",
                    padding: "2rem",
                }}
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                centeredSlides={false}
                // navigation={true}
                pagination={{ clickable: true, progressbarFillClass: "bg-teal-900" }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                
                {members.map((member, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ display: "flex", justifyContent: "center", gap: "1em" }}
                    >
                        <div className="flex flex-col items-center p-4 bg-[#e2f2f6] rounded-lg shadow-md mx-5">
                            <img
                                src={member.picture}
                                alt={`${member.name}'s picture`}
                                className="w-28 h-28 rounded-full mb-4"
                            />
                            <h3 className="text-black text-xl font-semibold mb-2">{member.name}</h3>
                            <h3 className="text-[#EF1E60] text-lg font-semibold mb-2">{member.company}</h3>
                            <p className="text-black text-center">{member.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </>
    );
};

export default Testimonial;