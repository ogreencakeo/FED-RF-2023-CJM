import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/* 제이쿼리 넣기 */
import $ from "jquery";

import { swVidData } from "../data/swiper_vid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./swiper_vid.css";

// import required modules
import { Navigation } from "swiper/modules";

export function SwiperVid(props) {

    const selData = swVidData[props.cat];

    const showVid = (src, tit) => {
        const ifr = $('.paly-vid frame');
        const vbx = $('.vid-bx');
        const itit = $('.ifr-tit');
        const cbtn = $('.cbtn');

        ifr.attr("src", src + "?autoplay=1");
        itit.text(tit);
        vbx.fadeIn(300);
        cbtn.click(()=>{
            vbx.fadeOut(300);
        });
    }

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation = {true}
                modules={[Navigation]}
                breakpoints = {{
                    200 : {
                        slidesPerView : 1,
                    },
                    500 : {
                        slidesPerView : 2,
                    },
                    1000 : {
                        slidesPerView : 3,
                    },
                    1200 : {
                        slidesPerView : 4,
                    }
                }}
                className="mySwiper"
            >
                {
                    selData.map((v, i) => (
                        <SwiperSlide key={i}>
                            <section className="sw-inbox" onClick={()=> showVid(v.vsrc, v.tit)}>
                                <div className="vid-img">
                                    <img src={v.isrc} alt={v.tit} />
                                    <FontAwesomeIcon 
                                        icon={faCirclePlay}
                                        style={{
                                            position : 'absolute',
                                            bottom : '55%',
                                            left : '10%',
                                            color : '#fff',
                                            fontSize : '50px'
                                        }}
                                    />
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
}
