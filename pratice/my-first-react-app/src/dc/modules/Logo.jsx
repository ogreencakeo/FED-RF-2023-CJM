
import React from "react";
import { isrc } from "../data/imgSrc";

import { useContext } from "react";
import { dcCon } from "./dcContext";

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
        <h1 style={myStyle[props.logoStyle]} onClick={myCon.chgPage('/')}>
            <img
                src={isrc.logo}
                alt="DC logo"
                style={{
                    width : myStyleImg[props.logoStyle]
                }} />
        </h1>
    )
}