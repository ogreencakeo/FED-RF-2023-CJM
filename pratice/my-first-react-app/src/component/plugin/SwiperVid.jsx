import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper_vid.css";

// import required modules
import { Navigation } from "swiper/modules";

export function SwiperVid() {


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation = {true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    imgArr.map((v, i) =>
                        <SwiperSlide key={i}>
                            <img src={`./images/${v}.jpg`} alt="list image" />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
