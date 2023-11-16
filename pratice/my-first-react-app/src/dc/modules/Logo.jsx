import React from "react";

import { isrc } from "../data/imgSrc";
import { useNavigate } from "react-router-dom";

export const Logo = (props) => {
    const goNav = useNavigate();

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

    const nayaLogo = (txt) => {
        goNav(txt);
    }

    const myStyleImg = {
        top : '45px',
        bottom : '80px'
    }

    return(
        <h1 style={myStyle[props.logoStyle]}>
            <img src={isrc.logo} alt="DC logo" 
            onClick={()=>nayaLogo('/')}
            style={{
                width : myStyleImg[props.logoStyle]
            }}/>
        </h1>
    )
}