/* DC PJ 캐릭터 리스트용 스와이퍼 컴포넌트 */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "./css/swiper.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다. 
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Pagination,Navigation, Autoplay } from "swiper/modules";

export function SwiperCat() {

    // 불러올 이미지 리스트
    const imgArr = ["dcm28", "dcm29", "dcm30", "dcm31", "dcm32", "dcm10", "dcm11", "dcm12", ];

    return (
        <>
            <Swiper 
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                // 사용할 모듈을 여기에 적용시킨다.
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper2"
                autoplay ={{
                    delay :2500,
                    disableOnInteraction : false,
                }}
            >
                {
                    imgArr.map((v, i) =>
                        <SwiperSlide key={i}>
                            <img src={"./images/" + v + '.jpg'} alt="list image" />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
} // SwiperApp 컴포넌트 //////////
