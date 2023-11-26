// DC.com 로고 컴포넌트
import React from "react";
import { isrc } from "../data/imgSrc";
// import { useNavigate } from "react-router-dom";

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { dcCon } from "./dcCon";
import { useContext } from "react";

export function Logo(props){
    const myCon = useContext(dcCon);

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

    const myStyleImg = {
        top : '45px',
        bottom : '80px'
    }
    return(
        <h1 style={myStyle[props.logoStyle]} onClick={()=> myCon.chgPage('/', {})}>
            <img src={isrc.logo} alt="Dc logo" 
            style={{
                width : myStyleImg[props.logoStyle]
            }}/>
        </h1>
    )
    
}