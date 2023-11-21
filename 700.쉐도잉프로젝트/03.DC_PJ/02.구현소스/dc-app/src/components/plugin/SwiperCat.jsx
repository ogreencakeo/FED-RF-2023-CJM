/* DC PJ 캐릭터 리스트용 스와이퍼 컴포넌트 */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// 캐릭터 리스트 데이터 가져오기
import { catListData } from "../data/swiper_cat";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import "./css/swiper_cat.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다. 
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Navigation } from "swiper/modules";

export function SwiperCat() {

    // 선택 데이터
    const selData = catListData;

    return (
        <>
            <Swiper 
                // slidesPerView={7}
                spaceBetween={20}
                navigation={true}
                // 사용할 모듈을 여기에 적용시킨다.
                modules={[ Navigation ]}
                // 스와이퍼 사이즈별 슬라이드수 변경!
                breakpoints={{
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
                className="mySwiper2"
            >
                {
                    selData.map((v, i) =>
                        Number(v.idx) <= 7 && (
                            <SwiperSlide key={i}>
                                <img src={"./images/" + v + '.jpg'} alt="list image" />
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </>
    );
} // SwiperApp 컴포넌트 //////////
