// 비디오 스와이프 하위 스와이퍼 플러그인 컴포넌트
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/* 제이쿼리 넣기 */
import $ from 'jquery';

// Import Swiper styles
import "swiper/css";
// 양쪽 이동버튼만 필요함!
import 'swiper/css/navigation';

/* 폰트어썸 임포트 */
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼 CSS
import "./css/swiper_vid.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다. 
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Navigation } from "swiper/modules";

export function SwiperVid() {

    return (
        <>
            <Swiper 
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                // 사용할 모듈을 여기에 적용시킨다.
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
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
