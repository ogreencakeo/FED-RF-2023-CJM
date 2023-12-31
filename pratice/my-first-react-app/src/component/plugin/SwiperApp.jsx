import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function SwiperApp() {

    const imgArr = ["dcm28", "dcm29", "dcm30", "dcm31", "dcm32", "dcm10", "dcm11", "dcm12", ];

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop = {true}
                navigation = {true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                autoplay = {{
                    delay : 2500,
                    disableOnInteraction : false,
                }}
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
