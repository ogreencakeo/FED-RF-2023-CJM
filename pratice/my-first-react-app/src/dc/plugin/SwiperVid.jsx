
// 스와이퍼 플러그인 컴포넌트
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { swVidData } from "../data/swiper_vid";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import 'swiper/css/navigation';

import $ from "jquery";

import "./css/swiper_vid.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다. 
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Navigation } from "swiper/modules";
export function SwiperVid(props){


    // 불러올 이미지 리스트
    const selData = swVidData[props.cat];

    const showVid = (src, tit) => {
        const ifr = $('.play-vid iframe');
        const vbx = $('.vid-bx');
        const itit = $('ifr-tit');
        const cbtn = $('.cbtn');

        ifr.attr('src', src+'?autoplay=1');
        itit.text(tit);
        vbx.fadeIn(300);
        cbtn.click(()=>{
            vbx.fadeOut(300);
            ifr.attr('src', '')
        })
    }

    return (
        <>
            <Swiper 
                slidesPerView={4}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    selData.map((v,i ) => (
                        <SwiperSlide key={i}>
                            <section className="sw-inbox" onClick={()=>showVid(v.vsrc, v.tit)}>
                                <div className="vid-img">
                                    <img src={v.isrc} alt={v.tit} />
                                </div>
                                <div className="vid-tit">
                                    <h4>{v.cat}</h4>
                                    <h3>{v.tit}</h3>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
} // SwiperApp 컴포넌트 //////////
