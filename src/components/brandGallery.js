import React from 'react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { images } from '@/utils/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

const ImageGallery = () => {
    return (
        <div className="w-full h-full">
            <div className="max-w-3xl mx-auto px-5 mt-28">
                <div className="">
                    <div className="text-center mb-20">
                        <h2 className="font-semibold text-3xl">Our Sponsors</h2>
                        <p className="max-w-md mx-auto mt-2 text-gray-500">
                            We are thankful to each and every company sponsored our plugin which
                            helped us to continue working on it.
                        </p>
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={5}
                slidesPerView={8}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                style={{
                    backgroundColor: 'white',
                    height: '200px',
                    width: '80%',
                    borderRadius: '10px',
                    marginTop: '30px',
                    cursor: 'grab',
                }}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}  >
                        <>
                            <Image src={image} width={200} height={200} className="object-contain rounded-full overflow-hidden" alt={`Slide ${index}`} />
                        </>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageGallery;