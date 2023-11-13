
import React from "react";
import {isrc} from '../data/imgSrc';

export const Logo = (props) => {
    const myStyle = {
        top : {
            width:"45px",
            height:"45px",
            marginRight : '30px', 
            borderRadius:"50%"
        },
        bottom : {
            height : '80px',
        }
    };
    const myStyleImg = {
        top : '45px',
        bottom : '80px'
    };

    return(
        <h1 style={myStyle[props.logoStyle]}>
            <img src={isrc.logo} alt="DC logo" 
            style={{
                width : myStyleImg[props.logoStyle]
            }}/>
        </h1>
    ); 
};