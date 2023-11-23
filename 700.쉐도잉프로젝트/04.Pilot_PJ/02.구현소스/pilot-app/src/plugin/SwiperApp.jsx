// 스와이퍼 플러그인 컴포넌트
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다.
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function SwiperApp(props) {
    // 상태관리변수 : 멈춤상태 / 플레이 상태
    const [sts, setSts] = useState(1);

    // useRef로 스와이퍼 객체를 받아온다.
    const myRef = useRef(null);
    // Swiper 컴포넌트의 ref속성에 담아서 연결!!!

    // 플레이 / 멈춤기능 함수
    const stopPlay = () => {
        console.log("멈추거나 플레이!");

        // sts 값이 1이면 멈춤
        sts ? myRef.current.swiper.autoplay.stop() : myRef.current.swiper.autoplay.start();

        // 상태값 업데이트 -> 컴포넌트 리랜더링!!!
        sts ? setSts(0) : setSts(1);

        console.log("리랜더링-> myFirst :", myFirst, ", mySecond.current : ", mySecond.current);
    }; // stopPlay함수 //////////////

    // 일반변수와 useRef 사용변수의 차이
    let myFirst = "스와이퍼";
    const mySecond = useRef("갤러리");

    // 변수값 업데이트 함수
    const myFn = () => {
        myFirst = "Swiper";
        mySecond.current = "Gallery";
        console.log("함수호출-> myFirst :", myFirst, ", mySecond.current : ", mySecond.current);
    }; // myFn 함수 ///////

    // 리턴 코드 ///////////////////////////////
    return (
        <>
            <Swiper
                // ref 속성에 useRef 할당 변수를 넣어서 외부에 연결함
                ref={myRef}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                // 사용할 모듈을 여기에 적용시킨다.
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={`../../images/sub/${props.cat}/banner/ban1.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`../../images/sub/${props.cat}/banner/ban2.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`../../images/sub/${props.cat}/banner/ban3.png`} alt="" />
                </SwiperSlide>
            </Swiper>
            {/* 플레이/멈춤버튼 */}
            <button
                className="stopPlay"
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "40px",
                    display: "block",
                    margin: "0 auto",
                    cursor: "pointer",
                }}
                title={sts ? "멈추기" : "자동넘기기"}
                onClick={stopPlay}
            >
                {sts ? "▣" : "▶"}
            </button>
            {/* useRef 테스트 버튼 */}
            <button onClick={myFn}>useRef 테스트</button>
        </>
    );
} // SwiperApp 컴포넌트 //////////
