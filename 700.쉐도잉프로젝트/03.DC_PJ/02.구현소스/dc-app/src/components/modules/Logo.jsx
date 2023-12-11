// DC.com 로고 컴포넌트
import React from "react";
import { isrc } from "../data/imgSrc";
// import { useNavigate } from "react-router-dom";

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { dcCon } from "./dcContext";
import { useContext } from "react";

export const Logo = (props) => {
    // props.logoStyle : 상단, 하단구분 로고 코드

    // 컨텍스트 API 사용하기
    const myCon = useContext(dcCon);
    
    // 라우터 이동 메서드 셋팅하기 : useNavigate()
    // const goNav = useNavigate(); -> 컨텍스트 API 사용
    // 사용법 : 반드시 useNavigate() 메서드를 변수에 담아
    // 이동할 라우터 주소를 쓰면 이동한다.
    // 예) goNav('/news') -> 뉴스 페이지 이동
    // 예) goNav('/') -> 첫 페이지 이동
    // 이동 주소는 대소문자 구분 없음!

    // 객체형 스타일 적용
    const myStyle = {
        top : {
            width:"45px",
            height:"45px",
            marginRight : '30px', 
            borderRadius:"50%",
            cursor : 'pointer',
        },
        bottom : {
            height : '80px',
        }
    };

    // 자식컴포넌트 처리용 함수 -> 컨텍스트 API 사용
    // const nayaLogo = (txt) => {
    //     // console.log(txt);
    //     // 라우터 이동하기
    //     goNav(txt);
    // }; // nayaLogo

    // 이미지 스타일 변경 객체
    const myStyleImg = {
        top : '45px',
        bottom : '80px'
    }

    // 코드 리턴 /////////////////////
    return (
        //  컨텍스트 API 함수호출
        <h1 style={myStyle[props.logoStyle]} onClick={()=> myCon.chgPage('/', {})}>
            <img 
                src={process.env.PUBLIC_UR + isrc.logo} 
                alt="DC logo"
                style={{
                    width:myStyleImg[props.logoStyle]
            }} />
        </h1>
    )

}; ////////////// Logo ///////////////