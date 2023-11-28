import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// 캐릭터 리스트 데이터 가져오기
import { catListData } from "../data/swiper_cat";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./css/swiper_cat.css";

// import required modules
import { Navigation } from "swiper/modules";

export function SwiperCat() {

    const selData = catListData;

    return (
        <>
            <Swiper
                // slidesPerView={3}
                spaceBetween={20}
                navigation = {true}
                modules={[Navigation]}
                className="mySwiper2"
                breakpoints = {{
                    200: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 4,
                    },
                    1000: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                }}
            >
                {
                    selData.map((v, i) =>
                        Number(v.idx) <= 7 && <SwiperSlide key={i}>
                            <Link></Link>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
